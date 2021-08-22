import { createManagerDecorator, provide } from "./manager"
import { IRegExpManager, RegExpManager } from "./regExp-manager"
import { OrUndefined } from './type-manager'


interface RawTemplateObject {
	tag: string
	tabNum: number
	preTabNum: OrUndefined<number>
	discription?: string
	children: any[]
}

interface RawAttributeObject {
	class?: string[]
	id?: string
	on?: string
	for?: string
	text?: string
	[key: string]: any
}

export type RootObject = RawTemplateObject & RawAttributeObject

export type RootObjectArray = RootObject[]

export interface ITemplateManager {
	parse(template: string): RootObjectArray
}

export const ITemplateManager = createManagerDecorator('ITemplateManager')

@provide(ITemplateManager)
export class TemplateManager {
	public readonly managerBrand = 'ITemplateManager'

	public constructor(
		@IRegExpManager protected _regExpManager: RegExpManager
	) { }

	public parse(template: string): RootObjectArray {
		const array = this._breakTemplateByLine(template)
		const root = this._findSuperior(this._allotDiscriptionToTagObj(array))
		return root
	}

	protected _breakTemplateByLine(template: string): RawTemplateObject[] {
		const array = []
		const templateArray = template.split('\n')

		for (const i in templateArray) {
			if (this._regExpManager.notSpacePattern.test(templateArray[i])) continue

			const tabNum = templateArray[i].match(/\s*/)?.[0].length || 0

			const preTabNum = i === '0' ? 0 : templateArray[parseInt(i) - 1].match(/\s*/)?.[0].length || 0

			const tag = templateArray[i].match(this._regExpManager.elementTagPattern)?.[0]
			if (!tag) throw new Error(`模板第${i}行没有 tag 标签`)

			const testDiscription = templateArray[i].match(RegExp('(?<=' + tag + ').+'))
			const discription = testDiscription ? testDiscription[0] : ''

			const obj = { tag, tabNum, preTabNum, discription, children: [] }
			array.push(obj)
		}
		return array
	}

	protected _getRawAttribute(discription: string): RawAttributeObject {
		const res: RawAttributeObject = {}
		res.class = []

		const classList = discription.match(this._regExpManager.testClassPattern)
		if (classList) classList?.forEach((i) => { res.class?.push(i.trim()) })

		const id = discription.match(this._regExpManager.idPattern)
		if (id) res.id = id[0].trim()

		const on = discription.match(this._regExpManager.onPattern)
		if (on) res.on = on[0].trim()

		const For = discription.match(this._regExpManager.forPattern)
		if (For) res.for = For[0].trim()

		const textFirst = discription.match(this._regExpManager.textPatternFirst)
		if (textFirst) {
			const text = textFirst[0].match(this._regExpManager.textPatternSecond)
			if (text) res.text = text[0].trim()
		}

		const attributes = discription.match(this._regExpManager.testAttributePattern)
		if (Array.isArray(attributes)) {
			attributes.forEach((each) => {
				const key = each.match(this._regExpManager.attributeKeyPattern)?.[0].trim() as string
				const value = each.match(this._regExpManager.attributeValuePattern)?.[0].trim() as string
				res[key] = value
			})
		}

		return res
	}

	protected _allotDiscriptionToTagObj(rootObjectArray: RootObjectArray): RootObjectArray {
		for (const rawTemplateObject of rootObjectArray) {
			const attributeObj = this._getRawAttribute(rawTemplateObject.discription as string)

			for (const attribute in attributeObj) {
				rawTemplateObject[attribute] = attributeObj[attribute]
			}

			delete rawTemplateObject['discription']
		}
		return rootObjectArray
	}

	protected _findSuperior(arr: RootObjectArray): RootObjectArray {
		const rootObject = [arr[0]]
		for (let i = 1; i < arr.length; i++) {
			if (arr[i].tabNum > (arr[i].preTabNum || 0)) {
				arr[i - 1].children.push(arr[i])
			} else {
				for (let j = i - 1; j >= 0; j--) {
					if (arr[j].tabNum < arr[i].tabNum) {
						arr[j].children.push(arr[i])
						break
					} else {
						if (arr[i].tabNum === 0) {
							rootObject.push(arr[i])
							break
						} else {
							continue
						}
					}
				}
			}
		}
		return rootObject
	}
}
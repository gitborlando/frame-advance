import { createManagerDecorator, provide } from "./manager"
import { ITypeManager, TypeManager } from "./type-manager"

export interface RegExpManager {
	readonly notSpacePattern: RegExp

	readonly numberPattern: RegExp

	readonly elementTagPattern: RegExp

	readonly testClassPattern: RegExp

	/** 检测模板中有无 id 属性, 下同. */
	readonly testIdPattern: RegExp
	/** 提取 id 属性, 下同. */
	readonly idPattern: RegExp

	readonly testOnPattern: RegExp
	readonly onPattern: RegExp

	readonly testForPattern: RegExp
	readonly forPattern: RegExp

	readonly arrowLeftPattern: RegExp
	readonly arrowRightPattern: RegExp

	readonly testTextPattern: RegExp
	readonly textPatternFirst: RegExp
	readonly textPatternSecond: RegExp

	readonly testAttributePattern: RegExp
	readonly attributeKeyPattern: RegExp
	readonly attributeValuePattern: RegExp

	readonly doubleArrowBracketPattern: RegExp
	readonly arrowBracketPattern: RegExp
	readonly outsideArrowBracketPattern: RegExp

	/** 
	 * 得到模板中<>里的东西. 
	 * @example div <abc>, 即拿到 abc 这个字符串.
	*/
	getArrowBracket(str: string): [string, (string | null)]

	/**
	 * 分开箭头表达式两边的东西.
	 * @param arrowExpression 即模板中类似: aitem=>aArray 的表达式.
	 */
	separateArrowSide(arrowExpression: string): string[]

	removeSpace(str: string): string

	replaceStringToNumber(str: string): string
}


export const IRegExpManager = createManagerDecorator('IRegExpManager')

@provide(IRegExpManager)
export class RegExpManager implements RegExpManager {
	public readonly managerBrand = 'IRegExpManager'

	public readonly notSpacePattern = /[^\s]/g

	public readonly numberPattern = /\['\d+'\]/

	public readonly elementTagPattern = /\b\w+(?=\s)/

	public readonly testClassPattern = /(?<=\s+\.)(\w|\d|_|-)+\s+/g

	public readonly testIdPattern = /(?<=\s+#).+\s+/g
	public readonly idPattern = this.testIdPattern

	public readonly testOnPattern = /(?<=@)[^\s]+(?=\s+|\b)/
	public readonly onPattern = this.testOnPattern

	public readonly testForPattern = /(?<=\*)[^\s]+(?=\s+|\b)/
	public readonly forPattern = this.testForPattern

	public readonly arrowLeftPattern = /(?<=\s*).+(?=\=)/
	public readonly arrowRightPattern = /(?<=>).+(?=\s*)/

	public readonly testTextPattern = /(?<=\s+){{.+}}/
	public readonly textPatternFirst = /(?<=[\s+]{{)[^{}]+}}/
	public readonly textPatternSecond = /[^}}]+/

	public readonly testAttributePattern = /\s+\S+{{[^{}]+}}/g
	public readonly attributeKeyPattern = /.+(?={{)/
	public readonly attributeValuePattern = /(?<={{).+(?=}})/

	public readonly doubleArrowBracketPattern = /(?<=<<).+(?=>>)/
	public readonly arrowBracketPattern = /(?<=<).+(?=>)/
	public readonly outsideArrowBracketPattern = /<.+>/

	public constructor(
		@ITypeManager protected _typeManager: TypeManager
	) { }

	public getArrowBracket(str: string): [string, (string | null)] {
		if (!this._typeManager.isString(str)) return ['0', null]
		if (this.doubleArrowBracketPattern.test(str)) return [str, null]

		const result = str.match(this.arrowBracketPattern)
		const resultWithOutArrow = str.match(this.outsideArrowBracketPattern)
		if (result && resultWithOutArrow) return [result.join(''), resultWithOutArrow.join('')]

		return [str, null]
	}

	public separateArrowSide(arrowExpression: string): string[] {
		const arrowLeft = arrowExpression.match(this.arrowLeftPattern)
		const arrowRight = arrowExpression.match(this.arrowRightPattern)
		if (arrowLeft && arrowRight) return [arrowLeft[0], arrowRight[0]]
		return ['', '']
	}

	public removeSpace(str: string): string {
		const withoutSpaceString = str.match(this.notSpacePattern)
		return withoutSpaceString ? withoutSpaceString[0] : ''
	}

	public replaceStringToNumber(str: string): string {
		const num = str.match(/\['\d+'\]/)
		if (num) return str.replace(num[0], `[${num[0].match(/d+/)?.[0]}]`)
		return str
	}
}
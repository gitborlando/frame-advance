import { AllotManager, IAllotManager } from "./alllot-manager";
import { StoreManager, IStoreManager } from "./store-manager";
import { Option } from "./construct-manager";
import { createManagerDecorator, provide } from "./manager";
import { IRecordManager, RecordManager } from "./record-manager";
import { IRegExpManager, RegExpManager } from "./regExp-manager";
import { RootObject, RootObjectArray } from "./template-manager";
import { ITypeManager, TypeManager } from "./type-manager";
import { IUtilManager, UtilManager } from "./util-manager";

type FragOrElement = DocumentFragment | Element

export interface ArrayObject {
  forsArrayName?: string
  forsItem?: string
  realArray?: any[]
  index?: number
}

export interface ElementObject {
  el: HTMLElement
  prop: string
  textNode: RootObject[keyof RootObject]
  origin?: string
}

export interface ForObject {
  el: Element
  parent: FragOrElement
  tagObj: RootObject
}

export interface ComponentObject {
  el: HTMLElement
  name: string
  component: Option,
  propValue?: any
}

export interface ICreateManager {
  traverseCreate(arr: RootObjectArray, parent: FragOrElement, arrayObj: ArrayObject): void
  addValueToElement(el: Element, prop: string, toAdd: any): void
}

export const ICreateManager = createManagerDecorator('ICreateManager')

@provide(ICreateManager)
export class CreateManager implements ICreateManager {
  public readonly managerBrand = 'ICreateManager'

  public constructor(
    @IRegExpManager protected _regExpManager: RegExpManager,
    @IAllotManager protected _allotManager: AllotManager,
    @IUtilManager protected _utilManager: UtilManager,
    @ITypeManager protected _typeManager: TypeManager,
    @IStoreManager protected _storeManager: StoreManager,
    @IRecordManager protected _recordManager: RecordManager
  ) { }

  public traverseCreate(
    arr: RootObjectArray,
    parent: FragOrElement,
    arrayObj: ArrayObject = {}
  ): void {
    for (const tagObj of arr) {
      if (tagObj.for) {
        const forStatement = tagObj.for
        const forsArrayName = this._regExpManager.separateArrowSide(forStatement)[1]
        const forsItem = this._regExpManager.separateArrowSide(forStatement)[0]
        const realArray = this._allotManager.allotFromData(forsArrayName)[0]

        for (var index = 0; index < realArray.length; index++) {
          arrayObj = {
            forsArrayName,
            forsItem,
            realArray,
            index
          }
          const el = this._createAndAddValue(tagObj, arrayObj)
          parent.appendChild(el)

          const forObj = { el, tagObj, parent }
          this._recordManager.recordFor(this._utilManager.transfer(forsArrayName), forObj)

          if (tagObj.children.length === 0) {
            continue
          } else {
            this.traverseCreate(tagObj.children, el, arrayObj)
          }
        }
      } else {
        const el = this._createAndAddValue(tagObj, arrayObj)
        parent.appendChild(el)
        if (tagObj.children.length !== 0) {
          this.traverseCreate(tagObj.children, el, arrayObj)
        } else {
          continue
        }
      }
    }
  }

  public addValueToElement(
    el: HTMLElement,
    prop: string,
    toAdd: any
  ) {
    const implement = ({
      text: () => {
        if (['INPUT'].includes(el.tagName)) {
          el.nodeValue = toAdd
        } else {
          if (['I'].includes(el.tagName)) {
            el.innerHTML = toAdd
          } else {
            el.innerText = toAdd
          }
        }
      },
      class: () => {
        if (this._typeManager.isArray(toAdd)) {
          toAdd.forEach((each: string) => el.classList.add(each))
        } else {
          el.setAttribute(prop, toAdd)
        }
      },
      html: () => {
        el.innerHTML = toAdd
      }
    } as Record<string, Function>)[prop]

    implement ? implement() : (() => {
      el.setAttribute(prop, toAdd)
      el.removeAttribute('on')
    })()

    this._addStyleToElement(el)
  }

  protected _createAndAddValue(
    tagObj: RootObject,
    arrayObj: ArrayObject
  ): HTMLElement {
    const el = document.createElement(tagObj['tag'])
    for (const prop in tagObj) {
      if (['for', 'tag', 'children', 'tabNum', 'pretabNum'].includes(prop)) continue

      let toAdd = tagObj[prop]
      if (this._regExpManager.getArrowBracket(tagObj[prop])[1]) {

        const contain = this._regExpManager.getArrowBracket(tagObj[prop])[0]
        const origin = this._regExpManager.getArrowBracket(tagObj[prop])[1]

        toAdd = this._ifHaveForsItem(contain, arrayObj, { el, prop, textNode: tagObj[prop] })

        if (toAdd.prop && this._typeManager.isArray(toAdd.prop)) {

          const conponent = this._storeManager.componentStore.find((i) => i.el === el)
          if (conponent) conponent.propValue = toAdd
        } else {
          toAdd = tagObj[prop].replace(origin, toAdd)
        }
      }
      if (prop === 'on') {
        const onStatement = tagObj.on as string
        const functionName = this._regExpManager.separateArrowSide(onStatement)[1]
        const Event = this._regExpManager.separateArrowSide(onStatement)[0]

        if (Event == 'component') {
          const Component = this._allotManager.allotFromComponent(functionName)[0]
          if (Component) {
            const componentObj = { el, name: functionName, component: Component }
            this._storeManager.componentStore.push(componentObj)
          }
        } else {
          const Function = this._allotManager.allotFromMethod(functionName)[0]

          el.addEventListener(Event, () => { this._storeManager.current = el })
          el.addEventListener(Event, Function.bind(this))
        }
      }
      this.addValueToElement(el, prop, toAdd)
    }
    return el
  }

  protected _ifHaveForsItem(
    contain: string,
    arrayObj: ArrayObject,
    elPropObj: ElementObject
  ): any {
    let result, toAdd, chain
    const itemName = RegExp('(?=\s*)' + arrayObj.forsItem + '\.')
    if (contain.match(itemName)) {
      const newContain = contain.match(/(?<=\.).+(?=\s*)/)
      if (newContain) {
        result = this._allotManager.allotFromArray(newContain[0], arrayObj)
        toAdd = result[0]
        chain = result[1]
        if (elPropObj.prop === 'prop') {
          toAdd = { prop: [chain, toAdd] }
          this._recordManager.recordProp(chain, elPropObj.el)
        } else {
          this._recordManager.record(chain, elPropObj)
        }
        return toAdd
      }
    }
    result = this._allotManager.allotFromData(contain)
    toAdd = result[0]
    chain = result[1]
    if (elPropObj.prop == 'prop') {
      toAdd = { prop: [chain, toAdd] }
      this._recordManager.recordProp(chain, elPropObj.el)
    } else {
      this._recordManager.record(chain, elPropObj)
    }
    return toAdd
  }

  protected _addStyleToElement(el: HTMLElement) {
    const addStyle = (key: string) => {
      let oldStyle = el.getAttribute('style')
      oldStyle = oldStyle !== null ? oldStyle : ''
      if (oldStyle) oldStyle = oldStyle.match(/;$/) ? oldStyle : oldStyle + ';'
      let newStyle = oldStyle + this._storeManager.style[key]
      el.setAttribute('style', newStyle)
    }
    let keyList = Object.keys(this._storeManager.style)
    el.classList.forEach((i) => {
      i = `.${i}`
      if (keyList.includes(i)) {
        addStyle(i)
      }
    })
    if (keyList.includes(`${el.id}`)) {
      addStyle(`${el.id}`)
    }
    if (keyList.includes(el.tagName.toLowerCase())) {
      addStyle(el.tagName.toLowerCase())
    }
  }
}
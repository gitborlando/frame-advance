import { StoreManager, IStoreManager } from "./store-manager"
import { CreateManager, ElementObject, ForObject, ICreateManager } from "./create-manager"
import { createManagerDecorator, provide } from "./manager"
import { IRegExpManager, RegExpManager } from "./regExp-manager"

export interface IRecordManager {
  record(chain: string, elPropObj: ElementObject): void
  recordProp(chain: string, el: Element): void
  recordFor(chain: string, obj: ForObject): void

  findRecord(chain: string | void, value: any): boolean
  findRecordProp(chain: string | void): void
  findRecordFor(chain: string | void, value: any): boolean
}

export const IRecordManager = createManagerDecorator('IRecordManager')

@provide(IRecordManager)
export class RecordManager implements IRecordManager {
  public readonly managerBrand = 'IRecordManager'

  public constructor(
    @IStoreManager protected _storeManager: StoreManager,
    @ICreateManager protected _createManager: CreateManager,
    @IRegExpManager protected _regExpManager: RegExpManager,
  ) { }

  public record(chain: string, elPropObj: ElementObject): void {
    if (this._storeManager.store[chain]) {
      this._storeManager.store[chain].push(elPropObj)
    } else {
      this._storeManager.store[chain] = [elPropObj]
    }
  }

  public recordProp(chain: string, el: Element): void {
    if (this._storeManager.propStore[chain]) {
      this._storeManager.propStore[chain].push(el)
    } else {
      this._storeManager.propStore[chain] = [el]
    }
  }

  public recordFor(chain: string, obj: ForObject): void {
    if (this._storeManager.forStore[chain]) {
      for (const each of this._storeManager.forStore[chain]) {
        if (each.el === obj.el) return
      }
      this._storeManager.forStore[chain].push(obj)
    } else {
      this._storeManager.forStore[chain] = [obj]
    }
  }

  public findRecord(chain: string | void, value: any): boolean {
    if (!chain) return false

    chain = this._regExpManager.replaceStringToNumber(chain)
    value = typeof value == 'number' ? Number(value) : value
    const array = this._storeManager.store[chain]
    array.forEach((each) => {
      const newValue = each.textNode.replace(each.origin, value)
      this._createManager.addValueToElement(each.el, each.prop, newValue)
    })
    return true
  }

  public findRecordProp(chain: string | void): void {
    if (!chain) return void 0

    chain = this._regExpManager.replaceStringToNumber(chain)
    const _chain = "['" + ((chain.match(/\[.+\]/) as RegExpMatchArray)[0].match(/[^\[''\]]+/) as RegExpMatchArray)[0] + "']"
    const array = this._storeManager.propStore[_chain]
    array.forEach((each) => {
      const component = this._storeManager.componentStore.find((i) => i.el === each)
      if (component) {
        const data = component.component.data
        eval(`data${chain} = this._storeManager.data${chain}`)
      }
    })
  }
  public findRecordFor(chain: string | void, value: any): boolean {
    if (!chain) return false

    chain = this._regExpManager.replaceStringToNumber(chain)
    const array = this._storeManager.forStore[chain]
    value = typeof value == 'number' ? Number(value) : value
    let nextSibling = null
    for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1) {
        nextSibling = array[i].el.nextElementSibling
      }
      array[i].el.remove()
    }
    const frag = document.createDocumentFragment()
    this._createManager.traverseCreate([array[0].tagObj], frag)
    if (!nextSibling) array[0].parent.appendChild(frag)
    
    array[0].parent.insertBefore(frag, nextSibling)
    return true
  }
}
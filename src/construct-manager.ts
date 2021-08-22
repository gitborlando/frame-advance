import { StoreManager, IStoreManager } from "./store-manager";
import { IObserveManager, ObserveData, ObserveManager } from "./observe-manager";
import { ITemplateManager, TemplateManager } from "./template-manager";
import { ITypeManager, TypeManager } from "./type-manager";
import { ComponentObject, CreateManager, ICreateManager } from "./create-manager";
import { IUtilManager, UtilManager } from "./util-manager";

export type FunctionObject = Record<string, Function>

export interface Option {
  template: string
  data?: ObserveData | (() => ObserveData)
  prop?: ObserveData
  style?: Record<string, string>
  method?: FunctionObject
  component?: Record<string, Option>
  beforeMount?: FunctionObject
  afterMount?: FunctionObject
  util?: FunctionObject
}

export interface IConstructManager {
  mount(toMountElement: Element): void
}

export class ConstructManager implements IConstructManager {
  public readonly managerBrand = 'IConstructManager'

  public constructor(
    option: Option,
    @IStoreManager protected _storeManager: StoreManager,
    @ITemplateManager protected _templateManager: TemplateManager,
    @IObserveManager protected _observeManager: ObserveManager,
    @ITypeManager protected _typeManager: TypeManager,
    @ICreateManager protected _createManager: CreateManager,
    @IUtilManager protected _utilManager: UtilManager,
  ) {
    this._storeManager.template = option.template
    this._storeManager.data = !option.data ? {}
      : this._typeManager.isFunction(option.data) ? (option.data as Function)()
        : option.data
    this._storeManager.prop = option.prop || {}
    this._storeManager.style = option.style || {}
    this._storeManager.method = option.method || {}
    this._storeManager.component = option.component || {}
    this._storeManager.beforeMount = option.beforeMount || {}
    this._storeManager.afterMount = option.afterMount || {}
    this._storeManager.util = option.util || {}
    this._storeManager._data = this._storeManager.data
    this._storeManager.store = {}
    this._storeManager.forStore = {}
    this._storeManager.propStore = {}
    this._storeManager.componentStore = []

    this._storeManager.root = this._templateManager.parse(this._storeManager.template)
    this._observeManager.observe(this._storeManager.data)
  }
  public mount(toMountElement: Element): void {
    const frag = document.createDocumentFragment()
    this._createManager.traverseCreate(this._storeManager.root, frag)
    toMountElement.parentNode?.insertBefore(frag, toMountElement)
    const _parent = toMountElement.parentNode
    toMountElement.parentNode?.removeChild(toMountElement)
    this._componentMount()
  }

  protected _componentMount(): void {
    if (this._storeManager.componentStore.length > 0) {
      this._storeManager.componentStore.forEach((each) => {
        if (each.propValue) this._deliverProp(each, each.propValue)
        this.mount(each.el)
      })
    }
  }

  protected _deliverProp(each: ComponentObject, toAdd: any): void {
    const chain = toAdd.prop[0].match(/(?<=\[').+(?='\])/)[0].trim()
    const data = each.component.data as ObserveData
    data[chain] = this._utilManager.deepClone(toAdd.prop[1])
  }
}
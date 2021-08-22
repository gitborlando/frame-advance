
import { StoreManager, IStoreManager } from "./store-manager"
import { ArrayObject } from "./create-manager"
import { Option } from "./construct-manager"
import { createManagerDecorator, provide } from "./manager"
import { IUtilManager, UtilManager } from "./util-manager"

export interface IAllotManager {
  allotFromData(contain: string): [any, string]
  allotFromMethod(contain: string): [Function, string]
  allotFromComponent(contain: string): [Option | null, string | null]
  allotFromArray(contain: string, arrayObj: ArrayObject): [any, string]
}

export const IAllotManager = createManagerDecorator('IAllotManager')

@provide(IAllotManager)
export class AllotManager implements IAllotManager {
  public readonly managerBrand = 'IAllotManager'

  public constructor(
    @IStoreManager protected _storeManager: StoreManager,
    @IUtilManager protected _utilManager: UtilManager
  ) { }

  public allotFromData(contain: string): [any, string] {
    const chain = this._getChain(contain)
    return [eval(`this._storeManager.data${chain}`), chain]
  }

  public allotFromMethod(contain: string): [Function, string] {
    const chain = this._getChain(contain)
    return [eval(`this._storeManager.method${chain}`), chain]
  }

  public allotFromComponent(contain: string): [Option | null, string | null] {
    const chain = this._getChain(contain)
    if (!eval(`this._storeManager.component${chain}`)) return [null, null]
    return [eval(`new Frame(this._storeManager.component${chain})`), chain]
  }

  public allotFromArray(contain: string, arrayObj: ArrayObject): [any, string] {
    const chain = this._getChain(contain)
    const implement = `${this._getChain(arrayObj.forsArrayName as string)}[${arrayObj.index}]`
    return [eval(`this._storeManager.data${implement}${chain}`), `${implement}${chain}`]
  }

  protected _getChain(contain: string): string {
    return this._utilManager.transfer(contain)
  }
}
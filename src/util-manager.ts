import { createManagerDecorator, provide } from "./manager"
import { ITypeManager, TypeManager } from "./type-manager"

type ObjectOrArray = Record<string | number, any>

export interface IUtilManager {
  deepClone(originObj: any): ObjectOrArray
  transfer(contain: string): string
}

export const IUtilManager = createManagerDecorator('IUtilManager')

@provide(IUtilManager)
export class UtilManager implements IUtilManager {
  public readonly managerBrand = 'IUtilManager'

  public constructor(
    @ITypeManager protected _typeManager: TypeManager
  ) { }

  public deepClone(originObj: any): ObjectOrArray {
    if (!this._typeManager.isObjectOrArray(originObj)) return originObj

    const obj: ObjectOrArray = Array.isArray(originObj) ? [] : {}
    for (const key in originObj) {
      if (
        this._typeManager.isObjectOrArray(originObj[key])
      ) {
        obj[key] = this.deepClone(originObj[key])
      } else if (
        this._typeManager.isFunction(originObj)
      ) {
        obj[key] = originObj[key].bind(obj)
      } else {
        obj[key] = originObj[key]
      }
    }
    return obj
  }

  public transfer(contain: string): string {
    const array: string[] = []
    const containArray = contain.split('.')
    containArray.forEach((i) => array.push(`['${i}']`))
    return array.join('')
  }
}
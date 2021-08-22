
import { StoreManager, IStoreManager } from "./store-manager"
import { createManagerDecorator, provide } from "./manager"
import { IRecordManager, RecordManager } from "./record-manager"
import { ITypeManager, TypeManager } from "./type-manager"

export type ObserveData = Record<string, any>

export interface IObserveManager {
	observe(data: Object): Object
}

export const IObserveManager = createManagerDecorator('IObserveManager')

@provide(IObserveManager)
export class ObserveManager implements IObserveManager {
	public readonly managerBrand = 'IObserveManager'
	protected _data: ObserveData = {}

	public constructor(
		@ITypeManager protected _typeManager: TypeManager,
		@IStoreManager protected _storeManager: StoreManager,
		@IRecordManager protected _recordManager: RecordManager,
	) { }

	public observe(data: ObserveData): Object {
		if (this._typeManager.isEmptyObject(this._data)) this._data = data

		for (const key in data) {
			if (this._typeManager.isObjectOrArray(data[key])) {
				data[key] = this.observe(data[key])
			}
		}
		return new Proxy(data, {
			set: (target: ObserveData, key: string, val: any) => {
				const _val = val
				const res = this._findChain(this._data, key, target[key])

				if (this._typeManager.isObjectOrArray(val)) val = this.observe(val)

				Reflect.set(target, key, val)

				const result = this._recordManager.findRecord(res, _val)
				if (!result) {
					if (Object.keys(this._storeManager.component).length !== 0) this._recordManager.findRecordProp(res)
					this._recordManager.findRecordFor(res, _val)
				}

				this._updateData()
				return true
			}
		})
	}

	protected _findChain(
		data: ObserveData,
		key: string,
		val: any,
		parentKey = ''
	): string | void {
		if (!this._typeManager.isObjectOrArray(data)) return
		for (const i in data) {
			if (i === key && data[i] === val) {
				return `['${i}']`
			} else {
				let res = this._findChain(data[i], key, val, i)
				if (!res) {
					continue
				} else {
					return `['${i}']${res}`
				}
			}
		}
	}

	protected _updateData(): void {
		this._storeManager._data = this._storeManager.data
	}
}
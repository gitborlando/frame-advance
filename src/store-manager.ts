import { ComponentObject, ElementObject, ForObject } from './create-manager'
import { FunctionObject, Option } from './construct-manager'
import { createManagerDecorator, provide } from './manager'
import { ObserveData } from './observe-manager'
import { RootObjectArray } from './template-manager'

type Store<T> = Record<string, T[]>

export interface IStoreManager {
	template: string
	data: ObserveData
	prop: ObserveData
	style: Record<string, string>
	method: FunctionObject
	component: Record<string, Option>
	beforeMount: FunctionObject
	afterMount: FunctionObject
	util: FunctionObject
	_data: ObserveData
	store: Store<ElementObject>
	forStore: Store<ForObject>
	propStore: Store<Element>
	componentStore: ComponentObject[]
	root: RootObjectArray
	current?: Element
}

export const IStoreManager = createManagerDecorator('IStoreManager')

@provide(IStoreManager)
export class StoreManager implements IStoreManager {
	public readonly managerBrand = 'IStoreManager'

	public template: string = ''
	public data: ObserveData = {}
	public prop: ObserveData = {}
	public style: Record<string, string> = {}
	public method: FunctionObject = {}
	public component: Record<string, Option> = {}
	public beforeMount: FunctionObject = {}
	public afterMount: FunctionObject = {}
	public util: FunctionObject = {}
	public _data: ObserveData = {}
	public store: Store<ElementObject> = {}
	public forStore: Store<ForObject> = {}
	public propStore: Store<Element> = {}
	public componentStore: ComponentObject[] = []
	public root: RootObjectArray = []
	public current?: Element
}
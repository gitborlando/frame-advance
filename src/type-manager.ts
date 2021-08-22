import { createManagerDecorator, provide } from "./manager"

export type OrUndefined<T> = T | undefined

export interface TypeManager {
	isArray(input: any): boolean
	isObject(input: any): boolean
	isObjectOrArray(input: any): boolean
	isObjectType(input: any): boolean
	isEmptyObject(input: any): boolean
	isFunction(input: any): boolean
	isString(input: any): boolean
	isNumber(input: any): boolean
	isSymbol(input: any): boolean
}

export const ITypeManager = createManagerDecorator('ITypeManager')

@provide(ITypeManager)
export class TypeManager implements TypeManager {
	public readonly managerBrand = 'ITypeManager'

	public isArray(input: any): boolean {
		return Array.isArray(input)
	}

	public isObject(input: any): boolean {
		return Object.prototype.toString.call(input) === '[object Object]'
	}

	public isObjectOrArray(input: any) {
		return this.isArray(input) || this.isObject(input)
	}

	public isObjectType(input: any) {
		return typeof input === 'object'
	}

	public isEmptyObject(input: any): boolean {
		return Object.keys(input).length === 0
	}

	public isFunction(input: any) {
		return typeof input === 'function'
	}

	public isString(input: any) {
		return typeof input === 'string'
	}

	public isNumber(input: any) {
		return typeof input === 'number'
	}

	public isSymbol(input: any) {
		return typeof input === 'symbol'
	}
}



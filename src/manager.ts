import { Container, inject, METADATA_KEY } from 'inversify'
import { buildProviderModule, fluentProvide } from 'inversify-binding-decorators'
import 'reflect-metadata'

type ConstructorOf<T, TArgs extends unknown[] = any[]> = new (...args: TArgs) => T

type InversifyTaggedIdentifiers = { value: ManagerDecorator }[][]

export interface IManager {
  managerBrand: string
}

export interface ManagerDecorator extends ParameterDecorator {
  readonly symbol: symbol
}

export function createManagerDecorator(managerId: string): ManagerDecorator {
  const symbol = Symbol(managerId)
  return Object.assign(inject(symbol), { symbol }) as ManagerDecorator
}

export function provide(managerDecorator: ManagerDecorator) {
  const { symbol } = managerDecorator
  const inversifyDecorator = fluentProvide(symbol).inTransientScope().done()
  return (target: ConstructorOf<IManager>) => {
    inversifyDecorator(target)
  }
}

export function createContainer() {
  class FrameContainer extends Container {
    public construct(ctor: ConstructorOf<unknown>, ...args: any[]): InstanceType<any> {
      const identifiers = Reflect.getMetadata(
        METADATA_KEY.TAGGED,
        ctor
      ) as InversifyTaggedIdentifiers;
      const argsToInject = Object.values(identifiers).map(([{ value }]) => this.get(value))
      return new ctor(...args, ...argsToInject)
    }
  }
  const container = new FrameContainer()
  container.load(buildProviderModule())
  return container
}

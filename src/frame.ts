import { ConstructManager, Option } from "./construct-manager";
import { createContainer } from "./manager";

export default class Frame {
  constructor(option: Option) {
    const container = createContainer()
    return container.construct(ConstructManager, option)
  }
}
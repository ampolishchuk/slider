interface ParamsInterface {
  template: Function;
  state?: object;
}

export class View {
  private template: Function;
  protected state: object;
  protected node: any;

  constructor({ template, state = {} }: ParamsInterface) {
    this.template = template;
    this.state = state;
  }
  protected createNode(state: object): void {
    this.node = document.createElement("div");

    try {
      this.node.innerHTML = this.template ? this.template(state) : "";

      this.node = this.node.firstChild || this.node;
    } catch (e) {
      console.error("Creating node error: " + e);
    }
  }
}

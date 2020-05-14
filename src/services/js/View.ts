export class View {
  private template: Function;
  public node: any; // Node element

  constructor(template: Function) {
    this.template = template;
  }
  protected createNode(state = {}): void {
    this.node = document.createElement("div");

    try {
      this.node.innerHTML = this.template ? this.template(state) : "";

      this.node = this.node.firstChild || this.node;
    } catch (e) {
      console.error("Creating node error: " + e);
    }
  }
}

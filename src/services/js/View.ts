export default class View {
  private template: Function;
  public node: HTMLElement; // Node element

  constructor(template: Function) {
    this.template = template;
  }
  protected createNode(state = {}): void {
    this.node = document.createElement("div");

    try {
      this.node.innerHTML = this.template ? this.template(state) : "";

      this.node = (this.node.firstChild as HTMLElement) || this.node;
    } catch (e) {
      console.error("Creating node error: " + e);
    }
  }
}

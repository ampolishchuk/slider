class IOCCOntainer {
  private dependencies: Array<any> = [];

  set(name: string, Dep: object) {
    this.dependencies.push({ name, Dep });
  }

  get(depName: string): any {
    const { Dep } = this.dependencies.find(({ name }) => name === depName);

    return new Dep();
  }
}

const container = new IOCCOntainer();

export default container;

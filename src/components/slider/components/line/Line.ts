import LineControllerInterface from "./interfaces/LineController.interface";
import LineView from "./view/Line.view";
import LineController from "./controller/Line.controller";
import LineObserverInterface from "./interfaces/LineObserver.interface";

interface DependenciesInterface {
  observer: LineObserverInterface;
}

export default class Line {
  private $: DependenciesInterface;
  private controller: LineControllerInterface;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;

    const view = new LineView();

    this.controller = new LineController({ observer: this.$.observer, view });
  }

  render() {
    return this.controller.render();
  }
}

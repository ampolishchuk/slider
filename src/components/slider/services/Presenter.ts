import PresenterInterface from "../interfaces/Presenter.interace";
import ObserverInterface from "../interfaces/Observer.interace";
import ModelInterface from "../interfaces/Model.interace";
import ViewInterface from "../interfaces/View.interace";

interface DependenciesInterface {
  observer: ObserverInterface;
  model: ModelInterface;
  view: ViewInterface;
}

export default abstract class Presenter implements PresenterInterface {
  private $: DependenciesInterface;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;
  }

  render(): HTMLElement {
    return this.$.view.render();
  }

  setPosition(position: number) {
    this.$.model.setPosition(position);
  }
}

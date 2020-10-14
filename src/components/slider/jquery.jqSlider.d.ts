interface jqSlider {
  setValues(values: any[]): void;
  showScale(): void;
  hideScale(): void;
  onChange(callback: Function): void;
}

interface OptionsInterface {
  range?: boolean;
  scale?: number[];
  showScale?: boolean;
  values?: any;
}

interface JQuery {
  jqSlider(options?: OptionsInterface): jqSlider;
}

interface jqSlider {
  setValues(values: any[]): void;
  showScale(): void;
  hideScale(): void;
  onChange(callback: Function): void;
}

interface OptionsInterface {
  scale?: boolean;
  range?: boolean;
  points?: number[];
  values?: any;
}

interface JQuery {
  jqSlider(options?: OptionsInterface): jqSlider;
}

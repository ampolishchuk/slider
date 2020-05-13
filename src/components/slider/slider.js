import { Model } from '../../services/js/Model';
import { View } from '../../services/js/View';

export class Slider {
	constructor(state) {
		this.model = new SliderModel(state);
		this.view = new SliderView();
	}
	render() {
		this.view.render(this.model.state);

		this.handlers();

		return this.view.node;
	}
	slideTo(position) {
		this.model.setPosition(position);
		this.view.setButtonPosition(this.model.getPosition());
	}
	handlers() {
		this.view.button.addEventListener('mousedown', (event) => {
			this.model.setClickPosition(event);

			document.addEventListener('mousemove', this.mouseMoveHandler);
		});
		document.addEventListener('mouseup', (event) => {
			document.removeEventListener('mousemove', this.mouseMoveHandler);
		});
	}
	mouseMoveHandler = (event) => {
		const position = this.model.getDragPosition(event);

		this.slideTo(position);
	};
}

class SliderModel extends Model {
	constructor(state) {
		super();

		this.state = {
			min: 0,
			max: Infinity,
			step: 1,
			position: 0,
			clickPosition: null,
			showInfo: true,
			...state,
		};
	}
	setPosition(position) {
		if (position > this.state.max) position = this.state.max;
		if (position < this.state.min) position = this.state.min;

		this.state = { position };
	}
	getPosition() {
		return this.state.position;
	}
	setClickPosition(event) {
		this._state.clickPosition = this.state.position - event.clientX;
	}
	getDragPosition(event) {
		return this.state.clickPosition + event.clientX;
	}
}

class SliderView extends View {
	constructor() {
		super();

		require('./slider.sass');
		this.template = require('./slider.pug');
	}
	render(state) {
		this.node = this.createNode(state);

		this.renderButton();
	}
	renderButton() {
		this.button = document.createElement('button');
		this.button.classList.add('slider-button');

		this.node.appendChild(this.button);
	}
	setButtonPosition(position) {
		this.button.style.left = position + 'px';
	}
}

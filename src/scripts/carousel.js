import { CONFIG } from "./config";

export default class Carousel {
	constructor(option={}) {
		this._init(option);
	}

	_init(option) {
		this.option = Object.assign({}, 
			CONFIG.DEFAULT_OPTION,
			option
		);

		const containers = document.getElementsByClassName(this.option.containerClass);
		for (const container of containers) {
			this._carouselize(container);
		}
	}

	_carouselize(container) {
		container.classList.add(CONFIG.CONTROL_CLASS);

		if (this.option.width && this.option.height) {
			Object.assign(container.style, {
				width: this.option.width,
				height: this.option.height
			});
		}

		const items = container.children;
		this._show(items[0]);
	}

	_show(target) {
		target.classList.add('is-on');
	}
}

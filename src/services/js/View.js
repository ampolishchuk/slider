export class View {
	createNode(state = {}) {
		try {
			const div = document.createElement('div');
			div.innerHTML = this.template ? this.template(state) : '';
			return div.firstChild || div;
		} catch (e) {
			console.error('Creating node error: ' + e);
		}
	}
}

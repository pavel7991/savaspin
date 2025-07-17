class Modal {

	selectors = {
		overlay: '[data-js-modal-overlay]',
		closeButton: '[data-js-modal-close]'
	}

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock'
	}

	constructor(modalSelector) {
		this.modal = document.querySelector(modalSelector)
		this.overlayElement = this.modal.querySelector(this.selectors.overlay)
		this.closeButtonElement = this.modal.querySelector(this.selectors.closeButton)

		this.bindEvents()
	}

	bindEvents() {
		if (this.closeButtonElement) {
			this.closeButtonElement.addEventListener('click', this.close)
		}

		this.modal.addEventListener('click', (event) => {
			if (event.target === this.modal || event.target === this.overlayElement) {
				this.close()
			}
		})

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') this.close()
		})
	}

	open = () => {
		this.modal.classList.add(this.stateClasses.isActive)
		document.documentElement.classList.add(this.stateClasses.isLock)
	}

	close = () => {
		this.modal.classList.remove(this.stateClasses.isActive)
		document.documentElement.classList.remove(this.stateClasses.isLock)
	}
}
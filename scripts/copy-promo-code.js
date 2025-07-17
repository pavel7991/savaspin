const promoCodeButton = document.querySelector('[data-js-promo-code]');

promoCodeButton.addEventListener('click', () => {
	const code = promoCodeButton.querySelector('.promo-code-btn__copy').textContent;
	const tooltip = promoCodeButton.querySelector('.promo-code-btn__text');

	navigator.clipboard.writeText(code).then(() => {
		tooltip.classList.add('visible');
		setTimeout(() => {
			tooltip.classList.remove('visible');
		}, 1500);
	}).catch(err => {
		console.error('Ошибка копирования:', err);
	});
});
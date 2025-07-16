(function () {
	const scrollBtn = document.querySelector('[data-js-scroll-to-up]');

	const toggleVisibility = () => {
		const scrolled = window.scrollY || document.documentElement.scrollTop;
		scrollBtn.classList.toggle('show', scrolled > 400);
	};

	const smoothScrollToTop = () => {

		const scrollStep = () => {
			const currentScroll = window.scrollY || document.documentElement.scrollTop;
			if (currentScroll > 0) {
				document.documentElement.style.scrollBehavior = 'auto';
				window.scrollBy(0, -Math.max(10, currentScroll / 10));
				requestAnimationFrame(scrollStep);
			}
		};
		requestAnimationFrame(scrollStep);
	};


	window.addEventListener('scroll', toggleVisibility);
	scrollBtn.addEventListener('click', smoothScrollToTop);
})();
const links = document.querySelectorAll('.psvn');

function openReferralLink(encodedLink) {
	try {
		const referralLink = atob(encodedLink);
		window.open(referralLink, '_blank', 'noopener,noreferrer');
	} catch (err) {
		console.error(err);
	}
}

links.forEach(link => {
	link.addEventListener('click', (e) => {
		const base64 = btoa('https://google.com')
		openReferralLink(base64)
	})
})


/* eslint-env browser */

// Helper
const dom = {
	select: document.querySelector.bind(document),
	slectAll: document.querySelectorAll.bind(document)
};

const injectScript = (source, callback) => {
	const script = document.createElement('script');
	script.src = source;
	script.addEventListener('load', callback);
	document.head.appendChild(script);
};

// Unicorn easteregg
dom.select('#unicorn-btn').addEventListener('click', event => {
	event.preventDefault();
	injectScript('cornify.js', () => {
		cornify();
		cornify();
		setInterval(cornify, 1000);
	});
}, {once: true});

{
	function hideScrollHint() {
		if (window.scrollY > 100) {
			document.removeEventListener('scroll', hideScrollHint);
			dom.select('#scroll-hint').classList.add('hidden');
		}
	}

	document.addEventListener('scroll', hideScrollHint, {passive: true});
}

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


// GAME

function setUpGame() {
	const gameCanvas = getCanvas();
	if (!gameCanvas) {
		console.warn('Canvas failed');
		return;
	}
	gameCanvas.setup();
	const canvas = gameCanvas.canvas;  // the canvas element
	canvas.scrollIntoView();

	// width = canvas.getBoundingClientRect().width;
	// height = canvas.getBoundingClientRect().height;
	const profilePic = document.getElementById("profile-pic");
	// const imageX = profilePic.getBoundingClientRect().x + (52 * 1.5);
	// const imageY = profilePic.getBoundingClientRect().y + (52 / 2);
	const imageD = 160;
	const imageR = imageD / 2;
	const imageX = canvas.width / 2;
	const imageY = (canvas.height / 2);

	const ctx = canvas.getContext('2d');

	// if (canvas.getContext) {
	// 	const ctx = canvas.getContext('2d');
	// 	ctx.beginPath();
	// 	ctx.arc(imageX, imageY, imageR, 0, Math.PI * 2);
	// 	ctx.closePath();
	// 	// ctx.stroke();
	// 	ctx.clip();
	//
	// 	var img = new Image();
	// 	img.addEventListener('load', function(e) {
	// 		ctx.drawImage(this, imageX - imageR, imageY - imageR, 160, 160);
	// 		//ctx.fill();
	// 		//ctx.stroke();
	// 	}, true);
	// 	img.src="/james-kajon.jpg";
	// } else {
	// 	// canvas-unsupported code here
	// }



	const image = new Image();
	image.src = '/james-kajon.jpg';
	image.onload = function() {
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(this, imageX - imageR, imageY - imageR, imageD, imageD);
	}

}
setTimeout(setUpGame, 1000);


function getCanvas() {
	const canvas = document.querySelector("div#protect-game canvas");
	const updateItems = [];  // items to redraw when the canvas redraws

	if (!canvas.getContext) {
		return;
	}

	function setup() {
		canvas.parentElement.style.display = "block";
		setSize();
	}

	function update() {
		if (canvas.width !== canvas.getBoundingClientRect().width ||
			canvas.height !== canvas.getBoundingClientRect().height) {
			setSize()
		}
		updateItems.forEach(e => e.update())
	}

	function setSize() {
		canvas.width = canvas.getBoundingClientRect().width;
		canvas.height = canvas.getBoundingClientRect().height;
	}

	return {
		canvas,
		setup,
		update,
		updateItems,
	};
}









//
// const canvas = document.querySelector("div#protect-game canvas");
// const ctx = canvas.getContext('2d');
// width = canvas.getBoundingClientRect().width;
// height = canvas.getBoundingClientRect().height;
// ctx.beginPath();
// ctx.strokeStyle = 'blue';
// ctx.moveTo(width / 2, height / 2);
// ctx.lineTo(0, 0);
// ctx.closePath();
// ctx.stroke();

// function draw() {
//
// 	const context = canvas.getContext("2d");
// 	var pic = document.getElementById("profile-pic");
// 	context.drawImage(pic, 0, 0, 50, 50);
// //     var image2 = new Image();
// //     image2.src = "andyGoofy.gif";
// 	context.drawImage(image2, 100, 100, 70, 50);
// }


//
// const base = document.createElement('img');
//
// base.src = 'path_to_image';
// base.onload = function() {
// 	tmpCtx.save();
// 	tmpCtx.beginPath();
// 	tmpCtx.arc(25, 25, 25, 0, Math.PI * 2, true);
// 	tmpCtx.closePath();
// 	tmpCtx.clip();
//
// 	tmpCtx.drawImage(thumbImg, 0, 0, 50, 50);
//
// 	tmpCtx.beginPath();
// 	tmpCtx.arc(0, 0, 25, 0, Math.PI * 2, true);
// 	tmpCtx.clip();
// 	tmpCtx.closePath();
// 	tmpCtx.restore();
// };
//

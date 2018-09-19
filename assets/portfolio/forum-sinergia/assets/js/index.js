
// Contador Regressivo da Home

const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;

let countDown = new Date('Sep 30, 2018 00:00:00').getTime(),
	x = setInterval(function () {

		let now = new Date().getTime(),
			distance = countDown - now;

		document.getElementById('days').innerText = Math.floor(distance / (day)),
			document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

		//do something later when date is reached
		if (distance < 0) {

		}

	}, second)



// ---------------------------------------------------------------

// Pesguntas Frequentes Dropdown

$(".item-faq").on("click", function () {
	$(this).find(".faq-arrow").toggleClass("rotate-arrow");
	$(this).find("p").toggle("fast");
});



// ---------------------------------------------------------------

// OWL Carousel

$('#carousel-palestrantes').owlCarousel({
	navContainer: '#customNav',
	navText: ["◂", "▸"],
	nav: true,
	loop: true,
	margin: 10,
	responsiveClass: true,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1, nav: false, loop: true,
		},
		780: {
			items: 1, nav: false, loop: true,
		},
		1000: {
			items: 2, nav: false, loop: true,
		},
	},
});


// ---------------------------------------------------------------


// window.addEventListener("scroll", () => {
// 	let altura = window.pageYOffset;

// });

// Smoth Scroll do Navbar

$(document).ready(function () {
	$(".navbar a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			console.log();

			$('html, body').animate({
				scrollTop: $(hash).offset().top - 90
			}, 600, function () {

				window.location.hash = hash - 90;
			});
		}
	});
	$(window).scroll(function () {
		$(".slideanim").each(function () {
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("slide");
			}
		});
	});
})

// ---------------------------------------------------------------


let resizeReset = function() {
	w = canvasBody.width = window.innerWidth;
	h = canvasBody.height = window.innerHeight;
}

if($(window).width() < 770){
	var tamanho = 40;
} else {
	var tamanho = 80;
}

const opts = { 
	particleColor: "rgb(60,60,60)",
	lineColor: "rgb(60,60,60)",
	particleAmount: tamanho,
	defaultSpeed: 1,
	variantSpeed: 1,
	defaultRadius: 2,
	variantRadius: 2,
	linkRadius: 200,
};

window.addEventListener("resize", function(){
	deBouncer();
});

let deBouncer = function() {
    clearTimeout(tid);
    tid = setTimeout(function() {
        resizeReset();
    }, delay);
};

let checkDistance = function(x1, y1, x2, y2){ 
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function(point1, hubs){ 
	for (let i = 0; i < hubs.length; i++) {
		let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
		let opacity = 1 - distance / opts.linkRadius;
		if (opacity > 0) { 
			drawArea.lineWidth = 0.5;
			drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
			drawArea.beginPath();
			drawArea.moveTo(point1.x, point1.y);
			drawArea.lineTo(hubs[i].x, hubs[i].y);
			drawArea.closePath();
			drawArea.stroke();
		}
	}
}

Particle = function(xPos, yPos){ 
	this.x = Math.random() * w; 
	this.y = Math.random() * h;
	this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
	this.directionAngle = Math.floor(Math.random() * 360); 
	this.color = opts.particleColor;
	this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
	this.vector = {
		x: Math.cos(this.directionAngle) * this.speed,
		y: Math.sin(this.directionAngle) * this.speed
	};
	this.update = function(){ 
		this.border(); 
		this.x += this.vector.x; 
		this.y += this.vector.y; 
	};
	this.border = function(){ 
		if (this.x >= w || this.x <= 0) { 
			this.vector.x *= -1;
		}
		if (this.y >= h || this.y <= 0) {
			this.vector.y *= -1;
		}
		if (this.x > w) this.x = w;
		if (this.y > h) this.y = h;
		if (this.x < 0) this.x = 0;
		if (this.y < 0) this.y = 0;	
	};
	this.draw = function(){ 
		drawArea.beginPath();
		drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		drawArea.closePath();
		drawArea.fillStyle = this.color;
		drawArea.fill();
	};
};

function setup(){ 
	particles = [];
	resizeReset();
	for (let i = 0; i < opts.particleAmount; i++){
		particles.push( new Particle() );
	}
	window.requestAnimationFrame(loop);
}

function loop(){ 
	window.requestAnimationFrame(loop);
	drawArea.clearRect(0,0,w,h);
	for (let i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].draw();
	}
	for (let i = 0; i < particles.length; i++){
		linkPoints(particles[i], particles);
	}
}

const canvasBody = document.getElementById("canvas"),
drawArea = canvasBody.getContext("2d");
let delay = 200, tid,
rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();
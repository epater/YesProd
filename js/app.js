"use-strict";
// Initialize foundation
$(document).foundation();

// Scroll Reveal
window.sr = ScrollReveal({
	reset: false,
	mobile: true,
});

// Image sections
sr.reveal(".img-sec-anim", {
	duration: 800,
	origin: "top",
	distance: "3rem",
	delay: 100,
	rotate: {
		x: 50,
		y: 0,
		z: 0
	},
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

// Index text sections
sr.reveal(".txt-sec-anim", {
	duration: 700,
	origin: "bottom",
	distance: "2rem",
	delay: 50,
	rotate: {
		x: 10,
		y: 0,
		z: 0
	},
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
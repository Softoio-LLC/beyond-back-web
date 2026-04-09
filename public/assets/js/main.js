// 1. Get all <li> inside the list
const listItems = document.querySelectorAll(".select-box__list li");

// 2. Loop through each li and add click event
listItems.forEach((item) => {
	item.addEventListener("click", () => {
		// Remove 'active' from all li
		listItems.forEach((li) => li.classList.remove("active"));

		// Add 'active' to the clicked li
		item.classList.add("active");
	});
});

const swiper = new Swiper(".hero-slide-thumb", {
	loop: true,
	centeredSlides: true,
	spaceBetween: 10,
	rtl: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	speed: 1000,

	slidesPerView: 4,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		320: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 1,
		},
		575: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 3,
		},
	},
});

// Concept Slider
const conceptSwiper = new Swiper(".concept-thumbnails", {
	loop: true,
	centeredSlides: true,
	spaceBetween: 15,
	speed: 1000,
	slidesPerView: 1,

	// Stage padding → Swiper uses "slidesOffsetBefore" & "slidesOffsetAfter"
	breakpoints: {
		0: {
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		320: {
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		450: {
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		575: {
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		992: {
			spaceBetween: 15,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		1200: {
			spaceBetween: 24,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},
	},
});

const outerSwiper = new Swiper(".outer-work-swiper", {
	slidesPerView: 2, // show 2 items
	spaceBetween: 20,
	rtl: false,

	loop: true,
	speed: 800,

	breakpoints: {
		0: {
			slidesPerView: 1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		992: {
			slidesPerView: 2,
			slidesOffsetBefore: 0, // left side 40px
			slidesOffsetAfter: 0, // right side 0px
		},

		1200: {
			slidesOffsetBefore: 0, // left side 40px
			slidesOffsetAfter: 0, // right side 0px
		},

		1450: {
			slidesOffsetBefore: 0, // left side 40px
			slidesOffsetAfter: 70, // right side 0px
		},
	},
});

document.querySelectorAll(".work-single-wrap").forEach((slider, index) => {
	// 1️⃣ For each slider dynamically create a unique pagination div
	const pagination = slider.parentElement.querySelector(".swiper-pagination");

	// 2️⃣ Add unique class for each pagination
	const uniquePaginationClass = `inner-pagination-${index}`;
	pagination.classList.add(uniquePaginationClass);

	// 3️⃣ Initialize each slider separately with its own pagination
	new Swiper(slider, {
		loop: true,
		centeredSlides: true,
		spaceBetween: 20,
		rtl: true,
		speed: 1000,
		slidesPerView: 1,
		mousewheel: {
			forceToAxis: true,
			sensitivity: 1,
		},
		pagination: {
			el: `.${uniquePaginationClass}`, // unique pagination
			clickable: true,
		},
	});
});

const teamSwiper = new Swiper(".team-card-wrap", {
	slidesPerView: 4,
	spaceBetween: 24,
	loop: true,
	speed: 800,
	// empty placeholder — actual pagination set korbo on init
	pagination: {
		el: ".team-pagination",
		clickable: true,
	},

	on: {
		init: function () {
			// force pagination to always create 4 bullets
			this.pagination.bullets.length = 4;

			// recreate bullet HTML manually
			let html = "";
			for (let i = 0; i < 4; i++) {
				html += `<span class="swiper-pagination-bullet"></span>`;
			}
			this.pagination.el.innerHTML = html;

			// update bullet reference
			this.pagination.bullets = this.pagination.el.querySelectorAll(".swiper-pagination-bullet");
		},
	},

	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 1,
		},
		575: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1450: {
			slidesPerView: 3,
		},
		1600: {
			slidesPerView: 4,
		},
	},
});

const brandSwiper = new Swiper(".brand-logos-slide", {
	loop: true,
	centeredSlides: true,
	rtl: true,
	spaceBetween: 10,
	speed: 1000,

	slidesPerView: 7,

	// Stage padding → Swiper uses "slidesOffsetBefore" & "slidesOffsetAfter"
	breakpoints: {
		0: {
			slidesPerView: 2,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		320: {
			slidesPerView: 2,
			slidesOffsetBefore: 20,
			slidesOffsetAfter: 20,
		},

		450: {
			slidesPerView: 3,
			slidesOffsetBefore: 40,
			slidesOffsetAfter: 40,
		},

		575: {
			slidesPerView: 4,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		768: {
			slidesPerView: 4,
		},

		992: {
			slidesPerView: 5,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		1450: {
			slidesPerView: 6,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},

		1600: {
			slidesPerView: 7,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
		},
	},
});

// page Animation
AOS.init({
	mirror: true,
	duration: 1500,
	initClassName: "aos-init",
	once: true,
});

// data-aos="fade-up"
// data-aos-delay="300"

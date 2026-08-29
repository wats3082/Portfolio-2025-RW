'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
  sidebarBtn.setAttribute("aria-expanded", sidebar.classList.contains("active"));
});



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
let activeTestimonial;

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  const isOpen = modalContainer.classList.contains("active");
  modalContainer.setAttribute("aria-hidden", !isOpen);

  if (isOpen) {
    modalCloseBtn.focus();
  } else if (activeTestimonial) {
    activeTestimonial.focus();
  }
}

const openTestimonial = function (item) {
  activeTestimonial = item;
  modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
  modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
  modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
  modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
  testimonialsModalFunc();
}

// add mouse and keyboard events to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () { openTestimonial(this); });
  testimonialsItem[i].addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openTestimonial(this);
    }
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modalContainer.classList.contains("active")) {
    testimonialsModalFunc();
  }
});



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
  this.setAttribute("aria-expanded", this.classList.contains("active"));
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    select.setAttribute("aria-expanded", "false");
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const selectedPage = this.innerText.toLowerCase();

    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
      pages[pageIndex].classList.toggle("active", selectedPage === pages[pageIndex].dataset.page);
    }

    for (let linkIndex = 0; linkIndex < navigationLinks.length; linkIndex++) {
      const isActive = this === navigationLinks[linkIndex];
      navigationLinks[linkIndex].classList.toggle("active", isActive);
      if (isActive) {
        navigationLinks[linkIndex].setAttribute("aria-current", "page");
      } else {
        navigationLinks[linkIndex].removeAttribute("aria-current");
      }
    }

    window.scrollTo(0, 0);
  });
}
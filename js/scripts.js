"use strict";
var _a;
/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
    scrollFunction();
    scrollFunctionBTT(); // back to top button
};
window.onload = function () {
    redirectToForm();
    scrollFunction();
};

const redirectToForm = () => {
    console.log(window.location);
    if (window.location.pathname === "/mentee")
        // similar behavior as an HTTP redirect
        window.location.replace("https://forms.gle/eV5PcsS1XKdEJaNL9");
};
function scrollFunction() {
    var navbar = document.getElementById("navbarExample");
    if (navbar) {
        if (document.documentElement.scrollTop > 30) {
            navbar.classList.add("top-nav-collapse");
        } else if (document.documentElement.scrollTop < 30) {
            navbar.classList.remove("top-nav-collapse");
        }
    }
}
// Navbar on mobile
var elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
        var _a;
        (_a = document.querySelector(".offcanvas-collapse")) === null || _a === void 0
            ? void 0
            : _a.classList.toggle("open");
    });
}
(_a = document.querySelector(".navbar-toggler")) === null || _a === void 0
    ? void 0
    : _a.addEventListener("click", function () {
          var _a;
          (_a = document.querySelector(".offcanvas-collapse")) === null || _a === void 0
              ? void 0
              : _a.classList.toggle("open");
      });
/* Back To Top Button */
// Get the button
var myButton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
    if (myButton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

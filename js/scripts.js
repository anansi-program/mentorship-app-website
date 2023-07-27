"use strict";
var _a;
/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class

// On DOM Loaded:
addEventListener("DOMContentLoaded", (event) => {
    if (window.location.pathname.includes("index.html") || window.location.pathname == "/")
    {document.querySelectorAll(".mentor-card .card-body .mentor-bio").forEach((mentor_bio)=> {
        mentor_bio.onclick = function () {
            mentor_bio.classList.toggle("mentor-bio");
            
            mentor_bio.addEventListener("mouseover", (event) => {
                console.log(event);
                console.log("mentorbio mouseover from DOM");

            });
        };
    })

}
    else if (window.location.pathname.includes("mentors.html"))
    {}
});


window.onscroll = function () {
    scrollFunction();
    scrollFunctionBTT(); // back to top button
};
window.onload = function () {
    scrollFunction();

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
        (_a = document.querySelector(".offcanvas-collapse")) === null || _a === void 0 ? void 0 : _a.classList.toggle("open");
    });
/* Back To Top Button */
// Get the button
// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-Btn").style.display = "block";
    } else {
        document.getElementById("back-to-top-Btn").style.display = "none";
    }

}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
    // document.body.scrollTop = 0; // for Safari
    // document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

// switch the "Join Us" page btn Mentees and Mentors
function switch_join_us(pageElement, cardType) {
    // handle paginator
    if (pageElement != "none") {
        document.querySelectorAll("section#section-join-us li.page-item").forEach((elem) => {
            elem.classList.remove('active');
        });
        pageElement.classList.add('active');
    }

    // handle card row
    document.querySelectorAll("section#section-join-us  [id^='join-us-']").forEach((join_us_row) => {

        join_us_row.classList.remove('active');
    });
    document.getElementById("join-us-" + cardType + "-div").classList.add('active');

}
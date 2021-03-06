let accItem = document.querySelectorAll(".accordionItem")
let accHd = document.querySelectorAll(".accordionHeading");
let navExtend = document.querySelectorAll(".list");
let extend = document.querySelectorAll(".extend");
let monthlyPrice = document.getElementById("billedMonthly");
let yearlyPrice = document.getElementById("billedYearly");
let standardPrice = document.querySelector(".stnd");
let advancedPrice = document.querySelector(".advd");
let enterprisePrice = document.querySelector(".entr");

// code for sticky navbar on scroll
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    navBar = document.querySelector("header");
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        navBar.style.background = "white";
        navBar.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.3)"
    } else {
        navBar.style.background = "";
        navBar.style.boxShadow = null;
    }
}


// code for pricing section
function changeYearlyPrice() {
    if (yearlyPrice.checked) {
        standardPrice.innerHTML = "$12.50";
        advancedPrice.innerHTML = "$20";
        enterprisePrice.innerHTML = "$80";
    }
}

function changeMonthlyPrice() {
    if (monthlyPrice.checked) {
        standardPrice.innerHTML = "$15";
        advancedPrice.innerHTML = "$25";
        enterprisePrice.innerHTML = "$100";
    }
}

changeMonthlyPrice();

yearlyPrice.addEventListener("click", changeYearlyPrice);
monthlyPrice.addEventListener("click", changeMonthlyPrice);


// code for fao section - accordion
let test = document.querySelectorAll(".accordionHeading span");
test.forEach(test => {
    test.textContent = "\u002b";
});

function toggleItem() {
    console.log(this);
    var itemClass = this.parentNode.className;
    accItem.forEach(item => {
        item.className = 'accordionItem close';
    });
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
        this.lastElementChild.textContent = "\u2212";
    } else {
        this.lastElementChild.textContent = "\u002b";
    }
}

accHd.forEach(item => {
    item.addEventListener('click', toggleItem, false);
});

const hamburger = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".menu");
const links = document.querySelectorAll(".menu > li");
const list = document.querySelectorAll(".menu > li");

hamburger.addEventListener("click", () => {
    // Toggle Menu
    navLinks.classList.toggle("open");

    // Animate Links
    links.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else  {
            link.style.animation =  `effect .5s ease-in ${index / 7 + 0.1}s forwards`; 
            //the + 0.1s adds an initial delay to the animation
        }
    });

    // Animate button
    hamburger.classList.toggle("toggle");

});
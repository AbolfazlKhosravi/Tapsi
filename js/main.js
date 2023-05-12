const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links-control");
console.log(hamburger);
hamburger.addEventListener("click", (e) => {
 hamburger.classList.toggle("nav__expanded");
 navlinks.classList.toggle("nav__expanded")
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("nav__expanded");
    navlinks.classList.remove("nav__expanded")
  } 
});


const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});


const recordheader = document.querySelectorAll(".record-header");
const accordion = document.querySelector(".accordion");
recordheader.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("nav__expanded");
    e.target.parentElement.parentElement.classList.toggle("nav__expanded");
  });
});

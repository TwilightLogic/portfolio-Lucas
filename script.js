const navbarItems = document.querySelectorAll(".item");

for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener("click", function () {
        for (let i = 0; i < navbarItems.length; i++) {
            navbarItems[i].classList.remove("active");
        }
        this.classList.add("active");
    });
}

const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Web3 Buidler", "English Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

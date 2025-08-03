const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

about.addEventListener("click", () => {
    document.querySelector("#about-content").removeAttribute("hidden");
    document.querySelector("#projects-content").setAttribute("hidden", true);
    document.querySelector("#contact-content").setAttribute("hidden", true);
});

projects.addEventListener("click", () => {
    document.querySelector("#about-content").setAttribute("hidden", true);
    document.querySelector("#projects-content").removeAttribute("hidden");
    document.querySelector("#contact-content").setAttribute("hidden", true);
});

contact.addEventListener("click", () => {
    document.querySelector("#about-content").setAttribute("hidden", true);
    document.querySelector("#projects-content").setAttribute("hidden", true);
    document.querySelector("#contact-content").removeAttribute("hidden")
});


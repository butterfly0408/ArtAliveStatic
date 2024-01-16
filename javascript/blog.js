document.addEventListener("DOMContentLoaded", () => {

    let buttons = document.querySelectorAll(".show-more");
    let headings = document.querySelectorAll("h3");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let div = button.parentElement;
            let blog = div.querySelector(".hidden");
            blog.classList.remove("hidden");
            blog.classList.add("shown");
            button.classList.remove("shown");
            button.classList.add("hidden");
        });
    });

    headings.forEach(heading => {
        heading.addEventListener("click", () => {
            let pars_div = heading.parentElement;
            let div = pars_div.parentElement;
            let button = div.querySelector(".show-more");
            pars_div.classList.remove("shown");
            pars_div.classList.add("hidden");
            button.classList.remove("hidden");
            button.classList.add("shown");
        });
    });

});
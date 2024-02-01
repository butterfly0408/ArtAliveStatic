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






























// // Select the DOM-element, so that you can replace it with content
// let PROJECT_ID = "gem3vv6n";
// let DATASET = "production";
// let QUERY = encodeURIComponent('*[_type == "post"] | order(date desc) {title, date, post}');

// // Compose the URL for your project's endpoint and add the query
// let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// // fetch the content
// console.log("fetching");
// fetch(URL)
//     .then((res) => res.json())
//     .then(({ result }) => {
//         // get the list element, and the first item
//         let list = document.querySelector("ul");
//         let firstListItem = document.querySelector("ul li");

//         if (result.length > 0) {
//             // remove the placeholder content
//             list.removeChild(firstListItem);

//             result.forEach((post) => {
//             // create a list element for each post
//             let listItem = document.createElement("li");
//             let postTitle = document.createElement("h3");
//             let postText = document.createElement("p");
//             let postDate = document.createElement("h6");

//             // add the hero name as the text content
//             postTitle.textContent = post?.title;
//             postText.innerHTML = post?.post;
//             postDate.textContent = post?.date;
//             listItem.appendChild(postTitle);
//             listItem.appendChild(postText);
//             listItem.appendChild(postDate);

//             // add the item to the list
//             list.appendChild(listItem);
//         });
//             let pre = document.querySelector("pre");
//             // add the raw data to the preformatted element
//             // pre.textContent = JSON.stringify(result, null, 2);
//         }
//     })
//     .catch((err) => console.error(err));
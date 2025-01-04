// IMPORT DATA:
import { ARTWORKS } from "./showcase_data.js";


// ELEMENTS:
let body;
let gallery;
let focus;
let close_button;
let focus_img;
let write_up;
let next_button;
let prev_button;
// DATA:
let data;
// IMAGES:
let images;
// PAGES:
let pages;
let page;




function GetData(id) {
    data = {};

    ARTWORKS.forEach(work => {
        if (work['id'] == id) {
            data = work;
        }
    });

    return data;
}


function CreateTile(path, id, title, price) {
    // tile
    let tile = document.createElement('div');
    tile.classList.add('gallery-tile');
    // tile overlay
    let overlay = document.createElement('div');
    overlay.classList.add('tile-overlay');
    overlay.setAttribute('id', id);
    tile.appendChild(overlay);
    let overlay_icon = document.createElement('i');
    overlay_icon.classList.add("fa-solid");
    overlay_icon.classList.add("fa-magnifying-glass-plus");
    overlay.appendChild(overlay_icon);
    // tile image
    let tile_img = document.createElement('img');
    tile_img.setAttribute('class', 'painting-image');
    tile_img.setAttribute('src', path);
    // tile_img.setAttribute('id', id);
    tile.appendChild(tile_img);
    // tile detail
    let detail = document.createElement('div');
    detail.classList.add('tile-detail');
    let detail_name = document.createElement('p');
    let detail_price = document.createElement('p');
    detail_name.textContent = title;
    detail_price.textContent = price;
    detail.appendChild(detail_name);
    detail.appendChild(detail_price);
    tile.appendChild(detail);

    return tile;
}




function ChangePage(page) {
    if (page < images.length) {
        write_up.style.display = 'none';
        focus_img.style.display = 'block';
        focus_img.setAttribute('src', images[page]);
    }
    else {
        console.log('SET WRITE UP');
        focus_img.style.display = 'none';
        write_up.style.display = 'flex';
    }
}


function OpenFocus(id) {
    console.log('opening focus');
    // Toggle Overflow:
    body.style.overflow = 'hidden';
    
    // Get Data:
    data = GetData(id);
    
    // Set Images:
    images = Object.values(data['images']);
    
    // Set Pages:
    pages = images.length + 1;
    page = 0;
    ChangePage(0);
    
    // Open Focus:
    focus.style.display = 'flex';
}





document.addEventListener("DOMContentLoaded", () => {

    console.log('showcase ready ...');

    // Get HTML Elements:
    body = document.querySelector('body');
    gallery = document.querySelector('#gallery');
    focus = document.querySelector('#focus-screen');
    close_button = document.querySelector('#focus-close-button');
    focus_img = document.querySelector('#focus-img');
    write_up = document.querySelector('#write-up');
    next_button = document.querySelector('#next-button');
    prev_button = document.querySelector('#prev-button');


    // Create Gallery:
    ARTWORKS.forEach(work => {
        // Create and append tile element:
        gallery.appendChild(CreateTile(work['images']['front'], work['id'], work['write-up']['title'], work['write-up']['price']));
        let tile = document.querySelector(`#${work['id']}`);
        // Add event listener:
        tile.addEventListener('click', () => {
            OpenFocus(work['id']);
        });
    });

    
    // Close Button Eventlistener:
    close_button.addEventListener('click', () => {
        focus.style.display = 'none';
        body.style.overflow = 'scroll';
    });


    // Change Page:
    next_button.addEventListener('click', () => {
        console.log('next page');
        page += 1;
        if (page >= pages) {
            page = 0;
        }
        ChangePage(page);
    });
    prev_button.addEventListener('click', () => {
        console.log('prev page');
        page -= 1;
        if (page < 0) {
            page = pages;
        }
        ChangePage(page);
    });
    

});


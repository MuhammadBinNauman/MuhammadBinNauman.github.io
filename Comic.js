let x = document.getElementById('placeholder');
let y = document.getElementById('myarrow');         // connecting the elements id to the variables

let ShowComic = () => {
    x.style.display ='block';                       // making the comic placeholder images hidden when the page is visited and on clicking the arrow the placeholder images are shown
    y.style.display ='none';

}


y.addEventListener('click', ShowComic)              // adding the mouse click trigger to enable the above to happen

let a = document.getElementById('placeholder2');
let b = document.getElementById('myarrow2');


let ShowComic2 = () => {
    a.style.display ='block';                       // the same as above but for the ongoing comics
    b.style.display ='none';

}


b.addEventListener('click', ShowComic2)
let x = document.getElementById('placeholder');
let y = document.getElementById('myarrow');
//x.style.display ='block';
//y.style.display ='none';

let ShowComic = () => {
    x.style.display ='block';
    y.style.display ='none';

}


y.addEventListener('click', ShowComic)

let a = document.getElementById('placeholder2');
let b = document.getElementById('myarrow2');


let ShowComic2 = () => {
    a.style.display ='block';
    b.style.display ='none';

}


b.addEventListener('click', ShowComic2)
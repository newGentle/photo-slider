let item = 5;
let filesArray = [
    "assets/beautiful-rain.jpg",
    "assets/environment.jpg",
    "assets/images.jpg",
    "assets/photo.jpg",
    "assets/Без названия.jpg",
];



function prev() {
    const image = document.querySelector('.image')
    image.classList.toggle('fading');
    image.style.transition = '0.4s ease-in';

    setTimeout(() => {
        if (image.style.opacity == 0) {
            image.classList.remove('fading');
            if (item <= 0) {
                item = filesArray.length - 1;
            }
            else {
                --item
            }
        image.src = filesArray[item];
        };       
    }, 400);
};
function next() {
    const image = document.querySelector('.image')
    image.classList.toggle('fading');
    image.style.transition = '0.4s ease-in';

    setTimeout(() => {
        if (image.style.opacity == 0) {
            image.classList.remove('fading');
    
            if (item >= filesArray.length - 1) {
                item = 0;
            }
            else {
                ++item
            }
        image.src = filesArray[item];
        };
    }, 400);
};


document.querySelector('.prev').addEventListener('click', prev);
document.querySelector('.next').addEventListener('click', next);

{
    var images = [
        'images/menu/cezar.jpg',
        'images/menu/chicken.jpg',
        'images/menu/meat.jpg',
        'images/menu/pancake.jpg',
        'images/menu/salmon.jpg',
        'images/menu/steak.jpg',
        'images/menu/vareniki.jpg',
        'images/menu/vareniki-mashroom.jpg'
    ]

    var currentIdx = 0;

    function showCurrent() {
        var imgElement1 = document.querySelector('.carousel-trio .img1');
        var imgElement2 = document.querySelector('.carousel-trio .img2');
        var imgElement3 = document.querySelector('.carousel-trio .img3');
        var imgElement4 = document.querySelector('.carousel-trio .img4');
        var idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
        var idx3 = idx2 + 1 >= images.length ? 0 : idx2 + 1;
        var idx4 = idx3 + 1 >= images.length ? 0 : idx3 + 1;
       
        imgElement1.src = images[currentIdx];
        imgElement2.src = images[idx2];
        imgElement3.src = images[idx3];
        imgElement4.src = images[idx4];
    }

    function showNext() {
        currentIdx++;
        if (currentIdx >= images.length) {
            currentIdx = 0;
        }
        showCurrent();
    }

    function showPrev() {
        currentIdx--;
        if (currentIdx < 0) currentIdx = images.length - 1;
        showCurrent();
    }

    setInterval(showNext, 3000);
    document.querySelector('.carousel-trio .next').addEventListener('click', showNext);
    document.querySelector('.carousel-trio .prev').addEventListener('click', showPrev);
    showCurrent();
}
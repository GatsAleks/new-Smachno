{
    var images_cant = [
        'images/canteens_photo/first_photo.jpg',
        'images/canteens_photo/second_photo.jpg',
        'images/canteens_photo/third_photo.jpg',
        'images/canteens_photo/forth_photo.jpg',
        'images/canteens_photo/fifth_photo.jpg',
        'images/canteens_photo/sixth_photo.jpg',
        'images/canteens_photo/seventh_photo.jpg',
        'images/canteens_photo/eigth_photo.jpg',
        'images/canteens_photo/nineth_photo.jpg',
        'images/canteens_photo/tenth_photo.jpg'
    ]

    var currentIdx_cant = 0;

    function showCurrent() {
        var imgElement_cant1 = document.querySelector('.canteens .canteen-img1');
        var imgElement_cant2 = document.querySelector('.canteens .canteen-img2');
        var imgElement_cant3 = document.querySelector('.canteens .canteen-img3');
        var imgElement_cant4 = document.querySelector('.canteens .canteen-img4');
        var idx2_cant = currentIdx_cant + 1 >= images_cant.length ? 0 : currentIdx_cant + 1;
        var idx3_cant = idx2_cant + 1 >= images_cant.length ? 0 : idx2_cant + 1;
        var idx4_cant = idx3_cant + 1 >= images_cant.length ? 0 : idx3_cant + 1;

        imgElement_cant1.src = images_cant[currentIdx_cant];
        imgElement_cant2.src = images_cant[idx2_cant];
        imgElement_cant3.src = images_cant[idx3_cant];
        imgElement_cant4.src = images_cant[idx4_cant];
    }

    function showNext() {
        currentIdx_cant++;
        if (currentIdx_cant >= images_cant.length) {
            currentIdx_cant = 0;
        }

        showCurrent();
    }

    function showPrev() {
        currentIdx_cant--;
        if (currentIdx_cant < 0) currentIdx_cant = images_cant.length - 1;
        showCurrent();
    }

    setInterval(showNext, 3000);
    document.querySelector('.canteens .canteen-next').addEventListener('click', showNext);
    document.querySelector('.canteens .canteen-prev').addEventListener('click', showPrev);
    showCurrent();
}
{
    const images = [
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

    var currentIdx = 0;

    function showCurrent() {
        const imgElement1 = document.querySelector('.canteens .canteen-img1');
        const imgElement2 = document.querySelector('.canteens .canteen-img2');
        const imgElement3 = document.querySelector('.canteens .canteen-img3');
        const imgElement4 = document.querySelector('.canteens .canteen-img4');
        const idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
        const idx3 = idx2 + 1 >= images.length ? 0 : idx2 + 1;
        const idx4 = idx3 + 1 >= images.length ? 0 : idx3 + 1;
        // console.log(currentIdx, idx2, idx3, idx4);
        imgElement1.src = images[currentIdx];
        imgElement2.src = images[idx2];
        imgElement3.src = images[idx3];
        imgElement4.src = images[idx4];
    }

    function showNext() {
        currentIdx++;
        if (currentIdx >= images.length) currentIdx = 0;
        showCurrent();
    }

    function showPrev() {
        currentIdx--;
        if (currentIdx < 0) currentIdx = images.length - 1;
        showCurrent();
    }

    setInterval(showNext, 3000);
    document.querySelector('.canteens .canteen-next').addEventListener('click', showNext);
    document.querySelector('.canteens .canteen-prev').addEventListener('click', showPrev);
    showCurrent();
}
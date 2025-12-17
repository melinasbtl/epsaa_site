function changeImage(imageName) {
    const img = document.getElementById("previewImage");

    if (imageName) {
        img.src = imageName;
        img.style.opacity = 1;
    } else {
        img.src = "";
        img.style.opacity = 0;
    }
}
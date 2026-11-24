// Called by the mouseover and focus events on each preview image.
function upDate(previewPic) {
    console.log("upDate triggered");
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);

    // Find the large preview area and display the selected image's alt text.
    const image = document.getElementById("image");
    image.textContent = previewPic.alt;

    // Use the same image source as the thumbnail for the large background.
    image.style.backgroundImage = 'url("' + previewPic.src + '")';
}

// Called by the mouseout and blur events to restore the original preview.
function unDo() {
    const image = document.getElementById("image");
    image.style.backgroundImage = "url('')";
    image.textContent = "Hover over an image below to display here.";
}

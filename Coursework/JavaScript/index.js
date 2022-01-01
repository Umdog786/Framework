// create references to the modal...
let modal = document.getElementById('AsideModal');
// to all images -- note I'm using a class!
let images = document.getElementsByClassName('AsideImages');
// the image in the modal
let modalImg = document.getElementById("ModalImage");
// and the caption in the modal
let captionText = document.getElementById("ModalCaption");

// Go through all of the images with our custom class
for (let i = 0; i < images.length; i++) {
    let img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

let span = document.getElementsByClassName("ModalClose")[0];

span.onclick = function() {
    modal.style.display = "none";
}
let modal = document.getElementById('AsideModal');
let images = document.getElementsByClassName('AsideImages');
let modalImg = document.getElementById("ModalImage");
let captionText = document.getElementById("ModalCaption");

for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

let span = document.getElementsByClassName("ModalClose")[0];
span.onclick = function() {
    modal.style.display = "none";
}

let buttons = document.getElementsByClassName("AddToCartButton");
for (let j = 0; j < buttons.length; j++) {
    let btn = buttons[j];
    btn.addEventListener("click", function () {
        btn.innerHTML = "Added to Cart";
        btn.className = "AddToCartButtonVisited";
    });
}


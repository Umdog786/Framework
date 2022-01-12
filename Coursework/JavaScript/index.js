let modal = document.getElementById('AsideModal');
/*
let images = document.getElementsByClassName('AsideImages');
*/
let modalImg = document.getElementById("ModalImage");
let captionText = document.getElementById("ModalCaption");
let backgroundColours = ['#000000', '#673ab7', '#9f241b','#344a69'];
let fontSize = ["170%", "200%", "230%", "120%"];
let fontPicker = 0;
let colourPicker = 0;
let formElements = document.getElementsByClassName("FormElementsValid");
let validFlag = true;


window.onload = function LoadStuff() {
    document.getElementById("header").style.backgroundColor = localStorage.getItem('BGColour');
    document.getElementById("body").style.backgroundColor = localStorage.getItem('BGColour');
    document.getElementById("HeaderSubTitle").style.fontSize = localStorage.getItem('FontSize');
}

/*for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = function() {
        console.log(3);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}*/

let span = document.getElementsByClassName("ModalClose")[0];
span.onclick = function()  {
    document.getElementById("ModalCaption").innerHTML = "";
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

function OilPaintingButton() {
    if (document.getElementById("OilPainting").alt === "Oil Painting Before") {
        document.getElementById("OilPainting").alt = "Oil Painting After";
        document.getElementById("OilPainting").src = "Images/Restorations/Oil-Painting-After.jpg";
        document.getElementById("OilPaintingButton").innerHTML = "Before";
    } else if (document.getElementById("OilPainting").alt === "Oil Painting After") {
        document.getElementById("OilPainting").alt = "Oil Painting Before";
        document.getElementById("OilPainting").src = "Images/Restorations/Oil-Painting-Before.jpg";
        document.getElementById("OilPaintingButton").innerHTML = "After";
    }
}

function ReframingButton() {
    if (document.getElementById("Reframing").alt === "Reframing Before") {
        document.getElementById("Reframing").alt = "Reframing After";
        document.getElementById("Reframing").src = "Images/Restorations/Framed-After.jpg";
        document.getElementById("ReframingButton").innerHTML = "Before";
    } else if (document.getElementById("Reframing").alt === "Reframing After") {
        document.getElementById("Reframing").alt = "Reframing Before";
        document.getElementById("Reframing").src = "Images/Restorations/Framed-Before.jpg";
        document.getElementById("ReframingButton").innerHTML = "After";
    }
}

function FireDamageButton() {
    if (document.getElementById("FireDamage").alt === "Fire Damage Before") {
        document.getElementById("FireDamage").alt = "Fire Damage After";
        document.getElementById("FireDamage").src = "Images/Restorations/Fire-Damage-After.jpg";
        document.getElementById("FireDamageButton").innerHTML = "Before";
    } else if (document.getElementById("FireDamage").alt === "Fire Damage After") {
        document.getElementById("FireDamage").alt = "Fire Damage Before";
        document.getElementById("FireDamage").src = "Images/Restorations/Fire-Damage-Before.jpg";
        document.getElementById("FireDamageButton").innerHTML = "After";
    }
}

function FormSubmitButton() {
    for (let a = 0; a < formElements.length; a++) {
        if (!formElements[a].validity.valid) {
/*
            generateErrors(formElements[a].id);
*/
            validFlag = false;
        }
    }
    if (validFlag === true) {
        let prefix = document.getElementById("Prefix");
        let firstName = document.getElementById("FirstName");
        let surname = document.getElementById("Surname");
        let emailAddress = document.getElementById("EmailAddress");
        let countryCode = document.getElementById("CountryCodes");
        let phoneNumber = document.getElementById("PhoneNumber");
        let postcode = document.getElementById("Postcode");
        let address = document.getElementById("Address");
        localStorage.setItem("Prefix", prefix.value);
        localStorage.setItem("FirstName", firstName.value);
        localStorage.setItem("Surname", surname.value);
        localStorage.setItem("EmailAddress", emailAddress.value);
        localStorage.setItem("CountryCode", countryCode.value);
        localStorage.setItem("PhoneNumber", phoneNumber.value);
        localStorage.setItem("Postcode", postcode.value);
        localStorage.setItem("Address", address.value);
        document.getElementById("ErrorMessage").innerHTML = "Account Created Successfully";
    } else {
        document.getElementById("ErrorMessage").innerHTML = "Error Creating Account - Retry";

    }


}

/*function generateErrors(ErrorElementId) {
    let currentError = document.getElementById(ErrorElementId);
    let errorMessage = document.getElementById("ErrorMessage");
    if (currentError.validity.valueMissing) {
        let error = document.createTextNode(
            `${currentError.id} is empty`);

        errorMessage.appendChild(error);
    }

}*/


function ChangeBackground() {
    document.getElementById("header").style.backgroundColor = backgroundColours[colourPicker];
    document.getElementById("body").style.backgroundColor = backgroundColours[colourPicker];
    localStorage.setItem("BGColour",backgroundColours[colourPicker]);
    colourPicker += 1;
    if (colourPicker === backgroundColours.length) {
        colourPicker = 0;
    }
}

function IncreaseSize() {
    document.getElementById("HeaderSubTitle").style.fontSize = fontSize[fontPicker];
    localStorage.setItem('FontSize', fontSize[fontPicker]);
    fontPicker += 1;
    if (fontPicker === fontSize.length) {
        fontPicker = 0;
    }
}

function Reset() {
    colourPicker = 0;
    fontPicker = 0;
    document.getElementById("header").style.backgroundColor = '#344a69';
    document.getElementById("body").style.backgroundColor = '#344a69';
    localStorage.setItem("BGColour", '#344a69');
    document.getElementById("HeaderSubTitle").style.fontSize = "120%";
    localStorage.setItem("FontSize", "120%");
}

let allImages = document.getElementsByClassName('enlargeImage');
/*
allImages.forEach(function(growImage) {
    growImage.addEventListener('click', grow);});
*/

for (let x = 0; x < allImages.length; x++) {
    let currentImage = allImages[x];
    currentImage.onclick = grow;


}

function grow(e) {
    document.getElementById("ModalCaption").innerHTML = "";
    let image = e.target;
    let interval;
    let originalHeight = image.height;
    let originalWidth = image.width;
    let height = image.height;
    let width = image.width;
    modal.style.display = "block";
    modalImg.id = "ModalImage";
    modalImg.src = image.src;
    let incrementHeight = ((image.naturalHeight - height) / 60);
    let incrementWidth = ((image.naturalWidth - width) / 60);

    interval = setInterval(function() {
/*        height += ((image.naturalHeight - image.naturalWidth) / 60);
        width += ((image.naturalHeight - image.naturalWidth) / 60);*/

        height += incrementHeight;
        width += incrementWidth;
        image.width = originalWidth;
        image.height = originalHeight;

        if(width >= modalImg.naturalWidth) {
            width = modalImg.naturalWidth;
            height = modalImg.naturalHeight;
            clearInterval(interval);
        }

        modalImg.style.height = height + 'px';
        modalImg.style.width = width + 'px';
        setTimeout(function () {
            document.getElementById("ModalCaption").innerHTML = image.alt;
        },1500);
    }, 16.667);

}

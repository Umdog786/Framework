let modal = document.getElementById('AsideModal');
let images = document.getElementsByClassName('AsideImages');
let modalImg = document.getElementById("ModalImage");
let captionText = document.getElementById("ModalCaption");

for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = function() {
        console.log(3);
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
}
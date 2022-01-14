let modal = document.getElementById('AsideModal'); /*Gets the modal element*/
let modalImg = document.getElementById("ModalImage"); /*Gets the image to be displayed on the modal*/
let titleFontSizeList = ["363%","463%","563%", "663%", "763%"]; /*Array for changing main title font size*/
let subtitleFontSizeList = ["106%","126%","156%", "176%", "196%"]; /*Array for changing subtitle font size*/
let fontPicker = 0; /*Variable for selecting element from font size array*/
let colourPicker = 0; /*Variable for selecting element from colour picker array*/
let formElements = document.getElementsByClassName("FormElementsValid"); /*Grabs all elements from the account form*/
let validFlag = true;

window.onload = function LoadStuff() { /*Gets all user-personalised settings from previous visits*/
    document.getElementById("header").style.backgroundColor = localStorage.getItem('BGColour');
    document.getElementById("body").style.backgroundColor = localStorage.getItem('BGColour');
    document.getElementById("HeaderTitle").style.color = localStorage.getItem('TextColour');
    document.getElementById("HeaderSubTitle").style.color = localStorage.getItem('TextColour');
    document.getElementById("HeaderTitle").style.fontSize = localStorage.getItem('HeaderTitleFontSize');
    document.getElementById("HeaderSubTitle").style.fontSize = localStorage.getItem('HeaderSubTitleFontSize');

}

let span = document.getElementsByClassName("ModalClose")[0];
span.onclick = function()  { /*Triggers when x button is clicked on modal*/
    document.getElementById("ModalCaption").innerHTML = ""; /*Clears the modal caption*/
    modal.style.display = "none"; /*Causes the modal to disappear*/

}

let buttons = document.getElementsByClassName("AddToCartButton");
for (let j = 0; j < buttons.length; j++) {
    let btn = buttons[j];
    btn.addEventListener("click", function () { /*Whenever "Add to Cart" button is clicked*/
        btn.innerHTML = "Added to Cart"; /*Change the text that appears on the button*/
        btn.className = "AddToCartButtonVisited";
    });
}

function OilPaintingButton() { /*When button under oil painting is clicked*/
    if (document.getElementById("OilPainting").alt === "Oil Painting Before") {
        document.getElementById("OilPainting").alt = "Oil Painting After";
        document.getElementById("OilPainting").src = "Images/Restorations/Oil-Painting-After.jpg"; /*Switch painting to After version*/
        document.getElementById("OilPaintingButton").innerHTML = "Before";
    } else if (document.getElementById("OilPainting").alt === "Oil Painting After") {
        document.getElementById("OilPainting").alt = "Oil Painting Before";
        document.getElementById("OilPainting").src = "Images/Restorations/Oil-Painting-Before.jpg"; /*Switch painting to Before version*/
        document.getElementById("OilPaintingButton").innerHTML = "After";
    }
}

function ReframingButton() {
    if (document.getElementById("Reframing").alt === "Reframing Before") {
        document.getElementById("Reframing").alt = "Reframing After";
        document.getElementById("Reframing").src = "Images/Restorations/Framed-After.jpg"; /*Switch painting to After version*/
        document.getElementById("ReframingButton").innerHTML = "Before";
    } else if (document.getElementById("Reframing").alt === "Reframing After") {
        document.getElementById("Reframing").alt = "Reframing Before";
        document.getElementById("Reframing").src = "Images/Restorations/Framed-Before.jpg"; /*Switch painting to Before version*/
        document.getElementById("ReframingButton").innerHTML = "After";
    }
}

function FireDamageButton() {
    if (document.getElementById("FireDamage").alt === "Fire Damage Before") {
        document.getElementById("FireDamage").alt = "Fire Damage After";
        document.getElementById("FireDamage").src = "Images/Restorations/Fire-Damage-After.jpg"; /*Switch painting to After version*/
        document.getElementById("FireDamageButton").innerHTML = "Before";
    } else if (document.getElementById("FireDamage").alt === "Fire Damage After") {
        document.getElementById("FireDamage").alt = "Fire Damage Before";
        document.getElementById("FireDamage").src = "Images/Restorations/Fire-Damage-Before.jpg"; /*Switch painting to Before version*/
        document.getElementById("FireDamageButton").innerHTML = "After";
    }
}

function FormSubmitButton() {
    for (let a = 0; a < formElements.length; a++) {
        if (!formElements[a].validity.valid) { /*If all form elements are not valid*/
/*
            generateErrors(formElements[a].id);
*/
            validFlag = false; /*No data is stored in localStorage*/
        }
    }
    if (validFlag === true) { /*Store all data in localStorage*/
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

function Reset() { /*Reset all default personalisation values if reset button is clicked*/
    colourPicker = 0;
    fontPicker = 0;
    document.getElementById("header").style.backgroundColor = '#344a69';
    document.getElementById("body").style.backgroundColor = '#344a69';
    localStorage.setItem("BGColour", '#344a69');
    document.getElementById("HeaderSubTitle").style.fontSize = "120%";
    localStorage.setItem("FontSize", "120%");
    document.getElementById("HeaderTitle").style.color = "#ab9353";
    document.getElementById("HeaderSubTitle").style.color = "#ab9353";
    document.getElementById("BackgroundColour").value = "#344a69";
    document.getElementById("TextColour").value = "#ab9353";
    localStorage.setItem("TextColour", "#ab9353");
    document.getElementById("HeaderTitle").style.fontSize = "563%";
    localStorage.setItem("HeaderTitleFontSize", "563%");
    document.getElementById("TitleFontSize").value = 2;
    document.getElementById("HeaderSubTitle").style.fontSize = "156%";
    localStorage.setItem("HeaderSubTitleFontSize", "156%");
    document.getElementById("SubTitleFontSize").value = 2;
}

let allImages = document.getElementsByClassName('enlargeImage');

for (let x = 0; x < allImages.length; x++) {
    let currentImage = allImages[x];
    currentImage.onclick = grow; /*Whenever a grow image is clicked, call the grow function*/

}

function grow(e) {
    document.getElementById("ModalCaption").innerHTML = ""; /*Resets the caption text value to empty*/
    let image = e.target; /*Gets the current image that was clicked*/
    let interval; /*Defines the time interval*/
    let originalHeight = image.height; /*Store the height of the image that was clicked on*/
    let originalWidth = image.width; /*Store the width of the image that was clicked on*/
    let height = image.height; /*Sets the starting height of the image to be increased*/
    let width = image.width; /*Sets the starting width of the image to be increased*/
    modal.style.display = "block"; /*Causes the modal to be displayed*/
    modalImg.id = "ModalImage"; /*Sets the modal image to be styled*/
    modalImg.src = image.src; /*Sets the modal image to the image that was clicked on*/
    let incrementHeight = ((image.naturalHeight - height) / 60); /*Calculate increment height per frame for 60fps*/
    let incrementWidth = ((image.naturalWidth - width) / 60); /*Calculate increment width per frame for 60fps*/

    interval = setInterval(function() {
        height += incrementHeight; /*Increase the height by calculated interval*/
        width += incrementWidth; /*Increase the width by calculated interval*/
        image.width = originalWidth; /*Ensure that the image that was clicked remains the same size width*/
        image.height = originalHeight; /*Ensure that the image that was clicked remains the same size height*/

        if(width >= modalImg.naturalWidth) { /*Check if image exceeds the file's dimensions*/
            width = modalImg.naturalWidth; /*If so set the width to be the file's dimensions*/
            height = modalImg.naturalHeight; /*If so set the height to be the file's dimensions*/
            clearInterval(interval); /*Stop the interval loop*/
        }

        modalImg.style.height = height + 'px'; /*Set the updated height of the image every interval*/
        modalImg.style.width = width + 'px'; /*Set the updated width of the image every interval*/
        setTimeout(function () {
            document.getElementById("ModalCaption").innerHTML = image.alt; /*Set the modal caption to be the image's alt text*/
        },1500); /*1500ms from when the image is clicked to the caption appearing*/
    }, 16.667); /*1000ms / 60fps = 16.667 ms per frame*/
}

function SettingsSubmit() { /*When settings submit is clicked, update relevant elements and store preference in localStorage*/
    let primaryColour = document.getElementById("BackgroundColour");
        document.getElementById("header").style.backgroundColor = primaryColour.value;
        document.getElementById("body").style.backgroundColor = primaryColour.value;
        localStorage.setItem("BGColour",primaryColour.value);
    let textColour = document.getElementById("TextColour");
        document.getElementById("HeaderTitle").style.color = textColour.value;
        document.getElementById("HeaderSubTitle").style.color = textColour.value;
        localStorage.setItem("TextColour",textColour.value);
    let titleFontSize = document.getElementById("TitleFontSize");
        document.getElementById("HeaderTitle").style.fontSize = titleFontSizeList[titleFontSize.value];
        localStorage.setItem("HeaderTitleFontSize", titleFontSizeList[titleFontSize.value]);
    let subtitleFontSize = document.getElementById("SubTitleFontSize");
    document.getElementById("HeaderSubTitle").style.fontSize = subtitleFontSizeList[subtitleFontSize.value];
    localStorage.setItem("HeaderSubTitleFontSize", subtitleFontSizeList[subtitleFontSize.value]);
}
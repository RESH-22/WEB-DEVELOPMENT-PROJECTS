let generateImageForm = document.getElementById("generate-image-form");
let formInput = document.getElementById("input-value");
let imageContainerText = document.getElementById("imageContainerText");
let imageGenerated = document.getElementById("generated-image");
let imageContainer = document.getElementById("images-visible");

generateImageForm.addEventListener("submit", function(e){

    e.preventDefault();

    let prompt = formInput.value.trim();

    if(prompt === ""){
        imageContainerText.innerText = "Input field cannot be empty!";
        return;
    }

    imageContainer.style.display = "block";
    imageContainerText.innerText = "Generating image...";

    let encodedPrompt = encodeURIComponent(prompt);

let imageUrl = "https://source.unsplash.com/600x400/?flower,nature";
imageGenerated.src = imageUrl;

    

    imageGenerated.onload = function(){
        imageContainerText.innerText = "Below is your generated Image:";
    };

});
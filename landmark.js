const images = [];
const submit = document.getElementById("create");
const display = document.getElementById("imagedisplay");

function addImages() {
    const imageInput = document.getElementById("upload");
    for (let i = 0; i<imageInput.files.length; i++) {
        console.log(imageInput)
        const imgUrl = URL.createObjectURL(imageInput.files[i]);
        images.push(imgUrl)
    }
    renderImages();
}

function renderImages(){
    display.innerHTML = "";
    for (let i = 0; i<images.length; i++) {
        const img = document.createElement("img");
        img.src=images[i]
        display.appendChild(img)
    }
}

submit.addEventListener("click", addImages)
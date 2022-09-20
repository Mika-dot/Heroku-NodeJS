function Forward() { 
    PictureMovement(PictureNumber += 1)  
}

function Back() {  
    PictureMovement(PictureNumber -= 1)
}

function init() {
    PictureMovement(PictureNumber);
}

function PictureMovement(room) {
    let ChangePictures = document.getElementsByClassName("Images");
    
    if (room > ChangePictures.length) {
        PictureNumber = 1
    }
    if (room < 1) {
        PictureNumber = ChangePictures.length
    }
  

    for (let slide of ChangePictures) {
        slide.style.display = "none";
    }   
    ChangePictures[PictureNumber - 1].style.display = "block"; 
}

let PictureNumber = 1;
//PictureMovement(PictureNumber);


//https://bestprogrammer.ru/programmirovanie-i-razrabotka/kak-vyzvat-funktsiyu-javascript-v-html

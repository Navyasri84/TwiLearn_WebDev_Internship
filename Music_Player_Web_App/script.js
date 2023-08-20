let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let favourite = document.getElementById("favourite");
let volumeRange = document.getElementById("volumeRange");
let volumeIcon = document.querySelector(".fa-solid.fa-volume-high");
let volumeRangeContainer = document.querySelector(".volume-range-container");
let timeDisplay = document.getElementById("timeDisplay");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }

    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}


let arrowRotateRightIcon = document.querySelector(".fa-solid.fa-arrow-rotate-right");
arrowRotateRightIcon.addEventListener("click", () => {
    // Pause the song
    song.pause();

    // Reset the current time to 0
    song.currentTime = 0;

    // Ensure the icon is in the play button (fa-play) state
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");

    // Start the song again
    song.play();
});

function like(){
    if(favourite.classList.contains("fa-solid")){
        favourite.classList.remove("fa-solid");
        favourite.classList.add("fa-regular");
    }

    else{
        favourite.classList.add("fa-solid");
        favourite.classList.remove("fa-regular");
    }
}

function toggleVolumeRange() {
    // Toggle the visibility of the volume range container on click
    volumeRangeContainer.style.display = volumeRangeContainer.style.display === "block" ? "none" : "block";
}

volumeRange.oninput = function() {
    // Set the volume of the audio element based on the volume range value (0 to 100)
    song.volume = volumeRange.value / 100;
    song.volume = volumeValue;

    // Optionally, you can also update the volume icon based on the volume level
    updateVolumeIcon(volumeValue);
}

// Function to update the volume icon based on the volume level
function updateVolumeIcon(volumeValue) {
    if (volumeValue === 0) {
        // Muted, show mute icon
        volumeIcon.classList.add("fa-volume-mute");
        volumeIcon.classList.remove("fa-volume-high");
    } else {
        // Not muted, show normal volume icon
        volumeIcon.classList.add("fa-volume-high");
        volumeIcon.classList.remove("fa-volume-mute");
    }
}

// Call the updateVolumeIcon function initially to set the correct icon based on the initial volume value
updateVolumeIcon(song.volume);


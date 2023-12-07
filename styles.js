/*Current time*/
let hrs = document.getElementById(hours)
let min = document.getElementById(minute)
let sec = document.getElementById(second)


setInterval(()=>{
    
  let currenTime = new Date();
  let Hours= currenTime.getHours()
  if(Hours>12){
    Hours=Hours-12
   }
   if(Hours<10){
   Hours="0"+Hours
   }
hours.innerHTML = Hours;

minute.innerHTML = (currenTime.getMinutes()<10?"0":"") + currenTime.
getMinutes();

second.innerHTML = (currenTime.getSeconds()<10?"0":"")+ currenTime.
getSeconds();
},1000)
 
if(hours == 0){
hours = 12;
}
/*Current Date*/
function getCurrentDate() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString('en-US', options);
}

// Update the content of the placeholder element with the current date
function updateDate() {
  const currentDateElement = document.getElementById('currentDate');
  currentDateElement.textContent = getCurrentDate();
}

// Call the updateDate function to set the initial date
updateDate();

// Update the date every second (1000 milliseconds)
setInterval(updateDate, 1000);

// Array of background images
const backgroundImages = [        


  'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1546083381-2bed38b42cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',

  'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://r4.wallpaperflare.com/wallpaper/666/665/244/the-magic-islands-of-lofoten-norway-europe-winter-morning-light-landscape-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840%C3%972160-wallpaper-68363db8e0a0ac98503c519e68a294aa.jpg")',
  'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://r4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-39a028ad21facdab26a7d87fb061260d.jpg")',
  'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://r4.wallpaperflare.com/wallpaper/843/56/876/night-artwork-futuristic-city-cyberpunk-wallpaper-c8867df8e0a0ece8f06c31aef872443a.jpg")',
  'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://r4.wallpaperflare.com/wallpaper/164/182/379/road-cityscape-colorful-city-wallpaper-8806dc3affcc0769fe70b9b2b259cb80.jpg")',
  'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://wallpapercave.com/wp/wp12348643.jpg")',

  'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://r4.wallpaperflare.com/wallpaper/941/778/529/ultra-hd-8k-resolution-7680x4320-wallpaper-238b23ad9d192b65df260277d81b0888.jpg")',
  'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images4.alphacoders.com/123/1237305.jpg")',


  // Add more image URLs as needed
];


// Counter to keep track of the current background image
let currentImageIndex = 0;

// Function to change the background image
function changeBackground() {
  // Get the body element
  const body = document.body;

  // Update the background image
  body.style.backgroundImage = backgroundImages[currentImageIndex];

  // Increment the counter and loop back to the first image if at the end
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}
function toggleFullscreen() {
  var elem = document.documentElement; // Get the root element of the document

  if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
    // If the document is not currently in fullscreen mode
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    // If the document is currently in fullscreen mode, exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
var audio = new Audio();

audio.addEventListener('error', function (e) {
    console.error('Error loading audio:', e);
});

function toggleMusic() {

    if (audio.paused || audio.ended) {
        audio.src = 'y2mate.is - Lie In A Warm Bed And Fall Into Deep Sleep _ Heavy Rain To Relax And Sleep Well-8O2hXx8o64A-720p-1701830614.mp4'; // Replace with the actual URL of your audio file
        audio.play();
    } else {
        audio.pause();
    }
}
var volumeSlider = document.getElementById('volumeSlider');
function changeVolume(volume) {
  audio.volume = volume;
}
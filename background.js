const JOHNNY_DISPLAY_TIME_IN_MS = 600;

JOHNNY_URL = "https://raw.githubusercontent.com/scotthitch/Johnny/main/images/johnny.png";

const heresJohnny = () => {
  // let imgs = document.querySelectorAll("img");
  let images = document.images;

  const nImages = images.length;
  const indexToReplace = Math.floor(Math.random() * nImages);
  let selectedImg = images[indexToReplace];
  const originalImgURL = selectedImg.src;
  selectedImg.src = JOHNNY_URL;

  setTimeout(() => {
    // Wait 20 seconds for cena to finish
    selectedImg.src = originalImgURL;
  }, JOHNNY_DISPLAY_TIME_IN_MS);
};

// const chance = Math.floor(Math.random() * 2);
// if (chance === 1) {
heresJohnny();
// }

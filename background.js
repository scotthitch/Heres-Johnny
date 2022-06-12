const JOHNNY_DISPLAY_TIME_IN_MS = 600;

JOHNNY_URL = "https://raw.githubusercontent.com/scotthitch/Johnny/main/images/johnny.png";

const selectRandomImage = (images) => {
  const nImages = images.length;

  // If there are no images return null
  if (nImages === 0) {
    return null;
  }

  // Select a random image and return it
  const indexToReplace = Math.floor(Math.random() * nImages);
  let selectedImage = images[indexToReplace];
  return selectedImage;
};

const heresJohnny = () => {
  // Get a list of all the images
  let images = document.querySelectorAll("img");

  // Select a random image
  let selectedImage = selectRandomImage(images);

  // If no valid images then exit out
  if (selectedImage === null) {
    return;
  }

  // Store the selected images url
  const originalImgURL = selectedImage.src;

  // Set the selected images url to that of Johnny
  selectedImage.src = JOHNNY_URL;

  setTimeout(() => {
    // Wait 0.6s and then revert the image to its original url
    selectedImage.src = originalImgURL;
  }, JOHNNY_DISPLAY_TIME_IN_MS);
};

heresJohnny();

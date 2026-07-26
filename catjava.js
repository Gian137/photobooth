// Preload the cat image from your repository
const catImg = new Image();
catImg.src = 'cat.jpg'; // Matches your filename in GitHub

function drawOrangeTabbyCatHeader() {
  ctx.save();
  
  // Dimensions and position on the canvas header
  const imageWidth = 220;
  const imageHeight = 100;
  const x = (canvas.width - imageWidth) / 2;
  const y = 10;

  // Only draw if the image has finished loading
  if (catImg.complete) {
    ctx.drawImage(catImg, x, y, imageWidth, imageHeight);
  } else {
    catImg.onload = () => {
      ctx.drawImage(catImg, x, y, imageWidth, imageHeight);
    };
  }

  ctx.restore();
}
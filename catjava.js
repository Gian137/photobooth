// Preload the cat image from your repository root
const catImg = new Image();
catImg.src = './cat-removebg-preview.png';

catImg.onerror = function() {
  console.error("Failed to load cat-removebg-preview.png. Check file path/spelling.");
};

// Drawing function for the cat header
function drawCalicoCatHeader() {
  if (!window.ctx || !window.canvas) return;

  ctx.save();
  
  // Position and size dimensions (adjust if you want the cat larger/smaller)
  const imageWidth = 200;
  const imageHeight = 90;
  const x = (canvas.width - imageWidth) / 2;
  const y = 10;

  // Draw immediately if already loaded, or wait for load event
  if (catImg.complete && catImg.naturalWidth !== 0) {
    ctx.drawImage(catImg, x, y, imageWidth, imageHeight);
  } else {
    catImg.onload = function() {
      ctx.drawImage(catImg, x, y, imageWidth, imageHeight);
    };
  }

  ctx.restore();
}

// Attach function to global window scope so index.html can use it
window.drawCalicoCatHeader = drawCalicoCatHeader;

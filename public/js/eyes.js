const canvas = document.getElementsByClassName("eyes");
const ctx = canvas.getContext("2d");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
   mouseX = event.clientX;
   mouseY = event.clientY;
});

function animate() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   ctx.beginPath();
   ctx.arc(50, 50, 20, 0, Math.PI * 2);
   ctx.fillStyle = "black";
   ctx.fill();

   ctx.beginPath();
   ctx.arc(70, 50, 20, 0, Math.PI * 2);
   ctx.fill();

   const eye1X = 30 + (mouseX - canvas.offsetLeft) / 30;
   const eye1Y = 50 + (mouseY - canvas.offsetTop) / 30;

   const eye2X = 90 + (mouseX - canvas.offsetLeft) / 30;
   const eye2Y = 50 + (mouseY - canvas.offsetTop) / 30;

   ctx.beginPath();
   ctx.arc(eye1X, eye1Y, 10, 0, Math.PI * 2);
   ctx.fillStyle = "white";
   ctx.fill();

   ctx.beginPath();
   ctx.arc(eye2X, eye2Y, 10, 0, Math.PI * 2);
   ctx.fill();

   requestAnimationFrame(animate);
}

animate();
const iconContainer = document.querySelector(".icon-container");
const rotateBtn = document.querySelector(".rotate-btn");

rotateBtn.addEventListener("click", () => {
  rotation();
});

function rotation() {
  iconContainer.classList.toggle("rotating");
}

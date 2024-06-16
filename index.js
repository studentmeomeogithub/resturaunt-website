document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const slidingMenu = document.getElementById("sliding-menu");

  menuIcon.addEventListener("click", () => {
    if (slidingMenu.style.left === '0px') {
      slidingMenu.style.left = '-250px';
    } else {
      slidingMenu.style.left = '0px';
    }
  });

  const cardImages = document.querySelectorAll(".card-image");
  const largeImage = document.querySelector(".large-image img");

  cardImages.forEach(image => {
    image.addEventListener("click", () => {
      largeImage.src = image.src;
      largeImage.style.position = 'absolute';
      largeImage.style.top = '60%';
      largeImage.style.left = '-120%';
      largeImage.style.transform = 'translate(-50%, -50%)';
      largeImage.style.zIndex = '99';
      largeImage.style.height = '250px';
      // largeImage.style.boxShadow = 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px';
    });
  });
});

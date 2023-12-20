// genrate random color

const getRandomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let inetervalId;
const satrtChangingColor = function () {
  if (!inetervalId) {
    inetervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = getRandomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(inetervalId);
  inetervalId = null;
};
document.querySelector("#start").addEventListener("click", satrtChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

const tween = gsap.timeline();

const cursor = document.getElementsByClassName("cursor")[0];
follower = document.getElementsByClassName("cursor-follower")[0];

const posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

tween.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
  },
});

document.addEventListener("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  tween.set(".cursor-follower", {
    css: {
      left: posX - 20,
      top: posY - 20,
    },
  });
  tween.set(".cursor", {
    css: {
      left: mouseX,
      top: mouseY,
    },
  });
});
document.getElementById("ds").addEventListener("mouseenter", function (e) {
  cursor.classList.add("active");
  follower.classList.add("active");
});
document.getElementById("ds").addEventListener("mouseleave", function (e) {
  cursor.classList.remove("active");
  follower.classList.remove("active");
});

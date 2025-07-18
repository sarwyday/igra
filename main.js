
document.querySelectorAll(".audio-btn").forEach(btn => {
  const src = btn.dataset.audio;
  const a = new Audio(src);
  a.preload = "auto";
  btn.addEventListener("click", () => {
    if (a.paused) {
      a.play();
      btn.classList.add("playing");
    } else {
      a.pause();
      btn.classList.remove("playing");
    }
  });
});

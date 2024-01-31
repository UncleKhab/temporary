document.addEventListener("DOMContentLoaded", () => {
  const select = (selector) => document.querySelector(selector);

  const kick = select("#kick");
  const snare = select("#snare");
  const clash = select("#clash");
  const highHat = select("#high-hat");

  const toggleActive = (element) => {
    if (element.classList.contains("active-option")) {
      element.classList.toggle("active-option");
    }

    setTimeout(() => element.classList.toggle("active-option"), 0);
  };
  const playKick = () => {
    toggleActive(kick);
    new Audio("./assets/kick.wav").play();
  };
  const playSnare = () => {
    toggleActive(snare);
    new Audio("./assets/snare.wav").play();
  };
  const playHighHat = () => {
    toggleActive(highHat);
    new Audio("./assets/highhat.wav").play();
  };
  const playClash = () => {
    toggleActive(clash);
    new Audio("./assets/clash.wav").play();
  };

  kick.addEventListener("click", playKick);
  snare.addEventListener("click", playSnare);
  clash.addEventListener("click", playClash);
  highHat.addEventListener("click", playHighHat);

  document.addEventListener("keydown", (e) => {
    if (e.repeat) return;
    const key = e.key.toLowerCase();
    switch (key) {
      case "a":
        playKick();
        break;
      case "s":
        playSnare();
        break;
      case "d":
        playClash();
        break;
      case "f":
        playHighHat();
        break;
    }
  });
});

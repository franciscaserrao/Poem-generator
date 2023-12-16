function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Jesus is the reason for the season,So think of him in all that you do. The good you do to others this season, Should be carried out all year too.",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);

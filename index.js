function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsElement = document.querySelector("#instructions");
  let apiKey = "9tf8b32027ebcbc4fod15cda0efbf2e3";
  let context =
    "You are a christmas poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do NOT include a title to the poem at anytime";
  let prompt = `User instructions: Generate a Christmas poem about ${instructionsElement.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);

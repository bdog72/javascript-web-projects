//
//
console.log(`Bozo`);

const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  // console.log(`Tell Me --`, joke);
  VoiceRSS.speech({
    key: 'd1c7bca0bb94473fa4ec16a185850fe0',
    src: joke,
    hl: 'en-us',
    v: 'Mike',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

// Get Jokes from API
async function getJokes() {
  let joke = ``;
  const apiUrl = `https://sv443.net/jokeapi/v2/joke/Programming`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Text to Speech
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (error) {
    // Catch errors
    console.log(`Whoops`, error);
  }
}

// function bozo(params) {
//   if (getJokes) {
//     button.setAttribute('disabled', true);
//   } else {
//     button.setAttribute('disabled', false);
//   }
// }

button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
// button.addEventListener('click', bozo);

//
//
console.log(`Bozo`);

const { body } = document;

const changeBackground = (num) => {
  let previousBackground;

  if (body.className) {
    previousBackground = body.className;
  }

  body.className = '';
  switch (num) {
    case '1':
      body.classList.add(`background-1`);
      break;
    case '2':
      body.classList.add(`background-2`);
      break;
    case '3':
      body.classList.add(`background-3`);
      break;
    default:
      break;
  }
};

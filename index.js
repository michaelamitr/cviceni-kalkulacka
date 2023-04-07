console.log('funguju');

const handleDigitClick = (event) => {
  const clicked = event.target.textContent;
  if (document.querySelector('.display').textContent.length < 9) {
    if (document.querySelector('.display').textContent === '0') {
      document.querySelector('.display').textContent = clicked;
    } else {
      document.querySelector('.display').textContent += clicked;
    }
  }
};

document.querySelector('#btn-0').addEventListener('click', handleDigitClick);
document.querySelector('#btn-1').addEventListener('click', handleDigitClick);
document.querySelector('#btn-2').addEventListener('click', handleDigitClick);
document.querySelector('#btn-3').addEventListener('click', handleDigitClick);
document.querySelector('#btn-4').addEventListener('click', handleDigitClick);
document.querySelector('#btn-5').addEventListener('click', handleDigitClick);
document.querySelector('#btn-6').addEventListener('click', handleDigitClick);
document.querySelector('#btn-7').addEventListener('click', handleDigitClick);
document.querySelector('#btn-8').addEventListener('click', handleDigitClick);
document.querySelector('#btn-9').addEventListener('click', handleDigitClick);

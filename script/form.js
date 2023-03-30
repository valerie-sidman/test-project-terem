const arrayOfSelects = document.querySelectorAll('.select-element');
const arrayOfInputs = document.querySelectorAll('.input-element');
const receivedData = document.querySelector('.received-data')

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const values = {};

  arrayOfSelects.forEach(select => {
    if (select.value) {
      values[select.name] = select.value;
    }
  })

  arrayOfInputs.forEach(input => {
    if (input.value) {
      values[input.name] = input.value;
    }
  })

  receivedData.innerText = JSON.stringify(values);

  fetch('example.php', {
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': '*' }
  }).then(response => alert(response))
    .catch(error => console.log(`Сервер вернул ошибку ${error}`))
})





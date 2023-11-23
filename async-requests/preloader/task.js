const loader = document.getElementById('loader');
const items = document.getElementById('items');
const requestURL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const xhr = new XMLHttpRequest();


xhr.open('GET', requestURL);
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    let answer = JSON.parse(xhr.responseText);
		renderAnswer(answer);
  }    
});


function renderAnswer(answer) {
	let arr = [];
  for (let valute in answer.response.Valute) {
    arr.push(answer.response.Valute[valute]);
  }

  let render = arr.map(el => `
    <div class="item">
      <div class="item__code">
        ${el.CharCode}
      </div>
      <div class="item__value">
        ${el.Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    </div>
    `);

  items.innerHTML = render.join('');
  arr = [];
  loader.classList.remove('loader_active');
}

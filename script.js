const drink = document.querySelector('.drink');
const row = document.querySelectorAll('.row');
const remain_div = document.querySelector('.remain_div');
const remain = document.querySelector('.remain');
const drank_div = document.querySelector('.drank_div');
const rows = Array.from(row);
console.log(drank_div);
let k = 0;
var drank_liter = 0;
let hello = 0;
for (let j = 0; j < 2; j++) {
	row[j].innerHTML = '';
	for (let i = 0; i < 4; i++) {
		row[j].innerHTML += `<div class="cup " num=${k} row=${j}>250ml</div>`;
		k++;
	}

	drink.appendChild(row[j]);
}

const cup = document.querySelectorAll('.cup');
const cups = Array.from(cup);

console.log(cups);

cups.forEach(function (cup) {
	cup.addEventListener('click', function () {
		if (!cup.classList.contains('active')) {
			let target = parseInt(this.getAttribute('num'));

			for (let i = target; i >= 0; i--) {
				cups[i].classList.add('active');
			}
			drank_liter = 0.25 * (target + 1);
			let remainL = 2 - drank_liter;
			if (remainL == 0) {
				remain_div.innerHTML = '';
			}
			remain.innerHTML = remainL + 'L';
			let drankHeight = 125 * drank_liter;
			drank_div.innerHTML = 50 * drank_liter + '%';
			drank_div.style.height = `${drankHeight}px`;
			drank_div.style.lineHeight = `${drankHeight}px`;
			remain_div.style.height = ` ${250 - drankHeight}px`;
			remain_div.style.lineHeight = ` ${250 - drankHeight}px`;
		}
	});
});

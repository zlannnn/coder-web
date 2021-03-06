import gotham from 'gotham-encoder';
import css from './style.css';
import './image/icon-128.png';

const encoded = document.getElementById('encoded');
const decoded = document.getElementById('decoded');
const encodeBtn = document.getElementById('encode');
const decodeBtn = document.getElementById('decode');
const checkbox = document.getElementById('activateSelectDecode');

encodeBtn.addEventListener('click', e => {
	const newEncodedVal = gotham.encode(decoded.value);
	encoded.value = newEncodedVal;
});

decodeBtn.addEventListener('click', e => {
	const newDecodedVal = gotham.decode(encoded.value);
	decoded.value = newDecodedVal;
});

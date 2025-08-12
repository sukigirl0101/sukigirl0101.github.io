
// all front-end; not “secure”, but perfect for an ARG gate.
const keyInput = document.getElementById('key');
const btn = document.getElementById('enter');
const gate = document.getElementById('gate');
const payload = document.getElementById('payload');

// allowed phrases (lowercase, trimmed) – edit freely
const keys = [
  '0101',
  'prince',
  'stay',
  'follow the fox',
  '好きgirl',
  'sky'
].map(s => s.toLowerCase());

function check() {
  const k = (keyInput.value || '').trim().toLowerCase();
  if (keys.includes(k)) {
    gate.classList.add('sg-hide');
    payload.classList.remove('sg-hide');
    localStorage.setItem('sg:fox', 'ok');
  } else {
    keyInput.value = '';
    keyInput.placeholder = 'try again';
  }
}

btn.addEventListener('click', check);
keyInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') check();
});

// auto-open if previously unlocked
if (localStorage.getItem('sg:fox') === 'ok') {
  gate.classList.add('sg-hide');
  payload.classList.remove('sg-hide');
}

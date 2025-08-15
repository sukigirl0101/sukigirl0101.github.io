const input = document.querySelector('.input-area');
const output = document.getElementById('output');

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const markdown = input.innerText.trim();
    if (markdown === ':w') {
      output.innerHTML += '<p><em>Saved!</em></p>';
      input.innerText = '';
      return;
    }
    const html = marked.parse(markdown);
    output.innerHTML += html;
    input.innerText = '';
  }
});

function typeEffect(text, element, speed = 30) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text[i] === '\n' ? '<br>' : text[i];
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

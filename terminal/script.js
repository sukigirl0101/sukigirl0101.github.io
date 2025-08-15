const input = document.querySelector('.input');
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

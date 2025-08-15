const input = document.querySelector('.input');
const output = document.getElementById('output');

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();

    const markdown = input.innerText.trim();
    const html = marked.parse(markdown);
    output.innerHTML = html;
    input.innerText = ''; // Clear after enter
  }
});

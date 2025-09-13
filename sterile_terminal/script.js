const input = document.querySelector('.input-area');
const output = document.getElementById('output');

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();

    // Get raw markdown input, normalize newlines
    const markdown = input.textContent.trim().replace(/\n/g, '\n');

    // Handle :w save
    if (markdown === ':w') {
      output.innerHTML += '<p class="glow-green"><em>Saved!</em></p>';
      input.textContent = '';
      return;
    }

    // Parse markdown
    const html = marked.parse(markdown);
    output.innerHTML += `<div class="markdown-body">${html}</div>`;

    input.textContent = ''; // Clear after enterr
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

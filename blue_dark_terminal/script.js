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

    input.textContent = ''; // Clear after enter
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

<!-- extra stuff exp -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
  const inputEl = document.querySelector('.input');
  const outEl   = document.getElementById('output');

  // autofocus
  window.addEventListener('load', () => { inputEl.focus(); });

  // fake block cursor when blurred
  function updateCursor(){
    if(document.activeElement !== inputEl){
      inputEl.style.boxShadow = 'inset 0 -2px 0 var(--mint)';
      inputEl.style.animation = 'blink 1.2s steps(1) infinite';
    } else {
      inputEl.style.boxShadow = 'none';
      inputEl.style.animation = 'none';
    }
  }
  document.addEventListener('click', updateCursor);
  inputEl.addEventListener('focus', updateCursor);
  inputEl.addEventListener('blur', updateCursor);

  // enter => append markdown line to output
  inputEl.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      const txt = inputEl.textContent.trim();
      if(!txt) return;
      const html = marked.parse(txt);
      const block = document.createElement('div');
      block.className = 'markdown-body';
      block.innerHTML = html;
      outEl.appendChild(block);
      outEl.scrollTop = outEl.scrollHeight;
      inputEl.textContent = '';
    }
  });

  // subtle blink keyframes (fallback if CSS isn’t present)
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.25} }
  `;
  document.head.appendChild(style);
</script>

---
layout: home
permalink: /
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>好きgirl's Terminal | 好きgirl</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" />
  <link rel="stylesheet" href="/assets/css/theme.css" />
  <script defer src="https://cloud.umami.is/script.js" data-website-id="6d1731c4-35c5-4f68-bbc9-d617179d2634"></script>
</head>
<body>
  <main class="vault-shell">
    <div class="terminal-glow">
      <h1 class="intro-glitch">好きgirl's Terminal</h1>
      <p class="subglow">Enshin v1.3: recursive archive of cognitive debris</p>
    </div>

    <section class="post-index">
      {% for post in site.posts %}
        <a class="log-link" href="{{ post.url | relative_url }}">
          <div class="log-entry">
            <div class="glow-frame">
              <span class="log-title">⊳ {{ post.title }}</span>
              <span class="log-date">{{ post.date | date: "%Y-%m-%d" }}</span>
            </div>
          </div>
        </a>
      {% endfor %}
    </section>
  </main>
</body>
</html>

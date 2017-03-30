---
layout: default_lighter
title: Contact
permalink: /contact/
---

<main id="main">

<!-- <section class="content conteiner-half">
  <div class="conteiner">
    <h1 class="margin-double">How to get in contact with me?</h1>
    <p>A product designer based in Helsinki, Finland.</p>
  </div>
</section> -->

<section class="content">
  <div class="conteiner">
    <div class="conteiner-half-width">
      <h2 class="title">Contacts</h2>
    </div>
    <div class="conteiner-half-width">
      <p><strong>Email:</strong> <a target="_blank" href="mailto:{{ site.email }}">{{ site.email }}</a><br />
      <strong>Phone:</strong> +<a href="callto:+358 40 5777664">358 40 5777664</a><br />
      <strong>Helsinki, Finland</strong></p>
    </div>
    <div class="conteiner-half-width">
      <h2 class="title">Social Media</h2>
    </div>
    <div class="conteiner-half-width">
      <nav class="menu main-menu menu-social-media mini">
        {% if site.github_username %}
          <a target="_blank" href="https://github.com/{{ site.github_username }}">
            <img class="darker" src="{{ site.url }}images/icon-Github-dark.svg" alt="Github">
            <img class="lighter" src="{{ site.url }}images/icon-Github-light.svg" alt="Github">
          </a>
        {% endif %}
        {% if site.medium_username %}
          <a target="_blank" href="https://medium.com/@{{ site.medium_username }}">
            <img class="darker" src="{{ site.url }}images/icon-Medium-dark.svg" alt="Medium">
            <img class="lighter" src="{{ site.url }}images/icon-Medium-light.svg" alt="Medium">
          </a>
        {% endif %}
        {% if site.linkedin_username %}
          <a target="_blank" href="https://br.linkedin.com/in/{{ site.linkedin_username }}">
            <img class="darker" src="{{ site.url }}images/icon-LinkedIn-dark.svg" alt="Linkedin">
            <img class="lighter" src="{{ site.url }}images/icon-LinkedIn-light.svg" alt="Linkedin">
          </a>
        {% endif %}
        {% if site.twitter_username %}
          <a target="_blank" href="https://twitter.com/{{ site.twitter_username }}">
            <img class="darker" src="{{ site.url }}images/icon-Twitter-dark.svg" alt="Twitter">
            <img class="lighter" src="{{ site.url }}images/icon-Twitter-light.svg" alt="Twitter">
          </a>
        {% endif %}
        {% if site.instagram_username %}
          <a target="_blank" href="http://instagram.com/{{ site.instagram_username }}/">
            <img class="darker" src="{{ site.url }}images/icon-Instagram-dark.svg" alt="instagram">
            <img class="lighter" src="{{ site.url }}images/icon-Instagram-light.svg" alt="instagram">
          </a>
        {% endif %}
      </nav>
    </div>
  </div>
</section>

</main>
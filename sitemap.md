---
layout: default
title: "Sitemap | wmWebStack"
description: "An HTML sitemap of wmWebStack, listing all pages and their categories."
date: 2024-09-29
---

<h1>Sitemap</h1><hr/>

  <h2><strong>Pages</strong></h2><hr/>

{% assign all_pages = site.pages %}

<ul class="list-group list-group-flush my-3">
  {% for page in all_pages %}
    {% if page.path contains ".md" and page.url and page.noindex != true %}
      {% assign dir = page.path | split: "/" %}
      {% if dir.size == 1 %}
        <li class="list-group-item"><a href="{{ site.url }}{{ page.url | remove: ".md" | remove: ".html" | escape }}">{{ page.title }}</a></li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>



  <h2><strong>Projects</strong></h2><hr/>
   <ul class="list-group list-group-flush my-3">
    {% assign projects_pages = site.pages | where_exp: "page", "page.url contains '/projects/'" %}
    {% if projects_pages.size > 0 %}
      {% for page in projects_pages %}
        {% if page.title and page.url %}
          <li class="list-group-item"><a href="{{ site.url }}{{ page.url | remove: ".md" | remove: ".html" }}">{{ page.title | escape }}</a></li>
        {% endif %}
      {% endfor %}
    {% else %}
      <li>No documentation pages found.</li>
    {% endif %}
  </ul>

---
layout: default
title: "Sitemap | wmWebStack"
description: "An HTML sitemap of wmWebStack, listing all pages and their categories."
---

<h1>Sitemap</h1><hr/>

  <h2><strong>Pages</strong></h2><hr/>
  <ul class="list-group list-group-flush my-3">
    <li class="list-group-item"><a href="{{ site.url }}/">Home</a></li>
    <li class="list-group-item"><a href="{{ site.url }}/selvakumaran-krishnan">About Selvakumaran Krishnan</a></li>
    <li class="list-group-item"><a href="{{ site.url }}/projects">Projects handled by Selvakumaran Krishnan</a></li>
    <li class="list-group-item"><a href="{{ site.url }}/services">Services offered by Selvakumaran Krishnan</a></li>
        <li class="list-group-item"><a href="{{ site.url }}/contact">Contact Selvakumaran Krishnan</a></li>

    <!-- Add other specific home directory pages if necessary -->
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

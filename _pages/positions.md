---
layout: topic
title: Positions
---

{% assign positions = site.data.positions %}

{% if positions and positions.size > 0 %}
  {% for position in positions %}
    {% include position.html position=position %}
  {% endfor %}
{% else %}
  We do not have any positions available at the moment.
{% endif %}

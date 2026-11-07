---
layout: topic
title: Ventures
---

Research in the GAPinDNNs group has led to companies that bring geometric deep
learning and neural rendering into industry and healthcare. These ventures
are founded by members of the group and keep close ties to our research.

{% for venture in site.data.ventures %}
  {% include venture.html venture=venture %}
{% endfor %}

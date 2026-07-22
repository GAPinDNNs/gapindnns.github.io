---
layout: topic
title: News archive
permalink: /_pages/news.html
---

{% assign all_news = site.data.news | sort: "date" | reverse %}
{% for news in all_news %}
  {% include news_entry.html news=news %}
{% endfor %}

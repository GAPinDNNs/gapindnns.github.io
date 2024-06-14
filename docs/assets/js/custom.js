// cut off time for news in unix time
const news_cutoff = Math.round(Date.now() / 1000 - 90*24*3600);
const news = document.querySelectorAll(".news");
let displayed_news_counter = 0;
for (let i = 0; i < news.length; i++) {
  const date = news[i].querySelector(".news-date");
  date_unix = Math.round(new Date(date.textContent).getTime()/1000)
  if (date_unix < news_cutoff) {
    news[i].style.display = 'none';
  } else {
    displayed_news_counter++;
  }
};

if (displayed_news_counter == 0) {
  document.querySelector("#news").style.display = 'none';
};



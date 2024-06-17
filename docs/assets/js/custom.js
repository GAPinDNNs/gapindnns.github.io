// cut off time for news in unix time
const news_cutoff = Math.round(Date.now() / 1000 - 90*24*3600);
const news = document.querySelectorAll(".news");
if (news.length != 0) {
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
}

// Insert Upcoming and Previous headings for talks
const talks = document.querySelectorAll(".talk-entry");
if (talks.length != 0) {
  const latest_date = talks[0].querySelector(".talk-date");
  latest_date_unix = Math.round(new Date(latest_date.innerText).getTime()/1000)
  const now_unix = Math.round(Date.now() / 1000)
  if (latest_date_unix > now_unix) {
    let UpcomingDiv = document.createElement("div");
    UpcomingDiv = talks[0].insertAdjacentElement("beforebegin", UpcomingDiv);
    UpcomingDiv.innerHTML = "<h3>Upcoming</h3>";
  }
  for (let i = 0; i < talks.length; i++) {
    const talk_date = talks[i].querySelector(".talk-date");
    talk_date_unix = Math.round(new Date(talk_date.innerText).getTime()/1000)
    if (talk_date_unix < now_unix) {
      let PreviousDiv = document.createElement("div");
      PreviousDiv = talks[i].insertAdjacentElement("beforebegin", PreviousDiv);
      PreviousDiv.innerHTML = "<h3>Previous</h3>";
      break;
    }
  }
}

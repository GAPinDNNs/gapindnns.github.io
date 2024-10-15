function ms_time_to_unix(time) {
  return Math.round(time / 1000);
}

function get_talk_date_time(talk) {
  const talk_date = talk.querySelector(".talk-date");
  const talk_time = talk.querySelector(".talk-time");
  const talk_datetime = new Date(talk_date.innerText + ' ' + talk_time.innerText + ' GMT+02:00');
  const talk_date_unix = Math.round(ms_time_to_unix(talk_datetime.getTime()))
  return talk_date_unix;
}

export function cut_off_news() {
  // cut off time for news in unix time
  const news_cutoff_days = 183;
  const news_cutoff = ms_time_to_unix(Date.now()) - news_cutoff_days*24*3600;
  const news = document.querySelectorAll(".news");

  if (news.length != 0) {
    let displayed_news_counter = 0;
    for (let i = 0; i < news.length; i++) {
      const date = news[i].querySelector(".news-date");
      const date_unix = ms_time_to_unix(new Date(date.textContent).getTime())
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
}

export function insert_upcoming_and_previous_headings() {
// Insert Upcoming and Previous headings for talks
  const talks = document.querySelectorAll(".talk-entry");
  if (talks.length != 0) {
    var has_upcoming = false;
    const latest_date_unix = get_talk_date_time(talks[0]);
    const now_unix = ms_time_to_unix(Date.now())

    if (latest_date_unix > now_unix) {
      has_upcoming = true;
      let UpcomingDiv = document.createElement("div");
      UpcomingDiv = talks[0].insertAdjacentElement("beforebegin", UpcomingDiv);
      UpcomingDiv.innerHTML = "<h4>Upcoming</h4>";
    }

    if (has_upcoming) {
      for (let i = 0; i < talks.length; i++) {
        const talk_date_unix = get_talk_date_time(talks[i]);
        if (talk_date_unix + 3600 < now_unix) {
          let PreviousDiv = document.createElement("div");
          PreviousDiv = talks[i].insertAdjacentElement("beforebegin", PreviousDiv);
          PreviousDiv.innerHTML = "<h4>Previous</h4>";
          break;
        }
      }
    }
  }
}


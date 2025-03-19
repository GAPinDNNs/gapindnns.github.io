function ms_time_to_unix(time) {
  return Math.round(time / 1000);
}

function interpret_in_timezone(date, ianatz) {
  var invdate = new Date(date.toLocaleString('en-US', {
    timeZone: ianatz
  }));

  var diff = date.getTime() - invdate.getTime();

  return new Date(date.getTime() - diff);
}

function get_talk_date_time(talk) {
  const talk_date = talk.querySelector(".talk-date");
  const talk_time = talk.querySelector(".talk-time");
  var talk_datetime = new Date(talk_date.innerText + ' ' + talk_time.innerText);
  talk_datetime = interpret_in_timezone(talk_datetime, 'Europe/Stockholm');

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
  const [upcoming_talks, previous_talks] = divide_into_upcoming_previous_talks();
  if (upcoming_talks.length != 0) {
    let UpcomingDiv = document.createElement("div");
    UpcomingDiv = upcoming_talks[0].insertAdjacentElement("beforebegin", UpcomingDiv);
    UpcomingDiv.innerHTML = "<h4>Upcoming</h4>";
    upcoming_talks.reverse();

    UpcomingDiv.append(...upcoming_talks);

    let PreviousDiv = document.createElement("div");
    PreviousDiv = previous_talks[0].insertAdjacentElement("beforebegin", PreviousDiv);
    PreviousDiv.innerHTML = "<h4>Previous</h4>";
    PreviousDiv.append(...previous_talks);
  }
}

function compare_talks_dates(talk1, talk2) {
  const talk1_date_unix = get_talk_date_time(talk1);
  const talk2_date_unix = get_talk_date_time(talk2);
  return talk1_date_unix - talk2_date_unix;
}

export function divide_into_upcoming_previous_talks() {
  const talks = document.getElementsByClassName("talk-entry");
  const upcoming_talks = [];
  const previous_talks = [];
  const time_buffer_upcoming = 60 * 30; // 30 minutes
  const now_unix = ms_time_to_unix(Date.now());
  for (let i = 0; i < talks.length; i++) {
    const talk_date_unix = get_talk_date_time(talks[i]);
    if (talk_date_unix + time_buffer_upcoming > now_unix) {
      upcoming_talks.push(talks[i]);
    } else {
      previous_talks.push(talks[i]);
    }
  }
  return [upcoming_talks, previous_talks];
}

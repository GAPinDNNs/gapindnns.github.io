from ics import Calendar, Event
from pathlib import Path
import yaml
from datetime import timedelta
import argparse
import arrow


def get_seminar_talk_files(dir):
    return [f for f in sorted(dir.iterdir(), reverse=True) if f.is_file() and f.suffix == '.yml']


def get_seminar_talk_data(filename):
    with open(filename, 'r') as f:
        data = yaml.safe_load(f)
    return data


def create_event(data):
    speaker = data['speaker']
    name = f"{speaker['first_name']} {speaker['last_name']}"
    talk_url = f"https://gapindnns.github.io/_pages/seminar.html#talk_{data['id']}"

    if "affiliation" in speaker:
        name += f" ({speaker['affiliation']})"

    begin = arrow.get(f"{data['date']}T{data['time']}:00", tzinfo="Europe/Stockholm")
    event = Event(
        name=name,
        begin=begin,
        description=f"Title: {data['title']}\n\nRead more on the seminar's website: {talk_url}",
        url=talk_url,
        duration=timedelta(hours=1),
        location=data['location']['name']
    )
    return event


def write_calendar(calendar, filename):
    with open(filename, 'w') as f:
        f.writelines(calendar.serialize_iter())


def add_talks_to_calendar(calendar, talk_files):
    for talk_file in talk_files:
        talk_data = get_seminar_talk_data(talk_file)
        event = create_event(talk_data)
        calendar.events.add(event)
    return calendar


def create_argparser():
    parser = argparse.ArgumentParser(description='Create an iCalendar file from seminar talk data')
    parser.add_argument('--talks_dir', type=str,
                        default='../_data/seminar_talks/',
                        help='Directory containing seminar talk data files')
    parser.add_argument('--output_dir', type=str, default='.',
                        help='Directory to write the calendar file to')
    return parser


def main(args):
    talk_files = get_seminar_talk_files(Path(args.talks_dir))

    calendar = Calendar()
    calendar = add_talks_to_calendar(calendar, talk_files)
    write_calendar(calendar, Path(args.output_dir) / Path('calendar.ics'))


if __name__ == '__main__':
    parser = create_argparser()
    args = parser.parse_args()
    main(args)

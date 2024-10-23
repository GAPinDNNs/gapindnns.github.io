from pathlib import Path
import argparse
from collections import OrderedDict
import re

folders = [
    "publications",
    "talks",
    "seminar_talks"
]

first_keys = [
    "title",
    "id",
    "author",
    "issued",
    "date",
]


folders = map(lambda p: Path(p), folders)


def order_dict(data):
    ordered_data = OrderedDict(list(data.items()))
    for key in reversed(first_keys):
        if key in ordered_data:
            ordered_data.move_to_end(key, last=False)
    return dict(ordered_data)


def create_root_dict(data):
    root_dict = OrderedDict()
    lines = data.split("\n")
    tag_pattern = re.compile(r"(?m:^)([\w-]+):")
    current_tag = None
    for line in lines:
        match = tag_pattern.match(line)
        if match:
            current_tag = match.group(1)
            root_dict[current_tag] = line[len(current_tag) + 1:]
        elif current_tag is not None:
            root_dict[current_tag] += "\n" + line
        else:
            raise ValueError("Content without root tag found")
    return root_dict


def contains_id_tag(data):
    return "id" in data


def set_id_tag(data, id, overwrite=False):
    data["id"] = f" {id}"
    return data


def clean_id_tag(tag):
    return tag.replace(" ", "_")


def set_id_tags_of_files(overwrite=False):
    for folder in folders:
        for file in folder.iterdir():
            if file.suffix != ".yml":
                continue
            data = None

            with file.open("r") as f:
                data = f.read()
            data = create_root_dict(data)
            if contains_id_tag(data) and not overwrite:
                continue

            print("Setting ID tag for ", file)
            data = set_id_tag(data, clean_id_tag(str(file.stem)), overwrite)
            data = order_dict(data)

            output = ""
            for key, value in data.items():
                output += f"{key}:{value}\n"
            output = output.strip()

            with file.open("w") as f:
                f.write(output)


def create_parser():
    parser = argparse.ArgumentParser(description="Set ID tags for YAML files")
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Overwrite existing ID tags",
    )
    return parser


if __name__ == "__main__":
    parser = create_parser()
    args = parser.parse_args()
    set_id_tags_of_files(args.overwrite)

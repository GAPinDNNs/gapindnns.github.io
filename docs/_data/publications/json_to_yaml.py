import json
import yaml
import pathlib as pl
import argparse
from datetime import date
import re

include_keys = [
    'DOI',
    'URL',
    'abstract',
    'author',
    'issued',
    'publisher',
    'title',
    'type'
]


def convert(file):
    data = json.load(file)
    data = remove_top_level_list(data)
    data = extract_keys(data)
    data = fix_date_parts(data)
    data = fix_latex(data)
    return yaml.dump(data)


def remove_top_level_list(data):
    while isinstance(data, list) and len(data) == 1:
        data = data[0]
    return data


def extract_keys(data):
    return {key: data[key] for key in include_keys if key in data}


def fix_date_parts(data):
    new_data = dict(data)
    for k in data:
        if k == 'date-parts':
            date_parts = remove_top_level_list(data[k])
            del new_data[k]
            new_data['date'] = date_list_to_str(date_parts)
            continue
        if isinstance(data[k], dict):
            new_data[k] = fix_date_parts(data[k])

    return new_data


def date_list_to_str(date_parts):
    fixed_date_parts = [int(x) for x in date_parts]
    date_obj = date(*fixed_date_parts)
    return date_obj.isoformat()


def create_frontmatter(data):
    frontmatter = '---\n'
    frontmatter += data
    frontmatter += '---\n\n'
    return frontmatter


def fix_latex(data):
    for k in data:
        if isinstance(data[k], str):
            data[k] = fix_latex_str(data[k])
        if isinstance(data[k], dict):
            data[k] = fix_latex(data[k])
    return data


def fix_latex_str(s):
    return re.sub(r'\$([^$]+)\$', r'\(\1\)', s)

def main(in_filename, is_frontmatter=False, out_filename=None):
    with open(in_filename, 'r') as file:
        output = convert(file)

    if not out_filename:
        if is_frontmatter:
            out_filename = pl.PurePath(in_filename).with_suffix('.md')
        else:
            out_filename = pl.PurePath(in_filename).with_suffix('.yml')

    if is_frontmatter:
        output = create_frontmatter(output)

    with open(out_filename, 'w') as file:
        file.write(output)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Convert zotero JSON to YAML',
        # prog='json_to_frontmatter.py'
    )
    parser.add_argument('filename', help='Input JSON file')
    parser.add_argument('-o', '--output', help=('Name of output file '
                        'defaults to same name as input file but with .yml/.md '
                                                'extension'),
                        default=None
                        )
    parser.add_argument('-f', '--frontmatter', help=('Create frontmatter instead '
                        'of pure YAML'),
                        action='store_true'
                        )
    args = parser.parse_args()
    main(args.filename, args.frontmatter, args.output)
    exit(0)

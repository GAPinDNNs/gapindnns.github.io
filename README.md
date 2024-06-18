# GAPinDNNs website

## Technical details

### Building

The website is based on *Jekyll*. To build the website, use

```bash
bundler exec jekyll serve --livereload
```

This will serve the website locally at `localhost:4000` by default.

### Adding a page

If it is not part of a Collection (see below), add it into the `_pages/`
folder. In order to link it from the navbar, add a corresponding entry inside
`_data/navigation.yml`.

### Styling content

In principle the site is build without any major framework, only [Bootstrap
5](https://getbootstrap.com/docs/5.3/getting-started/introduction/) is used for
components.

To make content reusable, use [layouts](https://jekyllrb.com/docs/layouts/)
(for whole pages, can be nested) or
[includes](https://jekyllrb.com/docs/includes/) for elements like the
publication card. They can be found in `_layouts/` and `_includes/`,
respectively.

If you need to define your own CSS classes, use the `_sass/main.scss` file.
SCSS variables should be defined inside `_sass/_custom_variables.scss`.

### Content dependent rendering

Control flow inside layouts can be achieved by
[Liquid](https://jekyllrb.com/docs/liquid/). Note that its capabilities are
quite limited but have a look at e.g. the publications page or member page

### data files and collections

[Collections](https://jekyllrb.com/docs/collections/) are useful if you have
many objects following the same structure which might become there own page
eventually and contain larger chunks of markdown content. Right now we use it
for example for the members. They can provide frontmatter in the `.yml` format
to add additional structured data. They are located inside `collections/`

[Data files](https://jekyllrb.com/docs/datafiles/) are `.yml` files structuring
data that can essentially do the same as the frontmatter of collections. But we
prefer it if there is no significant content section. They are located inside
`_data/`

## To do

### Best done by Philipp

- Include bibtex copy field.
- Add courses collection with own pages as well
    - Courses should have link to canvas page
- Add pdf link to CV on member
- Handle middle name?
- Add first authors asterisks
- Offer easy way to create extra pages with markdown and reasonable layout
- members page: add group picture


### Less technical, for Elias or Oscar
- Add office numbers to members
- structure members page with
    - current members
    - previous members (not further categorized)
    - but also
        - Senior
        - postdoc
        - PhD
- Add thesis page
- Add link to homepage on Chalmers for each member
- Footer: add math department (linked), Chalmers + GU logo, new line with
  funding: WASP etc., address
- Publication entries: `Preprint` field below `Published`
- Publications sorted according to tags in different sections, overlaps
  possible
- String theory:
    - Add a *string theory* tag that is not shown on publication page but on personal page
    - Same for talks (for Jan, Daniel, Hampus, Max)
    - should appear as separate section on personal page
- Add functionality of personal blackboard image to each member
- specialized research pages should have filtered (by tag) publication list


### Needs to be done by each member individually
- Member page: start with short introduction

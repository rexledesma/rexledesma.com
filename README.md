# Personal Website

## Summary

[`rexledesma.com`](https://rexledesma.com)

## Setup

First, we install external dependencies from
[`tufte-pandoc-jekyll`](https://github.com/jez/tufte-pandoc-jekyll#installation).

```bash
brew install pandoc
brew install jez/formulae/pandoc-sidenote
```

Next, we setup `rbenv` to ensure the Ruby version when we work on this project.

```bash
brew install rbenv

# install local ruby version defined in .ruby-version
rbenv install

# install bundler and Gemfile dependencies
gem install bundler
bundle install
```

We can now use jekyll to serve our application.

```bash
bundle exec jekyll serve
```

## Credits

- [`jekyll-minifier`](https://github.com/digitalsparky/jekyll-minifier)
- [`jekyll-seo-tag`](https://github.com/jekyll/jekyll-seo-tag)
- [`jekyll-sitemap`](https://github.com/jekyll/jekyll-sitemap)
- [Pixilart](https://www.pixilart.com/)
- [Semantic UI](https://semantic-ui.com)
- [`tufte-pandoc-jekyll`](https://github.com/jez/tufte-pandoc-jekyll)

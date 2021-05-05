# lit-sandbox

- Node 14.15系

## core libs

- lit
  - repo https://github.com/lit/lit
  - ref https://lit.dev/docs/templates/directives/#ref

## getting started

```sh
$ yarn install
$ yarn start
$ open http://localhost:8080
```

## syntax setting

### VIM

```toml
[[plugins]]
repo = "cdata/vim-tagged-template"
hook_add = """
let g:taggedtemplate#tagSyntaxMap = {
  \ "html": "html",
  \ "md":   "markdown",
  \ "css":  "css" }
"""
```

### VSCode

- lit-html
- es6-string-css

# blog

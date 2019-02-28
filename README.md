# Merge cells in the Tables for Markdown Syntax
This is a GitBook plugin for extending markdown table syntax. You can enable to merge cells in tables with this plugin. 

## How to install it?
Add it to your `book.json` configuration:

```
{
  "plugins": ["cellmerge"]
}
```

Install this plugin using:

```
$ gitbook install
```

## How to use it?


## How GitBook plugin works?

* To marge columns:
  Enter `>` or `empty` in the cells.

  ```
  | a | b |
  |---|---|
  | > | 1 |
  | 2 |   |
  ```

* To marge rows:
  Enter `^` in the cells.

  ```
  | a | b |
  |---|---|
  | 1 | 2 |
  | ^ | 4 |
  ```
![sample](img/sample.png)

## How to add this plugin into package.json

* To insert this plugin into package.json:

  `$ npm install gitbook-plugin-cellmerge`

## As a reference

* This plugin is developed with referring to `Markdown Enhanced Preview` which is a plugin for Atom or Visual Studio Code.
* This plugin uses `Cheerio` package to parse HTML as dependencies.

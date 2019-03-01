# Merge Cells in the Tables for Markdown Syntax
This is a GitBook plug-in for extending markdown table syntax. You can enable it to merge cells in tables with this plugin. 

## How to install
Add this plug-in to your `book.json` configuration:

```
{
  "plugins": ["table-cell-merge"]
}
```

Install this plugin using the following code:

```
$ gitbook install
```

## How this plugin works

* To merge columns:
<<<<<<< HEAD
=======

>>>>>>> de100f2e08f92a678a2ca9a9eaed9d711721f60e
  Enter `>` or `empty` in the cells.

  ```
  | a | b |
  |---|---|
  | > | 1 |
  | 2 |   |
  ```

* To merge rows:
<<<<<<< HEAD
=======

>>>>>>> de100f2e08f92a678a2ca9a9eaed9d711721f60e
  Enter `^` in the cells.

  ```
  | a | b |
  |---|---|
  | 1 | 2 |
  | ^ | 4 |
  ```
![sample](img/sample.png)

## How to add this plugin into package.json

* Run the following command to insert this plug-in into package.json:

  `$ npm install --save gitbook-plugin-table-cell-merge`

## Reference

<<<<<<< HEAD
* This plug-in has been developed in referring to Markdown Enhanced Preview which is used for Atom and Visual Studio Code.
* This plug-in uses the `Cheerio` npm package to parse HTML as dependencies. run the following command to install `Cheerio` to your environment.
=======
* This plugin is developed with referring to `Markdown Enhanced Preview` which is a plugin for Atom or Visual Studio Code.
* This plugin uses `Cheerio` npm package to parse HTML as dependencies. This plugin is required to install `Cheerio` to your environment.
>>>>>>> de100f2e08f92a678a2ca9a9eaed9d711721f60e
    ```
    $ npm install --save Cheerio
    ```

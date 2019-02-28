module.exports = {
  hooks: {
    'page': function(page) {
      page.content = page.content.replace("<b>", "<strong>")
        .replace("</b>", "</strong>");
      return page;
    }
  }
};

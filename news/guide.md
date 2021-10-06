# Adding an article

1. In `news/articles.json`, add an entry to the **top** of the file: `"<id of article>": "<iso 6801 datetime, including time offset>"`. For example, `"myarticle": "2021-10-01T19:43+08"`
2. In `news/articles/`, create a file `<id of article>.json`. For example, `myarticle.json`
3. Add the following:
```html
<!--:title: <title (not id!) of article-->
<!--:author: <your ingame name>-->
```
For example,
```html
<!--:title: My Article-->
<!--:author: __7d-->
```
4. Below that, you can start writing with Markdown formatting your article.
5. Remember to commit your changes to the repository! :)
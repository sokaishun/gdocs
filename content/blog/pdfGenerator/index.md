---
title: ウェブページのpdf生成
date: "2022-03-20T11:35:00.000Z"
description: "Headless Chrome Puppeteerを使って、ウェブページのpdf文書を自動生成する"
tags: ["puppeteer", "Table of Contents"]
thumbnail: "puppeteer.png"
---

```toc
# This code block gets replaced with the TOC
```

## なんでpdf文書が必要か？

ウェブページで作成した取説について、関係者へ配布するときに、印刷またはオフラインで確認しやすいように、pdfのようなフォーマットは望ましい。

また、文書だけのレイアウトを整うだけではなく、目次（Table of Contents）の部分も自動生成させて、長い文書の内容が一目瞭然になる。

## 基本な流れ

1. expressのルーティングによってpdf生成時のサーバサイドの関数を呼び出す

2. puppeteerを使って中間pdfを生成する

3. 生成したpdfをパーサーし、目次に当たる内容とそのページ番号を抽出する

4. バッファーのhtmlのTOC部にページ番号を追記する

5. バッファーのhtmlに対して、最終のpdfを生成する

## Expressのルーティング

ウェブサイトに対して、`/pdf/`をつけたルートの場合、`ssr.js`を呼び出して、pdfを変化した後に、クライアントサイドにpdf文書としてダウンロードされる。

```javascript:title=server.js {numberLines: 12}
app.get(/pdf/, async (req, res, next) => {
  var oriUrl = req.originalUrl;
  oriUrl = oriUrl.replace("pdf", "");
  const { pdf, ttRenderMs } = await ssr(
    `${req.protocol}://${req.get("host")}${oriUrl}`
  );
  res.set(
    "Server-Timing",
    `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`
  );
  console.log(oriUrl);
  var pdfTitle = oriUrl.replace(/\//g, " ").trim().replace(/ /g, "-");
  console.log(pdfTitle);
  res.setHeader("content-type", "application/pdf");
  res.setHeader("content-Disposition", `attachment;filename=${pdfTitle}.pdf`);
  return res.status(200).send(pdf); // Serve prerendered page as response.
});
```

## Pdf生成

### 共通のHeaderとFooter

headerTemplateのsrcについては、ロゴの画像のRawデータを入れることで、会社のロゴが各pdfのページの左上に印刷される。

```javascript:title=ssr.js {numberLines: 16}
  const currentDatatime = new Date().toLocaleString({ timeZone: "Asia/Tokyo" });

  headerTemplate = `<div style="position: relative; top: 0px; left: 0px; width: 100%; border-bottom: 1px solid black; margin: -5px 30px 0px; padding: 0px 0px 1px; font-size: 9px; font-family: Meiryo, Arial, sans-serif;">
<div style="top: 0px; left: 0px; width: 200px; height: 35px; margin: 0px; padding: 0px">
<image height="30px" src="data:image/png;base64,....." />
</div><div style="position: absolute; top: 20px;right: 0px;text-align: right; margin: 0px; padding: 0px;">Copyright &copy;  CO.,LTD.</div>
</div>`;

  footerTemplate = `<div style="position: relative; width: 100%; border-top: 1px solid black; margin: 0px 30px 25px; padding: 1px, 0px, 0px; font-size: 9px; font-family: Meiryo, Arial, sans-serif;">
  <div style="position: absolute; top: 5px; left: 0px; text-align: left;">
  <span class="title"></span></div>
  <div style="position: absolute; top: 5px; width: 100%; text-align: center;">
  <span class="pageNumber"></span> / <span class="totalPages"></span></div>
  <div style="position: absolute; top: 5px; right: 0px; text-align: right;">${currentDatatime}</div></div>`;
```

### Pdf作成

executablePathは実際のHeadless Chromeのexeのパスに書き換えてください。

```javascript:title=ssr.js {numberLines: 81}
  const browser = await puppeteer.launch({
    executablePath:
      "./node_modules/puppeteer/.local-chromium/win32-555668/chrome-win32/chrome.exe",
  });
  const page = await browser.newPage();

  const pdfInter = await page.pdf({
    format: "A4",
    displayHeaderFooter: true,
    headerTemplate: headerTemplate, // indicate html template for header
    footerTemplate: footerTemplate, // indicate html template for header
    margin: {
      // increase margins (in this example, required!)
      top: 80,
      bottom: 80,
      left: 30,
      right: 30,
    },
  });
```

## Pdfのパーサー

pdf-parseを使って、pdf文書の中に、TOCの各項目に当たる文字列を抽出して、`tocFilterdArray`の中に格納する。そして、各ページに当文字列があった場合、そのページの番号を`pageNumbers`に格納する。

最後に、htmlのページ番号に当たる部分にpdfの解析した`pageNumbers`を格納する。

```javascript:title=ssr.js {numberLines: 105}
  var pdf2 = require("pdf-parse");

  await pdf2(pdfInter)
    .then(function (data) {
      var text = data.text;
      var stringArray = text.split("\n");
      var tocFilterdArray = [];
      for (const elem of stringArray) {
        if (elem.startsWith(". . . . . . . . .") === true) {
          var tempStr = elem.replace(/^([. ]*)/g, "");
          tempStr = tempStr.replace(/([. ]*)$/g, "");
          tocFilterdArray.push(tempStr);
        }
      }

      var filterdArray = [];
      var currentPage = 1;
      for (const elem of stringArray) {
        if (elem.endsWith(currentDatatime) === true) {
          if (elem.startsWith(pagetitle) === true) {
            var tempStr = elem
              .replace(currentDatatime, "")
              .replace(pagetitle, "");
            var temparr = tempStr.split("/");
            currentPage = temparr[0].trim();
            filterdArray.push(currentPage);
            console.log("Push: " + currentPage);
          }
        }
        if (tocFilterdArray.includes(elem) === true) {
          filterdArray.push(elem);
          pageNumbers.push(parseInt(currentPage));
        }
      }
      const tocEl = root.querySelectorAll(".toc-page-number");
      let pageNumberCorrect = 0;
      tocEl.forEach((element) => {
        const tempValue = pageNumbers[pageNumberCorrect];
        element.set_content(String(tempValue));
        pageNumberCorrect = pageNumberCorrect + 1;
      });
    })
    .catch(function (err) {
      console.log(err);
    });
```

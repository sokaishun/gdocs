---
title: Static site generator：Mkdocs
date: "2022-02-26T20:00:00.000Z"
description: "マークダウン文書からサイトを自動生成する技術について紹介する。"
tags: ["Mkdocs"]
thumbnail: "mkdocs-material.png"
---

```toc
# This code block gets replaced with the TOC
```

## 技術文書の作成

技術文書（仕様書、報告書）をどうやって残して、そして活用していくというのはどの業界においても重要な課題である。

仕事上でプログラムを設計しているとき、通信の仕様または処理の内容などを記録しつづ、指摘された内容を訂正し、フラッシュアップしてまとめていくことが日常な作業。

従来では、よく使われるツールだとMicrosoft officeのWordまたはExcelがある。しかし、複数人の編集または差分管理がしにくい。

仕様書を作成する際に、だれか/いつ/なの目的で仕様を訂正しているのかを記録しなければならない。案件を参考していた場合、このような訂正はノウハウまたはクリティカルポイントとして把握すべき。

従来の仕様書作成ツールでの差分管理の欠点を認識し、使わないようにした。

## Markdownで文書作成

何でMarkdown使うの？という質問は必ず最初から飛び出してくる。仕様書を書くために新しい言語的なものを勉強しなきゃいけないのはいやだという声もよくある。

私の職場でも、Markdownをなれなくて文書作成するのを諦める人もいる。

なんで使うについては、確かにMarkdownの方が自由度が低く、好きなように文字の大きさなどのスタイル変更できないし、表を作成したり、フローチャートも苦手である。

しかし、Markdownの特徴は文書を記述することに集中して、スタイルの部分外しているところ。つまり、HTMLとCSSのように文書とスタイルを分離していることに類似。ただし、HTMLよりMarkdownの方が、言語的な部分（bracketなどの符号）をなくしているので、人が読みやすいものとなっている。

文書とスタイルを分離することのメリットは何でしょうか？コンテンツとデザインの分離によって効率よく仕事進めれるという点。昨今では、ウェブ技術の発展で、文書を表示させるときにデバイスに応じて表示したり、Darkモードで表示したり、デザインをリニュアルしたりを考えると、コンテンツとデザインを分離した方が、都合がいいということ。

Markdownで文書を作成しても、Markdownに止まらず、最終的にはウェブHTMLに変換していくことが一般的。この変換用のツールはStatic site generatorと呼ばれている。Static siteというのはウェブサイトの分類で、サーバーサイトとのコンテンツ取得するための通信がないウェブサイトとのこと。

## Static site generator : Mkdocs

Static site generatorの代表例としては、本ブログ作成用のGatsbyと私の仕事上で使っていた[Mkdocs](https://www.mkdocs.org/)がある。
GatsbyはjavascriptのReactjsをベースで、MkdocsはPythonベース。

Mkdocsを採用した１番理由は、[Mkdocs-Material](https://squidfunk.github.io/mkdocs-material/)というパッケージがあったから。Mkdocs-Materialではメニューや目次また注意文書のような機能が事前に備えていて、非常に便利。

２番理由は拡張性。javascriptの拡張や[Python-Markdown](https://python-markdown.github.io/)の中にPythonコードを追加したような拡張ができるので、初心者が拡張しやすいツールと感じている。

### javascriptの拡張性例

mermaidjsを使って、フローチャートを記述できたこと。仕様書の場合、フローチャートで信号のシーケンスを記録する場面が必要で、実装した。

### Pythonの拡張性例

[Markdown-pp](https://github.com/jreese/markdown-pp)を拡張して、[Pykakasi](https://github.com/miurahr/pykakasi)を利用して、日本語のHeadingをローマ字に変換してahrefリンクに反映するような拡張していた。

ちなみにMarkdown-ppは複数のMarkdown文書を一つにまとめるパッケージで、TOCとHeadingのナンバリングもしてくれるもの。１つのMarkdownの文書を複数の文書に合体したい場合使えるツール。

## まとめ

Mkdocsの弱点としては、Mkdocsで作成したサイトだとすぐわかるところ。つまり、サイトのデザイン性のバリエーションが少ない。そして、開発時、毎回コンパイルでサイトを生成する動作しないといけないところ。Gatsbyは動的にできているぽいので、比較してみると弱点と感じた。

それにしても、仕事用の仕様書類をまとめるツールとして、手軽に使える面で評価できる。GatsbyだとReactを理解しないと拡張しにくいから。




---
title: pachydermの使い方
date: "2022-04-23T11:35:00.000Z"
description: "pachydermを使ってデータパイプラインの構築を試した"
tags: ["pachyderm","opencv"]
thumbnail: "Pachyderm-Character_stacked--1200.png"
---


## pachydermを使用する理由

機械学習の場合、最初はモデルをどのものにするかで選定することが多い。しかし、モデルが決まった場合、学習のデータを正確にして、学習の精度を高めることが重要。

そのとき、どのような学習データを使用しているかを含めて、しかりと管理していくことが必要。この学習データのバージョン管理用でpachydermを試すことにした。

## pachydermの仕組み

学習のデータはGitに類似する管理コマンドを使用。ブランチの概念もある。

処理の流れについては、jsonまたymlで定義したものを使用。その中で、処理するロジックの部分はdocker imageを使う。

docker imageについては、docker hubにアップロードしたものを標準に対応している。

docker image のビルドについては、wsl2内ではメモリの制限などでエラー発生することが多い。私はopencvのcmakeのビルドでエラーが発生していたので、諦めた。代わり既存のdocker imageをpullして、コンテナーで実行した後に、中のファイルを修正したりしていた。

docker コンテナーの中に入るために、下記コマンドを使用。

```bash
docker run -it ****** sh
```

### pipeline関連コマンド

```bash
# パイプライン作成
pachctl create pipeline -f threshold.json
# パイプラインの実行時のログ
pachctl logs --pipeline=threshold
```

### 学習データrepo操作

```bash
# データを出力
pachctl get file edges2@master:MVcakFW.png > MVcakFW.png

# データをrepoに登録
pachctl put file images@master:liberty.png -f http://imgur.com/46Q8nDz.png

```

### docker image

```bash
#docker build
docker build -t dockerhubname/dockerreponame:latest .

#docker push to dockerhub
docker push dockerhubname/dockerreponame:latest
```

## 注意点

パイプライン作成時、docker hub のimageデータは更新されたにもかかわらず、パイプラインを削除して再作成しても、最新のimageが反映されないことがあった。対応法としては、docker hub側に別のタグでimageをアップロードして、再度パイプライン作成したら、問題解決。

## 今後について

- pachydermを使って、画像だけではなく画像上のラベリング情報（マスク画像）を含めて管理または処理する例を作りたい。その中で、ラベリングツール系との連携を検討する。
- docker imageの理解を深めたい。処理の中で外部apiをウェブアクセス経由で実施した場合、docker でコンテナー化可能かを確認する。
- 機械学習の場合、学習の結果をwebapiで公開するためのツールseldonなどがあるが、どのように使うかを確認する。
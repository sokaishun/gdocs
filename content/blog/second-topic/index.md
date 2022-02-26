---
title: Windows Linux Subsystem
date: "2022-02-05T22:00:00.000Z"
description: "Windows10からWSLは簡単に使えるようになった。Linuxを使い、最先端のオープンソースを体験しましょう。"
tags: ["WSL", "Docker"]
thumbnail: "top.jpg"
---

Windows10のver2004以降、Windows Linux Subsystem(WSL2)が標準対応できるようなった。
詳細の有効化手順やWSL中にいれるLinux OSのインストール方法はMicrosoft docsを参照ください。

WSLを経由してLinuxを使えるようになるため、Linuxでしか使えないものを含めた多くのオーブンソースソフトウェアは使えるやすいようになる。
とくに、Docker,Ansible,Nodejsなど。

また、WSL自体は仮想マシン技術でできて、複数のOSをインストールできる。WSLを使い慣れると仮想マシンのアクセス方法(SSH,xrdp)が理解できる。
クラウドは仮想マシンを基本になっているため、
WSLで分かった内容はクラウドサーバー管理に活かせる。

仮想マシンの重要な考えのひとつは仮想ネットワーク。
WSL2ではネットワークIPアドレスは自動的に割り当てされる。
プライベートネットワーク(会社内)の場合、プロキシサーバーなど設定を行なって、
WSL内からインターネットを接続させる。

過去社内でWSLを使用した際、プロキシまたDNS、
Dockerコンテナ内のGithub認証、Docker認証で苦労した。

今後順次にノウハウをこちらのブログに掲示していく。

## コードテスト例

```js:title=example-file.js
alert('click to copy 💾');
```

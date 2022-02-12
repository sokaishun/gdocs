---
title: Windows Linux Subsystem
date: "2022-02-05T22:00:00.000Z"
description: "Windowsの中にLinuxを入れる。"
tags: ["WSL", "Ansible", "Docker"]
---

## Windows Linux Subsystem

Windows10のver2004以降、Windows Linux Subsystem(WSL2)が標準対応できるようなった。
詳細の有効化手順やWSL中にいれるLinux OSのインストール方法はMicrosoft docsを参照ください。

WSLを経由してLinuxを使えるようになるため、Linuxでしか使えないものを含めた多くのオーブンソースソフトウェアは使えるやすいようになる。
とくに、Docker,Ansible,Nodejsなど。

また、WSL自体は仮想マシン技術でできて、複数のOSをインストールできる。WSLを使い慣れると仮想マシンのアクセス方法(SSH,xrdp)が理解できる。
クラウドは仮想マシンを基本になっているため、WSLで分かった内容はクラウドサーバー管理に活かせる。

---
title: Windows Linux Subsystem
date: "2022-02-05T22:00:00.000Z"
description: "Windowsの中にLinuxを入れる。"
tags: ["WSL", "Ansible", "Docker"]
---

## Wsl

windowsの中にwsl2を経由して、ubuntuをインストールする。

そしてubuntuの中に、ansibleをインストールして、
自動化のscript経由でwindowsのnode パソコンに対して操作を行うことが可能。

## docker

ソフトをインストールするための便利ツール。

また、dockerで開発環境を定義すれば、deploy段階では簡単に環境再現できる。

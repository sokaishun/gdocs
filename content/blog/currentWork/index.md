---
title: Visionについて
date: "2022-02-19"
description: "Using image processing technology to measure size or inspect flaws."
tags: ["Image Processing"]
thumbnail: "1319229.png"
---

学生時代では画像処理の研究をした。
また大学院入学した後、機械学習(Machine Learning)に興味があって、
英文の教科書(8000円?)を買って独学した。

画像処理は画素単位の処理から、エッジ抽出(Canny edge detection)、Affine 変換などは基本で、
一方機械学習では統計学のモデル(Likelihood estimation,Baysian statistics)は中心で数式ばかり。

画像処理と機械学習の融合としては、Computer Visionという学問がある。
私は院生のときに、CVPRやICCVはIEEEのトップConferenceはComputer Visonの関連。
非常に注目されている分野。

そして、画像処理を製造業への応用として、Machine Visonがある。
特に寸法計測と外観検査などを装置として作り上げること。

私の仕事はMachine Vision関係で、
装置化時重視される処理時間を強化された商業用の画像処理ライブラリを使うことがよくある。
OpenCVのようなOSSを利用する場合もある。

Machine Visionは今までではそれほど高度の処理がいらなく、２値化や領域処理で物足りるが、
最近では曖昧な外観検査を対処するために、機械学習のモデル(SVM,CNN)を利用できるライブラリも充実してきた。
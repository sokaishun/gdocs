---
title: k8s
date: "2022-04-15T11:35:00.000Z"
description: "k8s関係"
tags: ["k8s"]
thumbnail: "Kubernetes-logo-1.png"
---

## minikube cannot access internet

minikube

```
😄  minikube v1.25.1 on Ubuntu 20.04 (amd64)
    ▪ KUBECONFIG=/home/songhaijun/.kube/config
✨  Automatically selected the docker driver. Other choices: none, ssh
👍  Starting control plane node minikube in cluster minikube
🚜  Pulling base image ...
🔥  Creating docker container (CPUs=2, Memory=2200MB) ...
❗  This container is having trouble accessing https://k8s.gcr.io
💡  To pull new external images, you may need to configure a proxy: https://minikube.sigs.k8s.io/docs/reference/networking/proxy/
🐳  Preparing Kubernetes v1.23.1 on Docker 20.10.12 ...
    ▪ kubelet.housekeeping-interval=5m
    ▪ Generating certificates and keys ...
    ▪ Booting up control plane ...
    ▪ Configuring RBAC rules ...
🔎  Verifying Kubernetes components...
    ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5
🌟  Enabled addons: storage-provisioner, default-storageclass

❗  /usr/local/bin/kubectl is version 1.16.0, which may have incompatibilites with Kubernetes 1.23.1.
    ▪ Want kubectl v1.23.1? Try 'minikube kubectl -- get pods -A'
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

## 問題解消

解決法が見つからないが、何回かパソコンを再起動したら、解消された。

結果的に、pachydermのポッドが生成できた。

```bash
NAME                          READY   STATUS    RESTARTS       AGE
etcd-0                        1/1     Running   13 (54m ago)   5d5h
pachd-cdb7d4966-dw2k4         1/1     Running   13 (54m ago)   5d5h
pg-bouncer-66d8b86c4-9tkdt    1/1     Running   13 (54m ago)   5d5h
pipeline-threshold-v1-cmq29   2/2     Running   0              32m
postgres-0                    1/1     Running   13 (54m ago)   5d5h
```
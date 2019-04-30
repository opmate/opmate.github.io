---
title: Quick Tutorial
description: 노드 활성화
---

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial2.md) / [다음페이지](QuickTutorial4.md)


```sh
$ opmate node list
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+----------------------------------+--------------------+-----------+-------+----------+-------+------------------+---------+
| ID                               | AGENT VERSION      | IP        | OS    | HOSTNAME | OWNER | HEARTBEAT        | STATUS  |
+----------------------------------+--------------------+-----------+-------+----------+-------+------------------+---------+
| 3106E85BCF76465F8F9B16BC3873C380 | 1.0.001.20190425.1 | 10.0.0.92 | Linux | myhost2  |       | 2019/04/30 14:10 | disable |
| 6FE9E69A10B44EBEAFC3A9F05078066C | 1.0.001.20190425.1 | 10.0.0.91 | Linux | myhost1  |       | 2019/04/30 14:10 | disable |
+----------------------------------+--------------------+-----------+-------+----------+-------+------------------+---------+

ROWS COUNT : 2/2
```

```sh
$ opmate node edit -id 6FE9E69A10B44EBEAFC3A9F05078066C -wi linux01 -st E
Requesting https://127.0.0.1:8443/opmate;user=bumbee
6FE9E69A10B44EBEAFC3A9F05078066C has been modified successfully.

$ opmate node edit -id 3106E85BCF76465F8F9B16BC3873C380 -wi linux02 -st E                                 
Requesting https://127.0.0.1:8443/opmate;user=bumbee
3106E85BCF76465F8F9B16BC3873C380 has been modified successfully.

$ opmate node list
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+---------+--------------------+-----------+-------+----------+--------+------------------+--------+
| ID      | AGENT VERSION      | IP        | OS    | HOSTNAME | OWNER  | HEARTBEAT        | STATUS |
+---------+--------------------+-----------+-------+----------+--------+------------------+--------+
| linux02 | 1.0.001.20190425.1 | 10.0.0.92 | Linux | myhost2  | bumbee | 2019/04/30 14:15 | enable |
| linux01 | 1.0.001.20190425.1 | 10.0.0.91 | Linux | myhost1  | bumbee | 2019/04/30 14:15 | enable |
+---------+--------------------+-----------+-------+----------+--------+------------------+--------+

ROWS COUNT : 2/2
```

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial2.md) / [다음페이지](QuickTutorial4.md)

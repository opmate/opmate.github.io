---
title: Tutorial
description: 노드 활성화
---

[목차](QuickTutorial.md) / [이전페이지](QuickTutorial2.md) / [다음페이지](QuickTutorial4.md)

노드(Node)는 관리하고자 하는 호스트(Host)와 대응하는 개념입니다.
호스트(Host)에 에이전트를 설치 후 구동하면, 자동으로 노드가 마스터로 등록됩니다.

우선, 노드의 목록을 조회해 보겠습니다.

```
$ opmate node list
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+----------------------------------+-----------+------------+-------+----------+-------+------------------+---------+
| ID                               | AGENT VER | CONNECT IP | OS    | HOSTNAME | OWNER | HEARTBEAT        | STATUS  |
+----------------------------------+-----------+------------+-------+----------+-------+------------------+---------+
| 3106E85BCF76465F8F9B16BC3873C380 | 1.1.002   | 10.0.0.92  | Linux | myhost2  |       | 2020/03/13 14:10 | disable |
| 6FE9E69A10B44EBEAFC3A9F05078066C | 1.1.002   | 10.0.0.91  | Linux | myhost1  |       | 2020/03/13 14:10 | disable |
+----------------------------------+-----------+------------+-------+----------+-------+------------------+---------+

ROWS COUNT : 2/2
```

2개의 노드가 있는데, 상태(STATUS)가 비활성화(disable) 이네요.
소유자(OWNER)도 비어 있습니다.
정상적으로 사용하기 위해서는 활성화(enable)시켜야 합니다.
활성화하면서 너무 긴 ID도 줄여보겠습니다.

```
$ opmate node edit -id 6FE9E69A10B44EBEAFC3A9F05078066C -wi linux01 -st E
Requesting https://127.0.0.1:8443/opmate;user=bumbee
6FE9E69A10B44EBEAFC3A9F05078066C has been modified successfully.

$ opmate node edit -id 3106E85BCF76465F8F9B16BC3873C380 -wi linux02 -st E
Requesting https://127.0.0.1:8443/opmate;user=bumbee
3106E85BCF76465F8F9B16BC3873C380 has been modified successfully.
```

다시 조회합니다.

```
$ opmate node list
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+---------+-----------+------------+-------+----------+--------+------------------+--------+
| ID      | AGENT VER | CONNECT IP | OS    | HOSTNAME | OWNER  | HEARTBEAT        | STATUS |
+---------+-----------+------------+-------+----------+--------+------------------+--------+
| linux02 | 1.1.002   | 10.0.0.92  | Linux | myhost2  | bumbee | 2020/03/13 14:15 | enable |
| linux01 | 1.1.002   | 10.0.0.91  | Linux | myhost1  | bumbee | 2020/03/13 14:15 | enable |
+---------+-----------+------------+-------+----------+--------+------------------+--------+

ROWS COUNT : 2/2
```

노드가 활성화 되었고 ID도 사용하기 편하도록 짧게 바뀌었습니다.
소유자(OWNER)는 bumbee가 되었네요.

[목차](QuickTutorial.md) / [이전페이지](QuickTutorial2.md) / [다음페이지](QuickTutorial4.md)

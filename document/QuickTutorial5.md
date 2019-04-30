---
title: Quick Tutorial
description: 태스크 승인
---

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial4.md) / [다음페이지](QuickTutorial6.md)

```sh
$ opmate user list
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+--------+---------------+------+--------+
| ID     | NAME          | ROLE | STATUS |
+--------+---------------+------+--------+
| admin  | nimda         | 0    | enable |
| oprim  | Optimus Prime | 1    | enable |
| bumbee | Bumblebee     | 2    | enable |
+--------+---------------+------+--------+

ROWS COUNT : 3/3
```

```sh
$ opmate task reqappr -id diskusage -ai oprim
Requesting https://127.0.0.1:8443/opmate;user=bumbee
diskusage's approval has been requested successfully.
```

```sh
$ opmate task listappr
Requesting https://127.0.0.1:8443/opmate;user=oprim
+-----------+--------+--------------+---------+---------+---------+---------+-----------+-------------+------------------+------------+-------------+
| ID        | OWNER  | SCRIPT       | OS USER | BY SCH. | BY OND. | BY TASK | NEXT TASK | APPRV STAT. | APPRV REQ REASON | APPRV USER | DESCRIPTION |
+-----------+--------+--------------+---------+---------+---------+---------+-----------+-------------+------------------+------------+-------------+
| diskusage | bumbee | diskusage.sh | root    | disable | enable  | disable |           | request     |                  | oprim      |             |
+-----------+--------+--------------+---------+---------+---------+---------+-----------+-------------+------------------+------------+-------------+

ROWS COUNT : 1
```

```sh
$ opmate task acceptappr -id diskusage
Requesting https://127.0.0.1:8443/opmate;user=oprim
diskusage has been approved successfully.
```

```sh
$ opmate task view -id diskusage
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+------------------+--------------+
| FIELD            | VALUE        |
+------------------+--------------+
| [BASIS]          |              |
|                  |              |
| ID               | diskusage    |
| REVISION         | 1            |
| OWNER            | bumbee       |
| SCRIPT           | diskusage.sh |
| OS USER          | root         |
| BY SCHEDULER     | disable      |
| BY ONDEMAND      | enable       |
| BY TASK          | disable      |
| NEXT TASK        |              |
| APPRV STATUS     | approval     |
| APPRV REQ REASON |              |
| APPRV RJT REASON |              |
| APPRV USER       | oprim        |
| DESCRIPTION      |              |
|                  |              |
| [SCHEDULES]      |              |
|                  |              |
| [RUNNERS]        |              |
|                  |              |
| [TARGETS]        |              |
|                  | linux01(N)   |
|                  | linux02(N)   |
+------------------+--------------+
```

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial4.md) / [다음페이지](QuickTutorial6.md)

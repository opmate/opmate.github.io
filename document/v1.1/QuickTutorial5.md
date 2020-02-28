---
title: Tutorial
description: 태스크 승인
---

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial4.md) / [다음페이지](QuickTutorial6.md)

신규로 생성한 태스크는 실행하기 위해서는 승인을 먼저 받아야 합니다.
승인은 승인권한을 가지고 있는 사용자만이 할 수 있습니다.
사용자 목록을 조회해보겠습니다.

```
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

ROLE이 1 또는 0인 사용자가 승인 권한을 가지고 있습니다.
사용자 oprim에게 승인 요청을 하겠습니다.

```
$ opmate task reqappr -id diskusage -ai oprim
Requesting https://127.0.0.1:8443/opmate;user=bumbee
diskusage's approval has been requested successfully.
```

사용자 oprim은 bumbee에게 태스크를 승인해달라고 얘기를 듣고, 다음과 같이 승인해야할 목록을 조회해 봅니다.

```
$ opmate task listappr
Requesting https://127.0.0.1:8443/opmate;user=oprim
+-----------+--------+--------------+---------+---------+---------+---------+-----------+-------------+------------------+------------+-------------+
| ID        | OWNER  | SCRIPT       | OS USER | BY SCH. | BY OND. | BY TASK | NEXT TASK | APPRV STAT. | APPRV REQ REASON | APPRV USER | DESCRIPTION |
+-----------+--------+--------------+---------+---------+---------+---------+-----------+-------------+------------------+------------+-------------+
| diskusage | bumbee | diskusage.sh | root    | disable | enable  | disable |           | request     |                  | oprim      |             |
+-----------+--------+--------------+---------+---------+---------+---------+-----------+-------------+------------------+------------+-------------+

ROWS COUNT : 1
```

diskusage라는 태스크가 목록에 있네요.
다음과 같이 태스크를 승인합니다.

```
$ opmate task acceptappr -id diskusage
Requesting https://127.0.0.1:8443/opmate;user=oprim
diskusage has been approved successfully.
```

다시, 태스크 내용을 상세히 보겠습니다.

```
$ opmate task view -id diskusage
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+------------------+---------------+
| FIELD            | VALUE         |
+------------------+---------------+
| [BASIS]          |               |
|                  |               |
| ID               | diskusage     |
| REVISION         | 1             |
| OWNER            | bumbee        |
| SCRIPT           | diskusage.sh  |
| OS USER          | root          |
| BY SCHEDULER     | disable       |
| BY ONDEMAND      | enable        |
| BY TASK          | disable       |
| NEXT TASK        |               |
| APPRV STATUS     | approval      |
| APPRV REQ REASON |               |
| APPRV RJT REASON |               |
| APPRV USER       | oprim         |
| DESCRIPTION      |               |
|                  |               |
| [SCHEDULES]      |               |
|                  |               |
| [RUNNERS]        |               |
|                  |               |
| [TARGETS]        |               |
|                  | linux01(Node) |
|                  | linux02(Node) |
+------------------+---------------+
```

리비젼(REVISION)은 1로 바뀌어 있고, 승인상태(APPRV STATUS)도 승인(approval)으로 변경되었네요.
자, 이제 이 태스크를 실행할 준비가 되었습니다.

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial4.md) / [다음페이지](QuickTutorial6.md)

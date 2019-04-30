---
title: Quick Tutorial
description: 태스크 정의
---

```sh
$ vi diskusage.sh
#!/bin/sh
df -h
```

```sh
$ opmate task create -id diskusage -sf ./diskusage.sh -ou root -eo E
Requesting https://127.0.0.1:8443/opmate;user=bumbee
diskusage has been created successfully.

$ opmate task addtarget -id diskusage -nd linux01
Requesting https://127.0.0.1:8443/opmate;user=bumbee
linux01 has been added to target successfully.

$ opmate task addtarget -id diskusage -nd linux02
Requesting https://127.0.0.1:8443/opmate;user=bumbee
linux02 has been added to target successfully.
```

```sh
$ opmate task list -oi bumbee
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+-----------+------+--------+--------------+---------+-----------+-------------+------------+
| ID        | REV. | OWNER  | SCRIPT       | OS USER | NEXT TASK | APPRV STAT. | APPRV USER |
+-----------+------+--------+--------------+---------+-----------+-------------+------------+
| diskusage | 0    | bumbee | diskusage.sh | root    |           | N/A         |            |
+-----------+------+--------+--------------+---------+-----------+-------------+------------+

ROWS COUNT : 1/1

$ opmate task view -id diskusage
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+------------------+--------------+
| FIELD            | VALUE        |
+------------------+--------------+
| [BASIS]          |              |
|                  |              |
| ID               | diskusage    |
| REVISION         | 0            |
| OWNER            | bumbee       |
| SCRIPT           | diskusage.sh |
| OS USER          | root         |
| BY SCHEDULER     | disable      |
| BY ONDEMAND      | enable       |
| BY TASK          | disable      |
| NEXT TASK        |              |
| APPRV STATUS     | N/A          |
| APPRV REQ REASON |              |
| APPRV RJT REASON |              |
| APPRV USER       |              |
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

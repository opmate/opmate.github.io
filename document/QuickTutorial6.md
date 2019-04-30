---
title: Quick Tutorial
description: 태스크 실행
---

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial5.md)

```sh
$ opmate task run -id diskusage
Requesting https://127.0.0.1:8443/opmate;user=bumbee
Instance(142) of task has been created.
```

```
$ opmate task listrun -id diskusage   
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+------------------+---------------------+---------------------+--------------+-----------+
| TASK INSTANCE NO | START DT            | END DT              | RUNNER       | NEXT TASK |
+------------------+---------------------+---------------------+--------------+-----------+
| 142              | 2019/04/30 17:49:54 | 2019/04/30 17:50:07 | bumbee(User) |           |
+------------------+---------------------+---------------------+--------------+-----------+

ROWS COUNT : 1/1
```

```
$ opmate task listrunnode -in 142
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+---------+---------+----------+---------------------+---------------------+---------+---------+
| NODE ID | EXEC NO | STATUS   | START DT            | END DT              | RESULT  | EXIT CD |
+---------+---------+----------+---------------------+---------------------+---------+---------+
| linux01 | 1       | Complete | 2019/04/30 17:50:03 | 2019/04/30 17:50:03 | Success | 0       |
| linux02 | 1       | Complete | 2019/04/30 17:50:03 | 2019/04/30 17:50:03 | Success | 0       |
+---------+---------+----------+---------------------+---------------------+---------+---------+
```

```
$ opmate task viewrun -in 142 -ni linux01
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+------------------+---------------------+
| FIELD            | VALUE               |
+------------------+---------------------+
| TASK INSTANCE NO | 142                 |
| TASK ID          | diskusage           |
| NODE ID          | linux01             |
| EXEC NO          | 1                   |
| STATUS           | Complete            |
| START DT         | 2019/04/30 17:50:03 |
| END DT           | 2019/04/30 17:50:03 |
| RUNNER           | bumbee(User)        |
| RESULT           | Success             |
| EXIT CD          | 0                   |
+------------------+---------------------+

[Standard error]
No content.

[Standard output]
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   50G  1.3G   49G   3% /
devtmpfs                 486M     0  486M   0% /dev
tmpfs                    496M     0  496M   0% /dev/shm
tmpfs                    496M  6.6M  490M   2% /run
tmpfs                    496M     0  496M   0% /sys/fs/cgroup
/dev/sda1               1014M  153M  862M  16% /boot
/dev/mapper/centos-home   47G  101M   47G   1% /home
tmpfs                    100M     0  100M   0% /run/user/0
```

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial5.md)

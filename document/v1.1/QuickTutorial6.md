---
title: Tutorial
description: 태스크 실행
---

[목차](QuickTutorial.md) / [이전페이지](QuickTutorial5.md)

드디어, 태스크 실행입니다.

```
$ opmate task run -id diskusage
Requesting https://127.0.0.1:8443/opmate;user=bumbee
task-instance #234 has been created successfully.
```

태스크를 한번 실행하면 그와 대응하는 태스크 인스턴스(Task Instance)가 만들어집니다.
위에서는 234으로 인스턴스가 생성되었고, 이 번호는 전체 태스크에서 고유한 번호입니다.

태스크 diskusage의 인스턴스를 조회해보겠습니다.

```
$ opmate taskinstance list -id diskusage
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+------------------+-------------+---------------------+---------------------+--------------+---------+
| TASK INSTANCE NO | TASK ID     | START AT            | END AT              | RUNNER       | RESULT  |
+------------------+-------------+---------------------+---------------------+--------------+---------+
| 234              | diskusage   | 2020/03/16 17:49:54 | 2020/03/16 17:50:07 | bumbee(User) | Success |
+------------------+-------------+---------------------+---------------------+--------------+---------+

ROWS COUNT : 1/1
```

태스크 실행한 모든 인스턴스를 목록에서 볼 수 있습니다.
인스턴스별 시작시간과(START AT)과 종료시간(END AT)이 출력되는데, 종료시간이 표시된다는 것은 태스크의 타겟 노드 전체가 완료되었다는 의미입니다.
단 한개의 노드라도 완료되지 않으면 표시되지 않습니다.

이 인스턴스의 타겟 노드별 결과도 확인해보겠습니다.

```
$ opmate taskinstance listnode -in 234
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+---------+---------+----------+---------------------+---------------------+---------+---------+
| NODE ID | EXEC NO | STATUS   | START AT            | END AT              | RESULT  | EXIT CD |
+---------+---------+----------+---------------------+---------------------+---------+---------+
| linux01 | 1       | Complete | 2020/03/16 17:50:03 | 2020/03/16 17:50:03 | Success | 0       |
| linux02 | 1       | Complete | 2020/03/16 17:50:03 | 2020/03/16 17:50:03 | Success | 0       |
+---------+---------+----------+---------------------+---------------------+---------+---------+
```

각 노드별로 진행상태 및 결과가 출력되는군요.

하나의 노드를 지정해서 조금 더 상세히 조회해 보겠습니다.

```
$ opmate taskinstance viewnode -in 234 -ni linux01
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+------------------+---------------------+
| FIELD            | VALUE               |
+------------------+---------------------+
| TASK INSTANCE NO | 142                 |
| TASK ID          | diskusage           |
| NODE ID          | linux01             |
| EXEC NO          | 1                   |
| STATUS           | Complete            |
| START AT         | 2020/03/16 17:50:03 |
| END AT           | 2020/03/16 17:50:03 |
| CREATED BY       | bumbee(User)        |
| RESULT           | Success             |
| EXIT CD          | 0                   |
+------------------+---------------------+

[STDERR]
No content.

[STDOUT]
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

스크립트의 실행결과인 표준에러와 표준출력을 확인할 수 있습니다.

지금까지 간단한 예제를 통해 기초적인 이해와 사용 방법을 익히셨습니다.
실전에서 사용하기 위한 세부적인 내용은 [사용자 매뉴얼](UserManual.md)를 참고하시기 바랍니다.

[목차](QuickTutorial.md) / [이전페이지](QuickTutorial5.md)

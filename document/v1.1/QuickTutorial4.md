---
title: Tutorial
description: 태스크 정의
---

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial3.md) / [다음페이지](QuickTutorial5.md)

에이전트가 설치된 노드에 명령을 실행하기 위해서, 태스크(Task)를 정의해야 합니다.

먼저, 스크립트 파일을 만듭니다.

```
$ vi diskusage.sh
#!/bin/sh
df -h
```

`diskusage`라는 ID로 태스크를 생성합니다.
위에서 만든 쉘스크립트 파일의 경로를 주고, 서버에서 실행할 OS 사용자명은 root로 지정합니다.
또한, 온디맨드 방식으로 실행할 수 있도록, `'-eo E'` 옵션도 추가합니다.

```
$ opmate task create -id diskusage -sf ./diskusage.sh -ou root -eo E
Requesting https://127.0.0.1:8443/opmate;user=bumbee
diskusage has been created successfully.
```

생성한 태스크가 어떤 노드에서 실행될지 타겟노드(Target Node)를 지정해야 합니다.
2개 노드에서 실행되도록 다음과 같이 입력합니다.

```
$ opmate task addtarget -id diskusage -nd linux01
Requesting https://127.0.0.1:8443/opmate;user=bumbee
linux01 has been added to target successfully.

$ opmate task addtarget -id diskusage -nd linux02
Requesting https://127.0.0.1:8443/opmate;user=bumbee
linux02 has been added to target successfully.
```

태스크가 잘 생성되었는지 확인해 보겠습니다.
태스크가 많으면 목록이 너무 길어질테니, 소유자(OWNER)가 bumbee인 태스크만 조회해 봅니다.

```
$ opmate task list -oi bumbee
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+-----------+------+--------+--------------+---------+-----------+-------------+------------+
| ID        | REV. | OWNER  | SCRIPT       | OS USER | NEXT TASK | APPRV STAT. | APPRV USER |
+-----------+------+--------+--------------+---------+-----------+-------------+------------+
| diskusage | 0    | bumbee | diskusage.sh | root    |           | N/A         |            |
+-----------+------+--------+--------------+---------+-----------+-------------+------------+

ROWS COUNT : 1/1
```

조금 더 자세히 볼까요?

```
$ opmate task view -id diskusage
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+------------------+---------------+
| FIELD            | VALUE         |
+------------------+---------------+
| [BASIS]          |               |
|                  |               |
| ID               | diskusage     |
| REVISION         | 0             |
| OWNER            | bumbee        |
| SCRIPT           | diskusage.sh  |
| OS USER          | root          |
| BY SCHEDULER     | disable       |
| BY ONDEMAND      | enable        |
| BY TASK          | disable       |
| NEXT TASK        |               |
| APPRV STATUS     | N/A           |
| APPRV REQ REASON |               |
| APPRV RJT REASON |               |
| APPRV USER       |               |
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

잘 생성되었지만 아직 아니랍니다.
리비젼(REVISION) 번호가 0인 것과 승인상태(APPRV STATUS)가 N/A인 것에 주목하세요.
태스크는 승인을 받아야 실제로 실행할 수 있습니다.

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial3.md) / [다음페이지](QuickTutorial5.md)

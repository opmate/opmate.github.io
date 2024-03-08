---
title: OPMATE V2.0
description: Tutorial
---

## Tutorial 4 : Task 실행

execution subject를 활용해 배포된 Task를 실행할 수 있습니다.

<br>

### Task 실행
- - -

execution run 명령어를 활용해 기존에 만들어두었던 Task를 실행하겠습니다.

```
$ opmate execution run -

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> execution #1 has been created successfully.
```

Execution #"1"으로 Task가 실행된 것을 확인할 수 있습니다. 이 때 "1"이 Execution의 ID값이 됩니다.

Execution은 Task 실행의 단위입니다. Task가 실행될 때마다 가산됩니다.

### Task 결과 조회
- - -

Task 실행 결과를 조회해보겠습니다.

execution listnode 명령을 활용하면 해당 Execution에 대한 타겟 노드들의 실행 결과를 조회할 수 있습니다.

```bash
$ opmate execution listnode -id 1

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> 
+------------------+-----------+---------------+-----------+---------+
| NODE-SESSION-ID  | HOSTNAME  | REMOTE-ADDR   | STATUS    | RESULT  |
+------------------+-----------+---------------+-----------+---------+
| 1a2b3c4d-aaaa... | test1     | XX.XXX.XXX.XX | completed | success |
| 1a2b3c4d-bbbb... | test2     | XX.XXX.XXX.XX | completed | success |
+------------------+-----------+---------------+-----------+---------+
```

<br>

이제 exeuction viewnode로 노드에서의 실행 결과를 확인해보겠습니다.

```bash
$ opmate execution viewnode -id 1 -nd 1a2b3c4d-aaaa...

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong

+-----------------+--------------------------------------------------+
| FIELD           | VALUE                                            |
+-----------------+--------------------------------------------------+
| NODE-SESSION-ID | 1a2b3c4d-aaaa...                                 |
| HOSTNAME        | test1                                            |
| REMOTE-ADDRESS  | XX.XXX.XXX.XX                                    |
| ACCOUNT         | root                                             |
| STATUS          | completed                                        |
| RESULT          | success                                          |
| EXIT-NUM        | 0                                                |
| FORCE-STOP      | n/a                                              |
| START-DATE      | 202X-XX-XX XX:XX:XX KST                          |
| END-DATE        | 202X-XX-XX XX:XX:XX KST                          |
+-----------------+--------------------------------------------------+

[STDOUT]
 XX:XX:XX up XX days, XX:XX,  X users,  load average: 0.XX, 0.XX, 0.XX

[STDERR]
No content.

```

해당 노드의 Task(uptime) 실행 결과가 STDOUT에 표시됩니다.



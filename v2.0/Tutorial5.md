---
title: OPMATE V2.0
description: Tutorial 5 - Exectue Task
---

## Tutorial 5 : Task 실행

**Execution**은 Task 실행의 단위, 즉 인스턴스입니다.

<br>

### Task 실행
- - -

<div><inline>opmate execution run</inline>으로 이전 단계에서 생성한 Task를 실행합니다.</div>

<br>

```
$ opmate execution run -ts test_uptime

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> execution #1 has been created successfully.
```

- <div><u>Task ID</u>를 <inline>-ts</inline> 파라미터값으로 입력합니다.</div>

- Execution <u><b>#1</b></u>으로 Task가 실행된 것을 확인할 수 있습니다. 
    - 이때 <b><u>'1'</u></b> 은 해당 Execution의 <u>Execution ID</u>입니다.

<br>

### Execution 결과 조회
- - -

<div><inline>opmate execution listnode</inline>로 모든 타깃 Node에서의 Task 실행 결과를 조회합니다.</div>

<br>

```bash
$ opmate execution listnode -id 1

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong

+------------------+-----------+---------------+-----------+---------+
| NODE-SESSION-ID  | HOSTNAME  | REMOTE-ADDR   | STATUS    | RESULT  |
+------------------+-----------+---------------+-----------+---------+
| 1a2b3c4d-aaaa... | test1     | XX.XXX.XXX.XX | completed | success |
| 1a2b3c4d-bbbb... | test2     | XX.XXX.XXX.XX | completed | success |
+------------------+-----------+---------------+-----------+---------+
```

- <div><u>Execution ID</u>를 <inline>-id</inline> 파라미터값으로 입력합니다.</div>

<br>

### Execution 상세 조회
- - -

<div><inline>opmate execution viewnode</inline>로 각 타깃 Node에서의 Task 실행 결과를 확인합니다.</div>

<br>

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

- <div><u>Execution ID</u>를 <inline>-id</inline> 파라미터값으로 입력합니다.</div>

- <div><u>Node ID</u>를 <inline>-nd</inline> 파라미터값으로 입력합니다.</div>

- 해당 Node의 Script 실행 결과(<inline>uptime</inline>)가 하단에 출력됩니다.
    - 표준 출력이 <u>STDOUT</u>에 출력됩니다.
    - 표준 에러가 <u>STDERR</u>에 출력됩니다.
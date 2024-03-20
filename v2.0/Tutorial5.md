---
title: OPMATE V2.0
description: Tutorial 5 - Exectue Task
---

## Tutorial 5 : Task 실행 및 권한 확인

저번 단계에서 Task를 정상적으로 배포했다면, 태스크를 **실행(Execution)** 할 수 있습니다.

태스크를 실행한다면 실행 인스턴스가 만들어지고, 실행 인스턴스별로 실행 ID를 부여받게 됩니다.

<br>

### Task 실행
- - -

<div><inline>opmate execution run</inline>으로 이전 단계에서 생성한 Task를 실행할 수 있습니다.</div>

<br>

```
$ opmate execution run -ts task_uptime

> Requesting https://3.36.57.8:8443/opmate;user=gildong
> execution #1 has been created successfully.
```

- Execution <u><b>#1</b></u>으로 Task가 실행된 것을 확인할 수 있습니다. 
    - 이때 <b><u>'1'</u></b> 은 해당 Execution의 <u>Execution ID</u>입니다.

<br>

### Execution 결과 조회
- - -

<div><inline>opmate execution listnode</inline>로 타깃 노드에서의 태스크 실행 결과 리스트를 조회합니다.</div>

<br>

```bash
$ opmate execution listnode -id 1

> Requesting https://3.36.57.8:8443/opmate;user=gildong

+--------------------------------------+-----------------+---------------+-----------+---------+
| NODE-SESSION-ID                      | HOSTNAME        | REMOTE-ADDR   | STATUS    | RESULT  |
+--------------------------------------+-----------------+---------------+-----------+---------+
| 9510d4b6-4269-4b00-a2be-cb408c6e668d | APP-DEV-LINUX   | 3.36.57.199   | stopped   | n/a     |
| 01d5020e-dc5f-4744-ad9c-22f23727db76 | DB-DEV-LINUX    | 203.236.3.225 | completed | success |
| ea3117fe-2c16-4533-afb7-8b0fe7685251 | DB-PROD-LINUX   | 3.36.57.8     | completed | success |
+--------------------------------------+-----------------+---------------+-----------+---------+

> ROWS COUNT : 3/3

```

3개의 Linux 노드에 대해서 2대는 completed, 1개는 stopped가 된 것을 확인할 수 있습니다.

STATUS가 completed면 스크립트가 정상적으로 실행 완료되었다는 뜻입니다.
만약 status가 running이라면 스크립트가 실행 중이라는 뜻으로 조금만 대기합니다.

completed된 노드 중 하나인 'DB-DEV-LINUX'를 <div><inline>opmate execution viewnode</inline>로 조회해보겠습니다.

```bash
$ opmate execution viewnode -id 1 -nd 01d5020e-dc5f-4744-ad9c-22f23727db76

> Requesting https://3.36.57.8:8443/opmate;user=gildong

+-----------------+--------------------------------------+
| FIELD           | VALUE                                |
+-----------------+--------------------------------------+
| NODE-SESSION-ID | 01d5020e-dc5f-4744-ad9c-22f23727db76 |
| HOSTNAME        | DB-DEV-LINUX                         |
| REMOTE-ADDRESS  | 203.236.3.225                        |
| ACCOUNT         | root                                 |
| STATUS          | completed                            |
| RESULT          | success                              |
| EXIT-NUM        | 0                                    |
| FORCE-STOP      | n/a                                  |
| START-DATE      | 2024-03-20 16:14:19 KST              |
| END-DATE        | 2024-03-20 16:14:20 KST              |
+-----------------+--------------------------------------+

[STDOUT]
 07:14:20 up  4:45,  0 users,  load average: 0.05, 0.03, 0.01

[STDERR]
No content.

```

표준 출력(STDOUT)으로 스크립트(uptime)의 결과가 출력되는 것을 확인할 수 있습니다.

그러면 STATUS가 stopped인 노드를 조회해볼까요?


```bash
$ opmate execution viewnode -id 1 -nd 9510d4b6-4269-4b00-a2be-cb408c6e668d

> Requesting https://3.36.57.8:8443/opmate;user=gildong

+-----------------+--------------------------------------+
| FIELD           | VALUE                                |
+-----------------+--------------------------------------+
| NODE-SESSION-ID | 9510d4b6-4269-4b00-a2be-cb408c6e668d |
| HOSTNAME        | APP-DEV-LINUX                        |
| REMOTE-ADDRESS  | 3.36.57.199                          |
| ACCOUNT         | root                                 |
| STATUS          | stopped : no role of node            |
| RESULT          | n/a                                  |
| EXIT-NUM        |                                      |
| FORCE-STOP      | n/a                                  |
| START-DATE      |                                      |
| END-DATE        |                                      |
+-----------------+--------------------------------------+

[STDOUT]
No content.
[STDERR]
No content.

```

'no role of node'라고 태스크 실행이 멈춘 것을 확인할 수 있습니다.

그러면 role이란 과연 무엇이고, 왜 태스크 실행이 중지되었을까요?



### 권한 확인
- - -

**역할(Role)**은 노드에서의 태스크 실행 권한입니다.

노드를 태스크의 대상으로 지정할 때는 반드시 지정한 노드에 대한 역할을 가지고 있어야 합니다.

<br>

그럼 Gildong은 어떤 역할을 가지고 있는 지 조회해보겠습니다.

<div>우선 <inline>opmate role list</inline>로 전체 Role 목록을 조회합니다.</div>

```bash

$ opmate role list

> Requesting https://3.36.57.8:8443/opmate;user=gildong

+-------------+------------+
| ID          | NAME       |
+-------------+------------+
| ro-app-dev  | APP 개발자 |
| ro-db-admin | DB 관리자  |
| ro-db-dev   | DB 개발자  |
+-------------+------------+

>ROWS COUNT : 3/3

```

여기서 <inline>opmate role view</inline>로 DB 관리자 역할을 조회합니다

```bash

$ opmate ro view -id ro-db-admin

> Requesting https://3.36.57.8:8443/opmate;user=gildong

+----------+------------------------------------+
| FIELD    | VALUE                              |
+----------+------------------------------------+
| ID       | ro-db-admin                        |
| NAME     | DB 관리자                          |
| CREATED  | 2024-03-20 16:02:14 KST BY admin   |
| UPDATED  | 2024-03-20 16:14:04 KST BY admin   |
+----------+------------------------------------+
| NODE-SET | #1. HOSTNAME:"DB+" AS * # DB 서버  |
+----------+------------------------------------+
| USER     | admin(관리자)                      |
|          | gildong(홍길동)                    |
+----------+------------------------------------+

```

해당 역할은 DB 관리자에 대한 역할입니다.

USER는 역할을 사용할 수 있는 사용자 목록입니다.
gildong이 해당됩니다.

NODE-SET으로 지정되어 있는 노드 집합 표현식입니다.
예시에서는 호스트명이 'DB'로 시작되는 모든 노드를 지정하고 있습니다.

아하!
stopped 상태의 노드는 호스트명이 'APP'으로 시작되는 노드이므로,
DB 관리자인 gildong에게는 해당 노드에 대한 권한, 즉 역할이 없습니다.

따라서 DB 노드에서만 태스크를 실행하고 싶다면
4장에서 만들었던 태스크 정의서를 다음과 같이 수정해야 됩니다:

```yaml
---
id: task_uptime
owner: gildong
publisher: gildong
script-account: root
description: 서버 가동 시간 조회

target:
- node-set: HOSTNAME:"DB+", OS-TYPE:"^Linux$"
  description: OS가 Linux인 모든 DB 대상으로 Task 실행

```

수정 후 task_uptime 태스크를 수정(opmate task edit) 및 배포(opmate task publish)하고,

태스크 실행(opmate execution run)까지 완료하면 실행 결과가 다음과 같이 변경됩니다:


```bash
$ opmate execution listnode -id 2

> Requesting https://3.36.57.8:8443/opmate;user=gildong

+--------------------------------------+-----------------+---------------+-----------+---------+
| NODE-SESSION-ID                      | HOSTNAME        | REMOTE-ADDR   | STATUS    | RESULT  |
+--------------------------------------+-----------------+---------------+-----------+---------+
| 01d5020e-dc5f-4744-ad9c-22f23727db76 | DB-DEV-LINUX    | 203.236.3.225 | completed | success |
| ea3117fe-2c16-4533-afb7-8b0fe7685251 | DB-PROD-LINUX   | 3.36.57.8     | completed | success |
+--------------------------------------+-----------------+---------------+-----------+---------+

> ROWS COUNT : 2/2

```

APP-DEV-LINUX 노드가 실행 목록에서 제외된 것을 확인할 수 있습니다.


-EOD-
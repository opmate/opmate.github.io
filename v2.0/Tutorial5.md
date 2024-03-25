---
title: OPMATE V2.0
description: Tutorial 5 - Exectue Task
# version: v1.00
---

## Tutorial 5 : 태스크 실행 및 권한 확인
- - -

태스크가 정상적으로 발행됐다면, 태스크를 **실행(Execution)** 할 수 있습니다.

태스크가 실행되면 실행 인스턴스가 만들어지고, 실행 인스턴스별로 <u>실행 ID</u>를 부여받게 됩니다.

<br>

### 태스크 실행
- - -

<span><inline style="color:#ff4500">opmate execution run</inline>으로 이전 단계에서 발행한 태스크를 실행할 수 있습니다.</span>

```
$ opmate execution run -ts task_uptime

> Requesting https://127.0.0.1:8443/opmate;user=gildong
> execution #1 has been created successfully.
```

- 'Execution <u><b>#1</b></u>'으로 태스크가 실행된 것을 확인할 수 있습니다. 
    - 이때 <b><u>'1'</u></b> 은 해당 실행의 <u>실행 ID</u>입니다.

<br>

### Execution 결과 조회
- - -

<span><inline style="color:#ff4500">opmate execution listnode</inline>로 태스크 실행 결과 목록을 조회합니다.</span>

```bash
$ opmate execution listnode -id 1

> Requesting https://127.0.0.1:8443/opmate;user=gildong

+--------------------------------------+-----------------+---------------+-----------+---------+
| NODE-SESSION-ID                      | HOSTNAME        | REMOTE-ADDR   | STATUS    | RESULT  |
+--------------------------------------+-----------------+---------------+-----------+---------+
| 9510d4b6-4269-4b00-a2be-cb408c6e668d | APP-DEV-LINUX   | 172.31.8.75   | stopped   | n/a     |
| 01d5020e-dc5f-4744-ad9c-22f23727db76 | DB-DEV-LINUX    | 172.31.3.147  | completed | success |
| ea3117fe-2c16-4533-afb7-8b0fe7685251 | DB-PROD-LINUX   | 172.31.8.148  | completed | success |
+--------------------------------------+-----------------+---------------+-----------+---------+

> ROWS COUNT : 3/3

```

모든 리눅스 노드를 대상으로 태스크를 실행했기에 총 3개의 노드가 조회됩니다.

여기서 <u>STATUS</u>가 <inline style="color:#ff4500">completed</inline>라면 태스크가 정상적으로 실행 완료되었다는 뜻입니다.\
<span><u>STATUS</u>가 <inline style="color:#ff4500">requesting</inline>이나 <inline style="color:#ff4500">running</inline>라면 태스크가 실행 중이라는 뜻으로 잠시 대기합니다.</span>\
<span>만약 <u>STATUS</u>가 <inline style="color:#ff4500">stopped</inline>라면 모종의 이유로 태스크가 중지되었다는 뜻입니다.</span>


<span>실행 완료된 노드 중 하나인 'DB-DEV-LINUX'를 <inline style="color:#ff4500">opmate execution viewnode</inline>로 상세 조회해 보겠습니다.</span>

```bash
$ opmate execution viewnode -id 1 -nd 01d5020e-dc5f-4744-ad9c-22f23727db76

> Requesting https://127.0.0.1:8443/opmate;user=gildong

+-----------------+--------------------------------------+
| FIELD           | VALUE                                |
+-----------------+--------------------------------------+
| NODE-SESSION-ID | 01d5020e-dc5f-4744-ad9c-22f23727db76 |
| HOSTNAME        | DB-DEV-LINUX                         |
| REMOTE-ADDRESS  | 172.31.3.147                         |
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

표준 출력(STDOUT)으로 스크립트(<inline style="color:#ff4500">uptime</inline>)의 결과가 출력되는 것을 확인할 수 있습니다.

그렇다면 이번엔 <u>STATUS</u>가 <inline style="color:#ff4500">stopped</inline>였던 'APP-DEV-LINUX' 노드를 상세 조회해 볼까요?


```bash
$ opmate execution viewnode -id 1 -nd 9510d4b6-4269-4b00-a2be-cb408c6e668d

> Requesting https://127.0.0.1:8443/opmate;user=gildong

+-----------------+--------------------------------------+
| FIELD           | VALUE                                |
+-----------------+--------------------------------------+
| NODE-SESSION-ID | 9510d4b6-4269-4b00-a2be-cb408c6e668d |
| HOSTNAME        | APP-DEV-LINUX                        |
| REMOTE-ADDRESS  | 172.31.8.75                          |
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

<span><inline style="color:#ff4500">'no role of node'</inline>라는 메시지와 함께 태스크 실행이 중단된 것을 확인할 수 있습니다.</span>

그러면 role이란 과연 무엇이고, 왜 태스크 실행이 중단되었을까요?

<br>

### 권한 확인
- - -

**역할(Role)**은 노드에서의 태스크 실행 권한입니다.\
태스크의 소유자(Owner)가 노드를 태스크의 대상으로 지정할 때는 반드시 지정한 노드에 대한 역할을 가지고 있어야 합니다.

그럼 <span style="color:#0000FF">'gildong'</span> 이 어떤 역할을 가지고 있는 지 조회해 보겠습니다.\
<span>우선 <inline style="color:#ff4500">opmate role list</inline>로 전체 역할 목록을 조회합니다.</span>

```bash

$ opmate role list

> Requesting https://127.0.0.1:8443/opmate;user=gildong

+-------------+------------+
| ID          | NAME       |
+-------------+------------+
| ro-app-dev  | APP 개발자  |
| ro-db-admin | DB 관리자   |
| ro-db-dev   | DB 개발자   |
+-------------+------------+

>ROWS COUNT : 3/3

```

총 3개의 역할이 조회됩니다.

다시 한번 상기하자면, <span style="color:#0000FF">'gildong'</span>은 DB 관리자입니다.\
따라서 <inline style="color:#ff4500">opmate role view</inline>로 <u>'DB 관리자'</u> 역할을 상세 조회해 보겠습니다.

```bash

$ opmate role view -id ro-db-admin

> Requesting https://127.0.0.1:8443/opmate;user=gildong

+----------+------------------------------------+
| FIELD    | VALUE                              |
+----------+------------------------------------+
| ID       | ro-db-admin                        |
| NAME     | DB 관리자                           |
| CREATED  | 2024-03-20 16:02:14 KST BY admin   |
| UPDATED  | 2024-03-20 16:14:04 KST BY admin   |
+----------+------------------------------------+
| NODE-SET | #1. HOSTNAME:"DB+" AS * # DB 서버   |
+----------+------------------------------------+
| USER     | admin(관리자)                       |
|          | gildong(홍길동)                     |
+----------+------------------------------------+

```

<u>USER</u>는 역할을 사용할 수 있는 사용자입니다. 예시에선 <span style="color:#0000FF">'admin'</span>과 <span style="color:#0000FF">'gildong'</span> 이 해당합니다.

<u>NODE-SET</u>은 역할을 가진 사용자가 사용할 수 있는 노드입니다. 정규 표현식으로 지정되어 있습니다.

예시에서는 호스트명이 'DB'로 시작되는 모든 노드가 지정되어 있는데요,

<span><inline style="color:#ff4500">stopped</inline> 상태였던 'APP-DEV-LINUX' 노드는 'DB'로 시작되는 노드가 아니므로,</span>\
<u>'DB 관리자'</u> 역할만 가지고 있는 <span style="color:#0000FF">'gildong'</span> 에게는 해당 노드에 대한 권한, 즉 역할이 없습니다.

따라서 해당 노드를 제외하여, DB 노드에서만 태스크를 실행하고 싶다면\
[4장: 태스크 정의](Tutorial4.md)에서 만들었던 태스크 정의서(<inline style="color:#ff4500">test_uptime.tdf</inline>)를 다음과 같이 수정해야 합니다:

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

<span><inline style="color:#ff4500">node-set</inline>에 <inline style="color:#ff4500">HOSTNAME: "DB+"</inline>라는 표현식을 추가했습니다.<span><br>
<span>이는 <inline style="color:#ff4500">HOSTNAME</inline>에 'DB'라는 식별자가 들어간 노드만을 포함한다는 뜻입니다.</span><br>
<span><inline style="color:#ff4500">DB+</inline>는 'DB'라는 문자열이 한번 이상 반복됨을 의미합니다. 

<br>
수정 후 task_uptime 태스크를 수정(<inline style="color:#ff4500">opmate task edit</inline>) 및 발행(<inline style="color:#ff4500">opmate task publish</inline>)하고,\
실행(<inline style="color:#ff4500">opmate execution run</inline>)까지 완료하면 태스크 실행 결과가 다음과 같이 변경됩니다:


```bash
$ opmate execution listnode -id 2

> Requesting https://127.0.0.1:8443/opmate;user=gildong

+--------------------------------------+-----------------+---------------+-----------+---------+
| NODE-SESSION-ID                      | HOSTNAME        | REMOTE-ADDR   | STATUS    | RESULT  |
+--------------------------------------+-----------------+---------------+-----------+---------+
| 01d5020e-dc5f-4744-ad9c-22f23727db76 | DB-DEV-LINUX    | 172.31.3.147  | completed | success |
| ea3117fe-2c16-4533-afb7-8b0fe7685251 | DB-PROD-LINUX   | 172.31.3.148  | completed | success |
+--------------------------------------+-----------------+---------------+-----------+---------+

> ROWS COUNT : 2/2

```

'APP-DEV-LINUX' 노드가 실행 목록에서 제외된 것을 확인할 수 있습니다.

<br>

[이전페이지](Tutorial4.md) / [목차](Tutorial.md)
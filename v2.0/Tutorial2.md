---
title: OPMATE V2.0
description: Tutorial 2 - View Node
---

## Tutorial 2 : Node 조회
- - -

**Node**는 Task 실행의 주체입니다.

Task 생성에 앞서 활용할 수 있는 **Node**를 조회합니다.


<br>

### Node 목록 조회
- - -

<div><inline>opmate node list</inline>로 <b>전체 Node 목록</b>을 조회합니다.</div>

<br>

```bash

$ opmate node list

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
+------------------+-----------+---------------+---------+-----------+-------------------------+
| NODE-SESSION-ID  | HOSTNAME  | REMOTE-ADDR   | OS-TYPE | AGENT-VER | HEARTBEAT               |
+------------------+-----------+---------------+---------+-----------+-------------------------+
| 1a2b3c4d-aaaa... | test1     | XX.XXX.XXX.XX | Linux   | 2.0.02X   | 202X-XX-XX XX:XX:XX KST |
| 1a2b3c4d-bbbb... | test2     | XX.XXX.XXX.XX | Linux   | 2.0.01X   | 202X-XX-XX XX:XX:XX KST |
| 1a2b3c4d-cccc... | test3     | XX.XXX.XXX.XX | Windows | 2.0.01X   | 202X-XX-XX XX:XX:XX KST |
+------------------+-----------+---------------+---------+-----------+-------------------------+
> ROWS COUNT : 3/3

```

- Master에 연결되어 가용 상태에 있는 모든 **Node**가 조회됩니다.

<br><br>

### Node 상세 조회
- - -

<div><inline>opmate node view</inline>로 <b>Node의 상세 정보</b>를 확인합니다.</div>

<br>

```bash

$ opmate node view -id 1a2b3c4d-aaaa...

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
+-----------------------+----------------------------------------------------------------------+
| FIELD                 | VALUE                                                                |
+-----------------------+----------------------------------------------------------------------+
| NODE-SESSION-ID       | 1a2b3c4d-aaaa....                                                    |
| SESSION-ESTABLISHMENT | 202X-XX-XX XX:XX:XX KST                                              |
| SESSION-STATUS        | normal                                                               |
| AGENT-VERSION         | 2.0.02X.Linux.x86_64.202XXXXX.X                                      |
| REMOTE-ADDRESS        | XXX.XXX.XXX.XXX                                                      |
| HEARTBEAT             | 202X-XX-XX XX:XX:XX KST                                              |
| HOSTNAME              | test1                                                                |
| OS-TYPE               | Linux                                                                |
| OS-NAME               | Amazon Linux 2077                                                    |
| OS-VERSION            | X.X.XX-XX.XXX.amzn2077.x86_64                                        |
+-----------------------+----------------------------------------------------------------------+
| CSP-RESOURCE-ID       | i-XXXXXXXXXXXXXXXXX                                                  |
| CSP-TAG               | AWS                                                                  |
+-----------------------+----------------------------------------------------------------------+
| EXT-TAG               | Test                                                                 |
+-----------------------+----------------------------------------------------------------------+


```

- <div><inline>opmate node list</inline>로 확인했던 'NODE-SESSION-ID'를 복사해 <inline>-id</inline> 파라미터로 입력합니다.<div>



- _Session 정보, OS 버전, CSP 태그_ 등 추가 정보를 확인할 수 있습니다.
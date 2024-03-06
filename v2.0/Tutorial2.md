---
title: OPMATE V2.0
description: Tutorial
---

## Tutorial 2 : Node 및 Role 조회

사용 가능한 Node 조회해보겠습니다.

먼저 Node 목록입니다.

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

* subject를 node(nd)로, action을 list으로 하여 Node 리스트 조회 명령을 트리거합니다. <br>

* Requesting...으로 시작하는 줄이 'user=Gildong'으로 끝나는 것으로 보아, Gildong 명의로 명령을 실행한 것을 알 수 있습니다.

* 총 3개의 Node가 조회되는 것을 확인할 수 있습니다. 이 3개의 노드는 현재 Master에 연결되어 가용 상태인 노드입니다.

<br>

각 Node의 상세 정보가 궁금하다면 'view' 명령을 활용 할 수 있습니다

hostname이 test1인 노드를 살펴볼까요?


```bash

$ opmate node view -id 1a2b3c4d-aaaa...

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong

+-----------------------+-----------------------------------------------------------------------------------+
| FIELD                 | VALUE                                                                             |
+-----------------------+-----------------------------------------------------------------------------------+
| NODE-SESSION-ID       | 1a2b3c4d-aaaa....                                                                 |
| SESSION-ESTABLISHMENT | 202X-XX-XX XX:XX:XX KST                                                           |
| SESSION-STATUS        | normal                                                                            |
| AGENT-VERSION         | 2.0.02X.Linux.x86_64.202XXXXX.X                                                   |
| REMOTE-ADDRESS        | XXX.XXX.XXX.XXX                                                                   |
| HEARTBEAT             | 202X-XX-XX XX:XX:XX KST                                                           |
| HOSTNAME              | test1                                                                             |
| OS-TYPE               | Linux                                                                             |
| OS-NAME               | Amazon Linux 2077                                                                 |
| OS-VERSION            | X.X.XX-XX.XXX.amzn2077.x86_64                                                     |
+-----------------------+-----------------------------------------------------------------------------------+
| CSP-RESOURCE-ID       | i-XXXXXXXXXXXXXXXXX                                                               |
| CSP-TAG               | AWS                                                                               |
+-----------------------+-----------------------------------------------------------------------------------+
| EXT-TAG               | Test                                                                              |
+-----------------------+-----------------------------------------------------------------------------------+


```

* node list로 확인했던 NODE-SESSION-ID를 복사해 -id 파라미터로 입력합니다.

* ID에 해당되는 노드의 상세 정보를 조회할 수 있습니다.
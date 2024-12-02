---
title: 1. CLI 명령어
description: 1. CLI 명령어
menu:
  v2:
    parent: v2-tutorial
weight: 2
firstpage: true
# version: v1.00
---

---

**OPMATE CLI 명령어**의 형식은 다음과 같습니다:

```bash
$ opmate <subject> <action> [<parameter>]
```


또한, 각각의 명령어의 활용법이 궁금하다면,\
명령어 맨 뒤에 `-h`나 `--help`를 붙여 사용 가능한 명령어와 매뉴얼을 조회할 수 있습니다.


```bash

# OPMATE CLI 가용 Subject 조회
$ opmate -h

# OPMATE CLI 매뉴얼 조회
$ opmate --help

# Subject에서 사용 가능한 Action 조회
$ opmate <subject> -h

# Subject 매뉴얼 조회
$ opmate <subject> --help

# Action에서 사용되는 파라미터 조회
$ opmate <subject> <action> -h

# Action 매뉴얼 조회
$ opmate <subject> <action> --help

```


`opmate user login`이란 명령어를 예시로 들어볼까요?\
명령어 맨 뒤에 `-h`를 추가로 입력하여 `opmate user login`의 사용법을 알아봅니다.

```bash

$ opmate user login -h

usage: opmate user login -id <user-id>
parameters:
  -id,--id <user-id> 사용자 ID

```

이 명령어를 사용하려면 <u>사용자 ID</u>(`-id`)라는 파라미터를 입력해야 함을 알 수 있습니다.

<br>

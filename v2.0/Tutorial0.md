---
title: OPMATE V2.0
description: Tutorial 0 - Before you Start
---

## Tutorial 0 : 시작하기에 앞서

> OPMATE가 처음이라면 [OPMATE란?](OpmateIntro.md) 링크를 먼저 읽어보는 걸 추천합니다.


### OPMATE 명령어 구조
- - -

**OPMATE 명령어**는 아래와 같이 3단계로 구분됩니다:

```bash
$ opmate <subject> <action> [<parameter>]
```

- **Subject** : 명령의 대상 (Task, Node, User 등)

- **Action** : Subject에 대한 명령어 (생성, 조회, 실행 등)

- **Parameter** : Action에 대한 세부 파라미터값 (ID, 디렉토리 등)

<br>

### OPMATE 도움말
- - -

각각의 Subject나 Action을 어떻게 쓰는 지 궁금하다면,

<body>명령어 맨 뒤에 <inline>-h</inline>나 <inline>--help</inline>를 붙여 도움말과 매뉴얼을 조회할 수 있습니다.</body>

<br>

```bash

# OPMATE 전체 매뉴얼 조회
$ opmate --help

# Subject 도움말 조회
$ opmate <subject> -h

# Action 도움말 조회
$ opmate <subject> <action> -h

# Action 매뉴얼 조회
$ opmate <subject> <action> --help

```



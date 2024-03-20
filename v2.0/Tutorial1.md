---
title: OPMATE V2.0
description: Tutorial 0 - Before you Start
---

## Tutorial 1 : OPMATE CLI 명령어 
- - -

<!-- 
### OPMATE CLI 명령어
- - - -->

**OPMATE CLI 명령어**의 형식은 다음과 같습니다: 

```bash
$ opmate <subject> <action> [<parameter>]
```

또한, 각각의 명령어의 활용법이 궁금하다면,

<div>명령어 맨 뒤에 <inline>-h</inline>나 <inline>--help</inline>를 붙여 도움말과 매뉴얼을 조회할 수 있습니다.</div>

<br>

```bash

# OPMATE CLI 매뉴얼 조회
$ opmate --help

# Subject 도움말 조회
$ opmate <subject> -h

# Subject 매뉴얼 조회
$ opmate <subject> --help

# Action 도움말 조회
$ opmate <subject> <action> -h

# Action 매뉴얼 조회
$ opmate <subject> <action> --help

```

<br>

<div><inline>opmate user login</inline>이란 명령어를 예시로 들어볼까요?</div>


<div> 명령어 맨 뒤에 <inline>-h</inline>를 붙여 입력하여 <inline>opmate user login</inline>의 도움말을 조회합니다.</div>

<br>

```bash

$ opmate user login -h

> usage: opmate user login -id <user-id>
> parameters:
>   -id,--id <user-id> 사용자 ID

```

<div>이를 통해 해당 명령어는 사용자 ID(<inline>-id</inline>)라는 파라미터가 필요하다는 것을 알 수 있습니다.</div>
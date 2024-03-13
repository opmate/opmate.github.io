---
title: OPMATE V2.0
description: Tutorial 4 - Create Task
---

## Tutorial 4 : Task 생성

**Task**는 사전 정의된 자동화 작업입니다.

다음과 같이 Task 생성을 진행합니다:

- **Task 정의** : <inline>opmate task gentmpl</inline>

- **Task 생성** : <inline>opmate task create</inline>

- **Task 배포** : <inline>opmate task publish</inline>

<br>

### Task 생성
- - -

> 본 튜토리얼에선 <inline>uptime</inline> 명령어를 모든 <inline>Linux</inline> 노드에서 실행하는 Task를 예시로 설명합니다.

Task 생성엔 태스크 정의서 파일(Task Definition Form, TDF)이 필요합니다.

해당 파일을 통해 <u>Task 정보, 타깃 Node, 실행 스케줄, User 권한</u> 등을 설정할 수 있습니다.

<br>

<div><inline>opmate task gentmpl</inline>로 TDF 템플릿을 생성합니다.</div>

<br>

```bash
$ opmate task gentmpl -id test_uptime

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> template has been saved to 'test_uptime.tdf'
```

- <div><inline>-id</inline> 파라미터에 적은 파일명으로 TDF 템플릿 파일이 생성됩니다.

<br>

생성한 템플릿 파일을 조회합니다:

```yaml
---
id: test
owner: admin
publisher: admin
script-account: #root
description: #comment of this task

target:
#- node-set: HOSTNAME:"^DB-DEV.+", OS-TYPE:"Linux"
#- node-set: HOSTNAME:"^DB-PRD.+", OS-TYPE:"Linux"
....

```

<br>

주석을 참조하여 템플릿 파일을 텍스트 에디터로 수정 후 저장합니다:

```yaml
---
id: test_uptime
owner: Gildong
publisher: Gildong
script-account: root
description: 서버 Uptime 조회

target:
- node-set: OS-TYPE:"Linux"
  description: OS가 Linux인 노드 대상으로만 Task 실행

permission:
  user:
    - Chulsoo,--x

```

예시로 주어진 TDF 파일을 다음과 같이 해석할 수 있습니다:  
- Task ID는 <inline>test_uptime</inline>
- Owner, Publisher, Script-account는 모두 <inline>Gildong</inline>
- OS가 <inline>Linux</inline>인 노드 대상으로만 Task 실행
- 또 다른 유저인 <inline>Chulsoo</inline>에게 실행(--x) 권한 부여

<br>

> <u><b>참고</b></u>  
> ① [Node 조회](Tutorial2.md)로 수집한 정보(id, hostname..)를 활용해 타겟 Node를 지정해보세요.  
> ② **주의**  Target Node(Node-set)를 지정할 때 반드시 선택한 모든 노드에 대해 Role을 가지고 있어야 합니다.    
>   -> Node-set으로 지정된 모든 Node에 대한 권한, 즉 Role이 없을 시 Task가 배포되지 않습니다.  
>   -> Role 관련 내용은 [Role 조회](Tutorial2.md)를 참고해주세요.

<br>


마지막으로 Node에서 실행될 Script 파일을 작성합니다.

```bash
#!/bin/bash

uptime

exit 0
```

<br><br>

### 태스크 생성
- - -

<div><inline>opmate task create</inline>로 Task를 생성합니다.</div>

<br>

```bash
$ opmate task create -tf test_uptime.tdf -sf test_uptime.sh

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> test_uptime has been created successfully.
```

- 앞서 생성한 TDF 파일과 Script 파일을 활용합니다.
  - <div>TDF 파일 경로를 <inline>-tf</inline> 파라미터값으로 입력합니다.</div>

  - <div>Script 파일 경로를 <inline>-sf</inline> 파라미터값으로 입력합니다.</div>

<br><br>


### Task 배포
- - -

<div><inline>opmate task publish</inline>로 Task를 실행 가능한 상태로 배포합니다.</div>

<br>

```bash
$ opmate task publish -id test_uptime

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> test_uptime has been published successfully.
```

- <body><u>Task ID</u>를 <inline>-id</inline> 파라미터값으로 입력합니다.</body>

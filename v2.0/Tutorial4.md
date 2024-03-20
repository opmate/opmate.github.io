---
title: OPMATE V2.0
description: Tutorial 4 - Create Task
---

## Tutorial 4 : Task 생성

**태스크(Task)**는 사전 정의된 자동화 작업입니다.

에이전트가 설치된 노드에 명령을 실행하기 위해선 태스크를 정의해야 합니다.

본 튜토리얼에서 여러분은 DB 운영자인 gildong으로서 호스트의 가동 시간(uptime)을 조회하는 태스크를 생성할 것입니다.

그러면 다음과 같이 태스크를 생성해보겠습니다.

- **Script 생성**

- **Task 정의** : <inline>opmate task gentmpl</inline>

- **Task 생성** : <inline>opmate task create</inline>

- **Task 배포** : <inline>opmate task publish</inline>

<br>


### Script 생성
- - -

우선 호스트에서 실행될 스크립트 파일을 작성합니다.

<!-- 본 튜토리얼에서는 호스트의 가동 시간을 출력하는 간단한 명령을 실행해보겠습니다. -->

파일명은 task_uptime.sh로 저장합니다.

```bash
#!/bin/bash

uptime

exit 0
```


### Task 정의
- - -

CLI 기준으로 태스크를 생성하기 위해선 태스크 정의서 파일(Task Definition Form, TDF)이 필요합니다.

<br>

<div><inline>opmate task gentmpl</inline>로 TDF 템플릿 파일을 생성합니다.</div>

<br>

```bash
$ opmate task gentmpl -id task_uptime

> Requesting https://3.36.57.8:8443/opmate;user=gildong
> template has been saved to 'task_uptime.tdf'
```

<div><inline>-id</inline> 파라미터에 적은 파일명으로 TDF 템플릿 파일이 생성됩니다.</div>

이 파일을 통해 <u>태스크 정보, 타깃 노드, 실행 스케줄, 유저 권한</u> 등을 설정할 수 있습니다.

<br>

주석을 참조하면서 템플릿 파일을 다음과 같이 수정합니다:

```yaml
---
id: task_uptime
owner: Gildong
publisher: Gildong
script-account: root
description: 서버 가동 시간 조회

target:
- node-set: OS-TYPE:"^Linux$"
  description: OS가 Linux인 모든 노드 대상으로 Task 실행

```

id란에선 태스크의 ID값을 지정할 수 있습니다.

target란에선 태스크의 실행 대상이 되는 노드를 지정할 수 있습니다.
node-set란에 정규 표현식으로 노드를 지정하면 됩니다.

본 예시에선 OS-TYPE이 Linux인 모든 노드를 대상으로 태스크를 실행하게끔 작성했습니다.

<br>


<br><br>

### 태스크 생성
- - -

<div><inline>opmate task create</inline>로 Task를 생성합니다.</div>

앞서 생성한 TDF 파일과 Script 파일을 활용합니다.

<br>

```bash
$ opmate task create -tf task_uptime.tdf -sf task_uptime.sh

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> task_uptime has been created successfully.
```

태스크는 Draft 상태로 Master 서버에 임시 저장됩니다.


<br><br>


### 태스크 배포
- - -

<div><inline>opmate task publish</inline>로 태스크를 실행 가능한 상태로 배포합니다.</div>

<br>

```bash
$ opmate task publish -id task_uptime

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> task_uptime has been published successfully.
```
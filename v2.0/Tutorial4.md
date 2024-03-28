---
title: OPMATE V2.0
description: Tutorial 4 - Create Task
# version: v1.00
---



## Tutorial 4 : 태스크 생성
- - -

**태스크(Task)**는 사전 정의된 자동화 작업입니다.\
에이전트가 설치된 노드에 명령을 실행하기 위해선 태스크를 정의해야 합니다.

본 튜토리얼에서 여러분은 DB 운영자인 <span style="color:#0000FF">'gildong'</span>으로서 각 호스트의 가동 시간(uptime)을 조회하는 태스크를 생성할 것입니다.

그럼 다음과 같이 태스크를 생성해 보겠습니다:

- **스크립트 생성**

- **태스크 정의** : <inline style="color:#ff4500">opmate task gentmpl</inline>

- **태스크 생성** : <inline style="color:#ff4500">opmate task create</inline>

- **태스크 발행** : <inline style="color:#ff4500">opmate task publish</inline>

<br>


### 스크립트 생성
- - -

우선 호스트에서 실행될 스크립트 파일을 작성합니다.

<!-- 본 튜토리얼에서는 호스트의 가동 시간을 출력하는 간단한 명령을 실행해보겠습니다. -->

파일명은 <inline style="color:#ff4500">task_uptime.sh</inline>로 저장합니다.

```bash
#!/bin/bash

uptime

exit 0
```

<br>

### 태스크 정의
- - -

태스크를 생성할 때는 스크립트 외에도 스크립트를 <u>누가, 언제, 어디서, 어떻게</u> 실행할 건지 정의해야 됩니다. 

이 때 사용되는 파일이 태스크 정의서 파일(Task Definition Form, TDF)입니다.

<span><inline style="color:#ff4500">opmate task gentmpl</inline>로 태스크 정의서의 템플릿 파일을 생성합니다.</span> 

```bash
$ opmate task gentmpl -id task_uptime

> Requesting https://127.0.0.1:8443/opmate;user=gildong
> template has been saved to 'task_uptime.tdf'
```

<span><inline style="color:#ff4500">-id</inline> 파라미터에 적은 파일명으로 TDF 템플릿 파일이 생성됩니다.</span>

이 파일을 통해 <u>태스크 정보, 타깃 노드, 실행 스케줄, 사용자 권한</u> 등을 설정할 수 있습니다.

주석을 참조하면서 템플릿 파일을 다음과 같이 수정합니다:

```yaml
---
id: task_uptime
owner: gildong
script-account: root
description: 서버 가동 시간 조회

target:
- node-set: OS-TYPE:"^Linux$"
  description: OS가 Linux인 모든 노드 대상으로 Task 실행
...

```

<u>id</u>으로 태스크의 ID값을 지정할 수 있습니다.

또한 <u>target</u>으로 태스크의 실행 대상이 되는 노드를 지정할 수 있습니다.\
<u>node-set</u>을 추가하면서 정규 표현식으로 노드를 지정하면 됩니다.

<span>본 예시에선 <inline style="color:#ff4500">OS-TYPE:"^Linux$"</inline>이란 표현식으로 노드를 지정했습니다.</span>

<span>여기서 <inline style="color:#ff4500">OS-TYPE</inline>은 노드의 필드 중 하나입니다.</span>\
<span><u>HOSTNAME, CSP-TAG</u> 등의 다양한 필드를 조합해 노드를 필터링할 수 있습니다.</span>

<span><inline style="color:#ff4500">"^Linux$"</inline>는 문자열 값이 정확히 "Linux"와 일치한다는 뜻입니다.</span>\
<span>캐럿 기호 <inline style="color:#ff4500">^</inline>는 텍스트의 시작, 달러 기호 <inline style="color:#ff4500">$</inline>은 텍스트의 끝을 나타냅니다.</span>

<br>

### 태스크 생성
- - -

<span><inline style="color:#ff4500">opmate task create</inline>로 태스크를 생성합니다.</span>

앞서 작성한 스크립트 파일과 TDF 파일을 활용합니다.

```bash
$ opmate task create -tf task_uptime.tdf -sf task_uptime.sh

> Requesting https://127.0.0.1:8443/opmate;user=gildong
> task_uptime has been created successfully.
```

이 때 태스크는 수정 가능한 상태로 Master 서버에 등록됩니다.

<br>

### 태스크 발행
- - -

수정을 거쳐 태스크의 최종본이 확정되면 태스크를 발행해 실행 가능한 상태로 만듭니다.

<span><inline style="color:#ff4500">opmate task publish</inline>로 태스크를 행합니다.</span>

```bash
$ opmate task publish -id task_uptime

> Requesting https://127.0.0.1:8443/opmate;user=gildong
> task_uptime has been published successfully.
```

<br>

[이전페이지](Tutorial3.md) / [목차](Tutorial.md) / [다음페이지](Tutorial5.md)

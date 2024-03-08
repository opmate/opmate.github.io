---
title: OPMATE V2.0
description: Tutorial
---

## Tutorial 3 : Task 생성

Task 생성 프로세스는 아래와 같이 3단계로 나눌 수 있습니다:

- Task 정의 : <inline>task gentmpl</inline>

- Task 생성 : <inline>task create</inline>

- Task 배포 : <inline>task publish</inline>

<br>

### Task 생성
- - -

Task 생성을 위해 태스크 정의서 파일(Task Definition Form, TDF)를 생성하겠습니다.

해당 파일을 통해 _Task 정보, 타겟 Node, 실행 스케쥴, 권한_ 등을 설정할 수 있습니다.

```bash
$ opmate task gentmpl -id test_uptime

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> template has been saved to 'test_uptime.tdf'
```

<body><inline>test_uptime.tdf</inline>로 태스크 정의서 파일이 생성되었습니다.</body>

<br>

해당 파일을 좀 더 자세히 살펴볼까요?

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

이 파일을 다음과 같이 조금 수정해보겠습니다:

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

TDF 파일을 해석하자면 다음과 같습니다:
- Task ID는 test_uptime
- owner, publisher, script-account는 모두 Gildong 명의
- OS가 Linux인 노드 대상으로만 Task 실행.
- 또 다른 유저인 Chulsoo에게 실행 권한 부여

<br>

타겟 Node의 경우 [튜토리얼 2: 노드 목록 조회](Tutorial2.md)에서 조회한 결과에 기반해 작성할 수 있습니다.

해당 내용을 근거로 하면 OS-TYPE이 Linux인 노드는 총 두 개입니다.

OS-TYPE 말고도 Node의 다양한 정보(id, hostname..)를 활용해 타겟 Node를 지정해보세요. (정규식 지원)

<br><br>

마지막으로 각 노드에서 실제로 실행하게 할 쉘 스크립트를 작성해보겠습니다.
파일 이름은 test_uptime.sh로 지정하겠습니다.

```bash
#!/bin/bash

uptime

exit 0
```

서버 Uptime을 조회하는 정말 간단한 Script입니다.

<br><br>

### 태스크 생성
- - -

앞에서 만든 TDF 파일과 Script 파일을 가지고 Task를 생성해보겠습니다.

Task 생성엔 task create 명령을 사용합니다.

```bash
$ opmate task create -tf test_uptime.tdf -sf test_uptime.sh

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> test_uptime has been created successfully.

```

Task가 정상적으로 만들어졌습니다.

tf 파라미터 뒤에는 TDF 파일 경로를, sf 파라미터로는 Script 파일 경로를 입력해주면 됩니다.

<br><br>


### Task 배포
- - -

task publish 명령어로 Task를 실행 가능한 상태로 배포할 수 있습니다.

```bash
$ opmate task publish -id test_uptime

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong
> test_uptime has been published successfully.

```
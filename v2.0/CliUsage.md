---
title: OPMATE V2.0
description: CLI 사용 가이드
---

## CLI(Command Line Interface) 사용 가이드

OPMATE CLI(Command Line Interface)는 셸의 명령을 사용하여 OPMATE MASTER에 작업을 전달하고 결과를 조회할 수 있는 도구이다.
방식이나 절차는 다를 수 있으나, 웹브라우저 기반 Console에서 제공하는 기능을 동일하게 수행할 수 있다.
또한, 다른 종류의 CLI 와 마찬가지로 명령어와 쉘스크립트를 조합하여, 자주 수행하는 작업의 자동화를 직접 응용하여 적용할 수 있다.

### 명령어 구조

CLI 명령어는 subject, action, parameters 의 3가지 레벨로 구성되어 있다.

>**$ opmate &lt;subject&gt; &lt;action&gt; [&lt;parameters&gt;]**

주제(subject)에 따라 가능한 액션(action)이 존재하며, 마찬가지로 액션(action)에 따라 가능한 파라미터(parameters)가 정해진다.
다음은 사용자 목록을 최대 10개만 출력하는 예제이다.

```
$ opmate user list -lm 10
```

### 도움말

CLI 에서는 잘못된 명령어를 입력할 경우, 적절한 사용법에 대한 도움말을 보여준다.
도움말은 명령을 구성하는 `<subject> <action> <arguments>` 의 각 레벨에 따른 내용으로 제공된다.
또한, 명시적으로 명령어 마지막에 `-h(--help)`를 붙여주면, 명령어에 아무 문제가 없더라도 강제적으로 도움말 출력 모드로 작동한다.
다음은 명령 레벨별 도움말을 출력하는 예제이다.

```
$ opmate -h
$ opmate user -h
$ opmate user list -lm 10 -h
```

### 요청 정보

명령어 수행시 OPMATE MASTER의 URL과 현재의 사용자 정보가 출력된다.

예를 들어, 다음은 `https://127.0.0.1:8443/opmate`인 MASTER에게 `bumbee` 사용자로서 요청을 보낸다는 의미이다.

```
$ opmate user list
Requesting https://127.0.0.1:8443/opmate;user=bumbee
```

### 목록 조회

액션(action)은 주제(subject)에 따라 차이가 있지만 목록조회를 위한 명령은 공통적인 특징이 있다.
주로 list 또는 list로 시작하는 명칭이며, 전체 목록 중 부분 출력(페이징)을 위한 `-lm`과 `-of` 파리미터를 제공한다.

>-lm(--limit) : 조회 건수를 지정한다. 지정하지 않으면 기본적으로 30건(default 30)을 출력하고, 0을 입력하면 전체 목록을 출력한다.<br>
>-of(--offset) : 조회의 시작점을 지정한다. 지정하지 않으면 첫번째 항목(default 0)부터 출력한다.

다음은 10건씩 3번에 나누어 출력하는 예제이다.

```
$ opmate task list -lm 10 -of 0
$ opmate task list -lm 10 -of 10
$ opmate task list -lm 10 -of 20
```

명령의 결과는 그리드(Grid) 형식으로 목록이 출력된 후, 하단에 ***"ROWS COUNT : 출력건수/전체건수"*** 형식으로 조회의 결과 건수가 출력된다.
아래 예제는 bumbee 사용자의 태스크 목록 조회를 했을 경우, 총 33건을 찾았으며 그 중 10건이 출력되었음을 의미한다.

```
$ opmate task list -ow bumbee -lm 10
...
ROWS COUNT : 10/33
```

### 날짜 형식

날짜 입력은 ISO 8601 표준에 따라 다음과 같은 형식을 지원한다.

>**YYYY**-**MM**-**DD**T**hh**:**mm**:**ss**±**hh**:**mm**

다음은 입력 예이다.

```
$ opmate accesskey edit -id 79SCU8ZJZMZLEOB3L1LT -ed 2025-01-01T13:00:00+09:00
```

위 예제의 `+09:00`를 옵셋이라고 하는데, 세계표준시에 비해 9시간 빠르다는 것을 의미한다.
즉, 한국표준시 2025-01-01 13:00:00를 나타낸다.

자신의 옵셋을 모를 경우, 다음 명령 결과의 `UTC{옵셋}` 부분을 통해 확인이 가능하다.

```
$ opmate config view | grep time_zone
| time_zone     | Local : KST (UTC+09:00)
```

기본적으로 출력은 현재 CLI 실행 환경의 타임존에 따라 출력된다.

```
$ opmate accesskey view -id 79SCU8ZJZMZLEOB3L1LT
+--------------------+-----------------------------------+
| FIELD              | VALUE                             |
+--------------------+-----------------------------------+
...
| EXPIRY-DATE        | 2025-01-01 13:00:00 KST           |
...
+--------------------+-----------------------------------+
```

### 환경 설정

CLI 는 공통적인 기본 설정값을 가지고 있으며, 개인별로 그 값을 바꾸어 설정할 수 있다.
다음은 최종 적용되는 설정값을 출력한 예제이다.

```
$ opmate config view
+---------------+-------------------------------+
| FIELD         | VALUE                         |
+---------------+-------------------------------+
| master_url    | https://127.0.0.1:8443/opmate |
| limit_default | 30                            |
| time_zone     | Local(KST), UTC+09:00         |
+---------------+-------------------------------+
```

공통의 기본 설정값은 `/etc/opmate/cli.conf` 파일에 정의하며, 만약 파일이 없거나 일부만 정의되어 있는 경우 CLI 프로그램 내부의 기본값이 적용된다.

개인별로 설정을 바꾸기 위해서는 홈디렉토리 하위의 .opm/cli.conf(`~/.opm/cli.conf`)에 값을 설정한다.
바꾸고 싶은 항목만 정의하면 되며, 나머지는 원래값을 유지한다.
다음은 목록조회시 기본 출력 건수를 10으로 설정한 예제이다.

```
$ cat ~/.opm/cli.conf
limit_default = 10
$ opmate config view
+---------------+-------------------------------+
| FIELD         | VALUE                         |
+---------------+-------------------------------+
| master_url    | https://127.0.0.1:8443/opmate |
| limit_default | 10                            |
| time_zone     | Local(KST), UTC+09:00         |
+---------------+-------------------------------+
```

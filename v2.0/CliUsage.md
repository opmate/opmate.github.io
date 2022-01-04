---
title: OPMATE V2.0
description: CLI 사용 가이드
---

## OPMATE CLI(Command Line Interface) 사용 가이드

### CLI 명령 구조

CLI 명령어는 subject, action, parameters 의 3가지 레벨로 구성되어 있다.

>**$ opmate &lt;subject&gt; &lt;action&gt; [&lt;parameters&gt;]**

주제(subject)에 따라 가능한 액션(action)이 존재하며, 마찬가지로 액션(action)에 따라 가능한 파라미터(parameters)가 정해진다.
다음은 사용자 목록을 최대 10개만 출력하는 예제이다.

```
$ opmate user list -lm 10
```

### 도움말

CLI 에서는 잘못된 명령어를 입력할 경우, 적절한 사용법에 대한 도움말을 보여준다.
도움말은 명령을 구성하는 **subject, action, arguments** 의 각 레벨에 따라 제공된다.
또한, 명시적으로 명령어 마지막에 -h(--help)를 붙여주면, 명령어에 아무 문제가 없더라도 강제적으로 도움말을 출력한다.
다음은 명령 레벨별 도움말을 출력하는 예제이다.

```
$ opmate -h
$ opmate user -h
$ opmate user list -lm 10 -h
```

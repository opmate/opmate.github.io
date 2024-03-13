---
title: OPMATE V2.0
description: OPMATE Introduction
---

<!-- ## OPMATE란? -->

![OPMATE](/img/Logo_b_394x72.png)

**OPMATE**는 <u><b>인프라 운영 자동화 플랫폼</b></u>입니다.

대량, 단순, 반복 작업을 자동화하여 인프라 운영을 간소화할 수 있습니다.

Agent 기반의 안정적인 자동화 프로세스를 **CLI, Webconsole**로 간단히 구현해 보세요. 

<br><br>

### OPMATE 구조

![OPMATE_STRUCTURE](/img/opmate-summary.png)

- **CLI, WebConsole**
    - <u>자동화 인터페이스</u>

- **Master**
    - <u>자동화 통제</u>
    - 사전 정의된 작업 요건(TDF)에 맞춰 작업 내용을 Agent에게 하달

- **Agent**
    - <u>자동화 실행</u>
    - Master로부터 작업 스크립트를 전달받아 실행

<br><br>

### OPMATE 관련 용어 정리

| **용어**  | **설명**  |
|---|---|
| Task  | 사전 정의된 자동화 작업  |
| Node  | Task의 대상이 되는 서버 인스턴스  |
| User  | 사용자 계정  |
| Role  | Node에 대한 Task 실행 권한  |
| Execution  | Task 실행의 단위  |


<!-- ### OPMATE 관련 용어 정리

* **Task** : 사전 정의된 자동화 작업

* **Node** : Task의 대상이 되는 서버 인스턴스

* **User** : 사용자 계정

* **Role** : Node에 대한 Task 실행 권한

* **Execution** : Task 실행의 단위 -->
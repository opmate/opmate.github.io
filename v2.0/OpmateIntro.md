---
title: OPMATE V2.0
description: OPMATE Introduction
---

# OPMATE란?

![OPMATE](/img/opmate-small.png)

**OPMATE**는 <u><b>인프라 운영 자동화 플랫폼</b></u>입니다.

대량, 단순, 반복 작업을 자동화하여 인프라 운영을 간소화할 수 있습니다.

Agent 기반의 안정적인 자동화 프로세스를 **CLI, Webconsole**로 간단히 구현해보세요. 

<br>

### OPMATE 구조

**OPMATE**는 크게 3가지 구조로 되어있습니다:

- **CLI, WebConsole**
    - 사용자 인터페이스 제공
    - Master와 연동되어 자동화 작업 입출력 지원

- **Master**
    - 자동화 작업 및 그에 수반된 자원(User, Node 등) 관리
    - 사전 정의된 작업 요건에 맞춰 작업 내용을 Agent에게 하달

- **Agent**
    - 작업 스크립트을 Master로부터 전달받아 실행


<br>


### 핵심 용어집

* **Task** : 사전 정의된 자동화 작업

* **Node** : Task의 대상이 되는 서버 인스턴스

* **User** : 사용자 계정

* **Role** : Node에 대한 Task 실행 권한.

* **Execution** : Task 실행의 단위

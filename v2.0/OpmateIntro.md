---
title: OPMATE V2.0
description: OPMATE Introduction
---

# OPMATE란?

OPMATE는 **인프라 운영 자동화 플랫폼**입니다.

대량, 단순, 반복 작업을 자동화하여 인프라 운영을 간소화할 수 있습니다.

**CLI, WebConsole**로 Agent 기반의 안정적인 자동화 프로세스를 간편하게 만들어보세요.

<br>


### OPMATE 구조

OPMATE는 크게 3가지 구조로 되어있습니다:

1. CLI, WebConsole
    - 사용자 인터페이스 제공
    - 마스터와 연동되어 자동화 프로세스 입력 및 출력 지원

2. 마스터
    - 자동화 작업 및 그에 수반된 자원(사용자, 노드 등) 관리
    - 사전 정의된 작업 요건에 맞춰 작업 내용 에이전트에게 하달

3. 에이전트
    - 작업 스크립트을 마스터로부터 하달받아 실행


<br>


### 핵심 용어

* Task : 사전 정의된 일괄 작업.

* Node : Task의 대상이 되는 서버 인스턴스.

* User : 사용자.

* Role : 특정 Node에 대한 권한. Task 실행 시 Role 기반으로 User의 권한 유무를 체크합니다.

---
title: 사용자 매뉴얼
description: 별첨 #1. CLI 사용법 개요
---

[목차](UserManual.md) / [이전페이지](UserManual8.md) / [다음페이지](UserManual10.md)

## CLI 사용법 개요

OPMATE는 사용자가 OPMATE를 통해서 원하는 업무를 수행할 수 있도록 Client를 제공하고 있으며, 이번 장에서는 OPMATE의 기본 제공 Client인 OPMATE CLI의 사용법을 개략적으로 설명한다.<br>
*(OPMATE 대시보드도 제공하고 있으며, REST API 기반의 인터페이스를 통해 OPMATE의 사용이 가능하다.)*

OPMATE CLI 는 다음과 같은 구조로 사용할 수 있으며, 이는 OPMATE Master 서버에 적절한 요청을 할 수 있다.

>opmate <object> <action> [<arguments>|help]

사용자는 위와 같은 형식으로 OS 명령 프롬프트에 질의할 수 있다.

- object&nbsp;&nbsp;&nbsp; : OPMATE 를 구성하는 주요 요소들의 집합.(사용자/노드/태스크 등)
- action&nbsp;&nbsp;&nbsp; : 지정한 object 에 대해서 수행하려는 명령.(생성/수정/삭제/목록 조회/상세보기 등)
- arguments : action 에 종속적인 옵션(파라미터)

[목차](UserManual.md) / [이전페이지](UserManual8.md) / [다음페이지](UserManual10.md)
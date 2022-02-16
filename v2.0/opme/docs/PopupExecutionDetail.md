---
title: 태스크실행 Popup
description: 노드별 상세정보
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[popup-execution-detail]: img/popup-execution-detail.png
[ico-refresh]: img/icon/ico-refresh.png

<!-- Floating Menu -->
[menu]: index.html "목차"
[ico-menu]: img/icon/ico-menu.png
[![목차][ico-menu]{: class="ico-menu-float" }][menu]


태스크를 실행한 각 노드에 대한 상세 실행 정보를 확인할 수 있습니다.  
또한, 태스크에서 실행한 스크립트에서 출력된 표준출력/표준에러 정보도 확인 가능합니다.

> ![노드별실행상세][popup-execution-detail]

### 노드 실행 정보
> **노드세션ID** : 노드 식별 ID  
> **Hostname**  
> **IP주소**  
> **실행계정** : 태스크의 스크립트를 실행한 OS계정  
> **상태** : 태스크의 실행 상태(대기/실행요청/실행접수/실행종료/실행중단)  
> **결과** : 태스크의 실행 결과(N/A/성공/실패)  
> **시작일시**  
> **종료일시**  
> **표준출력**  : 스크립트 실행 표준출력(stdout)  
> **표준에러**  : 스크립트 실행 표준에러(stderr)

### 하단 버튼영역
> <kbd class="btn-gray">&nbsp;닫기&nbsp;</kbd> : 팝업 닫기  
> <kbd class="btn-gray">&nbsp;ESC&nbsp;</kbd> : 팝업 닫기  

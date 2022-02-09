---
title: 태스크 Popup
description: 태스크 모의 실행
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[popup-execution-dryrun]: img/popup-execution-dryrun.png
[popup-execution-dryrun-result]: img/popup-execution-dryrun-result.png
[ico-search]: img/icon/ico-search.png
[arrow-right]: img/icon/ico-arrow-right.png
[arrow-left]: img/icon/ico-arrow-left.png
[popup-user]: PopupUser.md
[popup-task]: PopupTask.md

<!-- Floating Menu -->
[menu]: index.html "목차"
[ico-menu]: img/icon/ico-menu.png
[![목차][ico-menu]{: class="ico-menu-float" }][menu]

## 모의 실행
태스크 실행과 관련된 부가 정보를 입력하고, 모의 실행 할 수 있습니다.  
실제 수행 전에 모의 실행 기능을 통해서, 실행과 관련된 권한 등을 점검할 수 있습니다.

> ![태스크모의실행][popup-execution-dryrun]

### 기본정보
> **태스크ID** : 부모창에서 선택된 값(Read Only)  
> **Revision No.** : 부모창에서 선택된 값(Read Only)  
> **실행유형** : 태스크 수행의 주체를 결정(사용자/태스크)  
> **실행 ID** : 실행유형에 따라서, 특정 사용자나 태스크를 지정.  
    - 사용자ID/태스크ID 를 정확하게 입력하거나, ![소유자/태스크 조회][ico-search]{: .ico-gray } 팝업을 통해 선택. ([참고-사용자][popup-user]/[참고-태스크][popup-task])  
> **실행일시** : 가상의 실행시점을 지정

### 특정노드실행
태스크에 정의한 노드집합조건에 해당하는 노드 중에서 일부 노드를 특정합니다.  
좌측 Grid 에는 태스크에 정의한 노드집합조건에 해당하는 현 시점의 모든 노드가 디폴트로 표시 됩니다.  
실행대상 지정을 위해서는 좌측 Grid 에 표시된 결과를 중간에 위치한 화살표 버튼으로 우측 Grid 에 지정합니다.  
실행대상을 지정하지 않으면 좌측 Grid 전체를 대상으로 실행 됩니다.

#### 입력 항목(조회 조건)
> **Hostname** : 부분문자열 조회 가능(Like)  
> **IP주소** : 부분문자열 조회 가능(Like)  
> **OS계정** : 부분문자열 조회 가능(Like)

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
> **Grid Contents** : 조회 결과 출력  
> **Click** : Row 를 Click 하면 해당 Row가 선택 (Multi-Select 가능)
 
#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

### 중앙 버튼영역
> ![추가][arrow-right]{: class="ico-white" } : 실행 대상 추가. 좌측 Grid 에 Check 된 Row 를 우측 Grid 에 설정  
> ![제거][arrow-left]{: class="ico-white" } : 실행 대상 제거. 우측 Grid 에 Check 된 Row 를 해당 Grid 에서 제거

### 실행 대상

#### Grid 본문영역
> **Grid Contents** : 실행 대상으로 선택된 결과 출력  
> **Click** : Row 를 Click 하면 해당 Row가 선택 (Multi-Select 가능)

#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수

### 하단 버튼영역
> <kbd class="btn-red">&nbsp;모의실행&nbsp;</kbd> : 모의실행 수행 및 결과화면 이동  
> <kbd class="btn-gray">&nbsp;닫기&nbsp;</kbd> : 팝업 닫기  
> <kbd class="btn-gray">&nbsp;ESC&nbsp;</kbd> : 팝업 닫기  

## 모의실행결과
모의실행의 결과를 확인할 수 있습니다.

> ![태스크모의실행결과][popup-execution-dryrun-result]

> **실행권한점검** : 성공/실패  
> **실행시간점검** : 성공/실패

### 결과노드검색
개별노드의 모의실행 결과를 확인할 수 있으며, 특정 조건에 해당하는 노드의 결과를 쉽게 확인하기 위한 조회 기능을 제공합니다.

#### 입력 항목
> **Hostname** : 부분문자열 조회 가능(Like)   
> **IP주소** : 부분문자열 조회 가능(Like)  
> **OS계정** : 부분문자열 조회 가능(Like)  
> **점검결과** : All/성공/실패 선택

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행

### 조회결과

#### Grid 본문영역
> **Grid Contents** : 조회 결과 출력  

#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

### 하단 버튼영역
> <kbd class="btn-gray">&nbsp;닫기&nbsp;</kbd> : 팝업 닫기  
> <kbd class="btn-gray">&nbsp;ESC&nbsp;</kbd> : 팝업 닫기  

### 기타
결과보기 화면 좌측의 ![모의실행Page][arrow-left]{: class="ico-white" } 와 모의실행 화면 우측의 ![결과보기Page][arrow-right]{: class="ico-white" } 를 이용하여,  
두 화면을 오가면서 조건과 결과를 비교/확인 하거나 조건을 변경하여 재수행 할 수 있습니다.

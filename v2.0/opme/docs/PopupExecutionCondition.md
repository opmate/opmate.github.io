---
title: 태스크 Popup
description: 태스크 조건 실행
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[popup-execution-condition]: img/popup-execution-condition.png
[arrow-right]: img/icon/ico-arrow-right.png
[arrow-left]: img/icon/ico-arrow-left.png
[popup-user]: PopupUser.md

<!-- Floating Menu -->
[menu]: index.html "목차"
[ico-menu]: img/icon/ico-menu.png
[![목차][ico-menu]{: class="ico-menu-float" }][menu]


일부의 추가 정보와 함께 태스크를 실행합니다.  
태스크에서 수행할 스크립트에 특정 파라메터를 전달하거나, 기 정의된 노드집합조건 중 일부의 노드만을 특정하여 실행할 수 있습니다.  

>![태스크조건실행][popup-execution-condition]

### 기본정보
> **태스크ID** : 부모창에서 선택된 값(Read Only)  
> **Revision No.** : 부모창에서 선택된 값(Read Only)  
> **실행인자** : 수행 대상 스크립트에 전달할 파라메터 기입  

### 특정노드실행
태스크에 정의한 노드집합조건에 해당하는 노드 중에서 일부 노드를 특정합니다.  
두 개의 Grid 중, 좌측 Grid 에는 태스크에 기 정의한 노드집합조건에 해당하는 현 시점의 모든 노드가 표시 됩니다.  
조회 기능을 이용하여 좌측 Grid 내용을 변경하고 중간에 위치한 화살표 버튼으로 우측 Grid 에 지정합니다.

#### 입력 항목(조회 조건)
> **Hostname** : 부분문자열 조회 가능(Like)  
> **IP주소** : 부분문자열 조회 가능(Like)  
> **OS계정** : 부분문자열 조회 가능(Like)

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력  
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
> **Grid Contents** : 실행 대상으로 선택된 결과를 출력  
> **Click** : Row 를 Click 하면 해당 Row가 선택 (Multi-Select 가능)

#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수

### 하단 버튼영역
> <kbd class="btn-red">&nbsp;실행&nbsp;</kbd> : *실행인자* / *실행대상* 조건으로 태스크 실행  
> <kbd class="btn-gray">&nbsp;닫기&nbsp;</kbd> : 팝업 닫기  
> <kbd class="btn-gray">&nbsp;ESC&nbsp;</kbd> : 팝업 닫기  

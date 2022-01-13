---
title: 사용자 Popup
description: 사용자 조회
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">
<div class="nav-menu">목차</div>

<!-- Defined -->
[popup-user-lst]: img/popup-user-lst.png

<!-- Floating Menu -->
[index]: index.md "목차"
[ico-menu]: img/icon/ico-menu.png
[![목차][ico-menu]{: class="ico-menu-float" }][index]

OPMATE 사용자 정보를 조회하고, 선택하여 부모 창에 결과를 반영할 수 있습니다.
부모 창에 따라서 소유자 조회/발행자 조회/멤버 추가 등의 기능을 수행합니다.

>![사용자조회][popup-user-lst]

### 조회 조건

#### 검색조건
> **사용자 ID** : 부분문자열 조회 가능(Like)   
> **사용자 이름** : 부분문자열 조회 가능(Like)  
> **권한** : ALL/Super-User/Normal-User 선택  
> **상태** : ALL/Enable/Disable 선택  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력    
> **Click** : Row 를 Click 하면 해당 Row가 선택 (부모창에 따라서 Multi-Select 가능)
 
#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

### 하단 버튼영역
> **추가** : 선택 내용을 부모창에 반영  
> <kbd class="btn-gray">&nbsp;ESC&nbsp;</kbd> : 팝업 닫기
 
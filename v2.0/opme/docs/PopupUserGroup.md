---
title: 사용자그룹 Popup
description: 사용자그룹 조회
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[popup-usergrp-lst]: img/popup-usergrp-lst.png
[ico-search]: img/icon/ico-search.png
[popup-user]: PopupUser.md

<!-- Floating Menu -->
[menu]: index.md "목차"
[ico-menu]: img/icon/ico-menu.png
[![목차][ico-menu]{: class="ico-menu-float" }][menu]


OPMATE 사용자그룹 정보를 조회하고, 선택하여 부모 창에 결과를 반영할 수 있습니다.
부모 창에 따라서 사용자그룹 자체를 추가하기도 하고, 사용자그룹에 속한 개별 사용자를 추가하기도 합니다.

> ![사용자그룹조회][popup-usergrp-lst]

### 조회 조건

#### 입력 항목
> **ID** : 부분문자열 조회 가능(Like)  
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
> **Grid Contents** : 조회 결과 출력  
> **Click** : Row 를 Click 하면 해당 Row가 선택 (부모창에 따라서 Multi-Select 가능)
 
#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

### 하단 버튼영역
> <kbd class="btn-red">&nbsp;추가&nbsp;</kbd> : 선택 내용을 부모창에 반영  
> <kbd class="btn-gray">&nbsp;ESC&nbsp;</kbd> : 팝업 닫기
 
---
title: 태스크 Popup
description: 태스크 비교대상 선택
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[popup-task-hst]: img/popup-task-hst.png
[ico-search]: img/icon/ico-search.png
[popup-user]: PopupUser.md

<!-- Floating Menu -->
[menu]: index.md "목차"
[ico-menu]: img/icon/ico-menu.png
[![목차][ico-menu]{: class="ico-menu-float" }][menu]


OPMATE 태스크의 비교 기능을 위해서, 비교할 대상을 선택합니다.  
태스크를 조회하고 선택한 후, 선택된 태스크의 Revision 선택까지 완료하면 부모창에 반영할 수 있습니다.


> ![태스크비교대상선택][popup-task-hst]

### 조회 조건

#### 입력 항목
> **태스크 ID** : 부분문자열 조회 가능(Like)  
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과(태스크)

#### Grid 본문영역
> **Grid Contents** : 조회 결과 출력  
> **Click** : 해당 Row 의 발행이력 정보를 우측 발행이력 Grid 에 출력  
 
#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

### 조회 결과(발행이력)

#### Grid 본문영역
> **Grid Contents** : 좌측 Grid 에서 선택한 태스크에 해당하는 발행 이력 출력  
> **Click** : 해당 Row 선택  

#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

### 하단 버튼영역
> <kbd class="btn-red">&nbsp;태스크비교&nbsp;</kbd> : 선택 내용을 부모창에 반영  
> <kbd class="btn-gray">&nbsp;닫기&nbsp;</kbd> : 팝업 닫기  
> <kbd class="btn-gray">&nbsp;ESC&nbsp;</kbd> : 팝업 닫기  
 
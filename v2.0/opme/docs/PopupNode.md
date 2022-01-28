---
title: 노드 Popup
description: 노드 조회
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[popup-node-lst]: img/popup-node-lst.png

<!-- Floating Menu -->
[menu]: index.html "목차"
[ico-menu]: img/icon/ico-menu.png
[![목차][ico-menu]{: class="ico-menu-float" }][menu]


OPMATE 노드 정보를 조회하고, 조회에 사용한 노드집합정보 조건식(검색조건)을 부모 창에 반영할 수 있습니다.  
부모 창에 따라서 노드집합정보 추가/노드집합정보 조건평가 등의 기능을 수행합니다.

>![노드조회][popup-node-lst]

### 조회 조건
정규표현식을 사용하며, 입력항목은 AND 연산으로 처리됩니다.([정규표현식 참고](https://regexr.com/))

#### 입력 항목
> **사용자 ID** : 부분문자열 조회 가능(Like)   
> **사용자 이름** : 부분문자열 조회 가능(Like)  
> **권한** : ALL/Super-User/Normal-User 선택  
> **상태** : ALL/Enable/Disable 선택  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과
조회 시점의 결과를 보여주며, 각 시점의 Agent 현황에 따라 같은 조회 조건에서 상이한 결과가 출력될 수 있습니다.

#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력

### 하단 버튼영역
> <kbd class="btn-red">&nbsp;추가&nbsp;</kbd> : 조회 조건의 입력항목을 부모 창에 반영  
> <kbd class="btn-gray">&nbsp;닫기&nbsp;</kbd> : 팝업 닫기  
> <kbd class="btn-gray">&nbsp;ESC&nbsp;</kbd> : 팝업 닫기  
 
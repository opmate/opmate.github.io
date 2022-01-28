---
title: 사용자그룹
description: 사용자그룹 목록/사용자그룹 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[usergrp-lst]: img/usergrp-lst.png
[usergrp-dtl]: img/usergrp-dtl.png
[ico-search]: img/icon/ico-search.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png  
[popup-user]: PopupUser.md

<!-- Floating Menu -->
[prev]: User.html "사용자"
[menu]: index.html "목차"
[next]: Role.html "역할"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]


## 사용자그룹 목록
사용자를 사용자그룹으로 묶어서 활용할 수 있다.  
모든 사용자가 조회/추가 기능을 사용할 수 있지만, 삭제는 본인 소유의 사용자그룹만 삭제 가능하다.  
Super-User 권한의 사용자는 모든 사용자그룹에 대한 삭제가 가능하다.

> ![사용자그룹 목록][usergrp-lst]

### 조회 조건

#### 입력 항목
> **ID** : 부분문자열 조회 가능(Like)  
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  
> **권한** : ALL/Super-User/Normal-User 선택  
> **상태** : ALL/Enable/Disable 선택  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 상단영역  
> ![추가/등록][ico-add]{: class="ico-white" } : 사용자그룹을 신규 생성한다.
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제한다.

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력한다.  
> **Double Click** : Row 를 Double Click 하면 해당 사용자의 상세 정보 화면으로 이동한다.(권한에 따른 편집가능)

#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  


## 사용자그룹 정보
사용자그룹 정보 확인/등록/수정이 가능합니다.  
Normal-User의 경우 다른 사람의 사용자그룹 정보는 확인만 가능합니다.  
Super-User는 모든 사용자그룹의 수정이 가능합니다.  

> ![사용자 정보][usergrp-dtl]
 
### 기본정보
> **사용자그룹 ID** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능합니다.  
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  
> **설명** : 상세사항을 입력합니다.  

### 그룹멤버정보

#### Grid 상단영역
> ![추가/등록][ico-add]{: class="ico-white" } : 멤버 추가 팝업을 통해 선택.([참고][popup-user])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제한다.  

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력한다.

#### Grid 하단영역
> **Left** : 조회 건수  

### 이력정보
> 등록/변경과 관련된 이력정보

### 하단 버튼영역
> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-red">저장</kbd> : 등록/변경된 내용을 저장  

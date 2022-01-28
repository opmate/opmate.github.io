---
title: 역할
description: 역할 목록/역할 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[role-lst]: img/role-lst.png
[role-dtl]: img/role-dtl.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png
[ico-addusergrp]: img/icon/ico-addusergrp.png
[popup-user]: PopupUser.md
[popup-usergrp]: PopupUserGroup.md
[popup-node]: PopupNode.md

<!-- Floating Menu -->
[prev]: UserGroup.html "사용자그룹"
[menu]: index.html "목차"
[next]: Node.html "노드"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]


## 역할 목록
OPMATE 역할 정보를 조회합니다.  
역할(Role)은 태스크 수행에 관련된 권한을 정의한 것입니다.  
태스크 수행할 노드집합정보, OS계정, 사용자정보를 하나의 ID로 묶어 작성할 수 있습니다.  

편집 기능은 Super-user만 가능합니다.  

> ![역할 목록][role-lst]

### 조회 조건

#### 입력 항목
> **Role ID** : 부분문자열 조회 가능(Like)   
> **Role 이름** : 부분문자열 조회 가능(Like)  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 상단영역  
> ![추가/등록][ico-add]{: class="ico-white" } : 역할을 신규 생성  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력    
> **Double Click** : Row 를 Double Click하면 역할 상세 정보 화면으로 이동.(Super-user 편집 가능)

#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

## 역할 정보
역할 정보 확인/등록/수정이 가능합니다.  
Normal-User의 경우 역할 정보는 확인만 가능합니다.  
Super-User만 역할 정보의 등록/수정이 가능합니다.  

> ![역할 정보][role-dtl]
 
### 기본정보
> **Role ID** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능    
>> - Role ID 는 역할 구분을 위한 것이며, 고유한 값을 가집니다.  

> **이름** : Role ID 에 대한 이름입니다.   

### 노드집합정보  
> 역할에 부여하는 노드집합정보 입력. 태스크 수행 대상입니다.  
>> - 정규표현식을 지원합니다. ([참고](https://regexr.com))

#### Grid 상단영역
> ![추가/등록][ico-add]{: class="ico-white" } : 노드집합정보 추가 ([참고][popup-node])
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제

#### Grid 하단영역
> **Left** : 조회 건수

### 사용자정보
> 역할에 부여된 사용자 정보
>> - 입력된 역할 정보에 매핑시킬 사용자 정보를 입력

#### Grid 상단영역
> ![추가/등록][ico-add]{: class="ico-white" } : 사용자정보를 개별 추가 ([참고][popup-user])  
> ![추가/등록][ico-addusergrp]{: class="ico-white" } : 사용자그룹에 속한 사용자정보를 일괄 추가 ([참고][popup-usergrp])
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제

#### Grid 하단영역
> **Left** : 조회 건수

### 이력정보
> 등록/변경과 관련된 이력정보

### 하단 버튼영역
> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-gray">저장</kbd> : 등록/변경된 내용을 저장  


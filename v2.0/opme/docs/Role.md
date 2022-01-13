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
편집 기능은 Super-user만 가능합니다.  

> ![역할 목록][role-lst]

### 조회 조건

#### 검색조건
> **Role ID** : 부분문자열 조회 가능(Like)   
> **Role 이름** : 부분문자열 조회 가능(Like)  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력    
> **Double Click** : Row 를 Double Click 하면 해당 역할의 상세 정보 화면으로 이동.(권한에 따른 편집가능)  
 
#### Grid 상단영역  
> ![삭제][ico-del] : Check 된 Row 를 삭제     
> ![추가/등록][ico-add] : 역할을 신규 생성  
 
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
> **이름**  

### 노드집합정보  
> 역할에 부여할 노드셋 정보. Hostname, OS종류, OS이름, OS버전, OS계정 등

### 비밀번호
> 비밀번호 정보를 입력. Normal-User 인 경우, 기존 비밀번호 입력 필수  

### 이력정보
> 등록/변경과 관련된 이력정보

### 하단 버튼영역
> **목록** : 목록 화면으로 이동  
> **저장** : 등록/변경된 내용을 저장  
 
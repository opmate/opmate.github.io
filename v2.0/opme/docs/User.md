---
title: 사용자
description: 사용자 목록/사용자 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">
<!--link rel="stylesheet" type="text/css" href="/css/opme.css"--><!-- mkdocs -->
<!--link rel="stylesheet" type="text/css" href="css/opme.css"--><!-- Github -->

<!-- Defined -->
[user-lst]: img/user-lst.png
[user-dtl]: img/user-dtl.png
[btn-del-ico]: img/icon/ico-del-hover.png
[btn-add-ico]: img/icon/ico-add-hover.png  

## 사용자 목록
OPMATE 사용자 정보를 조회하고, 삭제할 수 있다.  
모든 사용자가 조회 기능을 사용할 수 있지만, 삭제 기능은 Super-User 권한의 사용자만 사용 가능 하다.

>![사용자 목록][user-lst]

### 조회 조건

#### 검색조건
>**사용자 ID** : 부분문자열 조회 가능(Like)  
**사용자 이름** : 부분문자열 조회 가능(Like)  
**권한** : ALL/Super-User/Normal-User 선택  
**상태** : ALL/Enable/Disable 선택  

#### 버튼
><kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
<kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
>**Grid Contents** : 조회 조건에 해당하는 결과를 출력한다.  
**Double Click** : Row 를 Double Click 하면 해당 사용자의 상세 정보 화면으로 이동한다.(권한에 따른 편집가능)  
 
#### Grid 상단영역  
> ![삭제][btn-del-ico]{: .ico-img } : Check 된 Row 를 삭제한다.   
![추가/등록][btn-add-ico]{: .ico-img } : 신규 생성한다.
 
#### Grid 하단영역
>**Left** : 조회 건수  
**Center** : 페이지 표시/선택  
**Right** : Grid 에 한번에 표시할 건수  


## 사용자 정보
사용자 정보 확인/등록/수정이 가능합니다.  
로그인한 사용자 본인의 정보는 수정이 가능하나, Normal-User의 경우 다른 사람의 정보는 확인만 가능합니다.  
Super-User만 다른 사용자의 등록/수정이 가능합니다.  

>![사용자 정보][user-dtl]
 
### 기본정보
>**사용자ID** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능합니다.  
**이름**  
**권한** : Super-User 만 변경 가능합니다.  
**Noti(이메일)** : OPMATE Noti. 에 사용되는 정보이며, 대부분의 경우 이메일을 사용합니다.  
**연락처** : 사용자 간 개별 연락을 위한 연락처 정보이며, 대부분의 경우 전화번호를 사용합니다.  
**상세사항** : 상세사항을 입력합니다.  

### 계정상태
>**활성여부** : Enable/Disable. 활성 여부를 변경할 수 있으며, Super-User 에만 활성화 됩니다.  

### 비밀번호
>

### 이력정보
>

### 하단 버튼영역
> **목록** :  
> **2차인증 등록** :  
> **2차인증 초기화** :  
> **저장** :  
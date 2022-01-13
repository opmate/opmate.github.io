---
title: 사용자
description: 사용자 목록/사용자 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[user-lst]: img/user-lst.png
[user-dtl]: img/user-dtl.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png

<!-- Floating Menu -->
[prev]: # "none"
[menu]: index.html "목차"
[next]: UserGroup.html "사용자그룹"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class="ico-menu-float" }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]


## 사용자 목록
OPMATE 사용자 정보를 조회하고, 삭제할 수 있습니다.  
모든 사용자가 조회 기능을 사용할 수 있지만, 삭제 기능은 Super-User 권한의 사용자만 사용 가능합니다.

> ![사용자 목록][user-lst]

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
> **Double Click** : Row 를 Double Click 하면 해당 사용자의 상세 정보 화면으로 이동 (권한에 따른 편집가능)  
 
#### Grid 상단영역  
> ![삭제][ico-del] : Check 된 Row 를 삭제     
> ![추가/등록][ico-add] : 사용자계정을 신규 생성  
 
#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  


## 사용자 정보
사용자 정보 확인/등록/수정이 가능합니다.  
로그인한 사용자 본인의 정보는 수정이 가능하나, Normal-User의 경우 다른 사람의 정보는 확인만 가능합니다.  
Super-User만 다른 사용자의 등록/수정이 가능합니다.  

> ![사용자 정보][user-dtl]
 
### 기본정보
> **사용자ID** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능    
> **이름**  
> **권한** : Super-User 만 변경 가능   
> **Noti(이메일)** : OPMATE Noti. 에 사용되는 정보이며, 대부분의 경우 이메일을 사용   
> **연락처** : 사용자 간 개별 연락을 위한 연락처 정보이며, 대부분의 경우 전화번호를 사용  
> **상세사항** : 상세사항을 입력  

### 계정상태
> **활성여부** : Enable/Disable. 활성 여부를 변경할 수 있으며, Super-User 에만 활성화  

### 비밀번호
> **현재 패스워드** : Normal-User 인 경우, 내용 변경 시 기존 비밀번호를 입력   
> **새 패스워드**   
> **새 패스워드 확인**  

### 이력정보
> 등록/변경과 관련된 이력정보

### 하단 버튼영역
> **목록** : 사용자 목록으로 이동  
> **2차인증 등록** : 2차인증 Key 생성. 사용자는 생성된 QR 코드를 Google OTP App.에 등록해야 함  
> **2차인증 초기화** : Super-User만 수행 가능하며, 사용자계정에 적용된 2차인증을 초기화  
> **저장** : 등록/변경된 내용을 저장  
 
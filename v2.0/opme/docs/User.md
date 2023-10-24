---
title: 사용자
description: 사용자 목록/사용자 정보
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[user-lst]: img/user-lst.png
[user-dtl]: img/user-dtl.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png

<!-- Floating Menu -->
[prev]: Layout.html "화면구성"
[menu]: index.html "목차"
[next]: UserGroup.html "사용자그룹"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class="ico-menu-float" }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]
111
{{ config.extra.version }}
222
{{ page.title }}
{% if config.extra.version == '1.0' %}
    About this blog
{% endif %}
## 사용자 목록





> ![사용자 목록][user-lst]

### 조회 조건

#### 입력 항목
> **사용자 ID** : 부분문자열 조회 가능(Like)   
> **사용자 이름** : 부분문자열 조회 가능(Like)  
> **권한** : ALL/Super-User/Normal-User 선택  
> **상태** : ALL/Enable/Disable 선택  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  

### 조회 결과

#### Grid 상단영역  
> ![추가/등록][ico-add]{: class="ico-white" } : 신규 생성 (Super-User Only)  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제 (Super-User Only)

#### Grid 본문영역
> **Grid Contents** : 조회 결과 출력  
> **Double Click** : 해당 Row 의 상세 정보 화면으로 이동 (권한에 따른 편집 가능)

#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  


## 사용자 정보
사용자 정보 확인/등록/수정이 가능합니다.  
Normal-User 의 경우 로그인한 사용자 본인의 정보는 수정이 가능하나,  
다른 사용자의 정보는 확인만 가능합니다.  
Super-User 는 다른 사용자의 등록/수정이 가능합니다.  

> ![사용자 정보][user-dtl]
 
### 기본정보
> **사용자ID** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능    
> **이름** : 사용자 이름   
> **권한** : Normal-User/Super-User (Super-User Only)   
> **Noti(이메일)** : OPMATE Noti. 에 사용되는 정보 (주로 이메일 사용)   
> **연락처** : 사용자 간 개별 연락을 위한 연락처 정보 (주로 전화번호 사용)  
> **설명** : 상세사항

### 계정상태
> **활성여부** : Enable/Disable (Super-User Only)

### 비밀번호
> **현재 패스워드** : 현재 비밀번호 (Normal-User Only)  
> **새 패스워드**   
> **새 패스워드 확인**  

### 이력정보
> 등록/변경과 관련된 이력정보

### 하단 버튼영역
> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-gray">2차인증 등록</kbd> : 2차인증 Key 생성. 사용자는 생성된 QR 코드를 Google OTP App.에 등록  
> <kbd class="btn-gray">2차인증 초기화</kbd> : 사용자계정에 적용된 2차인증을 초기화 (Super-User Only)  
> <kbd class="btn-red">저장</kbd> : 등록/변경된 내용을 저장  
<a name="footnote_1">1</a>첫번째 각주 입니다.

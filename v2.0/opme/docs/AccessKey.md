---
title: 엑세스 키  
description: 엑세스 키 목록/엑세스 키 정보  
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[accesskey-lst]: img/accesskey-lst.png
[accesskey-dtl]: img/accesskey-dtl.png
[accesskey-new]: img/accesskey-new.png
[ico-search]: img/icon/ico-search.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png
[popup-user]: PopupUser.md

<!-- Floating Menu -->
[prev]: FileHub.html "파일상세"
[menu]: index.html "목차"
[next]: System.html "시스템속성"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]

## 액세스 키 목록
OPMATE 엑세스 키 정보를 조회합니다.  
타 시스템이나 어플리케이션에서 사용하기 위해 엑세스 키 발급 방식의 REST API 호출을 지원합니다.  

편집 기능은 Super-user만 가능합니다.  

>![엑세스 키 목록][accesskey-lst]

### 조회 조건

#### 입력 항목
>**ID** : 부분문자열 조회 가능(Like)   
**소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  

#### 버튼
><kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
<kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
>**Grid Contents** : 조회 조건에 해당하는 결과를 출력    
**Double Click** : Row 를 Double Click 하면 해당 엑세스 키 상세 정보 화면으로 이동.(권한에 따른 편집가능)  
 
#### Grid 상단영역  
>![추가/등록][ico-add]{: class="ico-white" } : 엑세스 키 신규 생성  
 ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제
 
#### Grid 하단영역
>**Left** : 조회 건수  
**Center** : 페이지 표시/선택  
**Right** : Grid 에 한번에 표시할 건수  

### 발급
> REST API 엑세스 키 생성 시, 아이디와 패스워드는 자동으로 생성되어 사용자에게 보여준다.  
**패스워드**를 다시 조회할 수 없으므로 생성 시 출력된 패스워드는 별도로 저장할 것을 권고한다.  
하나의 사용자가 여러개의 엑세스 키 생성하는 것이 가능하다.  
> ![발급][accesskey-new]

## 엑세스 키 정보
엑세스 키 정보 확인/등록/수정이 가능합니다.  
Normal-User의 경우 엑세스 키 정보는 확인만 가능합니다.  
Super-User만 엑세스 키 정보의 등록/수정이 가능합니다.  

>![엑세스 키 정보][accesskey-dtl]
 
### 기본정보
> 엑세스 키의 정보를 확인 가능  
>   - **ID** : 엑세스 키의 고유값    
>   - **이름** : 엑세스 키 ID의 이름  
>   - **IP주소** : 허용할 IP 주소    

### 이력정보
> 등록/변경과 관련된 이력정보

### 하단 버튼영역
> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-red">저장</kbd> : 등록/변경된 내용을 저장  
 
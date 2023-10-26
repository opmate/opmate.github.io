---
title: 엑세스 키  
description: 엑세스 키 목록/엑세스 키 정보  
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[accesskey-lst]: img/accesskey-lst.png
[accesskey-dtl]: img/accesskey-dtl.png
[accesskey-new]: img/accesskey-new.png
[ico-search]: img/icon/ico-search.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png
[popup-user]: PopupUser.md

<!-- Floating Menu -->
[prev]: File.html "파일상세"
[menu]: index.html "목차"
[next]: System.html "시스템속성"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]

{% if config.extra.manual == 'opme' %}
??? info "액세스 키(access-key)"
    CLI 외 타 시스템이나 어플리케이션에서 사용하기 위해 액세스키 발급 방식의 REST API 호출을 지원합니다.    
{% endif %}

## 액세스 키 목록

OPMATE 는 타 시스템이나 어플리케이션에서 사용하기 위한 REST API 를 제공합니다.  
이를 활용하기 위해서는 액세스 키를 발급 받는 것이 필요합니다.  
발급 받은 액세스 키를 사용하기 위해서는 Super-User 권한의 사용자가 Enable 로 설정해줘야 합니다.

![엑세스 키 목록][accesskey-lst]

### **조회 조건**
 
**입력 항목**

> **ID** : 부분문자열 조회 가능(Like)   
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  

**버튼**

> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### **조회 결과**

**Grid 상단영역**

> ![추가/등록][ico-add]{: class="ico-white" } : 신규 생성  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력  
> **Double Click** : 해당 Row 의 상세 정보 화면으로 이동 (권한에 따른 편집 가능)

**Grid 하단영역**

> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

## 엑세스 키 정보

엑세스 키 정보 확인/등록/수정이 가능합니다.  
사용자는 여러 개의 엑세스 키를 생성하는 것이 가능합니다.  
Super-User 권한의 사용자만 엑세스 키 정보의 수정이 가능합니다.  

![엑세스 키 정보][accesskey-dtl]
 
### **기본정보**

> **ID** : 엑세스 키의 고유값    
> **이름** : 엑세스 키 ID의 이름  
> **소유자ID**  
> **IP주소** : 허용할 IP 주소    
> **만료일자**  
> **상태** : Enable/Disable

### **이력정보**

> 등록/변경과 관련된 이력정보

### **하단 버튼영역**

> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-red">저장</kbd> : 등록/변경된 내용을 저장  

## 발급

엑세스 키 생성 시, 아이디와 Secret Key 는 자동으로 생성됩니다.  
발급 결과 팝업 화면의 Secret Key 는 재조회 불가 하므로 보안에 유의하여 별도 보관이 필요합니다.

> ![발급][accesskey-new]


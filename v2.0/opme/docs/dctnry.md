---
title: 단어사전
description: 단어사전 목록/단어사전 정보
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[dictionary-lst]: img/dictionary-lst.png
[dictionary-dtl]: img/dictionary-dtl.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png

<!-- Floating Menu -->
[prev]: execution.html "태스크실행결과"
[menu]: index.html "목차"
[next]: filehub.html "파일허브"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]

{% if config.extra.manual == 'opme' %}
??? info "단어사전(Dictionary)"
    태스크 스크립트 점검 용도의 Dictionary 입니다.  
{% endif %}

## 단어사전 목록
금지 또는 위험 명령어로 구분하여 사전에 정의할 수 있습니다.  
Normal-User 는 확인만 가능합니다.

![단어사전 목록][dictionary-lst]

### **조회 조건**

**입력 항목**

> **단어명** : 부분문자열 조회 가능(Like)   
> **구분** : ALL/Risk/Forbidden 선택  

**버튼**

> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### **조회 결과**

**Grid 상단영역**

> ![추가/등록][ico-add]{: class="ico-white" } : 신규 생성 (Super-User Only)  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제 (Super-User Only)

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력  
> **Double Click** : 해당 Row 의 상세 정보 화면으로 이동 (권한에 따른 편집 가능)

**Grid 하단영역**

> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

## 단어사전 정보

단어사전 정보 확인/등록/수정이 가능합니다.  
Super-User 만 단어사전 정보 등록/수정이 가능합니다.

![단어사전 정보][dictionary-dtl]

### **기본정보**

> **단어명** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능    
> **구분** : Risk/Forbidden (Super-User Only)

### **이력정보**

> 등록/변경과 관련된 이력정보

### **하단 버튼영역**

> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-red">저장</kbd> : 등록/변경된 내용을 저장  
 
---
title: 노드 Popup
description: 노드 조회
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[popup-node-lst-01]: img/popup-node-lst-01.png
[popup-node-lst-02]: img/popup-node-lst-02.png
[ico-temp]: img/icon/ico-templatedown.png
[ico-excelup]: img/icon/ico-excelup.png

<!-- Floating Menu -->
[menu]: index.html "목차"
[ico-menu]: img/icon/ico-menu.png
[![목차][ico-menu]{: class="ico-menu-float" }][menu]


OPMATE 노드 정보를 조회하고,  
조회에 사용한 노드집합정보 조건식(검색조건)을 부모 창에 반영할 수 있습니다.  
부모 창에 따라서 노드집합정보 추가/노드집합정보 조건평가 등의 기능을 수행합니다.

![노드조회(노드집합표현식)][popup-node-lst-01]

### **조회 조건(노드집합 표현식)**

정규표현식을 사용하며, 입력항목은 AND 연산으로 처리됩니다.([정규표현식 참고](https://regexr.com/))

**입력 항목**

> **Hostname** : 부분문자열 조회 가능(Like)   
> **OS 종류** : 부분문자열 조회 가능(Like)    
> **OS 이름** : 부분문자열 조회 가능(Like)  
> **OS 버전** : 부분문자열 조회 가능(Like)  
> **시스템 구분** : CSP, TOMS, TMAN  
> **태그키(key)** : Exact 입력  
> **태그값(Value)** : 부분문자열 조회 가능(Like)  

**버튼**

> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  

![노드조회(Hostname)][popup-node-lst-02]

### **조회 조건(Hostname 목록)**

정규표현식을 사용하며, 입력항목은 AND 연산으로 처리됩니다.([정규표현식 참고](https://regexr.com/))

**입력 항목**

> **Hostname** : Hostname을 List 로 입력 가능합니다.  
> 특정 서버에만 실행계정을 지정해야 하는 경우, '|' 로 구분하여 OS 계정을 지정합니다.  
> ![엑셀템플릿다운로드][ico-temp]{: class="ico-white" } : 엑셀 템플릿 다운로드    
> ![엑셀업로드][ico-excelup]{: class="ico-white" } : 엑셀 템플릿 업로드  

**버튼**

> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행

### **조회 결과**

조회 시점의 결과를 보여주며, 각 시점의 Agent 현황에 따라 같은 조회 조건에서 상이한 결과가 출력될 수 있습니다.

**Grid 하단영역**

> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력

### **하단 버튼영역**

> <kbd class="btn-red">&nbsp;추가&nbsp;</kbd> : 조회 조건의 입력항목을 부모 창에 반영  
> <kbd class="btn-gray">&nbsp;닫기&nbsp;</kbd> : 팝업 닫기  
> <kbd class="btn-gray">&nbsp;ESC&nbsp;</kbd> : 팝업 닫기  
 
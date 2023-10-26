---
title: 태스크실행결과
description: 태스크실행결과 목록/태스크실행결과 정보
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[execution-lst]: img/execution-lst.png
[execution-dtl]: img/execution-dtl.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png
[ico-search]: img/icon/ico-search.png
[popup-execution-detail]: PopupExecutionDetail.md
[popup-user]: PopupUser.md
[popup-task]: PopupTask.md

<!-- Floating Menu -->
[prev]: TaskHistory.html "태스크발행이력"
[menu]: index.html "목차"
[next]: Dictionary.html "단어사전"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]


## 태스크실행 목록
태스크 실행과 관련한 상태/정보 등을 확인할 수 있습니다.  
좌측 조회 조건을 입력하고 조회된 태스크의 실행 정보를 Grid 에서 선택하면,
우측 영역에 해당 실행에 대한 상세 정보가 출력됩니다.  
우측 Grid 에 출력된 노드 정보 중 특정 노드를 조회하고,
Double Click 하면 해당 노드에서 실행된 정보가 팝업으로 출력됩니다.

![태스크실행 목록][execution-lst]

### **조회 조건(태스크 실행)**

**입력 항목**

> **태스크 ID** : 태스크ID 를 정확하게 입력하거나, ![태스크 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-task])  
> **소유자 ID** : 소유자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  

**버튼**

> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행

### **조회 결과(태스크 실행)**

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력  
> **Click** : 해당 Row 의 상세 정보를 우측 Grid 에 출력    
> <kbd class="btn-red">&nbsp;강제종료&nbsp;</kbd> : 수행 중인 태스크 일 때 활성화 되며, 클릭 시 강제 종료 실행
 
**Grid 하단영역**

> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

 
### **실행 정보(태스크 실행 상세)**

좌측 조회 결과(태스크 실행) Grid 에서 선택된 Row 에 해당하는 태스크 실행 상세 정보를 출력합니다.

### **조회 조건(태스크 실행 상세)**

**입력 항목**

> **Hostname** : 부분문자열 조회 가능(Like)  
> **상태** : ALL/대기/실행요청/실행접수/실행종료/실행중단 선택  
> **결과** : ALL/'N/A'/성공/실패 선택  

**버튼**

> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행

### **조회 결과(태스크 실행 상세)**

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력  
> **Double Click** : 해당 Row(노드) 의 태스크 실행 상세 정보 팝업 출력 ([참고][popup-execution-detail])   
> <kbd class="btn-red">&nbsp;강제종료&nbsp;</kbd> : 수행 중인 태스크 일 때 활성화 되며, 클릭 시 강제 종료 실행

**Grid 하단영역**

> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수


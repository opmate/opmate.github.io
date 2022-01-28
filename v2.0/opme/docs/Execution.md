---
title: 태스크실행결과
description: 태스크실행결과 목록/태스크실행결과 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

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
태스크실행 결과 정보를 조회합니다.  

> ![태스크실행 목록][execution-lst]

### 조회 조건

#### 입력 항목
> **태스크 ID** : 태스크ID 를 정확하게 입력하거나, ![태스크 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-task])  
> **소유자 ID** : 소유자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행

### 조회 결과

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력    
> **Double Click** : Row 를 Double Click하면 우측 실행 정보/조회 결과 출력.    
> <kbd class="btn-gray">&nbsp;강제종료&nbsp;</kbd> : 수행 중인 태스크일 때 활성화되며, 클릭 시 강제종료 실행
 
#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

 
### 실행 정보
> 조회 결과에서 선택된 Row 관련된 실행 정보

### 조회 조건  

#### 입력 항목
> **Hostname** : Hostname 을 정확하게 입력   
> **상태** : ALL/대기/실행요청/실행접수/실행종료/실행중단 선택  
> **결과** : ALL/'N/A'/성공/실패 선택  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행

### 조회 결과

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력    
> **Double Click** : Row 를 Double Click 통해 노드별 태스크 실행 상세정보 출력.([참고][popup-execution-detail])   
> <kbd class="btn-gray">&nbsp;강제종료&nbsp;</kbd> : 수행 중인 태스크일 때 활성화되며, 클릭 시 강제종료 실행

#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수


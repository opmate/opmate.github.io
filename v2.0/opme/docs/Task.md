---
title: 태스크
description: 태스크 목록/태스크 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[task-lst]: img/task-lst.png
[task-dtl]: img/task-dtl.png
[ico-copy]: img/icon/ico-copy.png
[ico-search]: img/icon/ico-search.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png
[ico-adduser]: img/icon/ico-adduser.png
[ico-addusergrp]: img/icon/ico-addusergrp.png
[task-hst]: TaskHistory.md
[execution]: Execution.md
[popup-user]: PopupUser.md
[popup-exe-condition]: PopupExecutionCondition.md
[popup-exe-detail]: PopupExecutionDetail.md
[popup-exe-dryrun]: PopupExecutionDryRun.md
[popup-task-select]: PopupTaskSelect.md
[popup-task]: PopupTask.md
[popup-schedule]: img/popup-schedule.png
[popup-node]: img/popup-node-lst.png
[popup-runnabletime]: img/popup-runnabletime.png

<!-- Floating Menu -->
[prev]: Node.html "노드"
[menu]: index.html "목차"
[next]: Publist.html "태스크발행이력"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]


## 태스크 목록
OPMATE 태스크 목록을 조회합니다. 가장 최근 발행 버전의 결과를 표시합니다.  

>![태스크 목록][task-lst]

### 조회 조건

#### 입력 항목

> **태스크 ID** : 부분문자열 조회 가능(Like)  
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  


#### 버튼
><kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
<kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
태스크 상세 정보 화면으로 이동할 때, 미발행 건이 있으면 어떤 버전을 조회할 지 선택하게 된다. ([참고][popup-task-select])   

>**Grid Contents** : 조회 조건에 해당하는 결과를 출력    
>**Double Click** : Row 를 Double Click 하면 해당 태스크의 상세 정보 화면으로 이동.   

#### 버튼
><kbd class="btn-gray">&nbsp;이력보기&nbsp;</kbd> : 태스크 발행이력 조회 ([참고][task-hst])    
><kbd class="btn-gray">&nbsp;모의실행&nbsp;</kbd> : 태스크 모의실행 수행 ([참고][popup-exe-dryrun])    
><kbd class="btn-red">&nbsp;실행&nbsp;</kbd> : 태스크 실행      
><kbd class="btn-gray">&nbsp;조건실행&nbsp;</kbd> : 태스크 조건실행 수행 ([참고][popup-exe-condition])    
><kbd class="btn-gray">&nbsp;결과보기&nbsp;</kbd> : 태스크 실행결과 조회 ([참고][execution])  

#### Grid 상단영역
> ![추가/등록][ico-add]{: class="ico-white" } : 태스크를 신규 생성한다.  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제한다.

#### Grid 하단영역
>**Left** : 조회 건수  
>**Center** : 페이지 표시/선택  
>**Right** : Grid 에 한번에 표시할 건수  


## 태스크 정보
태스크 정보 확인이 가능합니다.  

>![태스크 정보][task-dtl]
 
### 기본정보
> **태스크ID** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능  
> **Revision No.** : 태스크의 발행 버전  
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])
> **설명**

### 스크립트정보
지정한 파일 유형/인코딩 형식으로 저장.(ascii는 UTF-8)

#### 상단 버튼영역
> <kbd class="btn-gray">파일유형(개행)</kbd> : 파일 유형 지정(Linux/Windows)  
> <kbd class="btn-gray">파일인코딩</kbd> : 파일 인코딩 지정(utf-8/cp949)  
> ![복사][ico-copy]{: class="ico-white" } : 클립보드에 복사  
> ![추가/등록][ico-add]{: class="ico-white" } : 스크립트 파일 불러오기   

#### 본문영역
> **파일명**  
> **실행계정**  
> **내용**  

### 실행대상정보
OS 계정 미입력 시에는 스크립트 정보의 실행계정에 입력된 값으로 수행됩니다.  
OS 계정을 하나 이상 입력할 때는 ,로 구분합니다. (예시 : user1,user2,user3)

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력한다.

#### Grid 상단영역
> ![추가/등록][ico-add]{: class="ico-white" } : 실행대상 노드집합정보를 추가 ([참고][popup-node])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제

#### Grid 하단영역
> **Left** : 조회 건수

### 스케줄정보
스케줄은 실행가능시간의 제약없이 실행됩니다.  

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력한다.

#### Grid 상단영역
> ![추가/등록][ico-add]{: class="ico-white" } : 실행가능시간 정보를 추가 ([참고][popup-schedule])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제

#### Grid 하단영역
> **Left** : 조회 건수
 
### 실행가능시간정보
실행가능시간에 어떤 조건도 없을 경우, 항상 실행 가능합니다.  

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력한다.

#### Grid 상단영역
> ![추가/등록][ico-add]{: class="ico-white" } : 실행가능시간정보를 추가 ([참고][popup-runnabletime])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제

#### Grid 하단영역
> **Left** : 조회 건수


### 트리거정보
실행 종료 후, 자동 실행할 태스크를 추가합니다.  
우측 추가/등록 버튼 클릭하여 트리거 태스크를 지정한 후, Grid 에 트리거 조건 및 시간 정보를 입력합니다.
(시간 생략 : 즉시 실행)

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력한다.

#### Grid 상단영역
> ![추가/등록][ico-add]{: class="ico-white" } : 트리거할 태스크 정보를 추가 ([참고][popup-task])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제

#### Grid 하단영역
> **Left** : 조회 건수

### 권한정보
태스크에 대한 권한 정보를 확인 가능.  
다른 태스크가 이 태스크를 **트리거**로 지정하는 경우, 실행권한을 여기에서 부여해야 합니다.  

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력한다.

#### Grid 상단영역
> ![추가/등록][ico-adduser]{: class="ico-white" } : 사용자 정보를 추가 ([참고][popup-user])   
> ![추가/등록][ico-addusergrp]{: class="ico-white" } : 사용자그룹 정보를 추가 ([참고][popup-usergrp])  
> ![추가/등록][ico-add]{: class="ico-white" } : 태스크 정보를 추가 ([참고][popup-usergrp])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제  

#### Grid 하단영역
> **Left** : 조회 건수

### 이력정보
> 등록/변경과 관련된 이력정보

### 하단 버튼영역
> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-red">저장</kbd> : 등록/변경된 내용을 저장  
 
 
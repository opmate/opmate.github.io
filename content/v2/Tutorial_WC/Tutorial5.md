---
title: 5. 태스크 실행 결과
description: 5. 태스크 실행 결과
menu:
  v2:
    parent: v2-tutorial-wc
weight: 13
#firstpage: true
lastpage: true
---

---

## 태스크실행 목록
태스크 실행과 관련한 상태/정보 등을 확인할 수 있습니다.  
좌측 조회 조건을 입력하고 조회된 태스크의 실행 정보를 Grid 에서 선택하면,
우측 영역에 해당 실행에 대한 상세 정보가 출력됩니다.  
우측 Grid 에 출력된 노드 정보 중 특정 노드를 조회하고,
Double Click 하면 해당 노드에서 실행된 정보가 팝업으로 출력됩니다.

![WC_task_exe](images/execution-lst.png)

### **조회 조건(태스크 실행)**

**입력 항목**

> **태스크 ID** : 태스크ID 를 정확하게 입력하거나, ![WC_icon_del](images/icon/ico-del.png) 버튼을 통해 선택.  
> **소유자 ID** : 소유자ID 를 정확하게 입력하거나, ![WC_icon_search](images/icon/ico-search.png) 버튼을 통해 선택. 

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

> ![WC_execution_dtl](images/popup-execution-detail.png)

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력  
> **Double Click** : 해당 Row(노드) 의 태스크 실행 상세 정보 팝업 출력  
> <kbd class="btn-red">&nbsp;강제종료&nbsp;</kbd> : 수행 중인 태스크 일 때 활성화 되며, 클릭 시 강제 종료 실행  

**Grid 하단영역**

> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수
 
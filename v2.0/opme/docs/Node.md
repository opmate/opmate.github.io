---
title: 노드
description: 노드 목록/노드 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[node-lst]: img/node-lst.png
[node-dtl]: img/node-dtl.png
[node-condition]: img/node-condition.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png  

## 노드 목록
OPMATE 에 연결된 노드를 조회합니다.   

>![노드 목록][node-lst]

### 조회 조건

#### 검색조건
> 다음 키워드를 통해서 노드를 조회합니다. 부분문자열 조회 가능합니다.(Like)   
>> <b>Hostname, OS 종류, IP 주소, Agent 버전  </b>


> Advance Search 를 지원하며, 노드집합표현식으로 조회할 수 있습니다.
>![노드 AS][node-condition]

#### 버튼
><kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
<kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
>**Grid Contents** : 조회 조건에 해당하는 결과를 출력    
**Double Click** : Row 를 Double Click 하면 해당 역할의 상세 정보 화면으로 이동.   
 
#### Grid 하단영역
>**Left** : 조회 건수  
**Center** : 페이지 표시/선택  
**Right** : Grid 에 한번에 표시할 건수  


## 노드 정보
노드 정보 확인이 가능합니다.  

>![노드 정보][node-dtl]
 
### 기본정보
> 선택한 노드의 기본 정보  
>>    노드세션 ID, Hostname, OS 종류/이름/버전, IP정보,  
      Agent 버전, Heart Beat, 생성일시 등
>>> IP 의 경우, Core 가 인식하는 기준의 IP 주소임을 참고해 주시기 바랍니다.  

### 하단 버튼영역
> **목록** : 사용자 목록으로 이동  
 
 
---
title: 노드
description: 노드 목록/노드 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[node-lst]: img/node-lst.png
[node-dtl]: img/node-dtl.png

<!-- Floating Menu -->
[prev]: Role.html "역할"
[menu]: index.html "목차"
[next]: Task.html "태스크"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]


## 노드 목록
OPMATE 에 연결된 노드를 조회합니다.   
노드는 Agent가 설치된 장비를 마스터가 인식하는 단위입니다.

> ![노드 목록][node-lst]

### 조회 조건
조회 조건 하단의 ▼/▲ 를 Click 하면 _Advanced Search_ 기능을 사용할 수 있습니다.

#### 입력 항목(Basic Search)
> **Hostname** : 부분문자열 조회 가능(Like)   
> **OS 종류** : 부분문자열 조회 가능(Like)  
> **IP 주소** : 부분문자열 조회 가능(Like)   
> **Agent 버전** : 부분문자열 조회 가능(Like)  

#### 입력 항목(Advanced Search - 노드집합표현식)
> **Hostname** : 정규표현식 조회 가능(Like)  
> **OS 종류** : 정규표현식 조회 가능(Like)  
> **OS 이름** : 정규표현식 조회 가능(Like)  
> **OS 버전** : 정규표현식 조회 가능(Like)  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력    
> **Double Click** : 해당 Row 의 상세 정보 화면으로 이동
 
#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  


## 노드 정보
노드 정보 확인이 가능합니다. (조회 Only)

> ![노드 정보][node-dtl]
 
### 기본정보
OPMATE Agent 및 설치된 서버의 정보를 확인 가능합니다.  
> **IP주소** : OPMATE Master가 인지한 Agent의 IP주소(NAT IP 등)

### 하단 버튼영역
> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
 
 
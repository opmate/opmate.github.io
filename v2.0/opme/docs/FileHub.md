---
title: 파일허브
description: 파일허브 목록/파일허브 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[filehub-lst]: img/filehub-lst.png
[filehub-dtl]: img/filehub-dtl.png
[file]: File.md
[ico-search]: img/icon/ico-search.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png
[ico-adduser]: img/icon/ico-adduser.png
[ico-addusergrp]: img/icon/ico-addusergrp.png
[popup-user]: PopupUser.md
[popup-usergrp]: PopupUserGroup.md
[popup-task]: PopupTask.md

<!-- Floating Menu -->
[prev]: Dictionary.html "단어사전"
[menu]: index.html "목차"
[next]: File.html "파일"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]


## 파일허브 목록
OPMATE 파일허브 정보를 조회합니다.  
파일허브는 파일 송수신을 위한 임시 보관소입니다.  
생성된 파일허브는 삭제하지 않는 이상 유지는 되지만, 하위 파일은 일정 시간이 지나면 자동 삭제됩니다.  


> ![파일허브 목록][filehub-lst]

### 조회 조건

#### 입력 항목
> **ID** : 부분문자열 조회 가능(Like)   
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 조회 결과

#### Grid 상단영역
> ![추가/등록][ico-add]{: class="ico-white" } : 파일허브 정보를 개별 추가   
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제

#### Grid 본문영역
> **Grid Contents** : 조회 결과 출력  
> **Double Click** : Row 를 Double Click하면 역할 상세 정보 화면으로 이동.(Super-user 편집 가능)  
> <kbd class="btn-gray">&nbsp;파일상세보기&nbsp;</kbd> : 파일상세 조회로 이동 ([참고][file])  
 
#### Grid 하단영역
> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

## 파일허브 정보
파일허브 정보 확인/등록/수정이 가능합니다.  
하나의 파일허브 단위로 접근을 제어할 수 있습니다.  

> ![파일허브 정보][filehub-dtl]
 
### 기본정보
> **파일허브 ID** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능    
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])


### 권한정보  
파일허브에 부여하는 권한정보를 입력합니다.  
권한 적용은 다음 속성으로 구성됩니다.  

  - 목록 조회 권한   
  - 다운로드 권한   
  - 업로드 권한  

각 권한은 사용자/사용자그룹/태스크 별로 매핑할 수 있습니다.  
>
| **권한**  | **목록 조회** | **다운로드** | **업로드** |
|:---:|:---------:|:--------:|:-------:|
| _사용자1_  |     -     |    O     |    -    |
| _사용자2_  |     -     |    -     |    O    |
| _사용자그룹_ |     O     |    O     |    -    |
| _태스크1_  |     -     |    -     |    O    |
| _태스크2_  |     O     |    O     |    -    |


#### Grid 상단영역
> ![사용자추가/등록][ico-adduser]{: class="ico-white" } : 사용자정보를 추가 ([참고][popup-user])  
> ![사용자그룹추가/등록][ico-addusergrp]{: class="ico-white" } : 사용자그룹정보를 추가 ([참고][popup-usergrp])   
> ![태스크추가/등록][ico-add]{: class="ico-white" } : 태스크정보를 추가 ([참고][popup-task])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row(파일) 삭제

#### Grid 하단영역
> **Left** : 조회 건수

### 이력정보
> 등록/변경과 관련된 이력정보

### 하단 버튼영역
> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-red">저장</kbd> : 등록/변경된 내용을 저장  


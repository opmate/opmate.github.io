---
title: 태스크
description: 태스크 목록/태스크 정보
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[task-lst]: img/task-lst.png
[task-dtl]: img/task-dtl.png
[ico-copy]: img/icon/ico-copy.png
[ico-search]: img/icon/ico-search.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png
[ico-adduser]: img/icon/ico-adduser.png
[ico-addusergrp]: img/icon/ico-addusergrp.png
[task-hst]: publist.md
[execution]: execution.md
[popup-user]: popupuser.md
[popup-usergrp]: popupusergroup.md
[popup-exe-condition]: popupexecutioncondition.md
[popup-exe-detail]: popupexecutiondetail.md
[popup-exe-dryrun]: popupexecutiondryrun.md
[popup-task-select]: popuptaskselect.md
[popup-task]: popuptask.md
[popup-schedule]: popupschedule.md
[popup-node]: popupnode.md
[popup-runnabletime]: popuprunnabletime.md
[popup-task-hst]: popuptaskhistory.md

<!-- Floating Menu -->
[prev]: NodeReview.html "노드"
[menu]: index.html "목차"
[next]: Publist.html "태스크발행이력"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]

{% if config.extra.manual == 'opme' %}
??? info "태스크(Task)"
    태스크는 스크립트를 노드에 실행하기 위한 작업 정의서입니다.
{% endif %}

## 태스크 목록
OPMATE 태스크 목록을 조회/추가/삭제 할 수 있습니다.  
조회 결과의 Revision No. 는 가장 최근 발행 버전의 결과를 표시합니다.  
이전 발행 버전의 태스크는 태스크 발행이력 메뉴에서 확인할 수 있습니다.

![태스크 목록][task-lst]

### **조회 조건**

**입력 항목**  

> **태스크 ID** : 부분문자열 조회 가능(Like)  
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  

**버튼**

> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### **조회 결과**

**Grid 상단영역**

> ![추가/등록][ico-add]{: class="ico-white" } : 신규 생성  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제
 
**Grid 본문영역**

일부 기능(상세정보/모의실행 등)사용 시, 미발행 건이 있는 경우에는 최신 발행 버전과 편집 중인 버전 중에서 선택해야 합니다. ([참고][popup-task-select])  
Grid Contents 내의 버튼 클릭 시, 색상에 따라서 파란색은 팝업 화면, 초록색은 화면 이동, 빨강은 Confirm 및 실행의 동작을 가집니다.

> **Grid Contents** : 조회 결과 출력  
> **Double Click** : 해당 Row 의 상세 정보 화면으로 이동 (권한에 따른 편집 가능)  
> <kbd class="btn-green">&nbsp;이력보기&nbsp;</kbd> : 태스크 발행이력 조회 ([참고][task-hst])    
> <kbd class="btn-blue">&nbsp;모의실행&nbsp;</kbd> : 태스크 모의실행 수행 ([참고][popup-exe-dryrun])    
> <kbd class="btn-red">&nbsp;실행&nbsp;</kbd> : 태스크 실행      
> <kbd class="btn-blue">&nbsp;조건실행&nbsp;</kbd> : 태스크 조건실행 수행 ([참고][popup-exe-condition])    
> <kbd class="btn-green">&nbsp;결과보기&nbsp;</kbd> : 태스크 실행결과 조회 ([참고][execution])  

**Grid 하단영역**

> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

## 태스크 정보

태스크 정보 확인/등록/수정/발행/폐기가 가능합니다.  
태스크의 저장은 편집 중인 데이터의 손실을 막기 위함이며, 최종적으로 발행이 완료된 태스크만 실행할 수 있습니다.  
Normal-User의 경우 다른 사용자의 태스크 정보는 확인만 가능합니다.

![태스크 정보][task-dtl]

### **태스크 비교**

태스크 비교 버튼(우측 상단)을 Click 하여 출력되는 팝업에서  
비교할 태스크, Revision No. 를 선택합니다.  
선택이 완료되면 태스크 정보 화면은 좌우로 분할되어 좌측에는 현재 확인 또는 생성/편집 중인 태스크,  
우측에는 비교대상으로 선택한 태스크를 보여줍니다.

> <kbd class="btn-blue">&nbsp;태스크 비교&nbsp;</kbd> : 태스크 비교대상 선택 팝업 ([참고][popup-task-hst])  
> <kbd class="btn-gray">&nbsp;태스크 비교 닫기&nbsp;</kbd> : 태스크 비교 닫기
 
### **기본정보**

> **태스크ID** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능  
> **Revision No.** : 태스크의 발행 버전  
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  
> **설명**

### **스크립트정보**

파일명, 실행계정을 입력한 후 스크립트의 내용을 편집 작성하거나,  
Local Disk 의 파일을 불러와서 편집할 수도 있습니다.  
두 경우 모두에서 파일 유형/파일 인코딩의 선택이 선행되어야 합니다.  
파일 유형은 Windows와 Linux계열 OS의 개행문자 차이를 나타내며, 파일 인코딩은 스크립트의 캐릭터셋을 나타냅니다.(ascii는 UTF-8)  

> **파일 유형(개행)** : Linux/Windows 선택  
> **파일 인코딩** : utf-8/cp949 선택  
> ![복사][ico-copy]{: class="ico-white" } : 스크립트 내용 클립보드 복사  
> ![추가/등록][ico-add]{: class="ico-white" } : 스크립트 파일 불러오기  
> **파일명** : ps1,vbs,sh,cmd,bat 의 확장자만 사용 가능   
> **실행계정** : 스크립트 수행을 위한 OS 계정   
> **내용**  : 수행할 스크립트  

### **실행대상정보**

실행대상정보에 OS계정을 명기하는 경우에는 해당 노드들에 대해서 스크립트 정보의 실행계정을 무시하고 명기된 OS계정으로 수행합니다.  
OS계정 미입력 시에는 스크립트 정보의 실행계정에 입력된 값으로 수행됩니다.  

**Grid 상단영역**

> ![추가/등록][ico-add]{: class="ico-white" } : 실행대상 노드집합정보 추가 ([참고][popup-node])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력

**Grid 하단영역**

> **Left** : 조회 건수

### **스케줄정보**

태스크 수행을 위한 스케줄을 지정할 수 있습니다.  
스케줄은 실행가능시간의 제약 없이 실행됩니다.  

**Grid 상단영역**

> ![추가/등록][ico-add]{: class="ico-white" } : 스케줄 정보 추가 ([참고][popup-schedule])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력  

**Grid 하단영역**

> **Left** : 조회 건수  
 
### **실행가능시간정보**

실행가능시간에 어떤 조건도 없을 경우, 항상 실행 가능합니다.  

**Grid 상단영역**

> ![추가/등록][ico-add]{: class="ico-white" } : 실행가능시간정보를 추가 ([참고][popup-runnabletime])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력
 
**Grid 하단영역**

> **Left** : 조회 건수


### **트리거정보**

태스크의 실행 종료 후, 자동 실행할 태스크를 추가합니다.  
우측 추가/등록 버튼 클릭하여 팝업에서 트리거 태스크를 지정 후,  
Grid에 자동 실행의 조건 및 시간 정보를 입력합니다.  
시간 정보를 생략하는 경우, 지연 없이 즉시 실행합니다.

**Grid 상단영역**

> ![추가/등록][ico-add]{: class="ico-white" } : 자동 실행 할 태스크 정보 추가 ([참고][popup-task])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력  
> **조건** 컬럼 : 성공/실패 선택. 해당 조건을 만족하면 Row에 해당하는 태스크 실행  
> **시간** 컬럼 : 정수 입력. 조건 만족 후, 태스크 실행을 위한 지연시간  
> **단위** 컬럼 : 시간/분/초 입력. 시간 컬럼의 단위 지정  

**Grid 하단영역**

> **Left** : 조회 건수

### **권한정보**

해당 태스크에 대한 접근 권한을 지정합니다.  
팝업을 통해 권한을 부여할 사용자 또는 사용자그룹, 태스크를 선택하고,  
Grid 의 check 박스를 통해 read/write/execute 권한을 부여합니다.  
다른 태스크가 이 태스크를 *트리거*로 지정하는 경우, 여기에서 실행권한을 부여해야 합니다.  

**Grid 상단영역**

> ![추가/등록][ico-adduser]{: class="ico-white" } : 사용자 정보를 추가 ([참고][popup-user])   
> ![추가/등록][ico-addusergrp]{: class="ico-white" } : 사용자그룹 정보를 추가 ([참고][popup-usergrp])  
> ![추가/등록][ico-add]{: class="ico-white" } : 태스크 정보를 추가 ([참고][popup-task])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제  

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력

**Grid 하단영역**

> **Left** : 조회 건수

### **이력정보**

등록/변경과 관련된 이력정보

### **하단 버튼영역**

> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-red">저장</kbd> : 등록/변경된 내용을 저장  
> <kbd class="btn-red">폐기</kbd> : 편집 중(발행 이전)인 Revision 폐기  
> <kbd class="btn-red">발행</kbd> : 편집 중(발행 이전)인 Revision 발행
 
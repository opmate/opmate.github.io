---
title: 파일허브
description: 파일허브 목록/파일허브 정보
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Defined -->
[filehub-lst]: img/filehub-lst.png
[filehub-dtl]: img/filehub-dtl.png
[file]: file.md
[ico-search]: img/icon/ico-search.png
[ico-del]: img/icon/ico-del.png
[ico-add]: img/icon/ico-add.png
[ico-adduser]: img/icon/ico-adduser.png
[ico-addusergrp]: img/icon/ico-addusergrp.png
[popup-user]: popupuser.md
[popup-usergrp]: popupusergroup.md
[popup-task]: popuptask.md

<!-- Floating Menu -->
[prev]: dctnry.html "단어사전"
[menu]: index.html "목차"
[next]: file.html "파일"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]

{% if config.extra.manual == 'opme' %}
??? info "파일허브"
    파일허브는 파일 송수신을 위한 임시 보관소입니다.  
{% endif %}

## 파일허브 목록
OPMATE 파일허브 정보를 조회합니다.  
생성된 파일허브는 삭제하지 않는 이상 유지 되지만, 하위 파일은 일정 시간이 지나면 자동 삭제됩니다.  


![파일허브 목록][filehub-lst]

### **조회 조건**

**입력 항목**

> **ID** : 부분문자열 조회 가능(Like)   
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])  

**버튼**

> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### **조회 결과**

**Grid 상단영역**

> ![추가/등록][ico-add]{: class="ico-white" } : 신규 생성  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제  

**Grid 본문영역**

> **Grid Contents** : 조회 결과 출력  
> **Double Click** : 해당 Row 의 상세 정보 화면으로 이동 (권한에 따른 편집 가능)  
> <kbd class="btn-green">&nbsp;파일상세보기&nbsp;</kbd> : 파일상세 조회로 이동 ([참고][file])  
 
**Grid 하단영역**

> **Left** : 조회 건수  
> **Center** : 페이지 표시/선택  
> **Right** : Grid 에 한번에 표시할 건수  

## 파일허브 정보

파일허브 정보 확인/등록/수정이 가능합니다.  
개별 파일에는 접근 권한을 지정할 수 없으며,  
파일허브에 접근 권한을 부여하면 파일허브 내의 파일들은 해당 접근 권한을 따릅니다.


![파일허브 정보][filehub-dtl]
 
### **기본정보**

> **파일허브 ID** : <kbd class="btn-gray">&nbsp;확인&nbsp;</kbd> 버튼으로 중복 여부 확인 가능    
> **소유자 ID** : 사용자ID 를 정확하게 입력하거나, ![소유자 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-user])


### **권한정보**  

권한을 부여할 대상을 팝업에서 선택합니다.  
사용자/사용자그룹/태스크의 권한 부여 대상에 따라서 팝업을 활용할 수 있습니다.  
대상을 추가한 후, Grid 의 체크박스를 통해 적절한 권한을 부여합니다.

**Grid 상단영역**

> ![추가/등록][ico-adduser]{: class="ico-white" } : 사용자 추가 ([참고][popup-user])  
> ![추가/등록][ico-addusergrp]{: class="ico-white" } : 사용자그룹 추가 ([참고][popup-usergrp])   
> ![추가/등록][ico-add]{: class="ico-white" } : 태스크 추가 ([참고][popup-task])  
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제

**Grid 하단영역**

> **Left** : 조회 건수

### **이력정보**

> 등록/변경과 관련된 이력정보

### **하단 버튼영역**

> <kbd class="btn-gray">목록</kbd> : 목록 화면으로 이동  
> <kbd class="btn-red">저장</kbd> : 등록/변경된 내용을 저장  

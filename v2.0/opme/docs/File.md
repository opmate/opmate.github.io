---
title: 파일상세
description: 파일상세 목록/파일상세 정보
---

<link rel="stylesheet" type="text/css" href="../css/opme.css">

<!-- Defined -->
[file-lst]: img/file-lst.png
[ico-search]: img/icon/ico-search.png
[ico-del]: img/icon/ico-del.png
[ico-upload]: img/icon/ico-add.png
[ico-download]: img/icon/ico-save.png
[popup-filehub]: PopupFileHub.md
[popup-fileupload]: PopupFileUpload.md

<!-- Floating Menu -->
[prev]: FileHub.html "파일허브"
[menu]: index.html "목차"
[next]: AccessKey.html "엑세스키"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class='ico-menu-float' }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]


## 파일상세 목록
OPMATE 파일허브의 파일 정보를 조회합니다.  
파일허브 ID로 파일허브 내의 파일을 조회 후, 대상을 선택하여 파일 업로드/다운로드 수행을 합니다.  


> ![파일상세 목록][file-lst]

### 조회 조건

#### 입력 항목
> **파일허브 ID** : 파일허브 ID를 정확하게 입력하거나, ![파일허브 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-filehub])  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 파일 목록
경로를 입력하고 파일을 업로드 하면, 디렉토리가 자동 생성됩니다.  

#### 입력 항목
> **파일경로** : 파일허브 내 파일이 위치한 경로를 입력합니다.    
> -- 파일경로를 정확하게 입력하거나,   
> -- 최상위 경로( / )에서 ![파일경로 조회][ico-search]{: .ico-gray }클릭 후 대상으로 이동합니다.

#### Grid 상단영역  
> ![업로드][ico-upload]{: class="ico-white" } : 팝업창을 통해 파일을 업로드 ([참고][popup-fileupload])  
> ![다운로드][ico-download]{: class="ico-white" } : Check 된 파일을 다운로드   
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 를 삭제

#### Grid 본문영역
> **Grid Contents** : 조회 조건에 해당하는 결과를 출력

#### Grid 하단영역
> **Left** : 조회 건수  


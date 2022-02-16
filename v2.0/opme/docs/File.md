---
title: 파일상세
description: 파일상세 목록/파일상세 정보
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

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
파일허브의 파일 정보를 관리할 수 있습니다.  
파일허브를 조회한 후에 해당 파일허브에 파일을 업로드하거나 다운로드 할 수 있습니다.

> ![파일상세 목록][file-lst]

### 조회 조건

#### 입력 항목
> **파일허브 ID** : 파일허브 ID를 정확하게 입력하거나, ![파일허브 조회][ico-search]{: .ico-gray } 팝업을 통해 선택.([참고][popup-filehub])  

#### 버튼
> <kbd class="btn-gray">&nbsp;초기화&nbsp;</kbd> : 조회 조건 초기화  
> <kbd class="btn-red">&nbsp;조회&nbsp;</kbd> : 조회 수행  
 
### 파일 목록
파일허브를 탐색하고, 파일을 업로드/다운로드 할 수 있는 탐색기 형태의 Grid 가 제공됩니다.  
파일경로 내의 파일과 디렉토리가 Grid 에 보여지며,  
Grid 에서 더블클릭으로 디렉토리 이동시에는 해당 경로도 그에 맞게 표시됩니다.  
신규 디렉토리에 파일을 업로드 하려는 경우에는 디렉토리를 명시한 후,  
파일을 업로드하면 그에 맞게 디렉토리가 자동 생성됩니다.  

#### Grid 상단영역  
> **파일경로** : 파일허브 내 파일의 경로  
> ![업로드][ico-upload]{: class="ico-white" } : 파일 업로드 팝업 ([참고][popup-fileupload])  
> ![다운로드][ico-download]{: class="ico-white" } : Check 된 파일 다운로드   
> ![삭제][ico-del]{: class="ico-white" } : Check 된 Row 삭제

#### Grid 본문영역
> **Grid Contents** : 조회 결과 출력  
> **Double Click** : 해당 Row 의 디렉토리로 이동('..' 은 상위 디텍토리를 의미)

#### Grid 하단영역
> **Left** : 조회 건수  


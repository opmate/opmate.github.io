---
title: 사용자
description: 사용자 목록/사용자 정보
---

## 사용자 목록
OPMATE 사용자 정보를 조회하고, 삭제할 수 있다.

>![사용자 목록](img/user_lst.png "사용자 목록")

![사용자 목록](img/user_lst.png "사용자 목록"){: width="100px" height="100px" }

.baba {
    vertical-align: bottom;
}

1. 권한
    - 조회 : All-User  
    - 삭제 : Super-User
2. 조회 조건
    - 사용자 ID : 부분문자열 조회 가능  
    - 사용자 이름 : 부분문자열 조회 가능  
    - 권한 : ALL/Super-User/Normal-User 선택  
    - 상태 : ALL/Enable/Disable 선택  
    - `초기화` : 조회 조건 초기화  
    - `조회` : 조회 수행  
    - ![조회](img/icon/ico-select-btn.png#class=baba "조회"){: style="vertical-align: bottom;" } : 조회 수행  
    - ![조회](img/icon/ico-select-btn.png#style=vertical-align:bottom; "조회"){: width="65px" } : 조회 수행  
    - ![조회](img/icon/ico-select-btn.png "조회"){: width="65px" style="vertical-align: bottom;" } : 조회 수행
    - ![조회](img/icon/ico-select-btn2.png#class=baba "조회"){: style="vertical-align: bottom;" } : 조회 수행
    - ![조회](img/icon/ico-select-btn2.png#style=vertical-align:bottom; "조회"){: width="65px" } : 조회 수행
    - ![조회](img/icon/ico-select-btn2.png "조회"){: width="65px" style="vertical-align: bottom;" } : 조회 수행
    - <kbd>초기화</kbd> : 조회 조건 초기화
    - <kbd style="color: #ffffff; background-color: #ea0530; box-shadow: 0px 2px 1px 1px #ea9999">조회</kbd> : 조회 수행  
3. 조회 결과
    - Grid : 조회 조건에 해당하는 결과를 출력한다.  
    >`Double Click` : Row 를 Doub   le Click 하면 해당 사용자의 상세 정보 화면으로 이동한다.(권한에 따른 편집가능)  
    - Grid 상단  
    > ![삭제](img/icon/ico-del-hover.png#style=max-width:50px;vertical-align:bottom; "삭제") : Check 된 Row 를 삭제한다.   
      ![추가/등록](img/icon/ico-add-hover.png#style=max-width:50px;vertical-align:bottom; "추가/등록") : 신규 생성한다.
    - Grid 하단  
    > Left : 조회 건수  
    Center : 페이지 표시/선택  
    Right : Grid 에 한번에 표시할 건수  


## 사용자 정보

- 기본정보
    - [x] 사용자ID
    - [ ] 설명
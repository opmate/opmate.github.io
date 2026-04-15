---
title: 7. Tag 모아보기
description: 7. Tag 모아보기
menu:
  v2:
    parent: v2-tutorial-wc
weight: 15
#firstpage: true
#lastpage: true
---

---

## Tag 모아보기
> OPMATE의 노드들은 Tag정보로 관리할 수 있습니다.  
Tag 기반으로 관리하면 그룹핑하여 수행 대상 서버로 지정할 수 있습니다.  
추후 노드가 늘어나거나 삭제되어도 Tag 정보로 관리하고 있기 때문에  
자동으로 관리가 되어 용이합니다.

![WC_dashboard](images/maindashboards.png)  

### CSP Tag와 WorkPortal Tag
> CSP 태그는 AWS 인스턴스의 메타데이터 태그로 지정할 수 있습니다.  
콘솔 관리화면에서 <u>Allow tags in instance metadata</u> 옵션을 `허용`으로 지정해야합니다.
WorkPortal 태그는 기준정보관리 양식에 맞게 작성이 필요합니다.  
담당자 문의 부탁드립니다.

![WC_dashboard](images/taglst.PNG)  

### Tag 동기화 주기
> CSP에서 제공하는 Tag 수집은 각 Agent가 <B>10분마다</B> 동기화합니다.  
WorkPortal의 전체 Tag 동기화는 <B>매일 마스터에서 2회</B> 진행합니다.  


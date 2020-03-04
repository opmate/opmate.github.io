---
title: 사용자 매뉴얼
description: 3. 사용자그룹
---

[목차](UserManual.md) / [이전페이지](UserManual2.md) / [다음페이지](UserManual4.md)

## 사용자 그룹 (User Group)

사용자 그룹은 여러명의 사용자가 모여 있는 집합이다..
다수의 사용자들을 동시에 지정하기 위한 용도로 사용되며, 
한 명의 사용자는 여러 개의 사용자 그룹에 소속될 수 있다.

사용자 그룹의 생성은 작업자 이상의 권한을 가지고 있으면 가능하고,
생성한 사용자가 해당 그룹의 소유자(Owner)가 된다.

하나의 사용자 그룹은 다음과 같은 정보로 구성된다.

> 사용자그룹ID, 소유자(Owner), 설명, 포함 사용자정보(계정/이름)

소유자는 그룹의 각종 속성, 소속 사용자 등을 변경하거나 삭제할 수 있으며,
소유자를 다른 사용자로 변경할 수도 있다.

### 사용자 그룹 생성

```shell
$ opmate usergroup create -id mygroup 
```

### 사용자 그룹 사용자 추가 / 삭제

```shell
$ opmate usergroup adduser -id mygroup -ui user1
$ opmate usergroup rmuser -id mygroup -ui user1
```

### 사용자 그룹 목록 조회 / 상세 보기

```shell
$ opmate usergroup list -id mygroup
$ opmate usergroup view -id mygroup
```

### 사용자 그룹 편집

```shell
$ opmate usergroup edit -id mygroup -wi newgroup
```


[목차](UserManual.md) / [이전페이지](UserManual2.md) / [다음페이지](UserManual4.md)
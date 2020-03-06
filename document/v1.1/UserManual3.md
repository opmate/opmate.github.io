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

> 사용자그룹ID, 소유자(Owner), 설명, 포함 사용자정보(멤버)

```
$ opmate usergroup view -id mw_user_grp01 

+-------------+----------------------+
| FIELD       | VALUE                |
+-------------+----------------------+
| [BASIS]     |                      |
|             |                      |
| ID          | mw_user_grp01        |      ☞ 사용자그룹ID
| OWNER       | oprim                |      ☞ 소유자(Owner)
| DESCRIPTION | Tomcat Operators.    |      ☞ 설명
|             |                      |
| CREATE DATE | 2020/02/10 11:08     |
| CREATE USER | oprim                |
| UPDATE DATE | 2020/02/10 11:15     |
| UPDATE USER | oprim                |
|             |                      |      
| [USERS]     |                      |      ☞ 사용자정보(멤버)
|             | Optimus Prime(oprim) |      
|             | Bumblebee(bumbee)    |
+-------------+----------------------+
```

소유자는 자신이 소유하고 있는 사용자 그룹의 사용자(멤버)를 구성할 수 있는 권한을 가진다.
 
이외에도 사용자 그룹의 속성을 변경할 수 있으며, 소유권을 다른 사용자에게 이전 시킬 수도 있다.

아래는 CLI 명령을 이용하여 *mw_user_grp01* 사용자 그룹에 *bumbee* 라는 ID를 가진 사용자를 추가하는 예를 보여주고 있다.

```
$ opmate usergroup adduser -id mw_user_grp01 -ui bumbee
```

[목차](UserManual.md) / [이전페이지](UserManual2.md) / [다음페이지](UserManual4.md)
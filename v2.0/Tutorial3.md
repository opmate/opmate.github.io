---
title: OPMATE V2.0
description: Tutorial 3 - View Role
---

## Tutorial 3 : Role 조회

**Role**은 Node에서의 Task 실행 권한입니다.

Task 생성에 앞서 User에게 할당된 **Role**를 조회합니다.

<br>

### Role 목록 조회
- - -

<div><inline>opmate role list</inline>로 전체 Role 목록을 조회합니다.</div>

<br>

```bash

$ opmate role list

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong

+------------------+----------------+
| ID               | NAME           |
+------------------+----------------+
| ro-linux-admin   | 리눅스관리자     |
| ro-windows-admin | 윈도우관리자     |
+------------------+----------------+
> ROWS COUNT : 2/2

```

- 모든 Role이 'Role ID / Role Name'의 형태로 조회됩니다.

<br><br>

### Role 상세 조회
- - -

<div><inline>opmate role view</inline>로 Role의 상세 정보를 확인합니다.</div>

<br>

```bash

$ opmate ro view -id ro-linux-admin

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate;user=Gildong

+----------+----------------------------------+
| FIELD    | VALUE                            |
+----------+----------------------------------+
| ID       | ro-linux-admin                   |
| NAME     | 리눅스관리자                     |
| CREATED  | 20XX-XX-XX XX:XX:XX KST BY admin |
| UPDATED  | 20XX-XX-XX XX:XX:XX KST BY admin |
+----------+----------------------------------+
| NODE-SET | #1. OS-TYPE:"^Linux$" AS *       |
+----------+----------------------------------+
| USER     | Gildong(홍길동)                  |
|          | admin(관리자)                    |
+----------+----------------------------------+

```

- <div><inline>opmate role list</inline>로 확인했던 <u>Role ID</u>를 복사해 <inline>-id</inline> 파라미터값으로 입력합니다.<div>

- <div><inline>NODE-SET</inline>은 <u>사용할 수 있는 Node</u>입니다. 정규 표현식으로 지정되어 있습니다.</div>

- <div><inline>USER</inline>는 <u>Role이 할당된 User 목록</u>입니다.</div>

- Role 생성, 수정 등의 작업이 필요할 경우 관리자에게 요청합니다.

---
title: OPMATE V2.0
description: Tutorial
---

## Tutorial 2-2 : Role 조회

Role은 ~~~입니다.

~~~ 할 때 씁니다.

사용할 수 있는 Role를 조회해보겠습니다.

일단 전체 Role 리스트를 조회합니다.


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


여기서 'ro-linux-admin' Role를 조회해보겠습니다.


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



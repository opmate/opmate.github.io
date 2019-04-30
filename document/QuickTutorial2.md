---
title: Quick Tutorial
description: 사용자 계정 생성 및 로그인
---

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial1.md) / [다음페이지](QuickTutorial3.md)

```sh
$ opmate user create -id bumbee -nm 'Bumblebee' -pn '010-2222-2222' -ea 'bumbee@email.com'
Requesting https://127.0.0.1:8443/opmate
Enter password: 
Confirm password: 
bumbee has been created successfully.
```

```sh
$ opmate user list
Requesting https://127.0.0.1:8443/opmate;user=admin
+--------+---------------+------+---------+
| ID     | NAME          | ROLE | STATUS  |
+--------+---------------+------+---------+
| admin  | admin         | 0    | enable  |
| oprim  | Optimus Prime | 1    | enable  |
| bumbee | Bumblebee     | 3    | disable |
+--------+---------------+------+---------+

ROWS COUNT : 3/3

$ opmate user edit -id bumbee -ro 2 -st E     
Requesting https://127.0.0.1:8443/opmate;user=admin
bumbee has been modified successfully.
```

```sh
$ opmate user login -id bumbee
Requesting https://127.0.0.1:8443/opmate
Enter password: 
bumbee has been logged in successfully.
```

[첫페이지](QuickTutorial.md) / [이전페이지](QuickTutorial1.md) / [다음페이지](QuickTutorial3.md)

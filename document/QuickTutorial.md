---
title: Quick Tutorial
---

```sh
$ opmate
usage: opmate <user|usergroup|node|nodegroup|task|file|info> <action>
       [help|<options>]
```

```sh
$ vi ~/.opm/config
master_url=https://127.0.0.1:8443/opmate
```

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
| opri   | Optimus Prime | 1    | enable  |
| bumbee | Bumblebee     | 3    | disable |
+--------+---------------+------+---------+

ROWS COUNT : 3/3
$ opmate user edit -id bumbee -ro 2 -st E     
Requesting https://127.0.0.1:8443/opmate;user=admin
bumbee has been modified successfully.
```

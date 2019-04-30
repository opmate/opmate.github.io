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

```
$ opmate user login -id bumbee
Requesting https://127.0.0.1:8443/opmate
Enter password: 
bumbee has been logged in successfully.
```
```
$ opmate node list
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+----------------------------------+--------------------+-----------+-------+----------+-------+------------------+---------+
| ID                               | AGENT VERSION      | IP        | OS    | HOSTNAME | OWNER | HEARTBEAT        | STATUS  |
+----------------------------------+--------------------+-----------+-------+----------+-------+------------------+---------+
| 3106E85BCF76465F8F9B16BC3873C380 | 1.0.001.20190425.1 | 10.0.0.92 | Linux | myhost2  |       | 2019/04/30 14:10 | disable |
| 6FE9E69A10B44EBEAFC3A9F05078066C | 1.0.001.20190425.1 | 10.0.0.91 | Linux | myhost1  |       | 2019/04/30 14:10 | disable |
+----------------------------------+--------------------+-----------+-------+----------+-------+------------------+---------+

ROWS COUNT : 2/2
```
```
$ opmate node edit -id 6FE9E69A10B44EBEAFC3A9F05078066C -wi linux01 -st E
Requesting https://127.0.0.1:8443/opmate;user=bumbee
6FE9E69A10B44EBEAFC3A9F05078066C has been modified successfully.

$ opmate node edit -id 3106E85BCF76465F8F9B16BC3873C380 -wi linux02 -st E                                 
Requesting https://127.0.0.1:8443/opmate;user=bumbee
3106E85BCF76465F8F9B16BC3873C380 has been modified successfully.

$ opmate node list
Requesting https://127.0.0.1:8443/opmate;user=bumbee
+---------+--------------------+-----------+-------+----------+--------+------------------+--------+
| ID      | AGENT VERSION      | IP        | OS    | HOSTNAME | OWNER  | HEARTBEAT        | STATUS |
+---------+--------------------+-----------+-------+----------+--------+------------------+--------+
| linux02 | 1.0.001.20190425.1 | 10.0.0.92 | Linux | myhost2  | bumbee | 2019/04/30 14:15 | enable |
| linux01 | 1.0.001.20190425.1 | 10.0.0.91 | Linux | myhost1  | bumbee | 2019/04/30 14:15 | enable |
+---------+--------------------+-----------+-------+----------+--------+------------------+--------+

ROWS COUNT : 2/2
```

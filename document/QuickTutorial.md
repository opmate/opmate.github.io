---
title: Quick Tutorial
---

```sh
$ opmate
usage: opmate <user|usergroup|node|nodegroup|task|file|info> <action>
       [help|<options>]
```

```
$ vi ~/.opm/config
master_url=https://127.0.0.1:8443/opmate
```

```
$ opmate user create -id bumbee -nm 'Bumblebee' -pn '010-2222-2222' -ea 'bumbee@email.com'
Requesting https://127.0.0.1:8443/opmate
Enter password: 
Confirm password: 
bumbee has been created successfully.
```

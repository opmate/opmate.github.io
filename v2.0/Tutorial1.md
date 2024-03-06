---
title: OPMATE V2.0
description: Tutorial
---

## Tutorial 1 : 로그인

> User 생성 명령은 관리자 계정에만 활성화되어있습니다.
>
> 계정이 없을 경우 시스템 관리자에게 문의해주세요.

OPMATE에 대한 접속 권한을 얻기 위해 User Login을 진행해보겠습니다.

```bash

$ opmate user login -id GilDong

> Requesting https://XXX.XXX.XXX.XXX:8443/opmate
> Enter Password:
> Last login: XXXX-XX-XX XX:XX:XX KST

```

* subject를 user로, action을 login으로 하여 로그인 명령을 트리거합니다. <br>이 때 user는 us로 축약해서 사용가능합니다.eeee

* 패스워드를 입력하고 Last Login이 뜨면 정상적으로 로그인 처리가 된 것입니다.



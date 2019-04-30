---
title: Quick Tutorial
description: CLI 사용법 및 초기 설정
---

[첫페이지](QuickTutorial.md) / [다음페이지](QuickTutorial2.md)

OpMate CLI 명령어는 `opmate <object> <action> <option)`의 형식으로 이루어져 있다.
각각의 가능한 파라미터를 보고 싶으면 다음과 같은 형식으로 `help`를 붙이면 된다.

- `opmate help`
- `opmate <object> help`
- `opmate <object> <action> help`

다음은 활용 예제이다.

```sh
$ opmate help
usage: opmate <user|usergroup|node|nodegroup|task|file|info> <action>
       [help|<options>]
       
$ opmate user help
usage: opmate user <list|view|create|edit|passwd|delete|login|logout>
       [help|<options>]
       
$ opmate user list help
usage: opmate user list [-id <substring>] [-nm <substring>] [-ro <role-num>]
       [-st <E|D>] [-lm <number>] [-of <number>]
  -id,--id <substring>    Filter by ID
  -nm,--name <substring>  Filter by name
  -ro,--role <role-num>   Filter by role
                          * 0 : Administrator
                          * 1 : Approver
                          * 2 : Operator
                          * 3 : Viewer
  -st,--status <E|D>      Filter by status : Enable/Disable
  -lm,--limit <number>    Maximum number of rows
  -of,--offset <number>   First row number, starting at 0
```

```sh
$ vi ~/.opm/config
master_url=https://127.0.0.1:8443/opmate
```

[첫페이지](QuickTutorial.md) / [다음페이지](QuickTutorial2.md)

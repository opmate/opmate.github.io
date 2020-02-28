---
title: Tutorial
description: CLI 사용법 및 초기 설정
---

[첫페이지](QuickTutorial.md) / [다음페이지](QuickTutorial2.md)

OPMATE CLI 명령어는 `opmate <object> <action> <option>`의 형식으로 이루어져 있습니다. 가능한 파라미터와 설명을 보고 싶다면, 다음의 형식으로 마지막에 `help`를 붙여주면 됩니다.

- `$ opmate help`
- `$ opmate <object> help`
- `$ opmate <object> <action> help`

다음은 활용 예제입니다.

```
$ opmate help
usage: opmate <user|usergroup|node|nodegroup|task|file|info> <action>
       [help|<options>]
```
```
$ opmate user help
usage: opmate user <list|view|create|edit|passwd|delete|login|logout>
       [help|<options>]
```
```
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

최초로 `opmate`라는 명령을 실행하면, 사용자 홈디렉토리에 자동으로 .opm/ 디렉토리가 만들어지고 하위에 config 파일이 생성됩니다. config 파일에 OPMATE 마스터의 URL을 설정해야 정상적으로 CLI를 사용할 수 있습니다.

```sh
$ vi ~/.opm/config
master_url=https://127.0.0.1:8443/opmate
```

[첫페이지](QuickTutorial.md) / [다음페이지](QuickTutorial2.md)

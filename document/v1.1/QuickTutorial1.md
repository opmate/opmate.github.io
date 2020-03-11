---
title: Tutorial
description: CLI 사용법
---

[목차](QuickTutorial.md) / [다음페이지](QuickTutorial2.md)

OPMATE CLI 명령어는 `opmate <object> <action> <arguments>`의 형식으로 이루어져 있습니다. 가능한 파라미터와 설명을 보고 싶다면, 다음의 형식으로 마지막에 `help`를 붙여주면 됩니다.

- `$ opmate help`
- `$ opmate <object> help`
- `$ opmate <object> <action> help`

다음은 활용 예제입니다.

`opmate`에 어떤 `<object>`가 있는지 확인해 보겠습니다.
```
$ opmate help

usage: opmate <object> <action> [<arguments>|help]

[objects]
        user          Operator or service account that uses OPMATE with given roles.
        usergroup     Group of OPMATE users.
        node          Agent-installed server that is subject to operations management.
        nodegroup     Group of OPMATE nodes.
        task          Unit in which content to be executed on nodes is created.
        taskinstance  Details of the executed-task. Execution status, result check, rerun etc.
        approval      Approval of the OPMATE Task.
        file          File to receive or send from Master Repository.
        system        OPMATE System Information.

```

`opmate user`에 가능한 `<action>`은 무엇이 있을까요?
```
$ opmate user help

usage: opmate user <action> [<arguments>|help]

[actions]
        list          List information about users.
        view          View user's details.
        create        Create user's account.
        edit          Edit user's information.
        delete        Delete user's account.
        passwd        Change or Set user's password.
        login         Create a user authentication session.
        logout        Destroy a user authentication session.

```

`opmate user list`에 상세한 인자(arguments)를 확인해 보겠습니다.
```
$ opmate user list help

usage: opmate user list [-id <substring>] [-nm <substring>] [-ro <role-num>]
       [-st <E|D>] [-lm <number>] [-of <number>]

List information about users.
  -id,--id <substring>    Filter by ID
  -nm,--name <substring>  Filter by name
  -ro,--role <role-num>   Filter by role
                          * 0 : Administrator
                          * 1 : Manager
                          * 2 : Operator
                          * 3 : Guest
  -st,--status <E|D>      Filter by status : Enable/Disable
  -lm,--limit <number>    Maximum number of rows
  -of,--offset <number>   First row number, starting at 0

```

[목차](QuickTutorial.md) / [다음페이지](QuickTutorial2.md)

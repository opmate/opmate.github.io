---
title: 사용자 매뉴얼
description: 별첨 #1. CLI 사용법 개요
---

[목차](UserManual.md) / [이전페이지](UserManual8.md) / [다음페이지](UserManual10.md)

## CLI 사용법 개요

OPMATE는 사용자가 OPMATE를 통해서 원하는 업무를 수행할 수 있도록 Client를 제공하고 있으며, 이번 장에서는 OPMATE의 기본 제공 Client인 OPMATE CLI*(Command Line Interface)*의 사용법을 개략적으로 설명한다.<br>
*(OPMATE 대시보드도 제공하고 있으며, REST API 기반의 인터페이스를 통해 OPMATE의 사용이 가능하다.)*

OPMATE CLI 는 object, action, arguments 의 3가지 레벨로 구성되어 있으며, 이를 조합하여 OPMATE Master 서버에 적절한 요청을 할 수 있다.

사용자는 다음과 같은 형식으로 OS 명령 프롬프트에 질의할 수 있다.

>opmate <object> <action> [<arguments>|help]<br>
>> **object** : OPMATE 를 구성하는 주요 요소들의 집합.(사용자/노드/태스크 등)<br>
>> **action** : 지정한 object 에 대해서 수행하려는 명령.(생성/수정/삭제/목록 조회/상세보기 등)<br>
>> **arguments** : action 에 종속적인 옵션(파라미터)

### help 명령어 사용법

CLI 에서는 적절한 명령어를 입력하지 않으면, 잘못된 입력에 대해서 적절한 명령을 입력할 수 있도록 사용자에게 CLI 의 사용법을 보여준다.

CLI 의 사용법은 **object, action, arguments** 의 각 레벨에 따라서 적절한 명령을 입력할 수 있도록 제공된다.

또한, 각 레벨의 Command 대신에 명시적으로 help 키워드를 사용하여 사용법을 확인할 수도 있다. 

아래는 OPMATE 의 object 레벨에서 help 키워드를 사용한 경우의 결과이다.

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

특정 object 에서 수행가능한 action 을 확인하기 위해서는 다음과 같이 help 키워드를 사용할 수 있다.

*(**user** object의 action 목록을 출력한다.)*

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

해당 action 에서 사용할 수 있는 option의 목록은 다음과 같이 확인할 수 있다.
*(**user** object의 **list** action에 해당되는 option 목록을 출력한다.)*

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

option 은 위의 예시에서 보이는 바와 같이, Short/Long option name 형태를 제공하고 있다.
두가지 방식 모두 동일하게 동작하며 사용자의 취향에 따라 선택하여 사용 가능하다.<br>
*(Short : Single Dash, Long : Double Dash)*

위와 같이 OPMATE CLI 는 help 키워드를 통해서 사용법을 확인하고 직관적으로 사용할 수 있도록 단순한 커맨드 조합으로 구성되어 있다.

[목차](UserManual.md) / [이전페이지](UserManual8.md) / [다음페이지](UserManual10.md)
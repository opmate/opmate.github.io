---
title: 사용자 매뉴얼
description: 별첨  &#35;1. CLI 사용법
---

[목차](UserManual.md) / [이전페이지](UserManual8.md) / [다음페이지](UserManual10.md)

## CLI 사용법

사용자가 명령을 실행하기 위한 클라이언트 프로그램인 OPMATE CLI*(Command Line Interface)*의 사용법을 개략적으로 설명한다.

CLI 명령어는 운영체제의 쉘에서 제공하는 다양한 명령어들과 적절히 결합하여, 연속적인 질의를 하거나 원하는 결과 만을 취합하는 형태로의 사용이 가능하다.
*(리눅스의 쉘스크립트 파일 내에서 사용 가능)*

다음은 운영체제 쉘에서 OPMATE CLI 명령어와 grep 명령어를 결합하여, *linux_tomcat* 노드 그룹의 조회 결과 중 *prod* 키워드를 포함하는 노드ID 만을 출력하는 예시이다.

```
$ opmate nodegroup view -id linux_tomcat | grep 'prod'
|              | linux-prodap01 |
|              | linux-prodap02 |
|              | linux-proddb01 |
|              | linux-proddb02 |
```

### 명령어 구성

CLI 명령어는 object, action, arguments 의 3가지 레벨로 구성되어 있으며, 이를 조합하여 OPMATE Master에 적절한 요청을 할 수 있다.

>**$ opmate &lt;object&gt; &lt;action&gt; [&lt;arguments&gt;]<br>**
>> **object** : OPMATE 를 구성하는 주요 요소들의 집합.(사용자/노드/태스크 등)<br>
>> **action** : 지정한 object 에 대해서 수행하려는 명령.(생성/수정/삭제/목록 조회/상세보기 등)<br>
>> **arguments** : action 에 종속적인 인자(파라미터)

### 도움말(help)

CLI 에서는 적절한 명령어를 입력하지 않으면, 잘못된 입력에 대해서 적절한 명령을 입력할 수 있도록 사용자에게 CLI 의 사용법을 보여준다.

CLI 의 사용법은 **object, action, arguments** 의 각 레벨에 따라서 적절한 명령을 입력할 수 있도록 제공된다.

또한, 각 레벨의 Command 대신에 명시적으로 help 키워드를 사용하여 사용법을 확인할 수도 있다. 

다음은 object 레벨에서 help 명령어를 사용한 경우의 결과이다.

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
*(**user** object의 **list** action에 해당되는 arguments 목록을 출력한다.)*

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

이와 같이 OPMATE CLI 는 help 키워드를 통해서 사용법을 확인하고 직관적으로 사용할 수 있도록 단순한 커맨드 조합으로 구성되어 있다.

### 인자(arguments)

```
usage: opmate user create -id <user-id> -nm <name> -pn <phone-num> -ea
       <email-address> [-de <free-text>]

Create user's account.
  -id,--id <user-id>           User ID
  -nm,--name <name>            User name
  -pn,--phone <phone-num>      Phone number
  -ea,--email <email-address>  E-mail Address
  -de,--desc <free-text>       Description
```

arguments 는 위의 예시 중 `-ea` 와 `--email` 과 같이 short/long arguments name 형태로 제공된다.
두가지 방식 모두 동일하게 동작하며 사용자의 취향에 따라 선택하여 사용 가능하다.
*(Short : Single Dash, Long : Double Dash)*

또한, **필수** 항목과 **선택** 항목이 있으며, 선택 항목의 경우 usage에 `[-de <free-text>]`와 같이 `[...]` 로 표시된다.

### 상세조회 (view action)

view 명령은 특정 object의 지정한 ID(key)에 해당하는 상세정보를 출력한다.

ID는 중복을 허용하지 않는 Unique 한 값이며, 사용자가 입력한 ID로 OPMATE에 등록된 object를 조회하여 그에 해당하는 상세 정보를 출력한다.
*(일부 상세정보가 필요치 않은 object에 대해서는 view 명령을 제공하지 않는다.)*

다음의 예시와 같이 view 명령의 결과는 **FIELD/VALUE** 의 쌍으로 출력되며, 좌측은 FIELD(항목명)를 우측은 VALUE(값)을 보여준다.  

```
$ opmate user view -id bumbee

+-------------+------------------+
| FIELD       | VALUE            |
+-------------+------------------+
| ID          | bumbee           |
| NAME        | Bumblebee        |
| EMAIL       | bumbee@email.com |
| PHONE       | 010-2222-2222    |
| ROLE        | 2                |
| STATUS      | enable           |
| DESCRIPTION |                  |
| LAST LOGIN  | 2020/03/11 15:12 |
| CREATED AT  | 2020/03/06 13:48 |
| CREATED BY  |                  |
| UPDATED AT  | 2020/03/06 13:48 |
| UPDATED BY  |                  |
+-------------+------------------+
```

### 목록조회 (list action)

list 명령은 특정 object 에 등록된 목록을 출력한다.

list 명령은 각종 인자와 같이 사용가능 하며, 인자 항목에 따라서 전체일치 또는 부분일치로 검색된다.

조회 결과는 기본 30건까지만 출력되지만, 아래의 옵션을 지정하여 전체 목록 중 부분 출력(페이징)도 가능하다.

>-lm(--limit) : 조회 건수를 지정한다. 지정하지 않으면 30건(default 30) 출력하고, 0을 입력하면 전체 목록을 출력한다.

>-of(--offset) : 조회의 시작점을 지정한다. 지정하지 않으면 첫번째 항목(default 0)부터 출력하고, 양의 정수를 입력하면 해당 항목부터 출력한다.

limit와 offset 옵션을 통해서 ***"특정 항목부터(offset) 몇 개(limit)"*** 의 형태로 출력을 지정할 수 있다. 

다음의 예시와 같이 list 명령의 결과는 Grid 형태로 출력되며, **상단(첫 줄)에 항목명을 출력**하고 **이하에는 조회된 목록을 출력**한다.
출력된 결과의 최하단에는 ***"출력건수/전체건수"*** 의 형식으로 조회의 결과 건수가 출력된다.

```
$ opmate user list -st E

+--------+---------------+------+--------+------------------+
| ID     | NAME          | ROLE | STATUS | LAST LOGIN       |
+--------+---------------+------+--------+------------------+
| admin  | admin         | 0    | enable | 2020/03/13 14:07 |
| oprim  | Optimus Prime | 1    | enable | 2020/03/13 09:35 |
| bumbee | Bumblebee     | 2    | enable | 2020/03/11 15:12 |
+--------+---------------+------+--------+------------------+

ROWS COUNT : 3/3
```

<!-- Floating Menu -->
<link rel="stylesheet" type="text/css" href="/assets/css/common.css" />
<div class="usermanual-menu">
	<ul>
		<!--li><a href="#">이전</a></li-->
		<li><a href="#">목차</a>
			<ul>
				<li><a href="UserManual1.html">1. 개요</a></li>
				<li><a href="UserManual2.html">2. 사용자</a></li>
				<li><a href="UserManual3.html">3. 사용자 그룹</a></li>
				<li><a href="UserManual4.html">4. 노드</a></li>
				<li><a href="UserManual5.html">5. 노드 그룹</a></li>
				<li><a href="UserManual6.html">6. 태스크</a></li>
				<li><a href="UserManual7.html">7. 태스크 인스턴스</a></li>
				<li><a href="UserManual8.html">8. 파일 배포/수집</a></li>
				<li><a href="UserManual9.html">[별첨 #1] CLI 사용법</a></li>
				<li><a href="UserManual10.html">[별첨 #2] 스크립트내 예약어</a></li>
			</ul>
		</li>
		<!--li><a href="#">다음</a></li-->
	</ul>
</div>

[목차](UserManual.md) / [이전페이지](UserManual8.md) / [다음페이지](UserManual10.md)
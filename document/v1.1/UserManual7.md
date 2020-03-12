---
title: 사용자 매뉴얼
description: 7. 태스크 인스턴스
---

[목차](UserManual.md) / [이전페이지](UserManual6.md) / [다음페이지](UserManual8.md)

## 태스크 인스턴스 (Task Instance)

태스크를 실행하면, 실행마다 새로운 태스크 인스턴스가 생성된다.

하나의 태스크 인스턴스는 전체 태스크에서 유일한 **태스크 인스턴스 번호 (Task Instance No.)** 가 부여된다.<br>
태스크 인스턴스에 관한 주요한 요청들은 이 **태스크 인스턴스 번호** 를 기준으로 수행된다. 

### 노드별 상세

태스크의 수행 시에 생성된 태스크 인스턴스 번호와 태스크의 노드를 지정하면 태스크 인스턴스의 노드별 상세를 확인할 수 있다. 각 노드별로 다음과 같은 속성값을 가지고 있다.

>**진행 상태**<br>
>- 준비 : 노드에 아직 실행 요청을 보내기 전 상태<br>
>- 요청(실행중) : 노드에 실행 요청을 보낸 상태<br>
>- 완료 : 노드가 스크립트를 수행하고 실행 결과를 회신한 상태<br>
>- 실패 : 기타 이유(e.g. 스크립트 다운로드 불가 등)로 스크립트를 실행도 못한 경우<br>

>**실행 결과**<br>
>- N/A<br>
>- 성공 : 스크립트의 실행 결과 코드가 0 인 경우<br>
>- 실패 : 진행 상태가 실패이거나, 스크립트의 실행 결과 코드가 0 이 아닌 경우<br>

>**실행 결과 코드**<br>
>- 스크립트의 최종 종료값<br>

>**표준출력/표준에러**<br>
>- 스크립트 실행 중 발생한 표준출력과 표준에러

```
$ opmate taskinstance viewnode -in 71 -ni linux01

+------------------+---------------------+
| FIELD            | VALUE               |
+------------------+---------------------+
| TASK INSTANCE NO | 71                  |
| TASK ID          | diskusage           |
| NODE ID          | linux01             |
| EXEC NO          | 1                   |
| STATUS           | Complete            | ☜  진행 상태
| START AT         | 2020/03/03 15:08:04 |
| END AT           | 2020/03/03 15:08:04 |
| CREATED BY       | bumbee(user)        |
| RESULT           | Success             | ☜  실행 결과
| EXIT CD          | 0                   | ☜  실행 결과 코드
+------------------+---------------------+

[STDERR]                                   ☜  표준에러
No content.

[STDOUT]                                   ☜  표준출력
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   50G  1.3G   49G   3% /
devtmpfs                 486M     0  486M   0% /dev
tmpfs                    496M     0  496M   0% /dev/shm
tmpfs                    496M  6.6M  490M   2% /run
tmpfs                    496M     0  496M   0% /sys/fs/cgroup
/dev/sda1               1014M  153M  862M  16% /boot
/dev/mapper/centos-home   47G  101M   47G   1% /home
tmpfs                    100M     0  100M   0% /run/user/0
```

태스크 인스턴스 번호를 지정하여 해당 태스크 인스턴스 번호의 요약 정보를 확인할 수도 있고, 모든 노드들의 속성 정보를 표의 형식으로 확인할 수도 있다. 

또한 단일 태스크 인스턴스 번호에 해당하는 모든 노드의 속성들을 특정한 *(CSV, Comma Separator Values)*형식의 파일로 일괄 취합할 수도 있다.

### 노드 단위 재실행

이미 생성된 태스크 인스턴스에 대하여, 특정 노드를 지정하여 노드 단위로 재실행할 수 있다.

태스크 인스턴스의 재수행은 앞 절(태스크)의 태스크 수행과 유사하지만 조금은 다른 개념이다.<br>
특정 노드만을 재실행하는 경우에는 태스크 인스턴스 번호는 동일하나,<br>
재실행한 노드에 한해서 실행번호(Execution No.)만 증가하게 된다.

주로 태스크 실행 결과에 대한 검증(실패 원인 분석) 또는 재처리 등에 사용할 수 있다.

단, 태스크 인스턴스의 생성 시점 이후에 태스크의 리비젼이 변경되었을 경우 재실행은 불가하다.

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

[목차](UserManual.md) / [이전페이지](UserManual6.md) / [다음페이지](UserManual8.md)

---
title: 사용자 매뉴얼
description: 8. 파일 배포/수집
---

[목차](UserManual.md) / [이전페이지](UserManual7.md) / [다음페이지](UserManual9.md)

## 파일 배포/수집

OPMATE 에서는 사용자가 태스크를 구성하고, 수행하는데에 필요한 파일과 관련한 유틸리티를 제공하고 있다.

특정 노드로 설치나 설정에 필요한 파일을 배포하거나, 반대로 태스크 수행으로써 생성된 파일 형태의 결과물을 수집하는데에 이용할 수 있다.

아래의 그림에서는 OPMATE 의 **CLI/Master/Agent** 상호 간의 **파일의 배포/수집**과 관련한 관계를 보여준다.

![OPMATE_Summary](../../img/opmate-file-summary.png)

그림과 같이 파일은 OPMATE Master 의 File Repository 와의 상호 작용으로 취급할 수 있으며, 배포/수집의 주체는 Master가 아닌 CLI 와 Agent가 설치된 노드 이다.

>**CLI** 명령어 또는 **Agent**가 태스크를 수행할 때에 스크립트에 기술된 명령을 통해, **Master의 File Repository**를 **조회하거나 파일을 업로드/다운로드** 할 수 있다.

여기서 주의할 점은 File Repository는 자료의 영구적인 보관 공간이 아닌 임시 보관 공간이라는 점이다.

File Repository 의 데이터는 일정 기간이 경과하면 자동 삭제되므로, 태스크에서 대량 파일의 수집과 배포를 수행하기 위한 한시적인 공간이라는 것을 유의하기 바란다.

### 태스크에서의 사용

태스크에 정의된 스크립트에서는 아래의 세가지 OPMATE 파일 유틸리티의 사용이 가능하다.

>**opmfls** : File Repository 의 파일 조회<br>
>Usage : opmfls &lt;token&gt; &lt;master:/master-directory-path&gt; [glob]

>**opmfput** : File Repository 로의 파일 업로드<br>
Usage : opmfput [--overwrite] &lt;token&gt; &lt;master:/master-file-path&gt; &lt;local-file-path&gt;

>**opmfget** : File Repository 에서 파일 다운로드<br>
Usage : opmfget [--overwrite] &lt;token&gt; &lt;master:/master-file-path&gt; [local-file-path]

파일 조회는 지정한 원격 경로(File Repository)에 존재하는 파일의 목록을 보여주며, 이 때 하위 디렉토리 및 그에 속한 파일은 조회할 수 없다. *(서버 보안 유지)*<br>
조회대상 파일명에는 glob 패턴을 사용할 수 있다.(glob : 와일드카드 문자로 여러 파일 이름의 집합을 지정. Unix 계열 환경에서 사용되는 것과 동일함.)

파일의 업로드와 다운로드는 개별 파일에 대해서 원격 경로(File Repository)와 로컬 경로를 지정하여 사용할 수 있다.(다건 전송 불가)

원격의 경로를 지정할 때에는 File Repository 의 루트 디렉토리*(OS의 루트 디렉토리가 아님)*로 부터의 절대 경로로 표현한다.

태스크에서 파일 유틸리티를 사용할 때에는 토큰(token)이라는 개념을 사용하며, 파일 유틸리티 사용 시에는 다음과 같은 OPMATE 의 예약어를 사용하여 전달해야 한다.

>**@OPM_ATTR.FILE_TOKEN@**

위와 같이 스크립트에서 사용하면, 에이전트는 태스크 수행 직전에 해당 예약어를 치환하고 수행하게 된다.
***태스크의 스크립트를 에이전트가 수행할 때에만 파일 유틸리티 사용이 가능***하다.

아래는 스크립트에서 파일 유틸리티를 사용하는 예를 보여준다. 위의 opmfget 사용법과 비교하여 보기를 바란다.

```
#!/bin/sh

token="@OPM_ATTR.FILE_TOKEN@"

opmfget $token master:/mydir/install-apache.tar.gz /home/web/install-apache.tar.gz
```

어떠한 태스크에서는 태스크에 지정된 스크립트에서 별도의 백그라운드 프로세스를 호출하여, 태스크 종료 후에도 태스크와 관련된 수행이 지속될 수 있다.
토큰은 태스크 실행 중에만 유효하므로 아래와 같은 형식으로 지정하면 태스크가 종료되어도 해당 태스크에서 호출된 백그라운드 프로세스에서도 파일 유틸리티의 사용이 가능하다.

>**@OPM_ATTR.FILE_TOKEN/10M@** : 토큰의 유효 시간을 태스크 종료와 상관 없이 10분으로 지정<br>
>**@OPM_ATTR.FILE_TOKEN/10H@** : 토큰의 유효 시간을 태스크 종료와 상관 없이 10시간으로 지정<br>
>☞ 최대 24시간까지 지정 가능

### CLI에서의 사용

CLI 의 사용법과 관련한 내용은 매뉴얼의 "[별첨 #1. CLI 사용법](UserManual9.md)" 에서 소개하고 있으며 **CLI 의 help 명령어**를 통해서 확인 가능하다.
여기서는 관련된 주요 개념과 태스크에서 사용하는 파일 유틸리티와의 차이점을 위주로 언급한다.

CLI 에서는 제공되는 다른 CLI 명령어들과 유사하게 사용할 수 있으며, 다음과 같은 세 가지 명령을 사용할 수 있다.

>**opmate file list** : File Repository 의 파일 조회<br>
>**opmate file put** : File Repository 로의 파일 업로드<br>
>**opmate file get** : File Repository 에서 파일 다운로드

파일 조회는 태스크의 파일 유틸리티와 동일하게 사용자가 지정한 원격 경로(File Repository)에 존재하는 파일의 목록을 보여주며, 이 때 하위 디렉토리 및 그에 속한 파일은 조회할 수 없다.<br>
파일의 업로드와 다운로드도 태스크의 파일 유틸리티와 유사한 기능이나, 전송의 주체는 Agent가 아닌 CLI 이다.

CLI에서는 위의 명령어들을 통해서 태스크를 통해 노드로 배포할 파일을 File Repository에 업로드하거나, 태스크 수행의 결과로서 File Repository에 수집된 파일들을 다운로드하여 확인할 수 있다.<br>
여러 노드에 파일을 배포하기 위해서는 사용자가 업로드한 File Repository 경로와 파일명을 태스크의 스크립트에도 정확히 기술해줘야 하며, 파일을 수집할 때에도 이는 마찬가지이다.

태스크의 파일 유틸리티 사용과는 달리 token 은 존재하지 않으니, 앞서 설명한 바와 같이 File Repository는 임시 공간이라는 점만 유의하여 사용하면 된다.

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

[목차](UserManual.md) / [이전페이지](UserManual7.md) / [다음페이지](UserManual9.md)

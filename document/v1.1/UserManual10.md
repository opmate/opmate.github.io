---
title: 사용자 매뉴얼
description: 별첨 &#35;2. 스크립트내 예약어
---

[목차](UserManual.md) / [이전페이지](UserManual9.md)

## 스크립트내 예약어

이번 장에서는 OPMATE 태스크의 스크립트 작성 시에 사용할 수 있는 예약어의 종류와 사용법에 대해서 간략히 소개한다. 

스크립트에서 다음과 같은 형식으로 예약어를 사용할 수 있으며, 이는 태스크 수행 직전에 스크립트에서 기술한 예약어를 특정 값으로 치환하고 수행하게 된다.

>**@OPM_ATTR.*Key*@**

예약어의 처음과 끝에는 **@** 문자를 사용하며, **OPM_ATTR.** 은 OPMATE의 속성임을 나타낸다.

**Key** 부분에 정의된 속성명을 입력하여 사용하게 된다.
*(사용자는 위의 형식 중 **Key** 부분을 제외하고 동일하게 작성해야 한다.)*

스크립트에서 사용 가능한 예약어는 크게 세 종류로 구분되며, 각각에 대해서는 아래에서 설명하고 있다.

### 1. 주요 속성 값

OPMATE 의 노드, 태스크에서 Key로 사용되는 주요한 속성들 중에서 일부를 예약어로 제공하고 있다.

다음은 현재 OPMATE에서 제공되는 예약어의 목록이다.

>**@OPM_ATTR.AGENT_GUID@** : 태스크가 수행되는 에이전트의 GUID.(노드 식별을 위해 OPMATE에서 부여한 고유값)<br>
>**@OPM_ATTR.NODE_ID@** : 태스크가 수행되는 에이전트의 노드ID.(노드 식별을 위해 사용자가 부여한 고유값)<br>
>**@OPM_ATTR.TASK_ID@** : 스크립트를 등록한 태스크의 ID.<br>
>**@OPM_ATTR.TASK_INSTANCE_NO@** : 스크립트 수행 시에 부여되는 태스크 인스턴스 번호. 모든 태스크의 수행에 대해서 고유(Unique)한 값.

다음의 예제에서는 스크립트 수행의 결과를 특정 위치에 파일로 출력하고 있다.
이때, OPMATE 의 주요 속성 값을 나타내는 예약어를 스크립트 내에서 사용하여 파일명이 중복되지 않도록 하는 용도로 사용하고 있다.  

```
#!/bin/sh

중략...

NODE_ID=@OPM_ATTR.NODE_ID@
TASK_ID=@OPM_ATTR.TASK_ID@
TASK_INSTANCE_NO=@OPM_ATTR.TASK_INSTANCE_NO@

echo "Result File" > /tmp/${NODE_ID}.${TASK_ID}.${TASK_INSTANCE_NO}

중략...

exit 0
```

### 2. 파일 전송 토큰

파일배포/수집 시에 보안성을 강화하기 위한 장치로서 사용되어, 파일 관련 유틸리티를 태스크 내에서만 사용할 수 있도록 한다.

다음과 같이 스크립트 내에서 사용해야 한다.
*(모든 문자가 아래와 일치해야 정상적으로 치환되며, 파일 관련 유틸리티 수행이 가능하다.)*

>**@OPM_ATTR.FILE_TOKEN@**

자세한 내용은 매뉴얼의 "[8. 파일배포/수집](UserManual8.md)" 항목에서 기 설명하고 있으므로, 여기서는 생략하도록 한다.

### 3. 노드 그룹 속성(Attribute)

노드 그룹에 부여한 속성(Attribute)을 스크립트 내에서 사용하기 위함이다.

다음과 같은 형식으로 스크립트에서 사용한다. **AttributeKey** 부분을 노드그룹에서 정의된 Key로 사용하면 된다.

>**@OPM_ATTR.*AttributeKey*@**

좀 더 자세한 내용은 앞서 설명한 "[5. 노드 그룹](UserManual5.md)" 항목을 참고하기 바란다.


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

[목차](UserManual.md) / [이전페이지](UserManual9.md)

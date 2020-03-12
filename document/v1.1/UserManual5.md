---
title: 사용자 매뉴얼
description: 5. 노드 그룹
---

[목차](UserManual.md) / [이전페이지](UserManual4.md) / [다음페이지](UserManual6.md)

## 노드 그룹 (Node Group)

노드 그룹은 여러개의 노드가 모여있는 집합이며, 하나의 노드는 여러개의 노드 그룹에 소속될 수 있다.
노드 그룹을 생성/수정/삭제하기 위해서는 관리자(레벨1)권한 이상이 필요하다.

하나의 노드 그룹은 다음과 같은 정보로 구성된다.
> 노드그룹ID, 소유자(Owner), 속성(Attribute), 포함 노드, 설명

```
$ opmate nodegroup view -id linux_tomcat

+--------------+--------------------------+
| FIELD        | VALUE                    |
+--------------+--------------------------+
| [BASIS]      |                          |
|              |                          |
| ID           | linux_tomcat             | ☜  노드그룹ID
| OWNER        | bumbee                   | ☜  소유자(Owner)
| DESCRIPTION  | Installed Tomcat         |
| CREATED AT   | 2020/02/24 11:08         |
| CREATED BY   | bumbee                   |
| UPDATED AT   | 2020/02/24 11:08         |
| UPDATED BY   | bumbee                   |
|              |                          |
| [NODES]      |                          | ☜  포함 노드
|              | linux01                  |
|              | linux02                  |
|              | linux07                  |
| [ATTRIBUTES] |                          | ☜  속성(Attribute)
|              | TOMCAT_HOME=/home/tomcat |
+--------------+--------------------------+
```

태스크를 정의할 때 다수 노드를 쉽게 추가하기 위해 사용할 수 있으며, 공통 속성을 정의하기 위해 사용할 수 있다.

OS의 종류/버전 또는 태스크 수행의 목적이나 호스트(Host)의 용도 등에 따라서 적절한 그룹을 생성하고 유지관리하는 것은 
태스크를 정의할 때마다 반복적인 개별 노드 추가작업을 하지 않아도 되기에 사용자의 수고로움을 줄일 수 있다.

### 속성 정의

그룹에 소속된 모든 노드에 공통적으로 적용할 속성(Attribute)을 정의할 수 있다.

속성은 다음과 같이 Key, Value의 쌍으로 정의되며 태스크의 스크립트에서는 해당 Key를 사용하여 작성할 수 있다.
> "ATTRIBUTE_KEY1"="ATTRIBUTE_VALUE1"

예를 들어, 특정 그룹에 TOMCAT_HOME=/home/tomcat 와 같은 속성을 정의하면 소속된 모든 노드의 속성으로 동일하게 적용되며, 스크립트에 해당 속성의 치환 변수(@OPM_ATTR.속성명@)가 사용되었을 경우 정의된 값으로 치환된다.

```
#!/bin/sh

@OPM_ATTR.TOMCAT_HOME@/bin/startup.sh
```

```
#!/bin/sh

/home/tomcat/bin/startup.sh
```

### 노드 그룹 복사

노드 그룹의 갯수에 제한이 있는 것은 아니지만, 새로운 노드 그룹을 정의하기에 앞서 정의하려는 노드 그룹과 동일하거나 유사한 노드 그룹이 기 정의되어 있는지 확인하는 것이 필요하다.

이것은 동일한 노드들을 집합으로 가지는 다수의 노드 그룹이 시스템에 생성되는 것을 막아주며, 제공되는 노드 그룹 복사 기능은 유사한 노드 그룹을 생성하기에 편리하다. 

*(사용자는 기존 태스크의 영향도를 줄이는 등의 특정한 목적을 가지고 의도적으로 동일한 노드들의 집합을 만들 수 있다. 이때에도 노드 그룹 복사기능은 유용하다.)* 

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

[목차](UserManual.md) / [이전페이지](UserManual4.md) / [다음페이지](UserManual6.md)
---
title: 사용자 매뉴얼
description: 별첨 &#35;2. 스크립트 작성 시 예약어 사용
---

[목차](UserManual.md) / [이전페이지](UserManual9.md)

## 스크립트 작성 시 예약어 사용

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

```
사용 예시 및 용도 추가 필요.
```

### 2. 파일 전송 토큰

매뉴얼의 "[8. 파일배포/수집](UserManual8.md)" 항목에서 기 설명한 파일과 관련한 항목이다.

다음과 같이 스크립트 내에서 사용해야 한다.
*(모든 문자가 아래와 일치해야 정상적으로 치환되며, 파일 관련 유틸리티 수행이 가능하다.)*

>**@OPM_ATTR.FILE_TOKEN@**

```
사용 예시 및 용도 추가 필요.
```

### 3. 노드 그룹 속성(Attribute)

노드 그룹에 부여한 속성(Attribute)을 스크립트 내에서 사용하기 위함이다.

다음과 같은 형식으로 스크립트에서 사용한다. **AttributeKey** 부분을 노드그룹에서 정의된 Key로 사용하면 된다.

좀 더 자세한 내용은 앞서 설명한 "[5. 노드 그룹](UserManual5.md)" 항목을 참고하기 바란다.

>**@OPM_ATTR.*AttributeKey*@**

```
사용 예시 및 용도 추가 필요.
```
<div class="float_banner"><!-- 고정배너 -->
[목차](UserManual.md)
</div>


<div class="float_banner"><!-- 고정배너 -->
	<div id='scrollmenu' name="scrolltop">
		<div align="center">
			<a href="javascript://" class="top" onclick="goTop(); return false;">
				<pre>위로가기</pre>
				<!--img src="../../img/next.png" onmouseover='this.src="../../img/up2.png"' onmouseout='this.src="../../img/next.png"' border=0 alt="위로가기"-->
			</a>
		</div>
		<div align="center">
			<a href="javascript://" class="bottom" onclick="goBottom(); return false;">
				<pre>아래가기</pre>
				<!--img src="../../img/prev.png" onmouseover='this.src="../../img/down2.png"' onmouseout='this.src="../../img/prev.png"'border=0 alt="아래가기"-->
			</a>
		</div>
	</div>
</div>

<!-- 스크롤바 제어메뉴 시작 -->
<script language="JavaScript">
function goTop(){
	window.scrollTo(0,0); //맨위로
}

function goMiddle(){
	window.scrollTo(0,500); //중간쯤 위치를 입맛에 맞게 조절하세요.
}

function goBottom(){
	var scr = document.body.scrollHeight; //페이지의 길이를 체크
	window.scrollTo(0,scr); //맨아래로
}
</script>

[목차](UserManual.md) / [이전페이지](UserManual9.md)
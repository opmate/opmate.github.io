---
title: OPMATE eyes
description: Overview
---

<link rel="stylesheet" type="text/css" href="css/opme.css">

<!-- Floating Menu -->
[prev]: # "none"
[menu]: index.html "목차"
[next]: Login.html "로그인"
[ico-prev]: img/icon/ico-prev.png
[ico-menu]: img/icon/ico-menu.png
[ico-next]: img/icon/ico-next.png
[![이전][ico-prev]{: class="ico-prev-float" }][prev]
[![목차][ico-menu]{: class="ico-menu-float" }][menu]
[![다음][ico-next]{: class="ico-next-float" }][next]

### 참고 사이트
RegExr : [https://regexr.com/](https://regexr.com/){:target="_blank"}  
>정규표현식 - Regular Expression을 쉽게 테스트할 수 있는 사이트입니다.  
별도 로그인 없이 테스트가 가능합니다.

regexper : [https://regexper.com/](https://regexper.com/){:target="_blank"}
>정규식을 그림으로 분석해 볼 수 있는 사이트입니다.  
 
regex-generator : [https://regex-generator.olafneumann.org/](https://regex-generator.olafneumann.org/){:target="_blank"}
>정규표현식을 쉽게 생성해 볼 수 있는 사이트입니다.  

### 정규표현식 퀵가이드  
#### 와일드 카드  
**.** : 단일 문자 일치.  
```
1.   : 10, 1A .  
1.1  : 111, 1A1 .  
```
**?** : 앞의 문자와 0 또는 1회 일치.  
```
10?  : 1, 10   
```
**\+** : 앞의 문자와 1회 이상 일치.  
```
10+   : 10, 100   
```
**\*** : 앞의 문자와 0회 이상 일치.  
```
1*   : 1, 10 
```
  
**|** : OR 일치를 만듬. 표현식 끝에 사용하면 안됨.  
```
1|10          : 1, 10

(AA|BB)DB\d+  : AA 또는 BB 인 DB, 숫자가 1회 이상 나오는 것.  
               (AADB01, BBDB02 등)  
```  
#### 앵커
**^** : ^ 뒤에 나오는 문자로 시작
```
^10   : 10, 100, 10x, ...
```
**$** : $ 앞에 나오는 문자로 끝남
```
10$   : 110, 1010, x10, ...
```
  
#### 그룹  
**()** : 문자열에서 같은 순서로 포함된 문자. 표현식 그룹화에 사용.
```
(10)        : 10, 101, 1011 등
([0-9][a-z]) : 모든 숫자 또는 소문자
```
**[]** : 문자열에서 순서 상관없이 포함된 문자.
```
[10]         : 012, 120, 210 등
vm[123]      : vm1, vm2, vm3
```
**-** : 대괄호 안에 범위를 만듬.
```
[0-9]        : 0~9 의 모든 숫자
```

#### 이스케이프 문자
**\\** : 인접 문자는 문자 그대로 해석됨.
```
0\.0\.0\.0    : 0.0.0.0
```

#### 문자 클래스
**\d** : 숫자
```
\d            : [0-9]
```
**\D** : 숫자 아닌 것
```
\D            : [^0-9]
```
**\w** : 단어 문자
```
\w            : [0-9A-Za-z_]
```
**\W** : 단어 문자 아닌 것
```
\W            : [^0-9A-Za-z_]
```
  
<**_정규식 작성_**>은 반드시 테스트 수행 후 적용하시는 것이 좋습니다.  
  
※ _본 문서에서는 정규표현식에 대한 간단한 사용법을 다루고 있습니다._  
  
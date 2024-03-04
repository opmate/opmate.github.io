
---
title: OPMATE v2.0 Tutorial 작성 계획 
---

# OPMATE v2.0 Tutorial 작성 계획

### 목표

	사용자 목적: OPMATE가 어떤 서비스인지 대략적으로 이해하고, CLI 활용법을 간략하게나마 익힌다. 
	
	문서 목적: 사용자에게 OPMATE 사용법을 전파한다.

<br>


### Target User

	A.     OPMATE를 사용해야 하지만, 하나도 감이 오지 않는 User
	
	B.     OPMATE를 간단하게 체험해보고 싶은 User
	
	C.     서버, 인프라 담당자 (기초적인 Shell 지식은 가지고 있음)

<br>


### User 의문점

	1.     OPMATE는 무엇인가?
	
	2.     OPMATE가 나의 문제를 해결해줄 수 있는가?
	
	3.     어떤 기능을 사용할 수 있는가? 
	
	4.     사용하려면 어떻게 해야 되는가?
	
	5.     특정 기능을 어떻게 사용해야 되는가? 
	
	6.     OPMATE 1.1와의 차이점은 무엇인가? 새로운 기능은?

<br>


## Scenario

	0. 	Admin으로부터 계정(User)와 권한(Role)를 받은 상태에서

	1. 	User 로그인 후
	
	2. 	'OS-TYPE'이 'Linux'인 모든 Node에서

	3. 	'hostname' 명령어 결과 조회

<br>
<br>

## Tutorial 내용

|                            |        |                                                                                                    |
| -------------------------- | ------ | -------------------------------------------------------------------------------------------------- |
| **제목**                     | 콘텐츠 유형 | 내용                                                                                                 |
| OPMATE란?                   | 개념 가이드 | 1. OPMATE 서비스 요약<br>2. OPMATE 구조 요약 (도표 활용)<br>3. 핵심 용어 설명<br>- User<br>- Task<br>- Role<br>- Node |
| OPMATE 2.0에서 달라진 점         | 개념 가이드 | 1. 노드 관리 및 지정<br>2. Task 인증<br>3. User 권한 간소화 및 Role 추가<br>4. WebConsole<br>5. 기타 변경사항             |
| CLI 튜토리얼 1: CLI 설치         | 튜토리얼   | 1. CLI 설치<br>2. 환경변수 파일 생성                                                                         |
| CLI 튜토리얼 2: 로그인            | 튜토리얼   | 1. 로그인 및 로그아웃                                                                                      |
| CLI 튜토리얼 3: Node 및 Role 조회 | 튜토리얼   | 1. 가용 Node 조회<br>2. 가용 Role 조회                                                                     |
| CLI 튜토리얼 4: Task 생성        | 튜토리얼   | 1. Template 생성<br>2. Template 수정 및 Script 생성<br>3. Task 생성                                         |
| CLI 튜토리얼 5: Task 실행        | 튜토리얼   | 1. Task 실행 권한 확인<br>2. Task 실행<br>3. 결과 확인                                                         |
| WebConsole 튜토리얼            | 튜토리얼   |                                                                                                    |
| OPMATE Template 작성가이드      | 추가 가이드 | Tdf 파일 작성 가이드                                                                                      |

<br>

## 집필 일정

3*.* 6 (수) : 'OPMATE란?' 작성

3*.* 7 (목) : 'CLI 설치, 로그인' 작성

3*.* 8 (금) : 'Node 및 Role 조회' 작성

3.13 (수) : 'Task 생성' 작성

3.14 (목) : 'Task 실행' 작성

3.15 (금) : 내용 검토 및 Web Publish
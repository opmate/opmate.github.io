---
title: 윈도우즈용 에이전트 삭제
---

에이전트가 **C:\infsw\opma** 디렉토리에 설치되어 있다고 가정하였습니다. 실제 설치된 경로에 따라 진행하시기 바랍니다.

## 명령 프롬프트 실행

실행 메뉴에서 cmd 를 입력하여 명령프롬프트를 실행합니다.

```
C:\Users\Administrator> 
```

## 에이전트 중지

실행중인 에이전트를 중지시킵니다.

```
C:\Users\Administrator> sc stop "OpMate Agent Service"

```

## 중지 상태 확인

에이전트 상태를 확인하고, 상태가 "STOPPED" 인지 확인합니다.

```
C:\Users\Administrator> sc query "OpMate Agent Service"
```

## 서비스에서 제거

윈도우즈 서비스에 등록된 에이전트를 제거합니다.

```
C:\Users\Administrator> sc delete "OpMate Agent Service"
```

## 파일 삭제

에이전트가 설치된 디렉토리 전체를 삭제합니다.

```
C:\Users\Administrator> rmdir /s /q C:\infsw\opma
```

## 환경 변수 수정

시스템 변수의 수정 화면(제어판 -> 시스템 -> 고급 시스템 설정 -> 환경변수 -> **시스템 변수**)을 열고,
**Path** 항목의 변수값에서 에이전트의 실행 파일 경로(C:\infsw\opma\bin)를 제거합니다.

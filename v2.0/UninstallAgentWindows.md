---
title: 윈도우즈용 에이전트 삭제
---

에이전트가 **C:\infsw\opmnsa** 디렉토리에 설치되어 있다고 가정하였습니다. 실제 설치된 경로에 따라 진행하시기 바랍니다.

## 명령 프롬프트 실행

실행 메뉴에서 cmd 를 입력하여 명령프롬프트를 **관리자 권한으로 실행**합니다.

```
C:\Users\Administrator> 
```

## 에이전트 중지

실행중인 에이전트를 중지시킵니다.

```
C:\Users\Administrator> sc stop "opmsvc"

```

## 중지 상태 확인

에이전트 상태를 확인하고, 상태가 "STOPPED" 인지 확인합니다.

```
C:\Users\Administrator> sc query "opmsvc"
```

## 서비스에서 제거

윈도우즈 서비스에 등록된 에이전트를 제거합니다.

```
C:\Users\Administrator> sc delete "opmsvc"
```

## 파일 삭제

에이전트가 설치된 디렉토리 전체를 삭제합니다.

```
C:\Users\Administrator> rmdir /s /q C:\infsw\opmnsa
```


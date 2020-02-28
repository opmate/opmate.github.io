---
title: 윈도우용 에이전트 설치
---

## 파일 준비

최신 버전의 설치 파일(e.g. opma-inst-1.0.001-20190425.exe)을 준비하여 C:\ 에 복사합니다.

## 명령 프롬프트 실행

실행 메뉴에서 cmd 를 입력하여 명령프롬프트를 실행한 후, 설치파일이 존재하는 디렉토리로 이동합니다.

```
C:\Users\Administrator> cd /d C:\
C:\> dir *.exe
opma-inst-1.0.001-20190425.exe
```

## 압축 해제 및 인스톨러 실행

```
C:\> opma-inst-1.0.001-20190425.exe
C:\> cd opma-inst-1.0.001-20190425
C:\opma-inst-1.0.001-20190425> install.bat
```

## 입력

설치할 경로를 입력하고, 출력되는 내용을 확인 후 설치를 진행합니다.

```
Input installation directory (ex. C:\infsw\opma) : C:\infsw\opma
...
Input 'yes' to proceed installation : yes
```

## 설정 파일 수정

실행 메뉴에서 wordpad 를 입력하여 워드패드를 실행한 후 에이전트가 설치된 디렉토리의 설정 파일(e.g. C:\infsw\opma\cfg\agent.conf)을 편집합니다.
라인별 맨 앞의 주석(#기호) 제거하고 올바른 마스터서버의 접속 정보(ex. 10.0.0.1)로 수정합니다.

```
master_ip = 10.0.0.1
master_port = 34813
```

## 자동 실행 설정

인스톨러의 안내에 따라, 다음과 같이 입력하여 OS 부팅시 자동으로 시작되도록 설정합니다.

> (주의) "start=" 와 "auto" 사이에 공백이 하나 있습니다.

```
C:\ sc config "OpMate Agent Service" start= auto
```

## 구동

인스톨러의 안내에 따라, 다음과 같이 입력하여 구동합니다.

구동 후 로그 파일 (e.g. C:\infsw\opma\log\opm-agent.log) 을 확인하여 에러없이 정상적으로 시작되었는지 확인합니다.

```
C:\ sc start "OpMate Agent Service"
```

## 주의사항

에이전트는 각각 고유의 GUID를 가지고 있습니다. 이미 에이전트가 설치되어 있는 VM을 복제하여 생성하거나 또는 설치된 에이전트를 복사하여 설치할 경우 에이전트의 GUID도 복제되어 오동작이 발생하게 됩니다. 복제된 에이전트는 삭제(디렉토리 전체 삭제)하시고 재설치하시기 바랍니다. 삭제하지 않고 재설치할 경우에는 업데이트로 인식하기 때문에 GUID를 새로 받을수 없습니다.

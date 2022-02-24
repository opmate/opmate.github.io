---
title: 윈도우용 에이전트 설치
---

## 파일 준비

최신 버전의 설치 파일(e.g. opma-installer-2.0.000-windows-20210607.exe)을 준비하여 C:\ 에 복사합니다.

## 명령 프롬프트 실행

실행 메뉴에서 cmd 를 입력하여 명령프롬프트를 관리자 권한으로 실행한 후, 설치파일이 존재하는 디렉토리로 이동합니다.

```
C:\Users\Administrator> cd /d C:\
C:\> dir *.exe
opma-installer-2.0.000-windows-20210607.exe
```

## 압축 해제 및 인스톨러 실행

```
C:\> opma-installer-2.0.000-windows-20210607.exe
C:\> cd opma-installer-2.0.000-windows-20210607
C:\opma-installer-2.0.000-windows-20210607> install.bat
```

## 입력

설치할 경로 등을 입력하고, 출력되는 내용을 확인 후 설치를 진행합니다.
아래 예제의 입력값은 예제입니다. 자신의 마스터 정보를 확인하고 올바른 IP와 PORT를 입력하시기 바랍니다.

```
Input installation directory (enter for C:\infsw\opma) :
Input IP address of OPMATE MASTER : 10.0.0.1
Input PORT number of OPMATE MASTER (enter for 34813) : 
...
Input 'yes' to proceed installation : yes
```

## 점검

구동 후 로그 파일 (e.g. C:\infsw\opma\log\opm-agent.log) 을 확인하여 에러없이 정상적으로 시작되었는지 확인합니다.

```
C:\> type C:\infsw\opma\log\opm-agent.log
2021-11-19 15:45:37 INFO - Agent Starting...
2021-11-19 15:45:37 INFO - Successfully registered to the master
2021-11-19 15:45:37 INFO - Agent Started
```

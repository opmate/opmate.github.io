---
title: 윈도우용 에이전트 설치
---

현재 설치되어 있는 MASTER의 IP 주소는 10.0.0.1, Agent 접속 포트는 34813으로 가정하여 설명합니다. 실제 환경에 맞춰 진행하시기 바랍니다.

## 파일 다운로드

웹브라우져를 통해 MASTER의 다운로드 안내 페이지 http://10.0.0.1:34813 에 접속합니다. (https 로 접속하지 마세요)

설치 파일별 링크를 클릭하여, 최신 버전의 설치 파일(e.g. opm-agent-2.0.020-windows-20240216.exe)을 C:\ 에 다운로드 합니다.

## 명령 프롬프트 실행

실행 메뉴에서 cmd 를 입력하여 명령프롬프트를 관리자 권한으로 실행한 후, 설치파일이 존재하는 디렉토리로 이동합니다.

```
C:\Users\Administrator> cd /d C:\
C:\> dir *.exe
opm-agent-2.0.020-windows-20240216.exe
```

## 압축 해제 및 인스톨러 실행

```
C:\> opm-agent-2.0.020-windows-20240216.exe
C:\> cd opm-agent-2.0.020-windows-20240216
C:\opm-agent-2.0.020-windows-20240216> install.bat
```

## 입력

설치할 경로 등을 입력하고, 출력되는 내용을 확인 후 설치를 진행합니다.
아래 입력값은 예시입니다. 자신의 마스터 정보를 확인하고 올바른 IP와 PORT를 입력하시기 바랍니다.
(일부 설치 파일의 경우, MASTER 접속 정보가 내장되어 입력 과정이 생략될 수 있습니다.)

```
Input installation directory (enter for C:\infsw\opmnsa) :
Input IP address of OPMATE MASTER : 10.0.0.1
Input PORT number of OPMATE MASTER (enter for 34813) : 
...
Input 'yes' to proceed installation : yes
```

## 점검

구동 후 로그 파일 (e.g. C:\infsw\opmnsa\log\opm-agent.log) 을 확인하여 에러없이 정상적으로 시작되었는지 확인합니다.

```
C:\> type C:\infsw\opmnsa\log\opm-agent.log
2024-03-19 15:45:37 INFO - Agent Starting...
2024-03-19 15:45:37 INFO - Successfully registered to the master
2024-03-19 15:45:37 INFO - Agent Started
```

# 윈도우즈용 에이전트 설치

---

## 파일 준비

최신 버전의 설치 파일(ex.opma-inst-1.0.001-20190425.exe)을 준비하여 C:\ 에 복사합니다.

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

설치할 경로를 입력한 후 yes 를 입력하여 설치를 진행합니다.

```
Input installation directory (ex. C:\infsw\opma) : C:\infsw\opma
...
Input 'yes' to proceed installation : yes
```

## 설정 파일 수정

실행 메뉴에서 wordpad 를 입력하여 워드패드를 실행 한 후, 설치된 디렉토리의 설정 파일(ex. C:\infsw\opma\cfg\agent.conf)을 열고,

라인별 맨 앞의 주석표기(#기호)를 삭제하고 올바른 마스터서버의 접속 정보(ex. 172.30.4.189)로 수정합니다.

```
master_ip = 172.30.4.189
master_port = 34813
```

## 자동 실행 설정

인스톨러의 안내에 따라, 다음과 같이 입력하여 OS 부팅시 자동으로 시작되도록 설정합니다.

(주의)  "start=" 와 "auto" 사이에 공백이 하나 있습니다.

```
C:\ sc config "OpMate Agent Service" start= auto
```

## 구동

인스톨러의 안내에 따라, 다음과 같이 입력하여 구동합니다.

구동 후 로그 파일 (ex. C:\infsw\opma\log\opm-agent.log) 을 확인하여 에러없이 정상적으로 시작되었는지 확인합니다.

```
C:\ sc start "OpMate Agent Service"
```

## 기타

설치 과정 중 취소하거나 강제 종료하였을 경우, 다시 설치를 진행하기 위해서는 아래와 같이 압축 해제한 디렉토리를 제거한 후 다시 시작합니다.

```
C:\> rmdir /s opma-inst-1.0.001-20190425
C:\> cd opma-inst-1.0.001-20190425
C:\opma-inst-1.0.001-20190425> install.bat
...
```

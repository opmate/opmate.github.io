---
title: 리눅스용 에이전트 설치
---

## 파일 준비

최신 버전의 설치 파일을 준비합니다.(e.g. opma-installer-2.0.000-linux-20210607.tar.gz)

```
$ ls
opma-installer-2.0.000-linux-20210607.tar.gz
```

## root 로 로그인

```
$ su -
```

## 압축 해제 및 인스톨러 실행

```
$ gunzip opma-installer-2.0.000-linux-20210607.tar.gz
$ tar -xvf opma-installer-2.0.000-linux-20210607.tar
$ cd opma-installer-2.0.000-linux-20210607
$ ./install.sh
```

## 입력

설치할 경로 등을 입력하고, 출력되는 내용을 확인 후 설치를 진행합니다.

```
Input installation directory (enter for /infsw/opma) :
Input IP address of OPMATE MASTER : 10.0.0.1
Input PORT number of OPMATE MASTER (enter for 34813) :
...
Input 'yes' to proceed installation : yes
```

## 점검

구동 후 로그 파일 (e.g. /infsw/opma/log/opm-agent.log) 을 확인하여 에러없이 정상적으로 시작되었는지 확인합니다.

  ```
  $ cat /infsw/opma/log/opm-agent.log
  2021-11-19 16:12:42 INFO - Agent Starting...
  2021-11-19 16:12:42 INFO - Successfully registered to the master
  2021-11-19 16:12:42 INFO - Agent Started
  ```

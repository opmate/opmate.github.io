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

설치할 경로를 입력하고, 출력되는 내용을 확인 후 설치를 진행합니다.

```
Input installation directory (ex. /infsw/opma) : /infsw/opma
...
Input 'yes' to proceed installation : yes
```

## 설정 파일 수정

설치된 디렉토리의 설정 파일(e.g. /infsw/opma/cfg/agent.conf)을 열고,

다음 예와 같이 올바른 마스터서버의 접속 정보(ex. 10.0.0.1)로 수정합니다.

```
$ vi /infsw/opma/cfg/agent.conf
master_ip = 10.0.0.1
master_port = 34813
```

## 자동 실행 설정

인스톨러의 안내에 따라, 다음과 같이 입력하여 OS 부팅시 자동으로 시작되도록 설정합니다.

- RHEL(CentOS Linux) 8 / RHEL(CentOS Linux) 7 / Debian 10 / Oracle Linux 8 / openSUSE 15.2 / Ubuntu 18.04 / Ubuntu 20.04
  ```
  $ systemctl enable opmagent
  ```
  
## 구동

인스톨러의 안내에 따라, OS별로 다음과 같이 입력하여 구동합니다.

구동 후 로그 파일 (e.g. /infsw/opma/log/opm-agent.log) 을 확인하여 에러없이 정상적으로 시작되었는지 확인합니다.

- RHEL(CentOS Linux) 8 / RHEL(CentOS Linux) 7 / Debian 10 / Oracle Linux 8 / openSUSE 15.2 / Ubuntu 18.04 / Ubuntu 20.04
  ```
  $ systemctl start opmagent
  ```


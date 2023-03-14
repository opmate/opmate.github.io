---
title: 리눅스용 에이전트 삭제
---

에이전트가 **/infsw/opmnsa** 디렉토리에 설치되어 있다고 가정하였습니다. 실제 설치된 경로에 따라 진행하시기 바랍니다.

## root로 로그인

```
$ su -
```

## 에이전트 중지

실행중인 에이전트를 중지시킵니다.

- CentOS(RHEL) Linux 8 / CentOS(RHEL) Linux 7 / Debian 10 / Oracle Linux 8 / openSUSE 15.2 / Ubuntu 18.04 / Ubuntu 20.04
```
$ systemctl stop opmsvc
```
- CentOS(RHEL) Linux 6 / CentOS(RHEL) Linux 5
```
$ service opmsvc stop
```

## 중지 상태 확인

```
$ ps -ef | grep opmsvc
```

## 서비스에서 제거

- CentOS(RHEL) Linux 8 / CentOS(RHEL) Linux 7 / Debian 10 / Oracle Linux 8 / openSUSE 15.2 / Ubuntu 18.04 / Ubuntu 20.04
```
$ systemctl disable opmsvc
$ rm /etc/systemd/system/opmsvc.service
```
- CentOS(RHEL) Linux 6 / CentOS(RHEL) Linux 5
```
$ chkconfig --del opmsvc
$ rm /etc/init.d/opmsvc
```

## 파일 삭제

에이전트가 설치된 디렉토리 및 파일을 삭제합니다.

```
$ rm -rf /infsw/opmnsa
$ rm -f /usr/bin/opmget
$ rm -f /usr/bin/opmput
$ rm -f /usr/bin/opmls
$ rm -f /run/opmsvc.pid
$ rm -f /var/run/opmsvc.pid
```

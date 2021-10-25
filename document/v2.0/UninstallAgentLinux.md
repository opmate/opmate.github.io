---
title: 리눅스용 에이전트 삭제
---

에이전트가 **/infsw/opma** 디렉토리에 설치되어 있다고 가정하였습니다. 실제 설치된 경로에 따라 진행하시기 바랍니다.

## root로 로그인

```
$ su -
```

## 에이전트 중지

실행중인 에이전트를 중지시킵니다.

- CentOS(RHEL) Linux 8 / CentOS(RHEL) Linux 7 / Debian 10 / Oracle Linux 8 / openSUSE 15.2 / Ubuntu 18.04 / Ubuntu 20.04
```
$ systemctl stop opmagent
```
- CentOS(RHEL) Linux 6 / CentOS(RHEL) Linux 5
```
$ service opmagent stop
```

## 중지 상태 확인

```
$ ps -ef | grep opmagent
```

## 서비스에서 제거

- CentOS(RHEL) Linux 8 / CentOS(RHEL) Linux 7 / Debian 10 / Oracle Linux 8 / openSUSE 15.2 / Ubuntu 18.04 / Ubuntu 20.04
```
$ systemctl disable opmagent
$ rm /etc/systemd/system/opmagent.service
```
- CentOS(RHEL) Linux 6 / CentOS(RHEL) Linux 5
```
$ chkconfig --del opmagent
$ rm /etc/init.d/opmagent
```

## 파일 삭제

에이전트가 설치된 디렉토리 전체를 삭제합니다.

```
$ rm -rf /infsw/opma
$ rm -f /usr/bin/opmfget
$ rm -f /usr/bin/opmfput
$ rm -f /usr/bin/opmfls
```


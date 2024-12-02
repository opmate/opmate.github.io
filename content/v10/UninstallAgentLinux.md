---
title: 에이전트 삭제 (Linux, UNIX)
menu:
  v10:
    parent: v10-about
hideNav: true
weight: 14
---
---
에이전트가 **/infsw/opma** 디렉토리에 설치되어 있다고 가정하였습니다. 실제 설치된 경로에 따라 진행하시기 바랍니다.

## root로 로그인

```bash
$ su -
```

## 에이전트 중지

실행중인 에이전트를 중지시킵니다.

- CentOS 7.x 기준
```bash
$ systemctl stop opmagent
```
- CentOS 6.x/5.x 기준
```bash
$ service opmagent stop
```
- AIX 기준
```bash
$ /infsw/opma/bin/stop.sh
```

## 중지 상태 확인

```bash
$ ps -ef | grep opmagent
```

## 서비스에서 제거

- CentOS 7.x 기준
```bash
$ systemctl disable opmagent
$ rm /etc/systemd/system/opmagent.service
```
- CentOS 6.x/5.x 기준
```bash
$ chkconfig --del opmagent
$ rm /etc/init.d/opmagent
```
- AIX 기준
```bash
$ rm /etc/rc.d/rc2.d/S99opmagent
$ rm /etc/rc.d/rc2.d/K01opmagent
$ rm /etc/rc.d/init.d/opmagent
```


## 파일 삭제

에이전트가 설치된 디렉토리 전체를 삭제합니다.

```bash
$ rm -rf /infsw/opma
$ rm -f /usr/bin/opmfget
$ rm -f /usr/bin/opmfput
$ rm -f /usr/bin/opmfls
```


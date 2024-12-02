---
title: "에이전트 제거"
description: "Tutorial"
date: 2024-10-30
menu:
  v2:
    parent: v2-intro
hideNav: true
toc: true
tabs: true

---
<!-- tab 전환 관련 자바스크립트 -->
<script src="/js/tabs.js"></script>

---
{{< tabs "AgentInstallation" >}}
{{< tab "Linux" >}}

<br>

에이전트가 **``/infsw/opmnsa``** 디렉토리에 설치되어 있다고 가정하였습니다.

실제 설치된 경로에 따라 진행하시기 바랍니다.


### root로 로그인

```bash
$ su -
```

### 에이전트 중지

실행중인 에이전트를 중지시킵니다.

{{< details "CentOS(RHEL) Linux 8 / CentOS(RHEL) Linux 7 / Debian 10 / Oracle Linux 8 / openSUSE 15.2 / Ubuntu 18.04 / Ubuntu 20.04" open >}}
```bash
$ systemctl stop opmsvc
```
{{< /details >}}

{{< details "CentOS(RHEL) Linux 6 / CentOS(RHEL) Linux 5"  >}}
```bash
$ service opmsvc stop
```
{{< /details >}}


### 중지 상태 확인

```bash
$ ps -ef | grep opmsvc
```

### 서비스에서 제거

{{< details "CentOS(RHEL) Linux 8 / CentOS(RHEL) Linux 7 / Debian 10 / Oracle Linux 8 / openSUSE 15.2 / Ubuntu 18.04 / Ubuntu 20.04" open >}}
```bash
$ systemctl disable opmsvc
$ rm /etc/systemd/system/opmsvc.service
```
{{< /details >}}


{{< details "CentOS(RHEL) Linux 6 / CentOS(RHEL) Linux 5"  >}}
```bash
$ chkconfig --del opmsvc
$ rm /etc/init.d/opmsvc
```
{{< /details >}}


### 파일 삭제

에이전트가 설치된 디렉토리 및 파일을 삭제합니다.

```bash
$ rm -rf /infsw/opmnsa
$ rm -f /run/opmsvc.pid
$ rm -f /var/run/opmsvc.pid
```

{{< /tab >}}
{{< tab "Windows" >}}

에이전트가 **``C:\infsw\opmnsa``** 디렉토리에 설치되어 있다고 가정하였습니다.

실제 설치된 경로에 따라 진행하시기 바랍니다.

### 명령 프롬프트 실행

실행 메뉴에서 cmd 를 입력하여 명령프롬프트를 **관리자 권한으로 실행**합니다.

```powershell
C:\Users\Administrator>
```

### 에이전트 중지

실행중인 에이전트를 중지시킵니다.

```powershell
C:\Users\Administrator> sc stop "opmsvc"
```

### 중지 상태 확인

에이전트 상태를 확인하고, 상태가 "STOPPED" 인지 확인합니다.

```powershell
C:\Users\Administrator> sc query "opmsvc"
```

### 서비스에서 제거

윈도우즈 서비스에 등록된 에이전트를 제거합니다.

```powershell
C:\Users\Administrator> sc delete "opmsvc"
```

### 파일 삭제

에이전트가 설치된 디렉토리 전체를 삭제합니다.

```powershell
C:\Users\Administrator> rmdir /s /q C:\infsw\opmnsa
```

<br>

{{< /tab >}}
{{< /tabs >}}

---
title: OPMATE V2.0
description: Tutorial 6 - File Transfer
# version: v1.00
---

## Tutorial 6 : 파일 전송
- - -


**OPMATE**는 태스크 구성 및 실행을 위해 필요한 <u><b>파일 다운로드 & 업로드</b></u> 기능을 지원합니다.

이 기능을 통해 특정 노드에 패치 파일을 배포하거나, 반대로 태스크 실행 결과 파일을 사용자 환경으로 가져올 수도 있습니다.

주 사용법은 다음과 같습니다:


![OPMATE_Filehub](../../img/opmate-filehub-summary.jpg)


1. **CLI, WebConsole → Master**
   - 설치, 패치 등에 필요한 파일을 Master 서버로 업로드합니다.

2. **Master → Agent**
   - Master 서버에 업로드된 파일을 Agent가 설치된 서버로 다운로드합니다.

3. **Agent → Master**
   - Agent가 설치된 서버에서 생성된 파일을 Master 서버로 업로드합니다.

4. **Master → CLI, WebConsole**
   - Master 서버에 업로드된 파일을 사용자 환경으로 다운로드합니다.

<br>

### 파일허브
- - -

**파일허브(Filehub)**는 파일 송수신을 위한 임시 보관소입니다.
Master 서버로 업로드된 모든 파일은 지정된 파일허브 디렉터리에 저장됩니다. <br>

파일허브는 CLI, WebConsole에서 생성 및 관리할 수 있으며, 파일허브 ID로 구분됩니다. <br><br>

#### <u><b>파일허브(파일) 권한</b></u>
- 파일에 대한 권한(rwx)을 얻으려면 파일이 저장된 파일허브에 대한 권한이 필요합니다.<br>
<br>
- 파일허브 권한을 가지면 파일허브에 속한 모든 디렉터리와 파일에 대한 권한을 가집니다.
(파일허브 하위 디렉터리별 또는 파일별 권한은 별도로 존재하지 않습니다.)<br>
<br>
- CLI, WebConsole를 통해 파일을 다운로드/업로드 하려면 반드시 <u><b>접속 유저</b></u>가 파일허브 권한을 가지고 있어야 합니다.<br>
<br>
- 태스크 스크립트를 통해 파일을 다운로드/업로드하려면 반드시 <u><b>스크립트를 실행하는 태스크</b></u>가 파일허브 권한을 가지고 있어야 합니다.

<br>

#### <u><b>파일 만료일</b></u>
- 파일허브에 업로드된 파일은 일정 기간이 지나면 자동으로 삭제됩니다. <br><br>
- 파일의 유효기간은 파일 조회 명령어를 통해 조회할 수 있습니다.

<br>


### **CLI 명령어**
- - -
OPMATE CLI의 `file` 명령어로 사용자 환경에서 파일허브에 있는 파일에 접근할 수 있습니다. <br>

`file list`,  `file get`,  `file put`,  `file delete` 총 4가지 명령어가 있습니다:

```
## 파일 업로드
$ opmate file put -rp master:/myfilehub/a.txt -lp /tmp/a.txt

## 파일 조회
$ opmate file list -rp master:/myfilehub/

## 파일 다운로드
$ opmate file get -rp master:/myfilehub/a.txt -lp /tmp/a.txt -ow

## 파일 삭제
$ opmate file delete -rp master:/myfilehub/a.txt
```

CLI 명령어를 활용하려면 <u><b>현재 로그인된 사용자</b></u>가 파일허브 권한을 가지고 있어야 합니다.


또한 `filehub` 명령어를 통해 파일허브를 생성하거나 관리할 수 있습니다:
```
$ opmate filehub --help
...
actions: 
  list        파일 허브 목록 출력
  view        파일 허브 상세 출력
  create      파일 허브 생성
  edit        파일 허브 수정
  delete      파일 허브 삭제
  addperm     퍼미션 추가
  rmperm      퍼미션 제거
```

<br>

### **스크립트 예약어**
- - -
태스크 스크립트 작성 시 예약어로 스크립트 단에서 파일 관련 기능을 활용할 수 있습니다.<br>
이를 통해 스크립트에서 파일허브를 일종의 원격 디렉터리로 활용할 수 있습니다.<br>

`FILE_PUT`,  `FILE_GET`,  `FILE_LS` 총 3가지 예약어가 있습니다:

```
FILE_LS  : 파일 조회
Usage    : @OPM_ATTR.FILE_LS@ <master:/master-directory-path> [glob]
Example  : @OPM_ATTR.FILE_LS@ master:/myfilehub/textfile/ "*.txt"
```
```
FILE_PUT : 파일허브로 파일 업로드
Usage    : @OPM_ATTR.FILE_PUT@ [–-overwrite] <master:/filehub-id/master-file-path> <local-file-path>
Example  : @OPM_ATTR.FILE_PUT@ --overwrite master:/myfilehub/tomcat.tar.gz /tmp/tomcat.tar.gz
```
```
FILE_GET : 파일허브에서 파일 다운로드
Usage    : @OPM_ATTR.FILE_GET@ [–-overwrite] <master:/filehub-id/master-file-path> <local-file-path>
Example  : @OPM_ATTR.FILE_GET@ --overwrite master:/myfilehub/hostname/passwd /etc/passwd 
```

스크립트 예약어를 사용하려면 반드시 <u><b>스크립트를 실행하는 태스크</b></u>가 파일허브 권한을 가지고 있어야 합니다.

<br><br>

## CLI 튜토리얼 : 파일 다운로드 & 업로드 
- - - 

다음과 같이 간단한 튜토리얼을 통해 파일 다운로드 업로드 과정을 학습해봅니다:

1. 파일허브 생성 및 권한 부여
2. 파일 배포 (CLI → Master → Agent)
3. 파일 수집 (Agent → Master → CLI)
<br><br>

### 1. 파일허브 생성 및 권한 부여
- - -

OPMATE CLI에 로그인한 후, `filehub create`로 `myfilehub`란 이름의 파일허브를 생성합니다.

```
$ opmate filehub create -id myfilehub
myfilehub has been created successfully.
```

이제 생성한 파일허브를 `filehub view`로 조회해 보겠습니다:

```
$ opmate filehub view -id myfilehub
+------------+------------------------------------+
| FIELD      | VALUE                              |
+------------+------------------------------------+
| ID         | myfilehub                          |
| OWNER      | gildong                            |
| CREATED    | 2024-01-01 09:00:00 UTC BY gildong |
| UPDATED    | 2024-01-01 09:00:00 UTC BY gildong |
+------------+------------------------------------+
| PERMISSION |                                    |
+------------+------------------------------------+
```

`owner`가 태스크 생성자인 `gildong`으로 설정된 걸 확인할 수 있습니다. <br>
`gildong`은 파일허브의 소유자이므로 별도의 권한 설정 없이 파일허브 내의 모든 파일에 대한 권한을 가집니다.

다른 유저에게도 권한을 부여하고 싶다면 `filehub addperm` 명령어를 통해 파일허브 권한 목록을 업데이트해야 합니다.
<br><br>


### 2. 파일 배포 (CLI → Master → Agent)
- - -

간단한 텍스트 파일을 현재 디렉터리에 생성한 후, 이를 파일허브에 전송해 보겠습니다.<br>
이 후 해당 파일을 타겟 노드에 배포해 보겠습니다.

우선 `a.txt`란 텍스트 파일을 생성합니다:
```
$ vi a.txt
> i love opmate
```

이 후 `file put` 명령어를 사용하여 텍스트 파일을 `myfilehub` 파일허브에 업로드합니다.<br>

파일을 업로드할 디렉터리는 `master:/myfilehub/textfile/a.txt` 입니다.<br>
여기서 `'master:/myfilehub'`는 파일허브 자체의 디렉터리고, <br>
`'textfile'`은 파일 허브 상의 하위 디렉터리며, 없을 시 자동으로 생성됩니다.


```
$ opmate file put -lp a.txt -rp master:/myfilehub/textfile/a.txt 
 ...
 checksum success
```

`lp` 파라미터는 전송할 파일의 로컬 파일 디렉터리를 지정하며,<br>
`rp` 파라미터는 파일이 저장되는 `myfilehub` 파일허브 상의 파일 디렉터리를 지정합니다.

파일이 정상적으로 전송되었다면 <br>
우선 `file list` 명령어를 통해 `myfilehub` 파일허브의 루트 디렉터리를 조회합니다:

```
$ opmate file list -rp master:/myfilehub
+----------+------+-------------------------+-----------+-----------+
| NAME     | SIZE | DATE                    | TYPE      | VALID_DAY |
+----------+------+-------------------------+-----------+-----------+
| textfile | 19   | 2024-01-01 09:30:00 KST | directory | 0         |
+----------+------+-------------------------+-----------+-----------+
ROW COUNT : 1/1
```

`myfilehub`의 루트 디렉터리에 `textfile`이라는 하위 디렉터리가 생성되었습니다.


이제 `myfilehub/textfile`을 조회해 보겠습니다:

```
$ opmate fi list -rp master:/myfilehub/textfile
+-------+------+-------------------------+------+-----------+
| NAME  | SIZE | DATE                    | TYPE | VALID_DAY |
+-------+------+-------------------------+------+-----------+
| a.txt | 15   | 2024-01-01 09:30:00 KST | file | 13        |
+-------+------+-------------------------+------+-----------+
ROW COUNT : 1/1
```

`a.txt` 파일이 정상적으로 업로드되었습니다.

<br>

이제 파일허브에 업로드된 `a.txt`를 타겟 노드로 배포해 보겠습니다.

타겟 노드로의 파일 전송은 Master와 Agent 간의 통신을 통해 이루어지며,<br>
OPMATE 태스크의 스크립트를 사용하여 수행할 수 있습니다.

먼저 태스크 생성에 필요한 TDF 파일과 스크립트 파일을 작성합니다.<br>
TDF 파일은 사용자 환경에 맞게 설정을 변경합니다. (ex. script-account, node-set 등)

```
$ vi textupload.tdf
---
id: textupload
owner: gildong # 현재 유저명로 변경
script-account: root # Shell을 실행하는 OS 계정명으로 변경
description: "Text Upload"
publisher: gildong # 현재 유저명으로 변경
target:
- node-set: OS-TYPE:"^Linux$" # Node-set을 현재 연결된 노드에 따라 변경 
  account: root
  description: OS가 Linux인 모든 노드 대상으로 태스크 실행
...
```

```
$ vi textupload.sh
#!/bin/sh

## 파일 다운로드
@OPM_ATTR.FILE_GET@ --overwrite master:/myfilehub/textfile/a.txt /tmp/a.txt

## 파일 내용 출력
cat /tmp/a.txt
```

이 후 생성한 파일을 토대로 태스크를 생성합니다.<br>
태스크 생성과 실행에 관해선 [Tutorial 4](Tutorial4.md), [Tutorial 5](Tutorial5.md)를 참고해 주세요.

```
$ opmate task create -tf textupload.tdf -sf textupload.sh
textupload has been created successfully.
```

태스크 생성 후 해당 태스크에 `myfilehub` 파일허브에 대한 권한을 부여합니다.

```
$ opmate filehub addperm -id myfilehub -ts textupload -mo rwx
myfilehub has been modified successfully.

$ opmate filehub view -id myfilehub
+------------+------------------------------------+
| FIELD      | VALUE                              |
+------------+------------------------------------+
| ID         | myfilehub                          |
| OWNER      | gildong                            |
| CREATED    | 2024-01-01 14:00:00 KST BY gildong |
| UPDATED    | 2024-01-01 14:00:00 KST BY gildong |
+------------+------------------------------------+
| PERMISSION | textupload(task) : rwx             |
+------------+------------------------------------+
```
여기서 유의할 점은 스크립트에서 파일 관련 예약어를 사용할 때
파일허브 권한이 필요한 <br>대상은 유저 `gildong`이 아니라 태스크 `textupload`입니다.
<br>
이는 파일 전송의 주체가 태스크를 실행하는 Agent이기 때문입니다.<br>


이후 태스크를 배포하고, 실행합니다. <br>
만약 Role이 부여되지 않았다면, 현재 유저에게 Role을 부여하거나 Node-set을 변경하여 태스크를 실행할 수 있습니다.

```
$ opmate task publish -id textupload
...
textupload has been published successfully.

$ opmate execute run -ts textupload
...
execution #1 has been created successfully.
```

이제 태스크 실행 결과를 확인합니다.
`Execution ID`와 `Node Session ID`를 적절히 합니다.

```
$ opmate execution listnode -id 1
+------------------------------+------------+-------------+--------+--------+
| NODE-SESSION-ID              | HOSTNAME   | REMOTE-ADDR | STATUS | RESULT |
+------------------------------+------------+-------------+--------+--------+
| 635df610-fd46-4c6a-b9ae-78c4 | opmate-dev | 123.0.0.1   | comple | succes |
| 92c00147                     |            |             | ted    | s      |
| 10ca6b2e-ee06-48f1-a5eb-236f | opmate-db  | 123.0.0.2   | comple | succes |
| 4c5b2aac                     |            |             | ted    | s      |
+------------------------------+------------+-------------+--------+--------+
ROW COUNT : 2/2

$ opmate execution viewnode -id 1 -nd 635df610-fd46-4c6a-b9ae-78c492c00147
+-----------------+--------------------------------------+
| FIELD           | VALUE                                |
+-----------------+--------------------------------------+
| NODE-SESSION-ID | 635df610-fd46-4c6a-b9ae-78c492c00147 |
| HOSTNAME        | opmate-dev                           |
| REMOTE-ADDRESS  | 123.0.0.1                            |
| ACCOUNT         | root                                 |
| STATUS          | completed                            |
| RESULT          | success                              |
| EXIT-NUM        | 0                                    |
| FORCE-STOP      | n/a                                  |
| START-DATE      | 2024-01-01 15:00:00 KST              |
| END-DATE        | 2024-01-01 15:00:00 KST              |
+-----------------+--------------------------------------+
[STDOUT]
i love opmate.

[STDERR]
No content.
```

`a.txt`가 전송되어 `STDOUT`으로 파일 내용이 출력됩니다: `i love opmate.`<br><br>



### 3. 파일 수집 (Agent → Master → CLI)
---

각 노드에서 `/etc/passwd` 파일을 개별적으로 수집해 저장해 보겠습니다.

우선 이전 단계와 비슷한 과정으로 먼저 TDF 파일과 스크립트 파일을 작성합니다.<br>

```
$ vi passwdcollect.tdf
---
id: datacollect
owner: gildong # 현재 유저명로 변경
script-account: root # Shell을 실행하는 OS 계정명으로 변경
description: "Collect /etc/passwd from Node-set"
publisher: gildong # 현재 유저명으로 변경
target:
- node-set: OS-TYPE:"^Linux$" # Node-set을 현재 연결된 노드에 따라 변경 
  account: root
  description: OS가 Linux인 모든 노드 대상으로 태스크 실행
...
```


```
$ vi passwdcollect.sh
#!/bin/sh

subdir=$(hostname)

## 각 노드의 /etc/passwd 파일을 /myfilehub/$hostname/passwd 로 복사
@OPM_ATTR.FILE_PUT@ --overwrite master:/myfilehub/$subdir/passwd /etc/passwd
```

해당 스크립트는 타겟 노드의 호스트명을 하위 디렉터리로 하여 `/etc/passwd` 파일을 저장합니다.

이 후 TDF, 스크립트 파일을 기반으로 해당 태스크를 생성, 배포, 실행합니다.
과정 중간에 `passwdcollect` 태스크에 파일허브에 대한 권한 또한 부여합니다.

```
$ opmate task create -tf passwdcollect.tdf -sf passwdcollect.sh
passwdcollect has been created successfully.
```

```
$ opmate filehub addperm -id myfilehub -ts passwdcollect -mo rwx
myfilehub has been modified successfully.
```

```
$ opmate task publish -id passwdcollect
...
passwdcollect has been published successfully.
```
```
$ opmate execute run -ts passwdcollect
...
execution #2 has been created successfully.
```

태스크 실행까지 마치면 `myfilehub` 파일허브를 다시 조회해봅니다.

```
$ opmate file list -rp master:/myfilehub/
+-----------------+------+-------------------------+-----------+-----------+
| NAME            | SIZE | DATE                    | TYPE      | VALID_DAY |
+-----------------+------+-------------------------+-----------+-----------+
| opmate-dev      | 20   | 2024-01-01 20:00:00 KST | directory | 0         |
| opmate-db       | 20   | 2024-01-01 20:00:00 KST | directory | 0         |
+-----------------+------+-------------------------+-----------+-----------+
ROW COUNT : 2/2
```

타겟 노드인 `opmate-dev`와 `opmate-dev` 이름으로 두 개의 디렉터리가 생성된 것을 확인할 수 있습니다.

이 중 `opmate-dev` 디렉터리를 확인해보면

```
$ opmate file list -rp master:/myfilehub/opmate-dev
+--------+------+-------------------------+------+-----------+
| NAME   | SIZE | DATE                    | TYPE | VALID_DAY |
+--------+------+-------------------------+------+-----------+
| passwd | 2113 | 2024-01-01 20:00:00 KST | file | 13        |
+--------+------+-------------------------+------+-----------+
ROW COUNT : 1/1
```

`opmate-dev` 노드의 `/etc/passwd` 파일이 정상적으로 업로드된 것을 확인할 수 있습니다.

해당 파일을 `file get` 명령어로 사용자 환경으로 다운로드해 보겠습니다.

```
$ opmate file get -lp /tmp/passwd -rp master:/myfilehub/opmate-dev/passwd
...
checksum success

$ cat /tmp/passwd
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
...
```

`passwd` 파일이 정상적으로 다운로드되었습니다.

<br>

[이전페이지](Tutorial5.md) / [목차](Tutorial.md) /
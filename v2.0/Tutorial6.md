---
title: OPMATE V2.0
description: Tutorial 6 - File Transfer
# version: v1.00
---

## Tutorial 6 : 파일 전송
- - -

![OPMATE_Filehub](../../img/opmate-filehub-summary.jpg)
<br>

**OPMATE**는 태스크 구성 및 실행을 위해 필요한 <u><b>파일 다운로드 & 업로드</b></u> 기능을 지원합니다.

이 기능을 통해 특정 노드에 패치 파일을 배포하거나, 반대로 태스크 실행 결과 파일을 사용자 환경으로 가져올 수도 있습니다.

주 사용법은 다음과 같습니다:

1. **CLI, WebConsole → Master**
   - 설치, 패치 등에 필요한 파일을 Master 서버로 업로드합니다.

2. **Master → Agent**
   - Master 서버에 업로드된 파일을 Agent가 설치된 서버로 다운로드합니다.

3. **Agent → Master**
   - Agent가 설치된 서버에서 생성된 파일을 Master 서버로 업로드합니다.

4. **Master → CLI, WebConsole**
   - Master 서버에 업로드된 파일을 사용자 환경으로 다운로드합니다.

<br>

### 핵심 개념
- - -

#### <u><b>파일</b></u>
OPMATE Master 서버 상의 저장소에 파일을 저장할 수 있습니다.<br>
이를 배포하거나 수집하는 주체는 Agent가 설치된 노드 혹은 CLI, WebConsole입니다.
<br><br>

#### <u><b>파일 허브</b></u>
Master 서버로 업로드된 모든 파일은 **파일 허브(Filehub)**라는 가상 디렉터리에 저장됩니다. <br>
파일 허브는 CLI, WebConsole에서 생성 및 관리할 수 있으며, 파일 허브 ID로 구분됩니다.

파일 허브에 접근하려면 반드시 해당 파일 허브에 대한 권한이 있어야 합니다. <br>
이는 CLI, WebConsole, 태스크 모두에 적용됩니다.
<br><br>

#### <u><b>파일(파일 허브) 권한</b></u>
파일에 대한 권한(rwx)을 얻으려면 파일이 저장된 파일 허브에 대한 권한이 필요합니다.<br> 

CLI, WebConsole를 통해 파일을 다운로드/업로드 하려면 반드시 <u><b>접속 유저</b></u>가 파일 허브 접속 권한을 가지고 있어야 합니다.<br>

또한 태스크의 스크립트를 통해 파일을 다운로드/업로드하려면 반드시 <u><b>스크립트를 실행하는 태스크</b></u>가 파일 허브 접속 권한을 가지고 있어야 합니다.
<br><br>

#### <u><b>파일 관련 스크립트 예약어</b></u>
태스크의 스크립트를 사용해 Agent가 설치된 타겟 노드에서 파일 허브를 원격 디렉터리로 활용할 수 있습니다.<br>
`FILE_PUT`, `FILE_GET`, `FILE_LS` 총 3가지 예약어가 있습니다.

```
FILE_LS  : 파일 조회
Usage    : @OPM_ATTR.FILE_LS@ <master:/master-directory-path> [glob]
Example  : @OPM_ATTR.FILE_LS@ master:/myfilehub/testfile/ "*.txt"
```
```
FILE_PUT : 파일 허브에서 파일 업로드
Usage    : @OPM_ATTR.FILE_PUT@ [–-overwrite] <master:/filehub-id/master-file-path> <local-file-path>
Example  : @OPM_ATTR.FILE_PUT@ --overwrite master:/myfilehub/tomcat.tar.gz /tmp/tomcat.tar.gz
```
```
FILE_GET : 파일 허브에서 파일 다운로드
Usage    : @OPM_ATTR.FILE_GET@ [–-overwrite] <master:/filehub-id/master-file-path> <local-file-path>
Example  : @OPM_ATTR.FILE_GET@ --overwrite master:/myfilehub/hostname/passwd /etc/passwd 
```

> **유의사항:** 예약어를 사용하려면 반드시 스크립트가 속한 태스크가 파일 허브에 대한 권한을 가지고 있어야 합니다.
```
$ opmate filehub view -id testhub
	...
	| PERMISSION | test(task) : "rwx" |
	...
```

#### <u><b>파일 만료일</b></u>
파일 허브에 업로드된 파일은 일정 기간이 지나면 자동으로 삭제됩니다.<br>
파일의 유효기간은 파일 조회 명령어를 통해 조회할 수 있습니다.
<br><br><br>


## CLI 튜토리얼 : 파일 다운로드 & 업로드 
- - - 

다음과 같은 간단한 튜토리얼을 통해 파일 다운로드 업로드 과정을 학습해봅니다:

1. 파일 허브 생성 및 권한 부여
2. 파일 업로드 (CLI → Master)
3. 타겟 서버 파일 전송 및 결과 파일 수집 (Master ↔ Agent)
4. 파일 다운로드 (Master → CLI)
<br><br>

### 1. 파일 허브 생성 및 권한 부여
- - -

OPMATE CLI에 로그인한 후, `filehub create`로 `testhub`란 이름의 파일 허브를 생성합니다.

```
$ opmate filehub create -id testhub
Requesting https://127.0.0.11:8443/opmate;user=gildong
testhub has been created successfully.
```

이제 생성한 파일 허브를 조회해 보겠습니다:

```
$ opmate filehub view -id testhub
Requesting https://127.0.0.11:8443/opmate;user=gildong
+------------+------------------------------------+
| FIELD      | VALUE                              |
+------------+------------------------------------+
| ID         | testhub                            |
| OWNER      | gildong                            |
| CREATED    | 2024-01-01 09:00:00 UTC BY gildong |
| UPDATED    | 2024-01-01 09:00:00 UTC BY 11404   |
+------------+------------------------------------+
| PERMISSION |                                    |
+------------+------------------------------------+
```

`owner`가 생성자인 `gildong`으로 설정된 걸 확인할 수 있습니다.
`gildong`은 파일 허브의 소유자이므로 별도의 권한 설정 없이 파일 허브 내 모든 파일에 대한 권한을 가집니다.

다른 유저에게도 권한을 부여하고 싶다면 `filehub addperm` 명령어를 통해 파일 허브 권한 목록을 업데이트해야 합니다.
<br><br>


### 2. 파일 업로드 (CLI → Master)
- - -

간단한 텍스트 파일을 현재 디렉터리에 생성한 후, 이를 Master 서버로 전송해 보겠습니다.

우선 `a.txt`란 텍스트 파일을 생성합니다:
```
$ vi a.txt
i love opmate
```

`file put` 명령어를 사용하여 텍스트 파일을 `testhub` 파일 허브에 업로드합니다.<br>
파일을 업로드 할 디렉터리는 `master:/testhub/testfile/a.txt` 입니다.<br>
주의할 점은 파일 허브의 경로는 항상 `master:/파일 허브명/` 으로 시작된다는 것입니다.

```
$ opmate file put -lp a.txt -rp master:/testhub/testfile/a.txt 
Requesting https://127.0.0.11:8443/opmate;user=gildong
part #1/1
checking remote and local files... 
checksum success
```

`lp` 파라미터는 전송할 파일의 로컬 파일 디렉터리를 지정하며,<br>
`rp` 파라미터는 파일이 저장되는 `testhub` 파일 허브 상의 파일 디렉터리를 지정합니다.

파일이 정상적으로 전송되었다면 <br>
우선 `file list` 명령어를 통해 `testhub` 파일 허브의 루트 디렉터리를 조회합니다:

```
$ opmate file list -rp master:/testhub
Requesting https://127.0.0.11:8443/opmate;user=gildong
+----------+------+-------------------------+-----------+-----------+
| NAME     | SIZE | DATE                    | TYPE      | VALID_DAY |
+----------+------+-------------------------+-----------+-----------+
| testfile | 19   | 2024-01-01 09:30:00 KST | directory | 0         |
+----------+------+-------------------------+-----------+-----------+
ROW COUNT : 1/1
```

`testhub`의 루트 디렉터리에 `testfile`이라는 디렉터리가 생성되었습니다.


이제 `testhub/testfile`를 조회해 보겠습니다:

```
$ opmate fi list -rp master:/testhub/testfile
Requesting https://127.0.0.11:8443/opmate;user=gildong
+-------+------+-------------------------+------+-----------+
| NAME  | SIZE | DATE                    | TYPE | VALID_DAY |
+-------+------+-------------------------+------+-----------+
| a.txt | 15   | 2024-01-01 09:30:00 KST | file | 13        |
+-------+------+-------------------------+------+-----------+
ROW COUNT : 1/1
```

`a.txt` 파일이 정상적으로 업로드 되었습니다.

<br>


### 3. 타겟 서버 파일 전송 및 결과 파일 수집 (Master <-> Agent)
- - -

이제 파일 허브에 업로드 된 `a.txt`를 타겟 노드로 전송해 보겠습니다.

타겟 노드로의 파일 전송은 Master와 Agent 간의 통신을 통해 이루어지며,<br>
OPMATE 태스크의 스크립트를 사용하여 수행할 수 있습니다.

먼저 태스크 생성에 필요한 TDF 파일과 스크립트 파일을 작성합니다.<br>
TDF 파일은 사용자 환경에 맞게 설정을 바꿔줍니다. (ex. script-account, node-set 등)

```
$ vi filetest.tdf
---
id: filetest
owner: gildong 
script-account: root # Shell을 실행하는 OS 계정명으로 변경
description: "File Transmission Test"
publisher: gildong
target:
- node-set: OS-TYPE:"^Linux$" # Node-set을 현재 연결된 노드에 따라 변경 
  account: root
  description: OS가 Linux인 모든 노드 대상으로 태스크 실행
permission:
  user:
  - gildong,rwx
...

```


```
$ vi filetest.sh
#!/bin/sh

## 서버 호스트명 변수로 저장
HOSTNAME=$(hostname)
LOCAL_FILENAME="/tmp/a_${HOSTNAME}.txt"
REMOTE_FILENAME="master:/testhub/testfile/a_${HOSTNAME}.txt"

## Agent로 파일 전송
@OPM_ATTR.FILE_GET@ --overwrite master:/testhub/testfile/a.txt ${LOCAL_FILENAME}

## 파일 내용 추가
wc -w ${LOCAL_FILENAME} >> ${LOCAL_FILENAME}

## Master 파일 허브로 파일 재전송
@OPM_ATTR.FILE_PUT@ --overwrite ${REMOTE_FILENAME} ${LOCAL_FILENAME}

```

이 후 생성한 파일을 토대로 태스크를 생성합니다.<br>
태스크 생성과 실행에 관한 자세한 내용은 [Tutorial 4](Tutorial4.md), [Tutorial 5](Tutorial5.md)를 참고해 주세요.

```
$ opmate ts create -tf filetest.tdf -sf filetest.sh
Requesting https://127.0.0.11:8443/opmate;user=gildong
filetest has been created successfully.
```

태스크 생성 후 해당 태스크에 `testhub` 파일 허브에 대한 접근 권한을 부여합니다.

```
$ opmate filehub addperm -id testhub -ts filetest -mo rwx
Requesting https://127.0.0.11:8443/opmate;user=gildong
testhub has been modified successfully.

$ opmate filehub view -id testhub
Requesting https://127.0.0.11:8443/opmate;user=gildong
+------------+------------------------------------+
| FIELD      | VALUE                              |
+------------+------------------------------------+
| ID         | testhub                            |
| OWNER      | gildong                            |
| CREATED    | 2024-08-21 17:38:02 KST BY gildong |
| UPDATED    | 2024-08-27 14:33:02 KST BY gildong |
+------------+------------------------------------+
| PERMISSION | filetest(task) : rwx               |
+------------+------------------------------------+
```
여기서 유의할 점은 스크립트에서 파일 관련 예약어를 사용할 때
파일 허브 권한이 필요한 <br>대상은 유저 `gildong`이 아니라 태스크 `filetest`입니다.
<br>
이는 파일 전송의 주체가 태스크를 실행하는 Agent이기 때문입니다.<br>


이후 태스크를 배포하고, 실행합니다. <br>
만약 Role이 부여되지 않았다면, 현재 유저에게 Role을 부여하거나 Node-set을 변경하여 태스크를 실행할 수 있습니다.

```
$ opmate task publish -id filetest
Requesting https://127.0.0.11:8443/opmate;user=gildong
Please Confirm: task publish (y/n)? y
filetest has been published successfully.

$ opmate execute run -ts filetest
Requesting https://127.0.0.11:8443/opmate;user=gildong
Please Confirm: execution run (y/n)? y
execution #1 has been created successfully.
```

태스크 실행 결과를 확인해 봅니다.
Execution ID와 Node Session ID를 적절히 바꿔줍니다.

```
$ opmate execution listnode -id 1
Requesting https://127.0.0.11:8443/opmate;user=gildong
+------------------------------+------------+-------------+--------+--------+
| NODE-SESSION-ID              | HOSTNAME   | REMOTE-ADDR | STATUS | RESULT |
+------------------------------+------------+-------------+--------+--------+
| 635df610-fd46-4c6a-b9ae-78c4 | opmate-dev | 123.0.0.1   | comple | succes |
| 92c00147                     |            |             | ted    | s      |
+------------------------------+------------+-------------+--------+--------+
ROW COUNT : 1/1

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
| START-DATE      | 2024-08-27 14:29:32 KST              |
| END-DATE        | 2024-08-27 14:29:32 KST              |
+-----------------+--------------------------------------+
[STDOUT]
FILE SAVED TO master:/testhub/testfile/a_opmate-dev.txt

[STDERR]
No content.

```

`master:/testhub/testfile` 디렉터리에 `a_opmate-dev.txt`가 저장된 것을 확인할 수 있습니다.<br><br>



### 4. 파일 다운로드 (Master → CLI)
---

파일 허브에 저장된 파일을 다시 CLI를 통해 유저 환경으로 다운로드 해보겠습니다.

`file get` 명령어를 통해 파일을 다운로드 합니다.

```
$ opmate file get -lp a_opmate-dev.txt -rp master:/testhub/testfile/a_opmate-dev.txt 
Requesting https://54.180.235.19:8443/opmate;user=admin
part #1/1
checking remote and local files... 
checksum success
```

파일을 열어 확인해보면, 스크립트에 의해 실행된 wc 명령어의 결과가 포함되어 있습니다!

```
$ vi a_opmate-dev.txt
i love opmate.
3 /tmp/a_opmate-dev.txt         
```

<br>

[이전페이지](Tutorial5.md) / [목차](Tutorial.md) /
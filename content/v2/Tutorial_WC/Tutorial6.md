---
title: 6. 파일 허브
description: 6. 파일 허브
menu:
  v2:
    parent: v2-tutorial-wc
weight: 14
#firstpage: true
#lastpage: true
---

---

## 파일허브
>파일허브(Filehub)는 파일 송수신을 위한 임시 보관소입니다.  
Master 서버로 업로드된 모든 파일은 지정된 파일허브 디렉터리에 저장됩니다.  
잔여 보존기한은 <B>최대 13일</B>입니다. 이후에는 모든 파일이 삭제됩니다.  

![WC_filehub](images/filehub-1.png)  

>파일허브(Filehub)는 일반유저(Normal-User)도 조회가 가능합니다.  
생성, 변경 등은 소유자 혹은 Super-User만 가능합니다.  

![WC_filehub](images/filehub-2.png)  
> 파일을 직접 업로드하거나 내려받을 수 있습니다.  

![WC_filehub](images/filehub-3.png)  
> 파일허브의 파일목록에서 디렉토리 구조와 크기,일시, 잔여보존일 등을 확인할 수 있습니다.  

### 스크립트 예약어
- - -
태스크 스크립트 작성 시 예약어로 스크립트 단에서 파일 관련 기능을 활용할 수 있습니다.  
이를 통해 스크립트에서 파일허브를 일종의 원격 디렉터리로 활용할 수 있습니다.

`FILE_PUT`,  `FILE_GET`,  `FILE_LS` 총 3가지 예약어가 있습니다

```bash
FILE_LS  : 파일 조회
Usage    : @OPM_ATTR.FILE_LS@ <master:/master-directory-path> [glob]
Example  : @OPM_ATTR.FILE_LS@ master:/myfilehub/textfile/ "*.txt"
```
```bash
FILE_PUT : 파일허브로 파일 업로드
Usage    : @OPM_ATTR.FILE_PUT@ [–-overwrite] <master:/filehub-id/master-file-path> <local-file-path>
Example  : @OPM_ATTR.FILE_PUT@ --overwrite master:/myfilehub/tomcat.tar.gz /tmp/tomcat.tar.gz
```
```bash
FILE_GET : 파일허브에서 파일 다운로드
Usage    : @OPM_ATTR.FILE_GET@ [–-overwrite] <master:/filehub-id/master-file-path> <local-file-path>
Example  : @OPM_ATTR.FILE_GET@ --overwrite master:/myfilehub/hostname/passwd /etc/passwd
```

> 스크립트 예약어를 사용하려면 반드시 <u><b>스크립트를 실행하는 태스크</b></u>가   
파일허브 권한을 가지고 있어야 합니다.  
아래는 파일허브 정보를 통해 권한정보를 조회해볼 수 있습니다.  

![WC_filehub](images/filehub-4.png)  


## 파일허브 예제
```bash
@echo off
setlocal

echo step1
IF NOT EXIST "C:\EDR\test1" (
	MKDIR "C:\EDR\test1"
)

echo step2
# filehub에서 파일 조회
@OPM_ATTR.FILE_LS@ master:/fh-gas-edr/ "*.exe"


echo step3
# filehub에서 파일 다운로드
@OPM_ATTR.FILE_GET@ --overwrite master:/fh-gas-edr/FalconSensor_Windows.exe C:\EDR\FalconSensor_Windows.exe

echo step4
# filehub에서 파일 업로드
@OPM_ATTR.FILE_PUT@ --overwrite master:/fh-gas-edr/install_step2.bat C:\EDR\install_step2.bat

endlocal
```

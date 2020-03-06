---
title: 사용자 매뉴얼
description: 8. 파일 배포/수집
---

[목차](UserManual.md) / [이전페이지](UserManual7.md) / [다음페이지](UserManual.md)

## 파일 배포/수집

![OPMATE_Summary](../../img/opmate-file-summary.png)

마스터 서버가 아닌, 노드 입장에서 마스터 파일 Repository에 업로드하거나, 다운로드하는 방식이다.

Repository에 저장된 파일은 일정 기간 후 자동으로 삭제된다.
즉, 보관의 용도가 아닌, 대량의 파일 수집과 배포를 위한 임시 공간 용도로 사용한다.

### 파일 배포

마스터 서버의 파일을 노드에 배포할 경우에 사용한다.

다음 예제는, 마스터 서버 Repository 의 /mydir/install-tomcat-1.0.tar.gz 파일을 받아와
노드의 /home/was/install-tomcat-1.0.tar.gz 에 저장하는 명령이다.

```
$ opmfget master:/mydir/install-apache.tar.gz /home/web/install-apache.tar.gz
```

### 파일 수집

노드의 파일을 마스터 서버로 수집할 경우에 사용한다.

다음 예제는, 노드의 /home/web/apache/conf/server.cfg 파일을
마스터 서버 Repository의 /mydir/node1/server.cfg 에 저장하는 명령이다.

```
$ opmfput master:/mydir/node1/server.cfg /home/web/apache/server.cfg
```


[목차](UserManual.md) / [이전페이지](UserManual7.md) / [다음페이지](UserManual.md)
---
title: OpMate
description: 인프라 운영 자동화 플랫폼 (Operator's Mate)
---

# News

- 2019/04/25 - **OpMate V1.0** 이 릴리스 되었습니다.

# Hot link

- [사용자 매뉴얼](/document/UserManual.md)
- [Command Line Usage](/document/CliUsage.md)
- [에이전트 다운로드](/download/index.md#에이전트)

# OpMate?

IT 인프라 운영시 대량 단순 반복 작업을 자동으로 수행할 수 있는 **운영 자동화 플랫폼**입니다.

한번의 명령으로 모든 서버의 디스크 사용률을 조사해보세요.
```bash
$ opmate task run -id diskusage
```

스케쥴을 설정하여 자동으로 일일 점검 결과를 받아보세요.
```bash
$ opmate task addschedule -id checkstatus -si s01 -tf '08:00'
```

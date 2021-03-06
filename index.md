---
title: 인프라 운영 자동화 플랫폼 (Operator's Mate)
---

## News

- 2020/03/12 - **OPMATE v1.1** 이 릴리스 되었습니다.
- 2019/04/25 - **OPMATE v1.0** 이 릴리스 되었습니다.

## Hot link

[튜토리얼](/document/v1.1/QuickTutorial.md)

[사용자 매뉴얼](/document/v1.1/UserManual.md)

[리눅스/유닉스용 에이전트 설치](/document/v1.1/InstallAgentLinux.md)

[윈도우즈용 에이전트 설치](/document/v1.1/InstallAgentWindows.md)

## OPMATE?

IT 인프라 운영시 대량 단순 반복 작업을 자동으로 수행할 수 있는 **운영 자동화 플랫폼**입니다.

### 이렇게 활용하세요

*한번의 명령으로 모든 서버의 디스크 사용률을 조사해보세요.*

`$ opmate task run -id diskusage`

*소프트웨어 패치 파일을 일괄로 배포하세요.*

`$ opmate task run -id downpatch -ag 'patch.tar.gz'`

*스케쥴을 설정하여 자동으로 일일 점검 결과를 받아보세요.*

`$ opmate task addschedule -id checkstatus -si s01 -tf '08:00'`

![Alt text](/img/logo-blue-small.png)

---
title: 7. 태스크 결과 취합
description: Tutorial 7 - Gathering
# version: v1.00
menu:
  v2:
    parent: v2-tutorial
weight: 8
lastpage: true
---

---

결과 취합 기능은, 태스크의 출력 결과 중 일부를 필드값으로 추출 및 취합하여 한번에 확인해 볼 수 있는 기능입니다.

다음 태스크는 운영체제의 점검 결과를 취합하여 보여주기 위한 예시입니다.

태스크 정의서 : oscheck.tdf
```yaml
---
id: oscheck
owner: gildong
cut-off-period: 5m
script-account: root
target:
- node-set: HOSTNAME:"^DB-", OS-TYPE:"^Linux$"
...
```

태스크 스크립트 : oscheck.sh
```bash
#!/bin/bash

echo "CHECKING CPU USAGE..."
cpu_idle=$(top -bn2 | grep "Cpu(s)" | tail -n 1 | awk '{print $8}')
cpu_percent=$(echo "100 - $cpu_idle" | bc)

echo "CHECKING MEMORY USAGE..."
mem_info=$(free -m | awk '/^Mem:/ {print $2, $3}')
total_memory=$(echo "$mem_info" | awk '{print $1}')
used_memory=$(echo "$mem_info" | awk '{print $2}')
memory_percent=$((used_memory * 100 / total_memory))

echo "CHECKING DISK USAGE..."
disk_percent=$(df / | tail -n 1 | grep -oP '\d+(?=%)' || echo "0")

echo "CHECKING UPTIME..."
uptime_days=$(uptime | awk -F, '{print $1}' | grep -oP '\d+(?= day)' || echo "0")

echo "@OPM_ATTR.GATHER_START@"
echo "cpu_percent:$cpu_percent"
echo "memory_percent:$memory_percent"
echo "disk_percent:$disk_percent"
echo "uptime_days:$uptime_days"
echo "@OPM_ATTR.GATHER_END@"

exit 0
```

스크립트의 세부적인 명령어는 본 튜토리얼의 범위에서 벗어나므로, 실제 출력 결과만 확인해보도록 하겠습니다.
다음과 같은 형태로 출력됩니다.

OUTPUT
```
CHECKING CPU USAGE...
CHECKING MEMORY USAGE...
CHECKING DISK USAGE...
CHECKING UPTIME...
@OPM_ATTR.GATHER_START@
cpu_percent:2.0
memory_percent:48
disk_percent:76
uptime_days:96
@OPM_ATTR.GATHER_END@
```

위 출력 결과에서 취합과 관련된 부분은 `@OPM_ATTR.GATHER_START@` 로 시작되는 라인부터 `@OPM_ATTR.GATHER_END@` 까지의 라인입니다.
두가지 태그 사이의 라인들은 각각 하나의 필드를 나타내며, `필드키:필드값` 의 형식으로 작성되어야 합니다.

취합된 결과는 다음과 같이 하나의 JSON 문서로 볼 수 있습니다.

CLI COMMAND
```bash
$ opmate execution viewgather -id 903
```

OUTPUT
```json
[
    {
        "nodeSessionId": "01d5020e-dc5f-4744-ad9c-22f23727db76",
        "hostname": "DB-DEV-LINUX",
        "remoteAddr": "172.31.3.147",
        "result": "S",
        "gather": {
            "cpu_percent": "2.0",
            "memory_percent": "48",
            "disk_percent": "76",
            "uptime_days": "96"
        }
    },
    {
        "nodeSessionId": "ea3117fe-2c16-4533-afb7-8b0fe7685251",
        "hostname": "DB-PROD-LINUX",
        "remoteAddr": "172.31.3.148",
        "result": "S",
        "gather": {
            "cpu_percent": "28.9",
            "memory_percent": "10",
            "disk_percent": "21",
            "uptime_days": "125"
        }
    }
]
```

만약, 태스크에 통지(notification) 설정을 통하여 결과를 메일 등으로 받게 된다면, 다음과 같이 테이블 형식으로 내용을 확인해 보실 수도 있습니다.

| nodeSessionId | hostname      | remoteAddr   | result  | cpu_percent | memory_percent | disk_percent | uptime_days |
| -             | -             | -            | -       | -           | -              | -            | -           |
| 01d5020e-...  | DB-DEV-LINUX  | 172.31.3.147 | success | 2.0         | 48             | 76           | 96          |
| ea3117fe-...  | DB-PROD-LINUX | 172.31.3.148 | success | 28.9        | 10             | 21           | 125         |

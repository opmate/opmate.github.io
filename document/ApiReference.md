---
title: 마스터 API 레퍼런스
---

모든 요청시 auth=$auth 파라미터는 필수(로그인 제외)입니다. URI 형식 정의에서는 생략합니다.
JSON 데이터 형식의 Indentation은 가독성을 위한 것으로 실제의 구현과 같지 않습니다.

## 사용자

### 사용자 로그인

- REQUEST
  
  ```
  POST : /opmate/user/$user_id/login
  {"password":"$password"}
  ```

- RESPONSE
  ```
  {"uuid":"$uuid"
  ,"resultCode":"$resultCode"
  ,"resultMsg":"$resultMessage"}
  ```

## 노드

### 노드 목록 조회

- REQUEST

  ```
  GET : /opmate/node
        ?id=$idSubstr
        &agentVer=$agentVerSubstr
        &ip=$ipSubstr
        &osName=$osNameSubstr
        &hostname=$hostnameSubstr
        &ownerUserId=$ownerUserId
        &stauts=$stauts
        &limit=$limit
        &offset=$offset
  ```
  - $idSubstr : 노드 ID의 일부 문자열
  - $agentVerSubstr : 에이전트 버젼의 일부 문자열
  - $ipSubstr : IP의 일부 문자열
  - $osNameSubstr : OS의 일부 문자열
  - $hostnameSubstr : HOSTNAME의 일부 문자열
  - $stauts : E or D

- RESPONSE

  ```
  {"nodeList":[{"id":"$id"
               ,"agentGuid":"$agentGuid"
               ,"agentVer":"$agentVer"
               ,"osName":"$osName"
               ,"ip":"$ip"
               ,"hostname":"$hostname"
               ,"ownerUserId":"$ownerUserId"
               ,"status":"$status"
               ,"heartbeatDt":"$heartbeatDt"
               ,"crtDt":"$crtDt"}
              ,...]
  ,"currentCnt":$currentCnt
  ,"totalCnt":$totalCnt
  ,"resultCode":"$resultCode"
  ,"resultMsg":"$resultMsg"}
  ```

## 태스크

### 태스크 목록 조회

- REQUEST

  ```
  GET : /opmate/task
        ?id=$idsubstr
        &ownerUserId=$ownerUserId
        &apprStatus=$apprStatus
        &apprUserId=$apprUserId
        &execScheduler=$execScheduler
        &execOndemand=$execOndemand
        &execTask=$execTask
        &targetNodeId=$targetNodeId
        &limit=$limit
        &offset=$offset
  ```
  - $idsubstr : 태스크 ID의 일부 문자열

- RESPONSE
  ```
  {"taskList":[{"id":"$id"
               ,"revisionNo":$revisionNo
               ,"ownerUserId":"$ownerUserId"
               ,"scriptName":"$scriptName"
               ,"osUser":"$osUser"
               ,"execScheduler":"$execScheduler"
               ,"execOndemand":"$execOndemand"
               ,"execTask":"$execTask"
               ,"nextTaskId":"$nextTaskId"
               ,"apprvStatus":"$apprvStatus"
               ,"apprvUserId":"$apprvUserId"}
              ,...]

  ,"currentCnt":$currentCnt
  ,"totalCnt":$totalCnt
  ,"resultCode":"$resultCode"
  ,"resultMsg":"$resultMsg"}
  ```
  - $execScheduler : E or D
  - $execOndemand : E or D
  - $execTask : E or D
  - $apprvStatus
    - N : N/A
    - Q : request
    - A : approval
    - R : reject

### 태스크 인스턴스 생성

- REQUEST

  ```
  POST : /opmate/task/$task_id/instance
  {"nodeIdList":["$nodeId",...]
  ,"arguments":["$argument",...]}
  ```

- RESPONSE

  ```
  {"taskInstanceNo":$taskInstanceNo
  ,"resultCode":"$resultCode"
  ,"resultMsg":"$resultMessage"}
  ```

### 태스크 인스턴스 노드 단위 재생성

- REQUEST

  ```
  PUT : /opmate/taskinstance/$instance_no/node/$node_id
  ```

- RESPONSE

  ```
  {"resultCode":"$resultCode"
  ,"resultMsg":"$resultMessage"}
  ```

### 태스크 인스턴스 목록 조회

- REQUEST

  ```
  GET : /opmate/task/$task_id/instance
        ?startDtGe=$startDtGe
        &startDtLe=$startDtLe
        &runnerId=$runnerId
        &nextTaskId=$nextTaskId
        &limit=$limit
        &offset=$offset
  ```

- RESPONSE

  ```
  {"instanceList":[{"taskInstanceNo":$taskInstanceNo
                   ,"taskId":"$taskId"
                   ,"startDt":"$startDt"
                   ,"endDt":"$endDt"
                   ,"runnerId":"$runnerId"
                   ,"runnerGubun":"$runnerGubun"
                   ,"nextTaskInstanceNo":"$nextTaskInstanceNo"
                   ,"nextTaskId":"$nextTaskId"}
                  ,...]
  ,"currentCnt":$currentCnt
  ,"totalCnt":$totalCnt
  ,"resultCode":"$resultCode"
  ,"resultMsg":"$resultMsg"}
  ```


### 태스크 인스턴스 노드별 상세 조회

- REQUEST

  ```
  GET : /opmate/taskinstance/$instance_no/node/$node_id
        ?execNo=$execNo
  ```

- RESPONSE

  ```
  {"insNodeList":[{"taskId":"$taskId"
                  ,"taskInstanceNo":$taskInstanceNo
                  ,"nodeId":"$nodeId"
                  ,"execNo":$execNo
                  ,"status":"$status"
                  ,"startDt":"$startDt"
                  ,"endDt":"$endDt"
                  ,"runnerId":"$runnerId"
                  ,"runnerGubun":"$runnerGubun"
                  ,"resultCd":"$resultCd"
                  ,"exitCd":$exitCd
                  ,"encbase64out":"$encbase64out"
                  ,"encbase64err":"$encbase64err"}]
  ,"resultCode":"$resultCode"
  ,"resultMsg":"$resultMsg"}
  ```

### 태스크 인스턴스 노드별 상세 목록 조회

- REQUEST

  ```
  GET : /opmate/taskinstance/$instance_no/node
        ?stdoutYn=$stdoutYn
        &stderrYn=$stderrYn
        &nodeId=$nodeIdSubstr
        &execStatus=$execStatus
        &result=$result
        &exitCd=$exitCd
        &limit=$limit
        &offset=$offset
  ```
  - $stdoutYn : Y or N
  - $stderrYn : Y or N
  - $nodeIdSubstr : 노드 ID 의 일부 문자열

- RESPONSE

  ```
  {"insNodeList":[{"taskId":"$taskId"
                  ,"taskInstanceNo":$taskInstanceNo
                  ,"nodeId":"$nodeId"
                  ,"execNo":$execNo
                  ,"status":"$status"
                  ,"startDt":"$startDt"
                  ,"endDt":"$endDt"
                  ,"runnerId":"$runnerId"
                  ,"runnerGubun":"$runnerGubun"
                  ,"resultCd":"$resultCd"
                  ,"exitCd":$exitCd
                  ,"encbase64out":"$encbase64out"
                  ,"encbase64err":"$encbase64err"}
                  ,...]
  ,"currentCnt":$currentCnt
  ,"totalCnt":$totalCnt
  ,"resultCode":"$resultCode"
  ,"resultMsg":"$resultMsg"}
  ```

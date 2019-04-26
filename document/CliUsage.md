---
title: Command Line Usage
---

```bash
usage: opmate user list [-id <substring>] [-nm <substring>] [-ro <role-num>]
       [-st <E|D>] [-lm <number>] [-of <number>]
  -id,--id <substring>    Filter by ID
  -nm,--name <substring>  Filter by name
  -ro,--role <role-num>   Filter by role
                          * 0 : Administrator
                          * 1 : Approver
                          * 2 : Operator
                          * 3 : Viewer
  -st,--status <E|D>      Filter by status : Enable/Disable
  -lm,--limit <number>    Maximum number of rows
  -of,--offset <number>   First row number, starting at 0

```

```bash
usage: opmate user view -id <user-id>
  -id,--id <user-id>  User ID

```

```bash
usage: opmate user create -id <user-id> -nm <name> -pn <phone-num> -ea
       <email-address> [-de <free-text>]
  -id,--id <user-id>           User's ID
  -nm,--name <name>            User's name
  -pn,--phone <phone-num>      Phone number
  -ea,--email <email-address>  E-mail Address
  -de,--desc <free-text>       Description

```

```bash
usage: opmate user edit -id <user-id> [-wi <user-id>] [-nm <name>] [-pn
       <phone-num>] [-ea <email-address>] [-de <free-text>] [-ro <role-num>]
       [-st <E|D>]
  -id,--id <user-id>           User's ID
  -wi,--newid <user-id>        New ID
  -nm,--name <name>            User's name
  -pn,--phone <phone-num>      Phone number
  -ea,--email <email-address>  E-mail Address
  -de,--desc <free-text>       Description
  -ro,--role <role-num>        Role authority, Admin only
                               * 0:Administrator
                               * 1:Approver
                               * 2:Operator
                               * 3:Viewer
  -st,--status <E|D>           Status : Enable/Disable, Admin only

```

```bash
usage: opmate user passwd -id <user-id>
  -id,--id <user-id>  User's ID

```

```bash
usage: opmate user delete -id <user-id>
  -id,--id <user-id>  User ID

```

```bash
usage: opmate user login -id <user-id>
  -id,--id <user-id>  User's ID

```

```bash
usage: opmate user logout


```

```bash
usage: opmate usergroup list [-id <substring>] [-oi <user-id>] [-lm <number>]
       [-of <number>]
  -id,--id <substring>   Filter by ID
  -oi,--owner <user-id>  Filter by owner
  -lm,--limit <number>   Maximum number of rows
  -of,--offset <number>  First row number, starting at 0

```

```bash
usage: opmate usergroup view -id <usergroup-id>
  -id,--id <usergroup-id>  Usergroup ID

```

```bash
usage: opmate usergroup create -id <usergroup-id> [-de <free-text>]
  -id,--id <usergroup-id>  Usergroup ID
  -de,--desc <free-text>   Description

```

```bash
usage: opmate usergroup edit -id <usergroup-id> [-wi <usergroup-id>] [-oi
       <user-id>] [-de <free-text>]
  -id,--id <usergroup-id>     Usergroup ID
  -wi,--newid <usergroup-id>  New ID
  -oi,--owner <user-id>       Owner of usergroup
  -de,--desc <free-text>      Description

```

```bash
usage: opmate usergroup delete -id <usergroup-id>
  -id,--id <usergroup-id>  Usergroup ID

```

```bash
usage: opmate usergroup listuser -id <usergroup-id>
  -id,--id <usergroup-id>  Usergroup ID

```

```bash
usage: opmate usergroup adduser -id <usergroup-id> -ui <user-id>
  -id,--id <usergroup-id>  Usergroup ID
  -ui,--userid <user-id>   User to add

```

```bash
usage: opmate usergroup rmuser -id <usergroup-id> -ui <user-id>
  -id,--id <usergroup-id>  Usergroup ID
  -ui,--userid <user-id>   User to remove

```

```bash
usage: opmate node list [-id <substring>] [-av <substring>] [-ip <substring>]
       [-os <substring>] [-hn <substring>] [-oi <user-id>] [-st <E|D>] [-lm
       <number>] [-of <number>]
  -id,--id <substring>            Filter by ID
  -av,--agentversion <substring>  Filter by agent version
  -ip,--ip <substring>            Filter by IP address
  -os,--os <substring>            Filter by OS
  -hn,--hostname <substring>      Filter by hostname
  -oi,--owner <user-id>           Filter by owner
  -st,--status <E|D>              Filter by status : Enable/Disable
  -lm,--limit <number>            Maximum number of rows
  -of,--offset <number>           First row number, starting at 0

```

```bash
usage: opmate node view -id <node-id>
  -id,--id <node-id>  Node ID

```

```bash
usage: opmate node edit -id <node-id> [-wi <node-id>] [-oi <user-id>] [-de
       <free-text>] [-st <E|D>]
  -id,--id <node-id>      Node ID
  -wi,--newid <node-id>   New ID
  -oi,--owner <user-id>   Node Owner ID
  -de,--desc <free-text>  Description
  -st,--status <E|D>      Node Status : Enable/Disable(Admin only)

```

```bash
usage: opmate node delete -id <node-id>
  -id,--id <node-id>  Node ID

```

```bash
usage: opmate nodegroup list [-id <substring>] [-oi <user-id>] [-lm <number>]
       [-of <number>]
  -id,--id <substring>   Filter by ID
  -oi,--owner <user-id>  Filter by owner
  -lm,--limit <number>   Maximum number of rows
  -of,--offset <number>  First row number, starting at 0

```

```bash
usage: opmate nodegroup view -id <nodegroup-id>
  -id,--id <nodegroup-id>  Nodegroup ID

```

```bash
usage: opmate nodegroup create -id <nodegroup-id> [-de <free-text>]
  -id,--id <nodegroup-id>  Nodegroup ID
  -de,--desc <free-text>   Description

```

```bash
usage: opmate nodegroup edit -id <nodegroup-id> [-wi <nodegroup-id>] [-oi
       <user-id>] [-de <free-text>]
  -id,--id <nodegroup-id>     Nodegroup ID
  -wi,--newid <nodegroup-id>  New ID
  -oi,--owner <user-id>       Owner of nodegroup
  -de,--desc <free-text>      Description

```

```bash
usage: opmate nodegroup delete -id <nodegroup-id>
  -id,--id <nodegroup-id>  Nodegroup ID

```

```bash
usage: opmate nodegroup listnode -id <nodegroup-id>
  -id,--id <nodegroup-id>  Nodegroup ID

```

```bash
usage: opmate nodegroup addnode -id <nodegroup-id> -ni <node-id>
  -id,--id <nodegroup-id>  Nodegroup ID
  -ni,--nodeid <node-id>   Node to add

```

```bash
usage: opmate nodegroup rmnode -id <nodegroup-id> -ni <node-id>
  -id,--id <nodegroup-id>  Nodegroup ID
  -ni,--nodeid <node-id>   Node to remove

```

```bash
usage: opmate nodegroup listattr -id <nodegroup-id>
  -id,--id <nodegroup-id>  Nodegroup ID

```

```bash
usage: opmate nodegroup addattr -id <nodegroup-id> -ak <key> -av <value>
  -id,--id <nodegroup-id>  Nodegroup ID
  -ak,--key <key>          Attribute key to add
  -av,--value <value>      Attribute value to add

```

```bash
usage: opmate nodegroup rmattr -id <nodegroup-id> -ak <key>
  -id,--id <nodegroup-id>  Nodegroup ID
  -ak,--key <key>          Attribute key to remove

```

```bash
usage: opmate nodegroup copy -id <nodegroup-id> -ng <nodegroup-id>
  -id,--id <nodegroup-id>        Source nodegroup
  -ng,--newgroup <nodegroup-id>  New nodegroup

```

```bash
usage: opmate task list [-id <substring>] [-oi <user-id>] [-es <E|D>] [-eo
       <E|D>] [-et <E|D>] [-as <N|Q|A|R>] [-ai <user-id>] [-nd <node-id>] [-lm
       <number>] [-of <number>]
  -id,--id <substring>        Filter by ID
  -oi,--owner <user-id>       Filter by owner
  -es,--execscheduler <E|D>   Filter by scheduler permission : Enable/Disable
  -eo,--execondemand <E|D>    Filter by on-demand permission : Enable/Disable
  -et,--exectask <E|D>        Filter by other-task permission : Enable/Disable
  -as,--apprstatus <N|Q|A|R>  Filter by approval status
                              * N : N/A
                              * Q : request
                              * A : accept
                              * R : reject
  -ai,--appruser <user-id>    Filter by approver
  -nd,--node <node-id>        Filter by node as target
  -lm,--limit <number>        Maximum number of rows
  -of,--offset <number>       First row number, starting at 0

```

```bash
usage: opmate task view -id <task-id> [-rv <revision-num>]
  -id,--id <task-id>             Task ID
  -rv,--revision <revision-num>  Revision number

```

```bash
usage: opmate task history -id <task-id> [-lm <limit>] [-of <offset>]
  -id,--id <task-id>     Task ID
  -lm,--limit <limit>    Maximum number of rows
  -of,--offset <offset>  First row number, starting at 0

```

```bash
usage: opmate task checkscript -id <task-id> [-rv <revision-num>] [-se
       <charset>]
  -id,--id <task-id>             Task ID
  -rv,--revision <revision-num>  Revision number
  -se,--encoding <charset>       Encoding charset of script

```

```bash
usage: opmate task diff -id <task-id> [-rv <revision-num1 revision-num2>] [-se
       <charset>] [-wd <number>]
  -id,--id <task-id>                            Task ID
  -rv,--revision <revision-num1 revision-num2>  Revision number
  -se,--encoding <charset>                      Encoding charset of script
  -wd,--width <number>                          Output columns, default 130

```

```bash
usage: opmate task downscript -id <task-id> [-rv <revision-num>] [-pt
       <directory-name>]
  -id,--id <task-id>              Task ID
  -rv,--revision <revision-num>   Revision number
  -pt,--dirpath <directory-name>  Directory to download

```

```bash
usage: opmate task create -id <task-id> -sf <file-path> -ou <os-user-name> [-es
       <E|D>] [-eo <E|D>] [-et <E|D>] [-xi <task-id>] [-de <free-text>]
  -id,--id <task-id>            Task ID
  -sf,--scriptfile <file-path>  Local path of script file
  -ou,--osuser <os-user-name>   Execute script as this user (ignored in Windows)
  -es,--execscheduler <E|D>     Scheduler permission : Enable/Disable(default)
  -eo,--execondemand <E|D>      On-demand permission : Enable/Disable(default)
  -et,--exectask <E|D>          Other-task permission : Enable/Disable(default)
  -xi,--nexttask <task-id>      Next Task ID
  -de,--desc <free-text>        Description

```

```bash
usage: opmate task edit -id <task-id> [-sf <file-path>] [-ou <os-user-name>]
       [-es <E|D>] [-eo <E|D>] [-et <E|D>] [-xi <task-id>] [-de <free-text>]
       [-oi <user-id>] [-ai <user-id>]
  -id,--id <task-id>            Task ID
  -sf,--scriptfile <file-path>  Local path of script file
  -ou,--osuser <os-user-name>   Execute script as this user (ignored in Windows)
  -es,--execscheduler <E|D>     Scheduler permission : Enable/Disable
  -eo,--execondemand <E|D>      On-demand permission : Enable/Disable
  -et,--exectask <E|D>          Other-task permission : Enable/Disable
  -xi,--nexttask <task-id>      Next Task ID
  -de,--desc <free-text>        Description
  -oi,--owner <user-id>         Change Task Owner
  -ai,--appruser <user-id>      Assign Approver

```

```bash
usage: opmate task delete -id <task-id>
  -id,--id <task-id>  Task ID

```

```bash
usage: opmate task rename -id <task-id> -wi <task-id>
  -id,--id <task-id>     Task ID
  -wi,--newid <task-id>  New Task ID

```

```bash
usage: opmate task listtarget -id <task-id> [-rv <revision-num>]
  -id,--id <task-id>             Task ID
  -rv,--revision <revision-num>  Revision number

```

```bash
usage: opmate task addtarget -id <task-id> [-nd <node-id>] [-ng <nodegroup-id>]
  -id,--id <task-id>              Task ID
  -nd,--node <node-id>            Node to add as target
  -ng,--nodegroup <nodegroup-id>  Nodegroup to add as target

```

```bash
usage: opmate task rmtarget -id <task-id> [-nd <node-id>] [-ng <nodegroup-id>]
  -id,--id <task-id>              Task ID
  -nd,--node <node-id>            Node to remove as target
  -ng,--nodegroup <nodegroup-id>  Nodegroup to remove as target

```

```bash
usage: opmate task listrunner -id <task-id> [-rv <revision-num>]
  -id,--id <task-id>             Task ID
  -rv,--revision <revision-num>  Revision number

```

```bash
usage: opmate task addrunner -id <task-id> [-us <user-id>] [-ug <usergroup-id>]
       [-ts <task-id>]
  -id,--id <task-id>              Task ID
  -us,--user <user-id>            User to add as runner
  -ug,--usergroup <usergroup-id>  Usergroup to add as runner
  -ts,--task <task-id>            Task to add as runner

```

```bash
usage: opmate task rmrunner -id <task-id> [-us <user-id>] [-ug <usergroup-id>]
       [-ts <task-id>]
  -id,--id <task-id>              Task ID
  -us,--user <user-id>            User to remove as runner
  -ug,--usergroup <usergroup-id>  Usergroup to remove as runner
  -ts,--task <task-id>            Task to remove as runner

```

```bash
usage: opmate task listschedule -id <task-id> [-rv <revision-num>] [-cy
       <Y|M|W|D|H|O>] [-st <E|D>]
  -id,--id <task-id>             Task ID
  -rv,--revision <revision-num>  Revision number
  -cy,--cycle <Y|M|W|D|H|O>      Execution cycle
                                 * Y : yearly
                                 * M : monthly
                                 * W : weekly
                                 * D : daily
                                 * H : hourly
                                 * O : once
  -st,--status <E|D>             Activation status : Enable/Disable

```

```bash
usage: opmate task addschedule -id <task-id> -si <schedule-id> -tf <time-format>
       [-st <E|D>]
  -id,--id <task-id>              Task ID
  -si,--scheduleid <schedule-id>  Schedule ID
  -tf,--timeformat <time-format>  Time formats by cycle
                                  * Yearly  : 'MM/DD hh:mm'
                                  * Monthly : 'DD hh:mm'
                                  * Weekly  : 'WWW hh:mm'
                                  * Daily   : 'hh:mm'
                                  * Hourly  : 'mm'
                                  * Once    : 'YYYY/MM/DD hh:mm'
                                  MM=01~12, DD=01~31, hh=00~23, mm=00~59
                                  WWW=sun|mon|tue|wed|thu|fri|sat
  -st,--status <E|D>              Activation status : Enable(default)/Disable

```

```bash
usage: opmate task editschedule -id <task-id> -si <schedule-id> [-tf
       <time-format>] [-st <E|D>]
  -id,--id <task-id>              Task ID
  -si,--scheduleid <schedule-id>  Schedule ID
  -tf,--timeformat <time-format>  Time formats by cycle
                                  * Yearly  : 'MM/DD hh:mm'
                                  * Monthly : 'DD hh:mm'
                                  * Weekly  : 'WWW hh:mm'
                                  * Daily   : 'hh:mm'
                                  * Hourly  : 'mm'
                                  * Once    : 'YYYY/MM/DD hh:mm'
                                  MM=01~12, DD=01~31, hh=00~23, mm=00~59
                                  WWW=sun|mon|tue|wed|thu|fri|sat
  -st,--status <E|D>              Activation status : Enable/Disable

```

```bash
usage: opmate task rmschedule -id <task-id> -si <schedule-id>
  -id,--id <task-id>              Task ID
  -si,--scheduleid <schedule-id>  Schedule ID

```

```bash
usage: opmate task listappr [-oi <user-id>]
  -oi,--owner <user-id>  Filter by owner

```

```bash
usage: opmate task reqappr -id <task-id> [-ai <user-id>] [-qr <free-text>]
  -id,--id <task-id>        Task ID
  -ai,--appruser <user-id>  Approver
  -qr,--reason <free-text>  Request reason

```

```bash
usage: opmate task acceptappr -id <task-id>
  -id,--id <task-id>  Task ID

```

```bash
usage: opmate task rejectappr -id <task-id> [-rr <free-text>]
  -id,--id <task-id>        Task ID
  -rr,--reason <free-text>  Reject reason

```

```bash
usage: opmate task listrun -id <task-id> [-stge <YYYYMMDD>] [-stle <YYYYMMDD>]
       [-ri <runner-id>] [-xi <next-task-id>] [-lm <number>] [-of <number>]
  -id,--id <task-id>             Task ID
  -stge,--startdt-ge <YYYYMMDD>  The YYYYMMDD is greater or equal than starting
                                 date
  -stle,--startdt-le <YYYYMMDD>  The YYYYMMDD is less or equal than starting
                                 date
  -ri,--runnerid <runner-id>     Filter by runner
  -xi,--nexttask <next-task-id>  Filter by next task
  -lm,--limit <number>           Maximum number of rows
  -of,--offset <number>          First row number, starting at 0

```

```bash
usage: opmate task run -id <task-id> [-ni <node-id>] [-ag <script-args>]
  -id,--id <task-id>            Task ID
  -ni,--nodeid <node-id>        For targeting only one node
  -ag,--argument <script-args>  Arguments passed to script

```

```bash
usage: opmate task listrunnode -in <task-instance-no> [-ni <substring>] [-st
       <R|C|S|F>] [-rs <N|S|F>] [-ec <exit-cd>] [-lm <number>] [-of <number>]
  -in,--instanceno <task-instance-no>  Task Instance No
  -ni,--nodeid <substring>             Filter by node
  -st,--execstatus <R|C|S|F>           Filter by execution status
                                       * R:ready
                                       * C:request
                                       * S:complete
                                       * F:fail
  -rs,--result <N|S|F>                 Filter by execution result
                                       * N:N/A
                                       * S:success
                                       * F:fail
  -ec,--exitcd <exit-cd>               Filter by exit code of script
  -lm,--limit <number>                 Maximum number of rows
  -of,--offset <number>                First row number, starting at 0

```

```bash
usage: opmate task viewrun -in <task-instance-no> -ni <node-id> [-en <exec-no>]
  -in,--instanceno <task-instance-no>  Task Instance No
  -ni,--nodeid <node-id>               Node ID
  -en,--execno <exec-no>               Exec No

```

```bash
usage: opmate task rerun -in <task-instance-no> -ni <node-id>
  -in,--instanceno <task-instance-no>  Instance to re-run
  -ni,--nodeid <node-id>               Target node to re-run

```

```bash
usage: opmate file list [-sp <server-path>] [-lm <limit>] [-of <offset>]
  -sp,--serverpath <server-path>  Server Directory Path
  -lm,--limit <limit>             Maximum number of rows
  -of,--offset <offset>           First row number, starting at 0

```

```bash
usage: opmate file get -nm <file-name> [-sp <server-path>] [-lp <local-path>]
  -nm,--name <file-name>          File Name
  -sp,--serverpath <server-path>  Server Directory Path
  -lp,--localpath <local-path>    Local Directory Path

```

```bash
usage: opmate file put -nm <file-name> [-sp <server-path>] [-lp <local-path>]
  -nm,--name <file-name>          File Name
  -sp,--serverpath <server-path>  Server Directory Path
  -lp,--localpath <local-path>    Local Directory Path

```

```bash
usage: opmate info list [-v]
  -v,--version  OpMate-Version
```

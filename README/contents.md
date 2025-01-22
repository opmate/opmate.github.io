## 컨텐츠 업데이트

### 단순 마크다운 파일 생성, 변경

#### 1. `opmate.github.io` 레포지토리 클론
```
git clone https://github.com/opmate/opmate.github.io.git

cd opmate.github.io
```

#### 2. `/content` 폴더 내 해당하는 서브디렉터리로 이동
```
# OPMATE v2.0 관련 수정
cd v2

# OPMATE v1.1 관련 수정
cd v11

# OPMATE V1.0 관련 수정
cd v10

# 홈페이지 수정은 이동 X

```

#### 3. `.md` 에디터로 열기
```
# 각 메뉴 별 랜딩 페이지 수정
vim _index.md

# 파일 생성 혹은 수정
vim 생성파일.md

# 튜토리얼 혹은 매뉴얼 수정 시 디렉터리 이동 후 수정
cd Manual / cd Tutorial
vim 생성파일.md

```

#### 4. 컨텐츠 작성

```

/* 컨텐츠 파라미터 */ 
---
title: Introduction /* 컨텐츠 제목*/
menu:
  v2: /*소속 메뉴명*/
    parent: v10-about /*소속 서브메뉴명*/
hideNav: false /*네비게이션 버튼 활성화/비활성화*/
weight: 1 /*메뉴 내 Navigation 순서 지정 (서브메뉴 상관 X)*/
firstpage: true /*네비게이션 Prev 버튼 비활성화*/
lastpage: false /*네비게이션 Next 활성화/비활성화*/
---

# Heading 1 
## Heading 2 
### Heading 3 
#### Heading 4 
##### Heading 5 
###### Heading 6

**굵은 텍스트** 
*기울임 텍스트* 
~~취소선~~ 
**_굵은 기울임 텍스트_**

[링크](https://www.google.com)

/*이미지는 /assets/images에 위치*/
![이미지](images/opmate-filehub-summary.jpg "opmate filehub") 

`` `print("Hello, Markdown!")` ``

{{< callout note >}} CALL OUTS {{< /callout >}}

{{< details "Start in open state" open >}} 
This Boolean attribute indicates whether the details — that is, the contents of the <details> element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible. 
{{< /details >}}

{{< tabs "create-new-site" >}} {{< tab "npm" >}} ```bash npm create thulite@latest ``` {{< /tab >}} {{< tab "pnpm" >}} ```bash pnpm create thulite@latest ``` {{< /tab >}} {{< tab "Yarn" >}} ```bash yarn create thulite ``` {{< /tab >}} {{< /tabs >}}

{{< link-card title="Showcase" description="Explore the infinite possibilities of Doks" href="/showcase/" target="_blank" >}}

/*기타 ShortCode 문법은 https://getdoks.org/docs/basics/shortcodes/ 링크 참조*/

```


### 메뉴 생성 및 서브메뉴 생성

#### 1. `/config/_default/menus.toml` 수정

```
...
[[main]]
  identifier = "newmenu"
  name = "new-menu"
  url = "/newmenu/About"
  weight = 4

[[newmenu]]
  identifier = "newmenu-submenu1"
  name = "Sub-Menu 1"
  url = "/newmenu/indexpage1"
  weight = 1

[[newmenu]]
  identifier = "newmenu-submenu2"
  name = "Sub-Menu 1"
  url = "/newmenu/indexpage2"
  weight = 2

```

-> 기존 메뉴에 서브메뉴만 생성 시 [[메뉴명]] 만 지정

#### 2. `layouts/` 수정 (서브메뉴만 생성 시 생략)

1. `layouts/partials/sidebar` 수정 (사이드바 관련 설정)
```
cd layouts/partials/sidebar

## 메뉴명-menu.html 메뉴명-toc.html으로 기존 파일 복사
cp v2-menu.html newmenu-menu.html
cp v2-toc.html newmenu-toc.html

## `v2`라는 스트링을 `메뉴명으로 변경`
sed -i 's/v2/newmenu/g' newmenu-menu.html
sed -i 's/v2/newmenu/g' newmenu-toc.html

```

3. 메뉴명으로 디렉터리 생성
```
cd layouts/

mkdir newmenu
```

3. `v2` 폴더에서 `list.html` 및 `single.html` 복사해오기
```
cd newmenu

cp ../v2/list.html ../v2/single.html .

```

4. `single.html `수정
```
sed -i 's/v2/newmenu/g' single.html

```


#### 3. `content/` 수정 및 컨텐츠 생성

메뉴명으로 디렉터리 생성
```
cd content/

mkdir newmenu
```

About.md 작성
```
cd newmenu

vim About.md
```

```
---
title: 시작하기
date: 2024-10-30
weight: 1
menu:
  newmenu:
    parent: newmenu-submenu1
toc: true
hideNav: true
---
---

#### 랜딩 페이지
```

#### 4. Github 푸쉬
```
$ git add .
$ git commit -m "Update Node Modules"
$ git push
```


## 컨텐츠 업데이트

### 단순 마크다운 파일 생성, 변경

#### 1. `opmate.github.io` 레포지토리 클론
```
git clone https://github.com/opmate/opmate.github.io.git

cd opmate.github.io
```

#### 2. `/content` 폴더 내 해당하는 서브디렉터리로 이동
```
# OPMATE v2.0 관련 수정
cd v2

# OPMATE v1.1 관련 수정
cd v11

# OPMATE V1.0 관련 수정
cd v10

# 홈페이지 수정은 이동 X
```

#### 3. `.md` 에디터로 열기
```
# 각 메뉴 별 랜딩 페이지 수정
vim _index.md

# 파일 생성 혹은 수정
vim 생성파일.md

# 튜토리얼 혹은 매뉴얼 수정 시 디렉터리 이동 후 수정
cd Manual / cd Tutorial
vim 생성파일.md

```

#### 4. 컨텐츠 작성

```

/* 컨텐츠 파라미터 */ 
---
title: Introduction /* 컨텐츠 제목*/
menu:
  v2: /*소속 메뉴명*/
    parent: v10-about /*소속 서브메뉴명*/
hideNav: false /*네비게이션 버튼 활성화/비활성화*/
weight: 1 /*메뉴 내 Navigation 순서 지정 (서브메뉴 상관 X)*/
firstpage: true /*네비게이션 Prev 버튼 비활성화*/
lastpage: false /*네비게이션 Next 활성화/비활성화*/
---

# Heading 1 
## Heading 2 
### Heading 3 
#### Heading 4 
##### Heading 5 
###### Heading 6

**굵은 텍스트** 
*기울임 텍스트* 
~~취소선~~ 
**_굵은 기울임 텍스트_**

[링크](https://www.google.com)

/*이미지는 /assets/images에 위치*/
![이미지](images/opmate-filehub-summary.jpg "opmate filehub") 

`` `print("Hello, Markdown!")` ``

{{< callout note >}} CALL OUTS {{< /callout >}}

{{< details "Start in open state" open >}} 
This Boolean attribute indicates whether the details — that is, the contents of the <details> element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible. 
{{< /details >}}

{{< tabs "create-new-site" >}} {{< tab "npm" >}} ```bash npm create thulite@latest ``` {{< /tab >}} {{< tab "pnpm" >}} ```bash pnpm create thulite@latest ``` {{< /tab >}} {{< tab "Yarn" >}} ```bash yarn create thulite ``` {{< /tab >}} {{< /tabs >}}

{{< link-card title="Showcase" description="Explore the infinite possibilities of Doks" href="/showcase/" target="_blank" >}}

/*기타 ShortCode 문법은 https://getdoks.org/docs/basics/shortcodes/ 링크 참조*/

```


### 메뉴 생성 및 서브메뉴 생성

#### 1. `/config/_default/menus.toml` 수정

```
...
[[main]]
  identifier = "newmenu"
  name = "new-menu"
  url = "/newmenu/About"
  weight = 4

[[newmenu]]
  identifier = "newmenu-submenu1"
  name = "Sub-Menu 1"
  url = "/newmenu/indexpage1"
  weight = 1

[[newmenu]]
  identifier = "newmenu-submenu2"
  name = "Sub-Menu 1"
  url = "/newmenu/indexpage2"
  weight = 2

```

-> 기존 메뉴에 서브메뉴만 생성 시 [[메뉴명]] 만 지정
#### 2. `layouts/` 수정 (서브메뉴만 생성 시 생략)

1. `layouts/partials/sidebar` 수정 (사이드바 관련 설정)
```
cd layouts/partials/sidebar

## 메뉴명-menu.html 메뉴명-toc.html으로 기존 파일 복사
cp v2-menu.html newmenu-menu.html
cp v2-toc.html newmenu-toc.html

## `v2`라는 스트링을 `메뉴명으로 변경`
sed -i 's/v2/newmenu/g' newmenu-menu.html
sed -i 's/v2/newmenu/g' newmenu-toc.html

```

3. 메뉴명으로 디렉터리 생성
```
cd layouts/

mkdir newmenu
```

3. `v2` 폴더에서 `list.html` 및 `single.html` 복사해오기
```
cd newmenu

cp ../v2/list.html ../v2/single.html .

```

4. `single.html `수정
```
sed -i 's/v2/newmenu/g' single.html

```


#### 3. `content/` 수정 및 컨텐츠 생성

메뉴명으로 디렉터리 생성
```
cd content/

mkdir newmenu
```

About.md 작성
```
cd newmenu

vim About.md
```

```
---
title: 시작하기
date: 2024-10-30
weight: 1
menu:
  newmenu:
    parent: newmenu-submenu1
toc: true
hideNav: true
---
---

#### 랜딩 페이지
```




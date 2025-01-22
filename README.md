# [OPMATE.GITHUB.IO](https://OPMATE.GITHUB.IO)

IT 인프라 운영 자동화 플랫폼, OPMATE



### 📚 프로젝트 가이드

##### [-> 컨텐츠 작성법](README/contents.md)
##### [-> 로컬 테스트 환경 구축](README/testenv.md)


## 프로젝트 구성

### Github Actions
#### **`.github/workflows/main.yml`**
- OPMATE.GITHUB.IO 가 빌드되고 배포되는 Git Actions 워크플로 파일
- `hugo` 표준 파일에 따르며,  최신 `ubuntu`, `hugo`, `node` 기반으로 빌드됨.
- 빌드 시 `hugo_extended` 바이너리를 사용하고, Go 커스텀 모듈을 사용하지 않으므로 `go` 사용 X

### 프로젝트 디렉터리
#### **`assets/`**

- JavaScript, SCSS 등의 자산 파일을 저장하는 디렉터리로, Hugo의 Pipe 기능을 통해 빌드되거나 처리된 뒤 `static/` 디렉터리에 복사됨.
- 예: `opmate.github.io`에서는 파비콘, 이미지, 커스텀 SCSS 파일이 포함됨.


#### **`static/`**

- 처리되지 않은 정적 자산(폰트, 파비콘, PDF 등)을 저장하며, 빌드 시 `public/` 디렉터리로 그대로 복사됨.


#### **`config/`**

- Hugo의 구성 파일을 저장하는 디렉터리.

1. **`config/_default/hugo.toml`**
    - Hugo 사이트의 전반적인 설정 파일로, 사이트 제목, 베이스 URL, 테마, 메뉴 구성을 정의함.
2. **`config/_default/module.toml`**
    - Hugo의 마운트 설정 파일로, 프로젝트에서 사용되는 모듈과 리소스의 경로를 정의함.
3. **`config/_default/params.toml`**
    - Doks + Thulite 통합 설정 파일로, 이미지 처리, 인라인 SVG, SEO 관련 설정을 포함함.
4. **`languages.toml`**
    - 다국어 지원을 위한 설정 파일로, 다국어 사이트를 구축할 때 언어별 정보를 정의함.
5. **`menus.toml`**
    - 웹사이트 메뉴 구성을 정의하는 파일로, 각 메뉴는 weight 값을 조정하여 표시 순서를 변경할 수 있음.
        - `[[main]]`: 메인 메뉴를 정의함.
        - `[[<identifier명>]]`: 메인 메뉴에 속하는 서브 메뉴를 정의하며, 왼쪽 사이드바에서 서브 메뉴 콘텐츠를 정렬하는 데 사용됨.


#### **`content/`**

- 콘텐츠 파일을 저장하는 디렉터리로, Markdown 형식(`.md`)의 페이지와 게시물이 포함됨.


#### **`i18n/`** (현재 구현되지 않음)

- Hugo의 국제화(i18n) 기능을 지원하기 위한 번역 데이터 파일을 저장하며, 다국어 사이트 구현 시 사용됨.


#### **`layouts/`**

- Doks 템플릿에 프로젝트 전용 기능을 추가하는 디렉터리로, 내비게이션 weight(순서) 지원과 서브 메뉴별 템플릿 정의를 포함함.


#### **`.gitignore`**

- Hugo 빌드 결과물과 불필요한 파일을 형상 관리에서 제외하기 위해 사용됨. 예: `public/`, `node_modules/` 등.# 프로젝트 구성

#### **`.github/workflows/main.yml`**
- OPMATE.GITHUB.IO 가 빌드되고 배포되는 Git Actions 워크플로 파일
- `hugo` 표준 파일에 따르며,  최신 `ubuntu`, `hugo`, `node` 기반으로 빌드됨.
- 빌드 시 `hugo_extended` 바이너리를 사용하고, Go 커스텀 모듈을 사용하지 않으므로 `go` 사용 X


#### **`assets/`**

- JavaScript, SCSS 등의 자산 파일을 저장하는 디렉터리로, Hugo의 Pipe 기능을 통해 빌드되거나 처리된 뒤 `static/` 디렉터리에 복사됨.
- 예: `opmate.github.io`에서는 파비콘, 이미지, 커스텀 SCSS 파일이 포함됨.


#### **`static/`**

- 처리되지 않은 정적 자산(폰트, 파비콘, PDF 등)을 저장하며, 빌드 시 `public/` 디렉터리로 그대로 복사됨.


#### **`config/`**

- Hugo의 구성 파일을 저장하는 디렉터리.

1. **`config/_default/hugo.toml`**
    - Hugo 사이트의 전반적인 설정 파일로, 사이트 제목, 베이스 URL, 테마, 메뉴 구성을 정의함.
2. **`config/_default/module.toml`**
    - Hugo의 마운트 설정 파일로, 프로젝트에서 사용되는 모듈과 리소스의 경로를 정의함.
3. **`config/_default/params.toml`**
    - Doks + Thulite 통합 설정 파일로, 이미지 처리, 인라인 SVG, SEO 관련 설정을 포함함.
4. **`languages.toml`**
    - 다국어 지원을 위한 설정 파일로, 다국어 사이트를 구축할 때 언어별 정보를 정의함.
5. **`menus.toml`**
    - 웹사이트 메뉴 구성을 정의하는 파일로, 각 메뉴는 weight 값을 조정하여 표시 순서를 변경할 수 있음.
        - `[[main]]`: 메인 메뉴를 정의함.
        - `[[<identifier명>]]`: 메인 메뉴에 속하는 서브 메뉴를 정의하며, 왼쪽 사이드바에서 서브 메뉴 콘텐츠를 정렬하는 데 사용됨.


#### **`content/`**

- 콘텐츠 파일을 저장하는 디렉터리로, Markdown 형식(`.md`)의 페이지와 게시물이 포함됨.


#### **`i18n/`** (현재 구현되지 않음)

- Hugo의 국제화(i18n) 기능을 지원하기 위한 번역 데이터 파일을 저장하며, 다국어 사이트 구현 시 사용됨.


#### **`layouts/`**

- Doks 템플릿에 프로젝트 전용 기능을 추가하는 디렉터리로, 내비게이션 weight(순서) 지원과 서브 메뉴별 템플릿 정의를 포함함.


#### **`.gitignore`**

- Hugo 빌드 결과물과 불필요한 파일을 형상 관리에서 제외하기 위해 사용됨. 예: `public/`, `node_modules/` 등.

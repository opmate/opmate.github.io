# [OPMATE.GITHUB.IO](https://OPMATE.GITHUB.IO)

IT 인프라 운영 자동화 플랫폼, OPMATE



### 📚 프로젝트 가이드

##### [-> 컨텐츠 작성법](README/contents.md)
##### [-> 로컬 테스트 환경 구축](README/testenv.md)


### 프로젝트 구성
```
OPMATE.GITHUB.IO/
├── .github/
│   └── workflows/
│       └── main.yml            # GitHub Actions 배포 워크플로 파일
├── assets/                     # JavaScript, SCSS 등의 자산 파일 저장
│   ├── js/                     # JavaScript 파일 디렉터리
│   ├── scss/                   # SCSS 파일 디렉터리
│   └── images/                 # 이미지 파일 디렉터리
├── static/                     # 처리되지 않은 정적 자산 저장
│   ├── fonts/                  # 폰트 파일 디렉터리
│   ├── favicon.ico             # 파비콘 파일
│   └── docs/                   # PDF 등 기타 정적 파일 디렉터리
├── config/                     # Hugo 구성 파일 디렉터리
│   └── _default/
│       ├── hugo.toml          # HUGO 설정 파일
│       ├── module.toml        # 모듈 설정 파일
│       ├── params.toml        # DOKS, THULITE 관련 설정 파일
│       ├── languages.toml     # 다국어 지원 설정 파일
│       └── menus.toml         # 메뉴 및 서브메뉴 설정 파일, WEIGHT를 조정하여 메뉴 표시 순서 조정
├── content/                    # 콘텐츠 파일 저장
│   ├── v2/                    # OPMATE V2.0 컨텐츠
│   ├── v11/                   # OPMATE V1.1 컨텐츠
│   ├── v10/                   # OPMATE V1.0 컨텐츠
│   └── index.md               # 홈페이지 Markdown
├── i18n/                       # 국제화 번역 데이터 (현재 미구현)
├── layouts/                    # Hugo 템플릿 디렉터리
│   ├── _default/              # 기본 레이아웃 템플릿 (
│   ├── partials/              # 재사용 가능한 템플릿 조각
│   └── shortcodes/            # Doks Shortcode 정의
├── public/                     # Hugo 빌드 결과물 (배포용 정적 파일)
├── README/                     # GITHUB README 디렉터리
└── .gitignore                  # 형상 관리에서 제외할 파일 정의
```

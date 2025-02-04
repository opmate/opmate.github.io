## 로컬 테스트 환경 구축(RHEL 기준)

> [!TIP]
> 윈도우 설치 시 인스톨러로 `nodejs`, `go`를 설치 한 뒤
> Hugo v0.141.0 윈도우 버전을 받아 설치 (https://github.com/gohugoio/hugo/releases/tag/v0.141.0)

#### 1. `nodejs` 설치
https://nodejs.org/ko/download
```

# nvm 다운로드 및 설치:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Node.js 다운로드 및 설치:
nvm install 22

# Node.js 버전 확인:
node -v # "v22.13.0"가 출력되어야 합니다.
nvm current # "v22.13.0"가 출력되어야 합니다.

npm 버전 확인:
npm -v # 10.9.2가 출력되어야 합니다.

```

#### 2. `go` 설치
```
wget https://go.dev/dl/go1.23.5.linux-amd64.tar.gz

sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.23.5.linux-amd64.tar.gz

export PATH=$PATH:/usr/local/go/bin

vi ~/.bashrc

## bashrc 내용 추가
export PATH=$PATH:/usr/local/go/bin

go version

```


#### 3. `hugo-extended` 설치
```
wget https://github.com/gohugoio/hugo/releases/download/v0.141.0/hugo_extended_0.141.0_linux-amd64.tar.gz

mkdir hugo

tar -C ~/hugo -xzf hugo_extended_0.141.0_linux-amd64.tar.gz

export PATH=$PATH:~/hugo

```

#### 4. `opmate.github.io` 레포지토리 클론 및 `hugo` 서버 실행
```
git clone https://github.com/opmate/opmate.github.io.git

cd opmate.github.io

hugo server -D

# 웹 브라우저 localhost:1313으로 접속

```



### `node module` 업데이트 방법 (`doks`, `thulite` 의존성)


```
sudo apt-get install nodejs

sudo npm install thulite@latest @thulite/images@latest @thulite/seo@latest

sudo npm install @thulite/doks-core@latest

```



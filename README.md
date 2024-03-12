# 초기 시작 방법

-   처음 파일을 받은 후 npm install 실행

# 1.

-   webpack 및 typeScript 초기 설정 완료
-   react 초기 설정(react-router-dom, redux, styled-components, dotenv)
-   svg, png, jpg, font 설정 추가
-   reset.css, serRem.css 추가

# 2.

-   font가 안불러와지는 문제 해결
-   build 파일 동작 확인(with serve)

# 3.

-   redux dux 패턴 적용

# 4.

-   metmask 지갑 연동
-   kaikas 지갑 연동

# 5.

-   useMediaQuery 연결(react-responsive)
-   eslint, react-eslint, typescript-eslint 설정

# 6.

-   js버전 및 node 충돌 해결
-   api 커스텀 훅 추가(삭제)
-   사용법 :

    ```
    const [result, loading, error] = useApi(
    `endpoint`,
    "get",
    ""
    );

    if (loading) {
    return <div>로딩중...</div>;
    }
    if (error) {
    navigate("/");
    }
    ```

# 7.

-   react-cookie 테스트
-   setRem 기준 변경

# 8.

-   apiClent 모듈 추가
-   useScroll 커스텀 훅 추가

# 9.
- yarn start


--------------------------

TESTBED-FRONT


TESTBED - React TypeScript

* 환경 설정
- Web pack 파일
    > webpack.common.js : webpack 공통 설정
    > webpack.dev.js : webpack 개발모드 설정
    > webpack.prod.js : webpack 빌드모드 설정

- Webpack 설정
    > hash 설정
    > 최적화 설정(vendor, css 등)
    > 난독화 설정
    > babel 및 ts-loader 설정
    > 리액트 설정 및 환경변수 설정 - react 최신버전 18이지만 안정성 문제로 17버전 설치
    > postscss : crossbrowsing을 위한 자동 prefixer

- Ts.config.js : typescript 환경설정
- .eslintrc.json : eslint 설정

- 설치한 모듈
    > babel
    > react 및 typescript 버전 react
    > axios(api 통신 모듈)
    > react-router-dom(react 페이지 이동 모듈)
    > redux(react 상태 관리 모듈)
    > styled-components(컴포넌트 스타일링 모듈)
    > react-cookie(react 쿠키 사용 모듈)
    > react-responsive(react 반응형 작업 모듈)

* 폴더구조
- Dist : 빌드 결과물
- node_modules : 설치한 모듈 파일
- Public : index.html
- Src
     > assets : image, icon, font
     > components : 여러 페이지에서 공통으로 사용하는 컴포넌트 모아두는 곳
     > modules : 중복으로 사용되는 함수 및 hooks들을 모아둔 곳
     > pages : 페이지 별로 디렉토리를 만들어 페이지 구현
     > reduces : redux 파일 디렉토리
     > routes : 라우팅 설정 파일
     > types : 타입스크립트 타입 지정(custom.d.ts)

* 테스트 파일
- apiClient.ts : api 활용 모듈
- useScroll.ys : 현재 스크롤 위치 커스텀 hook
- Index.ts : reducer를 모아주는 파일
- nowMediaQueryRedux.ts : 반응형을 위한 현재 기기 정보

* 실행 방법
- Git clone
- Npm install 실행
- Npm run start

* 명령어
- Npm run start : 개발 모드 실행
- Npm run build : build 파일 생성
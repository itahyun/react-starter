# React Starter Kit

새 React 프로젝트를 시작할 때 보일러플레이트 세팅 시간을 없애기 위한 베이스 템플릿입니다.
클론 후 불필요한 데모 페이지를 지우고 원하는 기능만 바로 개발하세요.

## 기술 스택

- **Vite v8** — 빠른 개발 서버와 HMR, 프로덕션 빌드 최적화
- **React v19 + TypeScript** — 최신 LTS, `any` 타입 금지로 타입 안전성 확보
- **Tailwind CSS v4** — 유틸리티 클래스 기반 스타일링, 반응형 필수 적용
- **React Router v7** — 선언적 클라이언트 사이드 라우팅, 중첩 레이아웃 지원
- **Zustand v5** — 보일러플레이트 없는 경량 전역 상태관리
- **React Hook Form + Zod** — 성능 최적화된 폼 관리, 스키마 기반 유효성 검사

## 주요 기능

- **라우팅** — `/`, `/counter`, `/form`, `/about`, `*`(404) 페이지 구성 완료
- **전역 상태관리** — Zustand 카운터 예제 (페이지 이동해도 상태 유지)
- **폼 유효성 검사** — Zod 스키마로 타입 안전하게 검사, 에러 메시지 표시
- **재사용 UI 컴포넌트** — `Button`, `Badge` (variant/size prop 지원)
- **커스텀 훅** — `useLocalStorage`
- **경로 alias** — `@/` → `src/` 단축 경로

## 폴더 구조

```
src/
├── components/
│   └── ui/          # 재사용 가능한 UI 컴포넌트
├── hooks/           # 커스텀 훅
├── layouts/         # 레이아웃 컴포넌트
├── pages/           # 페이지 컴포넌트
├── router/          # 라우터 설정
├── store/           # Zustand 스토어
└── types/           # TypeScript 타입 정의
```

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

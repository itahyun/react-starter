페이지 컴포넌트를 생성하고 라우터에 등록하세요.

## 입력 형식

`$ARGUMENTS` 형식: `{PageName} {/route-path}`

예시: `DashboardPage /dashboard`

## 규칙

- 페이지 컴포넌트 생성 경로: `src/pages/{PageName}.tsx`
- 라우터 파일: `src/router/index.tsx`
- 들여쓰기: 2칸, `any` 타입 금지
- 스타일: Tailwind CSS만 사용
- 컴포넌트는 named export 사용 (`export function`)

## 페이지 파일 구조

기존 페이지(`src/pages/HomePage.tsx`)와 동일한 패턴을 따르세요:

```tsx
export function {PageName}() {
  return (
    <div className="space-y-8 py-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold text-gray-900">{페이지 제목}</h1>
        <p className="text-gray-600">{페이지 설명}</p>
      </div>
    </div>
  )
}
```

## 라우터 등록

`src/router/index.tsx`를 수정해 새 페이지를 등록하세요.

현재 라우터 구조:
```tsx
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
// ... 기존 import

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // ... 기존 라우트
      { path: '{route-path}', element: <{PageName} /> }, // 여기에 추가
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
```

## 작업 순서

1. `src/pages/{PageName}.tsx` 파일 생성
2. `src/router/index.tsx`에 import 추가 및 라우트 등록
3. 생성한 파일과 등록된 경로를 한 줄로 요약해서 알려주기

주어진 이름으로 React 컴포넌트를 생성하세요.

## 규칙

- 컴포넌트 이름: `$ARGUMENTS` (PascalCase 유지)
- 생성 경로: `src/components/$ARGUMENTS.tsx`
- 들여쓰기: 2칸
- 스타일: Tailwind CSS만 사용 (별도 CSS 파일 금지)
- `any` 타입 사용 금지
- Props가 없어도 `interface ${ARGUMENTS}Props` 는 반드시 선언

## 생성할 파일 구조

```tsx
interface {컴포넌트명}Props {
  // props 정의
}

export function {컴포넌트명}({ }: {컴포넌트명}Props) {
  return (
    <div>
      {/* 컴포넌트 내용 */}
    </div>
  )
}
```

## 추가 작업

1. `src/components/` 디렉토리가 없으면 생성
2. 기존 컴포넌트 파일이 있으면 덮어쓰기 전에 확인
3. 컴포넌트 생성 후 어떤 파일을 만들었는지 한 줄로 알려주기

React Hook Form + Zod 기반 폼 컴포넌트를 생성하세요.

## 입력 형식

`$ARGUMENTS` 형식: `{FormName} {field1,field2,...}`

예시: `LoginForm email,password`

## 규칙

- 생성 경로: `src/components/forms/{FormName}.tsx`
- `src/components/forms/` 디렉토리가 없으면 생성
- 들여쓰기: 2칸, `any` 타입 금지
- 스타일: Tailwind CSS만 사용
- named export 사용 (`export function`)

## 필드 타입 추론 규칙

필드 이름을 보고 적절한 Zod 타입과 input type을 자동으로 결정하세요:

| 필드명 패턴 | Zod 타입 | input type |
|------------|----------|------------|
| `email` | `z.string().email(...)` | `email` |
| `password`, `confirmPassword` | `z.string().min(8, ...)` | `password` |
| `age`, `count`, `price` 등 숫자성 | `z.number(...)` | `number` |
| `message`, `content`, `description` | `z.string().min(10, ...)` | `textarea` |
| 그 외 | `z.string().min(1, ...)` | `text` |

## 생성할 파일 구조

기존 폼(`src/pages/FormPage.tsx`)과 동일한 패턴을 따르세요:

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  // 필드별 스키마
})

type FormValues = z.infer<typeof schema>

interface {FormName}Props {
  onSubmit?: (data: FormValues) => void | Promise<void>
}

export function {FormName}({ onSubmit: onSubmitProp }: {FormName}Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    await onSubmitProp?.(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* 필드들 */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? '제출 중...' : '제출하기'}
      </button>
    </form>
  )
}

// Field, inputClass 헬퍼는 FormPage.tsx와 동일한 패턴으로 파일 내에 포함
```

## 작업 순서

1. `src/components/forms/` 디렉토리 없으면 생성
2. `src/components/forms/{FormName}.tsx` 파일 생성
3. 생성된 스키마 필드 목록과 파일 경로를 한 줄로 요약해서 알려주기

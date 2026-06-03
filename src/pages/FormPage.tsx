import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

const schema = z.object({
  name: z.string().min(2, '이름은 최소 2자 이상이어야 합니다'),
  email: z.string().email('올바른 이메일 형식을 입력해주세요'),
  age: z
    .number({ error: '숫자를 입력해주세요' })
    .min(1, '나이는 1 이상이어야 합니다')
    .max(120, '올바른 나이를 입력해주세요'),
  message: z.string().min(10, '메시지는 최소 10자 이상이어야 합니다'),
})

type FormValues = z.infer<typeof schema>

export function FormPage() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    setSubmitted(data)
    reset()
  }

  return (
    <div className="mx-auto max-w-lg space-y-8 py-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold text-gray-900">폼 유효성 검사</h1>
        <p className="text-gray-600">React Hook Form + Zod 연동 예제입니다.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <Field label="이름" error={errors.name?.message}>
          <input
            {...register('name')}
            placeholder="홍길동"
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field label="이메일" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder="example@email.com"
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field label="나이" error={errors.age?.message}>
          <input
            {...register('age', { valueAsNumber: true })}
            type="number"
            placeholder="25"
            className={inputClass(!!errors.age)}
          />
        </Field>

        <Field label="메시지" error={errors.message?.message}>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="10자 이상 입력해주세요"
            className={inputClass(!!errors.message)}
          />
        </Field>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? '제출 중...' : '제출하기'}
        </Button>
      </form>

      {submitted && (
        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <p className="mb-3 font-semibold text-green-800">제출 완료!</p>
          <pre className="overflow-x-auto text-sm text-green-700">
            {JSON.stringify(submitted, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors focus:ring-2 focus:ring-blue-500 ${
    hasError
      ? 'border-red-400 bg-red-50 focus:ring-red-400'
      : 'border-gray-300 bg-white focus:border-blue-400'
  }`
}

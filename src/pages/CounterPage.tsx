import { useCounterStore } from '@/store/useCounterStore'
import { Button } from '@/components/ui/Button'

export function CounterPage() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="mx-auto max-w-md space-y-8 py-8">
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Zustand 카운터</h1>
        <p className="text-gray-600">전역 상태관리 예제입니다.</p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">현재 값</p>
        <p
          className={`text-8xl font-bold tabular-nums transition-colors ${
            count > 0 ? 'text-blue-600' : count < 0 ? 'text-red-500' : 'text-gray-900'
          }`}
        >
          {count}
        </p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1" onClick={decrement}>
          − 감소
        </Button>
        <Button variant="secondary" onClick={reset}>
          초기화
        </Button>
        <Button className="flex-1" onClick={increment}>
          + 증가
        </Button>
      </div>

      <div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-700">
        <strong>Zustand 특징:</strong> 페이지를 이동해도 상태가 유지됩니다.
        다른 페이지로 이동 후 돌아와 확인해보세요.
      </div>
    </div>
  )
}

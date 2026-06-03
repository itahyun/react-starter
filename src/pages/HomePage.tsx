import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const STACK_ITEMS = [
  { label: 'Vite', color: 'default' as const, description: '빠른 빌드 도구' },
  { label: 'React', color: 'success' as const, description: '최신 LTS' },
  { label: 'TypeScript', color: 'default' as const, description: '타입 안전성' },
  { label: 'Tailwind CSS', color: 'success' as const, description: 'v4 유틸리티 CSS' },
  { label: 'React Router', color: 'warning' as const, description: 'v7 라우팅' },
  { label: 'Zustand', color: 'warning' as const, description: '경량 상태관리' },
  { label: 'React Hook Form', color: 'success' as const, description: '성능 최적화 폼 관리' },
  { label: 'Zod', color: 'default' as const, description: '스키마 기반 유효성 검사' },
]

export function HomePage() {
  return (
    <div className="space-y-12">
      <section className="py-12 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">
          React Starter Kit
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Vite + React + TypeScript + Tailwind CSS + React Router + Zustand으로
          구성된 프론트엔드 스타터 킷입니다.
        </p>
        <div className="flex justify-center gap-3">
          <Link to="/counter">
            <Button size="lg">카운터 데모 보기</Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline">소개 페이지</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">기술 스택</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {STACK_ITEMS.map(({ label, color, description }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-2 flex items-center gap-2">
                <Badge variant={color}>{label}</Badge>
              </div>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">폴더 구조</h2>
        <pre className="overflow-x-auto rounded-xl bg-gray-900 p-6 text-sm text-gray-100">
{`src/
├── components/
│   └── ui/          # 재사용 가능한 UI 컴포넌트
├── hooks/           # 커스텀 훅
├── layouts/         # 레이아웃 컴포넌트
├── pages/           # 페이지 컴포넌트
├── router/          # 라우터 설정
├── store/           # Zustand 스토어
└── types/           # TypeScript 타입 정의`}
        </pre>
      </section>
    </div>
  )
}

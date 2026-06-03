import { Button } from '@/components/ui/Button'

export function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900">소개</h1>

      <div className="space-y-4 text-gray-700">
        <p>
          이 스타터 킷은 빠르게 React 프로젝트를 시작할 수 있도록 기본
          설정을 제공합니다.
        </p>
        <ul className="ml-4 list-disc space-y-2">
          <li>
            <strong>Vite</strong> — 빠른 개발 서버와 HMR(Hot Module Replacement)
          </li>
          <li>
            <strong>React Router v7</strong> — 선언적 클라이언트 사이드 라우팅
          </li>
          <li>
            <strong>Zustand</strong> — 보일러플레이트 없는 경량 전역 상태관리
          </li>
          <li>
            <strong>Tailwind CSS v4</strong> — 유틸리티 우선 CSS 프레임워크
          </li>
          <li>
            <strong>TypeScript</strong> — 컴파일 타임 타입 안전성
          </li>
        </ul>
      </div>

      <div className="flex gap-3">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline">Vite 문서</Button>
        </a>
        <a
          href="https://reactrouter.com"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline">React Router 문서</Button>
        </a>
        <a
          href="https://zustand.docs.pmnd.rs"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline">Zustand 문서</Button>
        </a>
      </div>
    </div>
  )
}

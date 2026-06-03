import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="mb-4 text-8xl font-bold text-gray-200">404</p>
      <h1 className="mb-2 text-2xl font-bold text-gray-900">페이지를 찾을 수 없습니다</h1>
      <p className="mb-8 text-gray-600">요청하신 페이지가 존재하지 않습니다.</p>
      <Link to="/">
        <Button>홈으로 돌아가기</Button>
      </Link>
    </div>
  )
}

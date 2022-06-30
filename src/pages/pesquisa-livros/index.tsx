import { useRouter } from 'next/router'
import { PesquisaLivros } from '../../components/pages/PesquisaLivros'

export default function Home() {
  const router = useRouter()
  const { categoria, palavra } = router.query

  return (
    <PesquisaLivros
      categoria={categoria as string}
      palavra={palavra as string}
    />
  )
}

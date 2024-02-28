import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession()
  return (
    <>
      <div>
        {JSON.stringify(session?.user)}
        {session ? (
          JSON.stringify(session?.user)
        ) : (
          <div>
            Nao logado, <Link href="api/auth/signin">clique para logar</Link>
          </div>
        )}
      </div>
    </>
  )
}

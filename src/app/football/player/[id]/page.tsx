import { notFound } from 'next/navigation'
import { PlayerHeader } from 'components/football'
import { mockPlayer } from 'lib/football/mock'


export function generateStaticParams() {
  return [ { id: mockPlayer.id } ]
}

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  if (id !== mockPlayer.id) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <PlayerHeader player={mockPlayer} />
    </main>
  )
}

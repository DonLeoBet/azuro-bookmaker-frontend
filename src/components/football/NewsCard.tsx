import type { NewsItem } from 'lib/football/types'


interface NewsCardProps {
  item: NewsItem;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  })
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="ft-card flex flex-col p-4 transition-[background-color] hover:bg-[var(--ft-hover)]">
      <div className="mb-3 flex items-center gap-2">
        <span className="ft-chip bg-[var(--ft-primary-soft)] text-[var(--ft-primary)]">
          {item.category}
        </span>
        <span className="text-xs text-[var(--ft-dim)]">{fmtDate(item.publishedAt)}</span>
      </div>
      <h3 className="text-base font-bold leading-tight text-[var(--ft-text)]">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--ft-muted)] line-clamp-2">
        {item.excerpt}
      </p>
      <p className="mt-3 text-xs text-[var(--ft-dim)]">By {item.author}</p>
    </article>
  )
}

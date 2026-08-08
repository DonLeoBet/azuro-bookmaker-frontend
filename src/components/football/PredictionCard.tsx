import type { Prediction } from 'lib/football/types'


interface PredictionCardProps {
  prediction: Prediction;
}

export function PredictionCard({ prediction }: PredictionCardProps) {
  const { match, tip, confidence, reasoning } = prediction
  const barWidth = `${confidence}%`

  return (
    <div className="ft-card p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs text-[var(--ft-muted)]">
          {match.home.shortName} vs {match.away.shortName}
        </span>
        <span className="ft-chip bg-[var(--ft-gold)]/10 text-[var(--ft-gold)]">
          {confidence}% confidence
        </span>
      </div>
      <p className="text-base font-bold text-[var(--ft-text)]">{tip}</p>
      <p className="mt-2 text-sm text-[var(--ft-muted)]">{reasoning}</p>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[var(--ft-bg)]">
        <div
          className="h-full rounded-full bg-[var(--ft-primary)]"
          style={{ width: barWidth }}
        />
      </div>
    </div>
  )
}

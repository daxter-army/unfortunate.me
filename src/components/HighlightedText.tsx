type HighlightedTextProps = {
  text: string
  term: string
}

export function HighlightedText({ text, term }: HighlightedTextProps) {
  if (!term) return text

  const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pieces = text.split(new RegExp(`(${escapedTerm})`, 'gi'))

  return (
    <>
      {pieces.map((piece, index) => (
        <span key={`${piece}-${index}`}>
          {piece.toLowerCase() === term.toLowerCase() ? <mark>{piece}</mark> : piece}
        </span>
      ))}
    </>
  )
}

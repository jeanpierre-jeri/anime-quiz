interface Props {
  className?: string
}

export function SquareDecoration ({ className = '' }: Props) {
  return (
    <div className={`w-[70rem] h-[57rem] bg-primary/70 rounded-3xl rotate-[-65.14deg] absolute ${className}`} />
  )
};

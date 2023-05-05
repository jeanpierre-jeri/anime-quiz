interface Props {
  children: React.ReactNode
  onClick?: () => void
  disabled: boolean
}

export function Button ({ children, onClick, disabled }: Props) {
  return (
    <button disabled={disabled} onClick={onClick} type='button' className={`bg-yellow font-bold text-white text-lg px-9 py-4 rounded-xl transition-colors ${disabled ? 'opacity-70' : 'hover:bg-amber-600'}`}>
      {children}
    </button>
  )
};

interface Props {
  children: React.ReactNode
  onClick?: () => void
  disabled: boolean
}

export function ButtonOutline ({ children, onClick, disabled }: Props) {
  return (
    <button disabled={disabled} onClick={onClick} type='button' className={`font-bold mx-auto w-fit text-lg text-[#1D355D] py-4 px-16 border-2 border-[#1D355D] rounded-xl mt-20 block ${disabled ? 'opacity-70' : 'hover:bg-[#1D355D] hover:text-white'} transition-colors`}>
      {children}
    </button>
  )
};

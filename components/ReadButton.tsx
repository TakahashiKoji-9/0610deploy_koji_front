type Props = {
  onClick: () => void
}

export default function ReadButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      読み込み
    </button>
  )
}

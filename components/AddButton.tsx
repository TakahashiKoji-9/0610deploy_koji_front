type Props = {
  onClick: () => void
}

export default function AddButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="bg-green-500 text-white px-4 py-2 rounded mt-2">
      追加
    </button>
  )
}

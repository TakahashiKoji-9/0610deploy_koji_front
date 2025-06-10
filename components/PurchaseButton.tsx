type Props = {
  onClick: () => void
}

export default function PurchaseButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="bg-red-500 text-white px-4 py-2 mt-4 rounded w-full">
      購入
    </button>
  )
}

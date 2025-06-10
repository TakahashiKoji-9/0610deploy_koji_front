type Item = {
  prd_id: number
  code: string
  name: string
  price: number
}

type Props = {
  items: Item[]
}

export default function PurchaseList({ items }: Props) {
  const total = items.reduce((sum, item) => sum + item.price, 0)
  return (
    <div className="border p-4 w-96 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold mb-2">購入リスト</h2>
        <ul className="space-y-1">
          {items.map((item, idx) => (
            <li key={idx}>
              {item.name} - ¥{item.price.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 font-bold">合計: ¥{total.toLocaleString()}</div>
    </div>
  )
}

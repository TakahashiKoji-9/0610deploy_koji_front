type Props = {
  name: string
  price: number
  notFound?: boolean
}

export default function ProductInfo({ name, price, notFound }: Props) {
  return (
    <div className="border p-4 space-y-2 w-80">
      {notFound ? (
        <div className="text-red-600 font-bold">商品がマスタ未登録です</div>
      ) : (
        <>
          <div><strong>商品名:</strong> {name}</div>
          <div><strong>価格:</strong> ¥{price.toLocaleString()}</div>
        </>
      )}
    </div>
  )
}

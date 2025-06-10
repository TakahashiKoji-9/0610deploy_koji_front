type Props = {
  value: string
  onChange: (val: string) => void
}

export default function CodeInput({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="商品コードを入力"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-3 py-2 w-64"
    />
  )
}

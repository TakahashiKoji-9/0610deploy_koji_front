'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import CodeInput from '../components/CodeInput'
import ReadButton from '../components/ReadButton'
import ProductInfo from '../components/ProductInfo'
import AddButton from '../components/AddButton'
import PurchaseList from '../components/PurchaseList'
import PurchaseButton from '../components/PurchaseButton'

type Item = {
  prd_id: number
  code: string
  name: string
  price: number
}

export default function Page() {
  const [code, setCode] = useState('')
  const [items, setItems] = useState<Item[]>([])
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [cart, setCart] = useState<Item[]>([])

  const fetchItems = async () => {
    const res = await axios.get<Item[]>('NEXT_PUBLIC_API_ENDPOINT/items')
    setItems(res.data)
  }

  const handleRead = async () => {
    try {
      const res = await axios.get<Item>(`NEXT_PUBLIC_API_ENDPOINT/items/${code}`)
      setSelectedItem(res.data)
    } catch {
      setSelectedItem(null)
    }
  }


  const handleAdd = () => {
    if (selectedItem) {
      setCart([...cart, selectedItem])
      setCode('')
      setSelectedItem(null)
    }
  }

  const handlePurchase = async () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    await axios.post('NEXT_PUBLIC_API_ENDPOINT/purchase', {
      emp_cd: 'EMP001',
      store_cd: 'S001',
      pos_no: '001',
      total_amt: total,
      details: cart.map((item) => ({
        prd_id: item.prd_id,
        prd_code: item.code,
        prd_name: item.name,
        prd_price: item.price,
      })),
    })
    alert(`購入が確定されました。合計金額（税込）: ¥${total.toLocaleString()}`)
    setCart([])
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <main className="p-6 flex space-x-8">
      <div className="space-y-4">
        <div className="flex space-x-2">
          <CodeInput value={code} onChange={setCode} />
          <ReadButton onClick={handleRead} />
        </div>
        {selectedItem ? (
          <>
            <ProductInfo name={selectedItem.name} price={selectedItem.price} />
            <AddButton onClick={handleAdd} />
          </>
        ) : code && (
          <ProductInfo name="" price={0} notFound />
        )}
      </div>

      <div className="flex flex-col">
        <PurchaseList items={cart} />
        <PurchaseButton onClick={handlePurchase} />
      </div>
    </main>
  )
}
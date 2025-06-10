// lib/api.ts
export async function fetchProduct(code: string) {
  const res = await fetch(`NEXT_PUBLIC_API_ENDPOINT/items?code=${code}`);
  if (!res.ok) throw new Error('商品が見つかりませんでした');
  return res.json();
}

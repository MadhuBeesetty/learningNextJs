import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <>
    <h1>hello world</h1>
    <Link href="/users">Users</Link>
    <ProductCard />
    </>
  )
}

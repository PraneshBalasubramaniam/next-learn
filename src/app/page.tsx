import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>Hello World</div>
      <Link href='/users'> USERS </Link>
      <ProductCard />
    </div>
  );
}

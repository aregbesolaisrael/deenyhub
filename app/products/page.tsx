import type { Metadata } from 'next';
import ProductsPage from '../components/products/ProductsPage';

export const metadata: Metadata = {
  title: 'Products — DeenyGlobalHub | Organic Commodities & General Supplies',
  description: 'Browse DeenyGlobalHub\'s full catalogue of organic agricultural commodities, natural foodstuffs, and essential general supplies available for global export.',
};

export default function ProductsRoute() {
  return (
    <main className="w-full bg-white">
      <ProductsPage />
    </main>
  );
}

import type { Metadata } from 'next';
import ProductsPage from '../components/products/ProductsPage';

export const metadata: Metadata = {
  title: 'Products — DennyGlobalHub | Organic Commodities & General Supplies',
  description: 'Browse DennyGlobalHub\'s full catalogue of organic agricultural commodities, natural foodstuffs, and essential general supplies available for global export.',
};

export default function ProductsRoute() {
  return (
    <main className="w-full bg-white">
      <ProductsPage />
    </main>
  );
}

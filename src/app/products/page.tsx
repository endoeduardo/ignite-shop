import { Stripe } from "stripe";
import { ProductCard } from "./components/ProductCard";
import Link  from "next/link";

export default async function ProductsPage() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const products = await stripe.products.list({expand: ['data.default_price']});
  console.log(products.data);
  
  // console.log(products);
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.data.map((product) => (
        <Link href={`/shop/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}

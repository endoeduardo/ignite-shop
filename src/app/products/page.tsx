import { Stripe } from "stripe";
import { ProductCard } from "./components/ProductCard";

export default async function ProductsPage() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const products = await stripe.products.list();
  // const productTest = await stripe.products.retrieve('prod_SlABhJcIYCVqzC');
  // console.log(productTest);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.data.map((product) => (
        <ProductCard key={product.id} />
      ))}
    </div>
  );
}

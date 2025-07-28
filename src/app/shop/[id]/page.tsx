import Stripe from 'stripe';

export default async function ProductPage({ params }: {params: Promise<{ id: string }>}) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const product = await stripe.products.retrieve((await params).id);

    return (
        <div className="flex flex-col items-center">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <img src={product.images[0]} alt={product.name} />
        <button>Shop Now</button>
        </div>
    );
}
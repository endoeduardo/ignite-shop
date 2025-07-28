

interface Product {
    product: {
        id: string;
        name: string;
        description: string | null;
        images: string[];
        default_price: {
            id: string;
            unit_amount: number;
            currency: string;
        };
    };
}

export function ProductCard( product: Product ) {
    // console.log(product)
    // console.log(product.name)
    return (
        <>
            <div className="border p-4 rounded-lg shadow-md">
                <h2>{product.product.name}</h2>
                <img src={product.product.images[0]} alt="Product Image" width={200} height={200} />
                <p>{product.product.description}</p>
                <span>{product.product.default_price.unit_amount}</span>
            </div>
        </>
    )
}
export function ProductCard() {
    return (
        <>
            <div className="border p-4 rounded-lg shadow-md">
                <h2>Product Name</h2>
                <img src="" alt="Product Image" width={200} height={200} />
                <p>Product Description</p>
                <span>$99.99</span>
            </div>
        </>
    )
}
import Product from "@/models/Product.model";

const ProductItem = (props: Product) => {
    return (
        <div>
            <div>
                <h3>Name of item: {props.name}</h3>
                <h3>Price of item: {props.price}</h3>
            </div>
        </div>
    );
};

export default ProductItem;

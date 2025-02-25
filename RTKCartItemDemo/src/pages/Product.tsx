import ProductItem from "@/components/ProductItem";
import productDatas from "@/data/products.json";

// redux
import {useDispatch} from "react-redux";
import {addToCart} from "@/redux/slices/cartSlice";
import ProductType from "@/models/Product.model";

const Product = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item: ProductType) => {
        const itemGoToCart = item;
        dispatch(addToCart(itemGoToCart));
    };

    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>This is Product Page</h1>
                <div style={{display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center"}}>
                    {
                        productDatas.map(
                            (item) => {
                                return <div key={item.id} style={{border: "1px solid red"}}>
                                    <ProductItem name={item.name} price={item.price}/>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                    >Add to Cart
                                    </button>
                                </div>
                            }
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Product;

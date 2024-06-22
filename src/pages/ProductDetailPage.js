import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";


export default function ProductDetailPage() {
    return (
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </div>
    );
}
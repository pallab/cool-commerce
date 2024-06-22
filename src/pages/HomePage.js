import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";


export default function HomePage() {
    return (
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
    );
}
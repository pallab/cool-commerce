import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";


export default function HomePage() {
    return (
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
    );
}
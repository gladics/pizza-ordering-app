import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-wider">Ladics Pizza</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;

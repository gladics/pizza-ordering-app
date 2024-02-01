import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Ladics Pizza</Link>
      <SearchOrder />
      <p>Username</p>
    </div>
  );
}

export default Header;

import { useAuth } from "../../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/MyCartProvider";

function HeaderSlice() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleMain = () => {
    navigate("/mycart");
  };
  const {cartItems}=useCart()
  const location = useLocation();
  const isSpecialPage = location.pathname === "/specials";
  return (
    <div>
      {isLoggedIn && (
        <div className="bg-[#fff6f6] w-12/12 py-4">
          <div className="flex justify-between  items-center w-11/12  m-auto  ">
            <ul className="flex font-bold basis-6/12 gap-10 ">
              <li className="bg-white py-1 px-3 rounded">Hide Price</li>
              <li className="bg-white py-1 px-3 rounded">Recent</li>
              <li className="bg-white py-1 px-3 rounded">
                SHIP TO: FELIX’S BICYLE SHOP
              </li>
            </ul>
            <div>
         
              {isSpecialPage && (
                <p className="text-xs">
                  In order to receive the special price, you would need to order
                  the minimum quantity.
                </p>
              )}
            </div>

            <button
              onClick={handleMain}
              className="rounded font-bold text-white basis-2/12 bg-red-600 py-3 px-8"
            >
              My cart({cartItems.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderSlice;

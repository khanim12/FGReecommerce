import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { usePro } from "../../Context/ProductsProvider";
import { useAuth } from "../../Context/AuthProvider";
import { LuChevronUp } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { useCart } from "../../Context/MyCartProvider";
import { Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import ProductItemDetail from "./ProductItemDetail";
import { useFav } from "../../Context/FavoritesProvider";
import { useQuick } from "../../Context/QuickProvider";

function ProductItem({
  id,
  color,
  name,
  material,
  img,
  mount,
  size,
  price,
  lorem1,
  lorem2,
  lorem3,
  specialPrice
}) {
  const location = useLocation()
  const isSpecailPage=location.pathname === "/specials"
  const { addToCart } = useCart();
  const { addFavs } = useFav();
  const { addQuick } = useQuick();
  const [openAlert, setOpenAlert] = useState(false);
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleToAddFavs = () => {
    const product = { name, img, id };
    addFavs(product);
    navigate("/favorite");
  };
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showLorem, setShowLorem] = useState(false);
  const { isGridView } = usePro();
  const { isLoggedIn } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddToCart = () => {
    const product = {
      id,
      name,
      img,
      size,
      material,
      mount,
      color,
      quantity,
      price,

    };
    addToCart(product);
    setOpenAlert(true);
    const ref = { id, quantity };
    addQuick(ref, "group1");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div
      className={`flex justify-between  ${
        isGridView ? "justify-between gap-16" : "flex-col  "
      }  items-start gap-10 mb-10`}
    >
      <div
        className={`flex ${
          isGridView ? "justify-between " : "flex-col"
        } items-start gap-10 `}
      >
        <img src={img} className="w-[200px]" onClick={handleOpen} />
   

        <div className="flex flex-col items-start justify-start">
          <h4 className=" text-red-600 font-extrabold">REF#:{id}</h4>
          <h4 className="font-extrabold">{name}</h4>
          <ul
            className={`${
              isGridView ? "flex" : "hidden"
            }  flex-col list-disc items-start ml-5 gap-0 my-3	`}
          >
            <li>Size:{size}</li>
            <li>Material:{material}</li>
            <li>Mount:{mount}</li>
            <li>Color:{color}</li>
            {showLorem ? <li>Lorem ipsum dolor</li> : ""}
          </ul>
          {isGridView &&  <button
            onClick={() => setShowLorem(!showLorem)}
            className="text-red-600 font-extrabold flex items-center gap-3"
          >
            {showLorem ? (
              <>
                Hide info <IoIosArrowUp key="icon" />
              </>
            ) : (
              <>
                Show More <FaChevronDown key="icon" />
              </>
            )}
          </button> }
         
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              style,
              width: "80%",
              backgroundColor: "white",
              margin: " 30px auto",
            }}
            className="snap-y"
          >
            <ProductItemDetail
              handleClose={handleClose}
              handleToAddFavs={handleToAddFavs}
              img={img}
              price={price}
              id={id}
              name={name}
              quantity={quantity}
              handleAddToCart={handleAddToCart}
              setQuantity={setQuantity}
            />
          </Box>
        </Modal>
      </div>
      {isLoggedIn ? (
        <div
          className={`${
            isGridView ? "items-end" : "items-start"
          } flex flex-col justify-between gap-10 `}
        >
          <div
            className={`flex ${isGridView ? "items-end" : "gap-1 "} flex-col  `}
          >
            <div className="flex ">
              {isSpecailPage && (<span className="line-through block mr-3  mb-3 font-semibold">Price: ${specialPrice }st</span>)}
              <h4 className=" text-red-600 font-extrabold flex items-end">
                Price: 10.95 ea
              </h4>
              {!isGridView && <p>In stock</p>}
            </div>

            <div className={`  flex   justify-end items-end w-[100%] gap-1`}>
              <div className="border-2 w-[55%] bg-[#f0f0f0] flex items-center justify-between">
                <p className=" ">{quantity}</p>
                <div>
                  <LuChevronUp onClick={() => setQuantity(quantity + 1)} />
                  <IoChevronDownOutline
                    onClick={() => {
                      if (quantity >= 1) setQuantity(quantity - 1);
                    }}
                  />
                </div>
              </div>
              <button onClick={handleAddToCart} className="w-[90%]">
                ADD TO CART
              </button>
              <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                message={`${name.slice(0, 20)}    added to cart!`}
                action={
                  <Button color="inherit" onClick={handleCloseAlert}>
                    Close
                  </Button>
                }
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              />
            </div>
          </div>
          <div
            className={`${
              isGridView ? "flex flex-col items-end" : "grid grid-cols-2"
            }`}
          >
            <p>Min Purchase Qty:1</p>
            {isGridView && <p>In stock</p>}
            <button className="text-red-600" onClick={handleToAddFavs}>
              Add to favorite
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-end">
          <p className="text-base">To be able to view price</p>
          <button
            className="text-red-600 border-red-700 border-[1px] px-3 py-1 rounded mt-2 font-bold"
            onClick={() => navigate("/login")}
          >
            LOG IN
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductItem;

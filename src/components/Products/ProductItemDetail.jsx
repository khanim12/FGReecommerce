import React from "react";
import { useOperation } from "../../Context/ProductOperation";
import slider from "../../assets/images/slider.png";
import vector from "../../assets/images/Vector.png";
import noti from "../../assets/images/noti.png";
import info from "../../assets/images/info.png";
import insta from "../../assets/images/instagram 1.png";
import fb from "../../assets/images/facebook 1.png";
import { LuChevronUp } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ProductItemDetail({
  img,
  id,
  name,
  price,
  quantity,
  handleAddToCart,
  setQuantity,
  handleClose,
  handleToAddFavs,
}) {
  const { selectedCategory, selectedSubCategory } = useOperation();
  const navigate = useNavigate();

  const detailData = [
    [
      {
        name: "Use",
        desc: "Headset",
      },

      {
        name: "Fits",
        desc: 1,
      },
      {
        name: "Ball Size",
        desc: 5 / 32,
      },
      {
        name: "Ball Qty",
        desc: "14B",
      },
      {
        name: "Invoice Description",
        desc: "BEARING HEAD SET 5/32X14B",
      },
    ],

    [
      {
        name: "Weight",
        desc: "0.01 lbs",
      },
      {
        name: "Packing",
        desc: "ea",
      },
      {
        name: "Min Purchase Qty",
        desc: "10",
      },
    ],
    [
      {
        image: vector,
        desc: "Add to Favorites",
        small: "",
      },
      {
        image: noti,
        desc: "Notify Me",
        small: " if whoever product is modified",
      },
      {
        image: info,
        desc: "Report",
        small: "Incorrect Product Information",
      },
    ],
  ];
  return (
    <div className="">
      <div className="detail_head flex justify-between items-center p-4">
        <h1 className="text-red-600 font-bold">
          {selectedCategory}\{selectedSubCategory}\
        </h1>
        <button onClick={handleClose}>X</button>
      </div>
      <div className="flex gap-10">
        <div className="detail_left flex items-center justify-center flex-col">
          <img className="" src={img} alt="" />
          <div className="detail_left_footer">
            <img src={slider} alt="" />
          </div>
        </div>
        <div className="detail_right">
          <div className="detail_right_head">
            <h1 className="text-red-600 font-bold"> Ref#{id}</h1>
            <h1 className="font-bold ">{name}</h1>
            <p>Headset Bearing 5/32x14B.</p>
            <ul className="flex flex-col gap-0 items-start">
              {detailData[0].map((d, index) => (
                <li className="list-disc ml-8" key={index}>
                  {d.name} {d.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="detail_right_footer flex gap-10">
            <div>
              <ul className="flex flex-col gap-0 items-start mt-9">
                {detailData[1].map((d, index) => (
                  <li key={index}>
                    {d.name} {d.desc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex flex-col items-start gap-1 mt-10">
                {detailData[2].map((d, index) => (
                  <li
                    className="text-red-600 font-extrabold flex gap-2 items-center "
                    key={index}
                  >
                    <img
                      onClick={() => {
                        handleToAddFavs();
                        navigate("/favorite");
                      }}
                      className=""
                      src={d.image}
                      alt=""
                    />
                    {d.desc}
                    <span className="text-black font-bold text-[10px] ">
                      {d.small}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right_part_3 my-4 flex justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-red-600 font-bold">Price: ${price} ea</h1>
              <ul className="flex gap-2">
                <li>Share</li>
                <li>
                  <img src={insta} alt="" />
                </li>
                <li>
                  <img src={fb} alt="" />
                </li>
              </ul>
            </div>
            <div>
              <div className="flex ">
                <div className="border-2 w-[100px] bg-[#f0f0f0] flex items-center justify-between">
                  <p className=" ">{quantity}</p>
                  <div>
                    <LuChevronUp onClick={() => setQuantity(quantity + 1)} />
                    <IoChevronDownOutline
                      onClick={() => {
                        if (quantity > 1) setQuantity(quantity - 1);
                      }}
                    />
                  </div>
                </div>
                <button onClick={handleAddToCart} className="w-[100%]">
                  ADD TO CART
                </button>
              </div>
              <p className="flex justify-end">in stock</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detail_footer mx-3 pb-2">
        <span className="font-bold border-b-2 border-red-600">DESCRIPTION</span>
        <hr />
        <p className="text-semibold" style={{ fontSize: "14px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ullam
          similique vero animi, eaque omnis vel! Sequi sapiente, minima ea
          facilis placeat atque rerum doloremque cum molestias harum
          perspiciatis veniam, architecto aspernatur laudantium molestiae
          voluptatum nostrum suscipit praesentium ipsa recusandae et
          reprehenderit ducimus explicabo! Suscipit harum earum voluptatibus
          velit ipsa.
        </p>
      </div>
    </div>
  );
}

export default ProductItemDetail;

import Slider from "react-slick/lib/slider";
import centerImg from "../../assets/images/head-img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card } from "@mui/material";
import { useAuth } from "../../Context/AuthProvider";
function HeaderCenter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <div className={`${isLoggedIn && "hidden"} lang`}>
        <select>
          <option value="English"> English</option>
          <option value="Turkish">Turkish</option>
        </select>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img className="slick-img" src={centerImg} alt="" />
          </div>
          <div>
            <img className="slick-img" src={centerImg} alt="" />
          </div>
          <div>
            <img className="slick-img" src={centerImg} alt="" />
          </div>
        </Slider>
      </div>
      <div className="center">
        <div className="center-title">
          <h4 className="center-header">Welcome to F & R Cycle, Inc.</h4>
          <p className="center-paragraph">
            F & R Cycle Inc, Established in 1982, an international wholesale
            distributor based in the United States that carries over 5,000 parts
            and accessories for all Lowrider, Chopper, Limo Cruiser, BMX, and
            Beach Cruiser bicycles. Pioneering in the Lowrider Sector, our parts
            and accessories come from the finest manufactures, importing
            products from both Taiwan and Thailand, With our exclusive custom
            molds, we are able to not only bring our ideas to life, but also our
            customers. Being the original creators of the 52 spoke, 72 spoke,
            and 144 spoke wheels, we were able to add a little twist to it by
            creating a mold for twisted spokes as well. Accompanied with our
            Lowrider & Vintage Lowrider branded parts, the designs are
            limitless. Several of our many custom molds include twisted spring
            forks, twisted steering wheels, twisted baseball holder, twisted
            continental kit, twisted cranks, and conversion kits for tricycles
            (with and without plate). All of our custom molds include various
            colors and styles.
          </p>
        </div>
        <div className="center-card">
          <Box
            sx={{
              width: "100%",
              maxWidth: 500,
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(240px, 1fr))",
              gap: 2,
              marginY: 6,
              textAlign: "center",
            }}
          >
            <Card
              sx={{
                padding: "60px 0",
                backgroundColor: "#d9d9d9",
                fontWeight: "700",
              }}
              variant="outlined"
            >
              <h2>Title Lorem</h2>
            </Card>
            <Card
              sx={{
                padding: "60px 0",
                backgroundColor: "#d9d9d9",
                fontWeight: "700",
              }}
              variant="outlined"
            >
              <h2>Title Lorem</h2>
            </Card>{" "}
            <Card
              sx={{
                padding: "60px 0",
                backgroundColor: "#d9d9d9",
                fontWeight: "700",
              }}
              variant="outlined"
            >
              <h2>Title Lorem</h2>
            </Card>{" "}
            <Card
              sx={{
                padding: "60px 0",
                backgroundColor: "#d9d9d9",
                fontWeight: "700",
              }}
              variant="outlined"
            >
              <h2>Title Lorem</h2>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default HeaderCenter;

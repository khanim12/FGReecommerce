import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useList } from "../../Context/ListProvider";

function OpenMenu({ handle, open, title, anchor, handleClose, datas, num }) {
  const { setSelectedList ,setSpecial} = useList();

  const navigate = useNavigate();
  const handleNavigate = (d, e) => {
    setSelectedList(d.title)
    e.preventDefault()
    switch (d.title) {
      case "ORDER TRACKING":

        navigate("/order")
        break;
      case "SPECIALS":
        navigate("/specials")
        break;
      case "QUICK ORDER":
        navigate("/quick")
        break;
      case "SHIPPING ADDRESSES":
        navigate("/checkCart")
        break;
      case "FAVORITES":
        navigate("/favorite")
        break;
        default:
          navigate(`/check/${d.id}`);
          break;
      
    }
    handleClose()
    
  }
  return (
    <div>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handle}
        style={{ color: "white" }}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className={`grid grid-cols-${num} gap-2`}>
          {datas &&
            datas.map((d) => (
              <MenuItem
                onClick={ (e)=>handleNavigate(d,e)}
                key={d.id}
              >
                <img className="mr-2" src={d.icon} alt="" />
                <span>{d.title}</span>
              </MenuItem>
            ))}
        </div>
      </Menu>
    </div>
  );
}

export default OpenMenu; 
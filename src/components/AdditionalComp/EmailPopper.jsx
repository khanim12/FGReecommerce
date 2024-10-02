import { Alert, Box, ClickAwayListener, Popper } from "@mui/material";
import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";

function EmailPopper({ EmailTitle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [navigate, setNavigate] = useState("");
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const email = "info@fnrco.com";
  const CopyText = () => {
    setNavigate(navigator.clipboard.writeText(email));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavigate(false);
      setAnchorEl(null);
    }, 2000);
    return () => clearInterval(timer);
  }, [navigate]);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <button onClick={handleClick}>{EmailTitle}</button>
        <Popper
          modifiers={[
            {
              name: "offset",
              options: {
                offset: [0, 15],
              },
            },
          ]}
          placement="top"
          id={id}
          open={open}
          anchorEl={anchorEl}
        >
          <Box
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "4px",
              border: 1,
              p: 1,
              padding: "10px",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                borderWidth: "10px",
                borderStyle: "solid",
                borderColor: "black transparent transparent transparent",
              },
            }}
          >
            <div className="flex gap-5">
              <div>
                <button className="flex items-center" onClick={CopyText}>
                  <CiMail size={23} /> Copy info@fnrco.com
                </button>
              </div>

              <button
                onClick={() => (window.location.href = `mailto:${email}`)}
              >
                Send Mail
              </button>
            </div>
          </Box>
        </Popper>
        {navigate && (
          <Alert className="my-5" severity="success">
            {email}:copied to your clipboard
          </Alert>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default EmailPopper;

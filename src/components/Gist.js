import React from "react";
import { Box, Avatar, Typography, Button, Divider } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import DescriptionIcon from "@mui/icons-material/Description";

const Gist = ({ gist }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          m: { lg: "0px", md: "0px", sm: "0px", xs: "50px" },
        }}
      >
        <Box
          sx={{
            width: { lg: "50%", md: "50%", sm: "70%", xs: "100%" },
            mt: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar alt="not found" src={gist?.owner?.avatar_url} />
              <Typography
                sx={{ ml: "10px", color: "#1976d2", fontWeight: "bold" }}
              >
                {gist?.owner?.login}
              </Typography>
            </Box>
            <Box>
              <Box>
                <Button
                  sx={{ textTransform: "capitalize" }}
                  variant="text"
                  startIcon={<CodeIcon />}
                >
                  File
                </Button>
                <Button
                  sx={{ textTransform: "capitalize" }}
                  variant="text"
                  startIcon={<CodeIcon />}
                >
                  Forks
                </Button>
                <Button
                  sx={{ textTransform: "capitalize" }}
                  variant="text"
                  startIcon={<ChatBubbleOutlineIcon />}
                >
                  Comments
                </Button>
                <Button
                  sx={{ textTransform: "capitalize" }}
                  variant="text"
                  startIcon={<StarRateIcon />}
                >
                  Star
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mt: "15px",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "13px" }}>
              Created at: {gist?.created_at}
            </Typography>
            <Typography variant="body2" sx={{ ml: "20px", fontSize: "13px" }}>
              Updated at: {gist?.updated_at}
            </Typography>
          </Box>
          <Box sx={{ mt: "10px" }}>
            {gist?.description === "" ? (
              <Typography sx={{ color: "red", overflowWrap: "anywhere" }}>
                Description is not given
              </Typography>
            ) : (
              <Typography>{gist?.description}</Typography>
            )}
          </Box>
          <Box>
            {Object.keys(gist.files).map((item) => (
              <Button
                sx={{ textTransform: "capitalize", overflowWrap: "anywhere" }}
                variant="text"
                startIcon={<DescriptionIcon />}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              mt: "20px",
              mb: "20px",
            }}
          >
            <Divider />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Gist;

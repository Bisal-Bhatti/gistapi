import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getPublicGists } from "../services/gistService";
import Gist from "./Gist";

const GistList = ({ search }) => {
  const [gistData, setGistDat] = useState([]);

  useEffect(() => {
    if (search === "")
      getPublicGists().then((res) => {
        setGistDat(res);
      });
  }, []);

  return (
    <Box>
      {gistData.data &&
        gistData.data
          .filter((gist) => {
            if (gist?.owner?.login.includes(search)) return gist;
          })
          .map((value, index) => {
            return <Gist gist={value} />;
          })}
    </Box>
  );
};

export default GistList;

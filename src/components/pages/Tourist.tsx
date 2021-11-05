import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Tourist = ({ touristData, deleteTourist }: any) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
        }}
      >
        {touristData.map((x: any, i: number) => {
          return (
            <Card className="card" key={x.id}>
              <CardContent sx={{ bgcolor: "darkGrey", color: "black" }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Name: {x.touristName}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  City: {x.city}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Female: {x.gender}
                </Typography>
                <DeleteForeverIcon onClick={() => deleteTourist(x)} />
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Tourist;

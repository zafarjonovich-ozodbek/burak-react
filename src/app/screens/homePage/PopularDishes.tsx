import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const list = [
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function PopularDishes() {
  return (
    <div className={"popular-dishes-frame"}>
      <Container>
        <Stack className={"popular-section"}>
          <Box className={"category-title"}>Popular Dishes</Box>
          <Stack className={"cards-frame"}>
            {list.map((ele, index) => {
              return (
                <Card
                  className="card"
                  key={index}
                  sx={{
                    position: "relative",
                    width: 300,
                    minWidth: 300,
                    height: 430,
                    minHeight: 430,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={ele.imagePath}
                    alt={ele.productName}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    className="card-cover"
                    sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}
                  />
                  <CardContent
                    sx={{ position: "absolute", bottom: 60, left: 0, right: 0 }}
                  >
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "space-between", alignItems: "center" }}
                    >
                      <Typography variant="h5" sx={{ color: "#fff", mb: 1 }}>
                        {ele.productName}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        20
                        <VisibilityIcon sx={{ fontSize: 25, ml: "5px" }} />
                      </Typography>
                    </Stack>
                  </CardContent>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      px: 2,
                      height: 60,
                      width: "100%",
                      borderTop: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <DescriptionOutlinedIcon sx={{ color: "#fff" }} />
                    <Typography sx={{ color: "#fff" }}>
                      This is delicious meal
                    </Typography>
                  </Box>
                </Card>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

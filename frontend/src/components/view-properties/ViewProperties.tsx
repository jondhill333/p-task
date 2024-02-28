import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import { iProperty } from "../../common/property.interface";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

export default function ViewProperties() {
  const [properties, setProperties] = useState<iProperty[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    axiosInstance.get("/properties").then((response) => {
      setProperties(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Typography variant="h1">Find Your Dream Home!</Typography>
      {isLoading && <CircularProgress />}
      {!isLoading && !properties && (
        <Typography variant="body1">
          No properties added, use the button below to add some
        </Typography>
      )}
      <Grid container>
        {properties?.map((property: iProperty, i) => (
          <Card
            key={i}
            variant="outlined"
            sx={{
              margin: "4px",
            }}
          >
            <img
              width={300}
              src={`data:image/png;base64, ${property.image}`}
              alt="Screenshot-2024-02-27-at-15-38-37"
            />
            <Typography variant="body1">
              <strong>Address:</strong> {property.address}
            </Typography>
            <Typography variant="body1">
              <strong>Price:</strong> {property.price}
            </Typography>
          </Card>
        ))}
      </Grid>

      <Button
        sx={{
          marginTop: "100px",
        }}
        component={Link}
        to={"/add-property"}
        variant="contained"
        color="secondary"
      >
        Add Property
      </Button>
    </>
  );
}

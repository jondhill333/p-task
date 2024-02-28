import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import axiosInstance from "../../utils/axios";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddProperty() {
  const [formData, setFormData] = useState({
    address: "",
    image: "",
    price: 0,
  });
  const [encodedImage, setEncodedImage] = useState<string>();
  const [imageUploadMessage, setImageUploadMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function convertImageToBase64(e) {
    const input = document.getElementById("imageInput") as any;
    const file = input?.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64String = (event.target as FileReader).result
          ?.toString()
          .split(",")[1];

        base64String && setEncodedImage(base64String);
      };
      reader.readAsDataURL(file);
      setImageUploadMessage("File uploaded sucessfully!!");
      setImageUploadMessage("File uploaded sucessfully!!");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    formData.image = encodedImage ? encodedImage : "";
    const { data } = await axiosInstance.post("/properties", formData);
    setSuccessMessage(data.message);
    setFormData({
      address: "",
      image: "",
      price: 0,
    });
  }

  return (
    <>
      <Typography variant="h1" sx={{ fontSize: "20px", marginBottom: "20px" }}>
        Submit your property details below
      </Typography>
      <Box
        gap={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        component="form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          value={formData.address}
          onChange={handleChange}
          id="address"
          name="address"
          label="Please enter the address"
          required
        ></TextField>
        <TextField
          value={formData.price}
          onChange={handleChange}
          name="price"
          type="number"
          label="Property Price*"
          required
        ></TextField>
        <label htmlFor="imageInput">
          Please upload the photo of the property *
        </label>
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            accept="image/*"
            name="imageInput"
            id="imageInput"
            multiple
            onChange={(e) => convertImageToBase64(e)}
            type="file"
            required
          />
        </Button>
        <Typography variant="body1">{imageUploadMessage}</Typography>

        <Button variant="contained" type="submit">
          Submit
        </Button>
        {successMessage && (
          <Typography variant="body1">{successMessage}</Typography>
        )}
        <Button
          sx={{
            marginTop: "100px",
          }}
          component={Link}
          to={"/view-properties"}
          variant="contained"
          color="secondary"
        >
          View Properties
        </Button>
      </Box>
    </>
  );
}

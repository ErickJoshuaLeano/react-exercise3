import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Joi from "joi";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EditProductForm = ({ onSubmit, initialValue }) => {
  const [form, setForm] = useState(
    initialValue || {
      name: "",
      price: "",
      image: "",
      color1: "",
      color2: "",
      color3: "",
      splash: "",
      description: "",
      dna1: "",
      dna2: "",
      dna3: "",
      specs1: "",
      specs2: "",
      specs3: "",
    }
  );

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
    navigate("/");
  };

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    name: Joi.string().min(2).max(100).allow("").required(),
    price: Joi.number().min(0).required(),
    image: Joi.string().min(2).max(100).allow("").required(),
    color1: Joi.string().min(2).max(100).allow("").required(),
    color2: Joi.string().min(2).max(100).allow("").optional(),
    color3: Joi.string().min(2).max(100).allow("").optional(),
    splash: Joi.string().min(2).max(100).allow("").required(),
    description: Joi.string().min(2).max(700).allow("").required(),
    dna1: Joi.string().min(2).max(500).allow("").required(),
    dna2: Joi.string().min(2).max(500).allow("").optional(),
    dna3: Joi.string().min(2).max(500).allow("").optional(),
    specs1: Joi.string().min(2).max(500).allow("").required(),
    specs2: Joi.string().min(2).max(500).allow("").optional(),
    specs3: Joi.string().min(2).max(500).allow("").optional(),
  });

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const { error } = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (error) {
      setErrors({ ...errors, [input.name]: error.details[0].message });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);

    return !!result.error;
  };

  return (
    <Grid
      container
      component="form"
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      <Grid item xs={8}>
        <Card>
          <CardHeader
            title={`${initialValue ? "Edit" : "Add"} Product`}
            action={
              <Link to={`/products/`}>
                <IconButton>
                  <ArrowBackIcon />
                </IconButton>
              </Link>
            }
          ></CardHeader>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  error={!!errors.name}
                  helperText={errors.name}
                  onChange={handleChange}
                  value={form.name}
                  label="Product Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  error={!!errors.price}
                  helperText={errors.price}
                  onChange={handleChange}
                  value={form.price}
                  label="Price"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  error={!!errors.description}
                  helperText={errors.description}
                  onChange={handleChange}
                  value={form.description}
                  label="Description"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="color1"
                  error={!!errors.color1}
                  helperText={errors.color1}
                  onChange={handleChange}
                  value={form.color1}
                  label="Color 1"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="color2"
                  error={!!errors.color2}
                  helperText={errors.color2}
                  onChange={handleChange}
                  value={form.color2}
                  label="Color 2"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="color3"
                  error={!!errors.color3}
                  helperText={errors.color3}
                  onChange={handleChange}
                  value={form.color3}
                  label="Color 3"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="dna1"
                  error={!!errors.dna1}
                  helperText={errors.dna1}
                  onChange={handleChange}
                  value={form.dna1}
                  label="Feature 1"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="dna2"
                  error={!!errors.dna2}
                  helperText={errors.dna2}
                  onChange={handleChange}
                  value={form.dna2}
                  label="Feature 2"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="dna3"
                  error={!!errors.dna3}
                  helperText={errors.dna3}
                  onChange={handleChange}
                  value={form.dna3}
                  label="Feature 3"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="specs1"
                  error={!!errors.specs1}
                  helperText={errors.specs1}
                  onChange={handleChange}
                  value={form.specs1}
                  label="Spec 1"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="specs2"
                  error={!!errors.specs2}
                  helperText={errors.specs2}
                  onChange={handleChange}
                  value={form.specs2}
                  label="Spec 2"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="specs3"
                  error={!!errors.specs3}
                  helperText={errors.specs3}
                  onChange={handleChange}
                  value={form.specs3}
                  label="Spec 3"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="image"
                  error={!!errors.image}
                  helperText={errors.image}
                  onChange={handleChange}
                  value={form.image}
                  label="Display Image"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="splash"
                  error={!!errors.splash}
                  helperText={errors.splash}
                  onChange={handleChange}
                  value={form.splash}
                  label="Splash Image"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button disabled={isFormInvalid()} type="submit" fullWidth>
              SUBMIT
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EditProductForm;

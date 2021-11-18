import { Container, TextField, CssBaseline, Box, Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const Input = ({setLista, lista}) => {

  

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleSignIn = (data) => {
      console.log(data.name)
      axios.get(`https://api.github.com/repos/${data.name}`).then((response) => {
      console.log(response);
      setLista([...lista, {nome: response.data.full_name, description: response.data.description, avatar: response.data.owner.avatar_url}])
    });
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        onSubmit={handleSubmit(handleSignIn)}
        component="form"
        sx={{ mt: 1 }}
      >
        <TextField
          {...register("name")}
          id="outlined-basic"
          fullWidth
          label="Digite o nome do repositório"
          sx={{ mt: 2 }}
          helperText={errors.name?.message}
          error={!!errors.name?.message}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            bgcolor: "#008EE2",
            padding: 2,
          }}
        >
          Pesquisar{" "}
          
        </Button>
      </Box>
    </Container>
  );
};
export default Input;

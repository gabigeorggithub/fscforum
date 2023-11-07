import React, { useState } from 'react';
import './Cadastro.css';
import { Button, Center, Text, FormControl, FormLabel, Input } from '@chakra-ui/react';
import logoverde from '../../assets/logoverde.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cadastro=() => {
  const [name, setName]         = useState("");    
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      const data = { 
          name,
          email,
          password 
      };

      const response = await axios.post('http://localhost:3008/api/user/create', data);
      
      if (response.data.success) {
          alert("Conta criada com sucesso!");
    navigate("/login");
      } else {
          alert("Não foi possível criar a conta");
      }
  };


  const goToFeed = () => {
    navigate('/feed')
  }

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="background-image">
      <div className="quadrado-branco">
        <Text
          fontSize={30}
          color="#89debb"
          textDecoration="bold"
          fontWeight="light"
          lineHeight="110%"
          letterSpacing="-2%"
          fontFamily="sans-serif"
          textAlign="center"
        >
          CADASTRO
        </Text>

        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Nome de Usuário:</FormLabel>
            <Input
              type="text"
              name="usuario"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha:</FormLabel>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Center>
            <Button
              color="white"
              type="submit"
              borderRadius="10px"
              fontSize={20}
              letterSpacing={0}
              backgroundColor="#323232"
              variant="solid"
              justifyContent="center"
              alignItems="center"
              marginTop={3}
              width="250px"
              marginBottom={2}
            >
              Cadastrar
            </Button>
          </Center>
          <p onClick={goToLogin}>Já tem conta? Entrar</p>
        </form>
        <Center>
          <img
            src={logoverde}
            style={{ margin: '20px auto', display: 'block', width: '100px', height: 'auto' }}
          />
        </Center>
        </div>
      </div>
  );
}

export default Cadastro;

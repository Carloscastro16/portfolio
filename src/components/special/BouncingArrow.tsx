import React from 'react';
import { styled, keyframes } from '@mui/system';

// Definir la animación de rebote
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Crear el componente estilizado para la imagen de la flecha
const BouncingArrowImage = styled('img')`
  width: 100%;
  height: 100%;
  animation: ${bounce} 2s infinite;
`;

const BouncingArrow = ({ src, alt }: any) => {
  return <BouncingArrowImage src={src} alt={alt} />;
};

export default BouncingArrow;


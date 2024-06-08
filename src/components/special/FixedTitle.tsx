// FixedTitle.js
import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const TitleContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const FixedTitle = ({ children }: any) => {
  const [isFixed, setIsFixed] = useState(true);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('target-section');
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 0 && bottom >= 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TitleContainer
      ref={titleRef}
      sx={{
        position: isFixed ? 'fixed' : 'absolute',
        top: isFixed ? 0 : 'auto',
        bottom: isFixed ? 'auto' : 0,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '96px',
          lineHeight: '117px',
          letterSpacing: '0.29em',
          color: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        {children}
      </Typography>
    </TitleContainer>
  );
};

export default FixedTitle;


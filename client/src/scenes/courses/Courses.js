import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const navigate = useNavigate();

  
  const handleClick = () => {
   
    navigate('/editor');
  };
  const buttonStyles = {
    base: {
      color: 'white',
      borderRadius: '8px',
      fontSize: '25px',
    padding: '30px 100px',
      margin: '20px 75px',
      textAlign: 'center',
      marginRight: '10px',
      marginBottom: '10px',
      cursor: 'pointer',
      transition: 'background 0.3s',
      width: '350px'
    },
    focus: {
      ring: '4px',
      outline: 'none',
      ringColor: '#93c5fd',
    },
    // hover: {
    //   background: 'linear-gradient(to bottom right, #3b82f6, #1e40af)',
    // },
    darkFocus: {
      ring: '4px',
      outline: 'none',
      ringColor: '#93c5fd',
    },
  };

  const greenButton = {
    ...buttonStyles,
    background: 'linear-gradient(to right, #34d399, #3b82f6, #4338ca)',
    focusRing: 'focus:ring-green-300',
    darkFocusRing: 'dark:focus:ring-green-800',
  };

  const cyanButton = {
    ...buttonStyles,
    background: 'linear-gradient(to right, #22d3ee, #06b6d4, #0891b2)',
    focusRing: 'focus:ring-cyan-300',
    darkFocusRing: 'dark:focus:ring-cyan-800',
  };

  const tealButton = {
    ...buttonStyles,
    background: 'linear-gradient(to right, #4ade80, #22c55e, #16a34a)',
    focusRing: 'focus:ring-teal-300',
    darkFocusRing: 'dark:focus:ring-teal-800',
  };

  const limeButton = {
    ...buttonStyles,
    background: 'linear-gradient(to right, #a7f3d0, #a7f3d0, #84cc16)',
    focusRing: 'focus:ring-lime-300',
    darkFocusRing: 'dark:focus:ring-lime-800',
  };

  const redButton = {
    ...buttonStyles,
    background: 'linear-gradient(to right, #fb7185, #ef4444, #dc2626)',
    focusRing: 'focus:ring-red-300',
    darkFocusRing: 'dark:focus:ring-red-800',
  };

  const pinkButton = {
    ...buttonStyles,
    background: 'linear-gradient(to right, #f973a3, #fb8183, #ed64a6)',
    focusRing: 'focus:ring-pink-300',
    darkFocusRing: 'dark:focus:ring-pink-800',
  };

  const purpleButton = {
    ...buttonStyles,
    background: 'linear-gradient(to right, #8b5cf6, #8b5cf6, #6d28d9)',
    focusRing: 'focus:ring-purple-300',
    darkFocusRing: 'dark:focus:ring-purple-800',
  };

  const Button = ({ style, children }) => (
    <button
      type="button"
      style={{
        ...style.base,
        background: style.background,
        ...style.focus,
        ...style.hover,
      }}
      className={`${style.focusRing} ${style.darkFocusRing}`}
    >
      {children}
    </button>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '50px' }}>
         <Typography sx={{ fontSize: 15, mt:3, fontWeight: 500 }} onClick={handleClick} component="div">
         <Typography  onClick={handleClick} component="div">
         <Button style={greenButton} >PYTHON</Button></Typography>
         <Typography  onClick={handleClick} component="div"> <Button style={cyanButton}>JAVA</Button></Typography>
      <Button style={tealButton}>DAA</Button>
                </Typography>
                <Typography sx={{ fontSize: 15, mt:3, fontWeight: 500 }} component="div">
                <Button style={limeButton}>DBMS</Button>
      <Button style={redButton}>APTITUDE</Button>
      <Button style={pinkButton}>CP</Button>
                </Typography>
      
{/*       
      <Button style={purpleButton}>Purple</Button> */}
    </div>
  );
};

export default Courses;

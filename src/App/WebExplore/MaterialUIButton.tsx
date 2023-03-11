import React from 'react';

const styles = {
  button: {
    padding: '8px 24px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#3f51b5',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#2c3e50',
    },
  },
};

function MaterialUIButton(props:any) {
  const {
    label,
    fullWidth = false,
    onClick,
  } = props;

  return (
    <button
      type="button"
      style={{ ...styles.button, width: fullWidth ? '100%' : 'auto' , backgroundColor:"blue"}}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default MaterialUIButton;

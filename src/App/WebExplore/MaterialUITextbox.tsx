import React from 'react';

const styles = {
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #aaa',
    borderRadius: '4px',
    width: '100%',
    fontSize: '16px',
    lineHeight: '1.5',
    outline: 'none',
    '&:focus': {
      borderColor: '#3f51b5',
    },
  },
  error: {
    color: 'red',
    marginTop: '8px',
  },
};

function MaterialUITextbox(props:any) {
  const {
    label,
    fullWidth = false,
    value,
    onChange,
    error,
    helperText,
  } = props;

  return (
    <div style={{width: fullWidth ? '100%' : 'auto' }}>
      {label && <label style={styles.label}>{label}</label>}
      <input
        type="text"
        style={styles.input}
        value={value}
        onChange={onChange}
      />
      {error && <div style={styles.error}>{helperText}</div>}
    </div>
  );
}

export default MaterialUITextbox;

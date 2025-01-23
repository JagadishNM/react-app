import React, { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSubmittedValue(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p>Submitted Value: {submittedValue}</p>
    </div>
  );
}
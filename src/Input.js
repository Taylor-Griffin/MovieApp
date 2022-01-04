import { useState } from 'react';

export function Input() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      {inputValue && <h3>{inputValue}</h3>}
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
}

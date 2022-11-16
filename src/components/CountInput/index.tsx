import React from "react";
import { Minus, Plus, Trash } from "phosphor-react";

import { CountInputContainer } from "./styles";

interface CountInputProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

export const CountInput: React.FC<CountInputProps> = ({
  value,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <CountInputContainer>
      {value === 1 && (
        <button onClick={onRemove}>
          <Trash size={20} />
        </button>
      )}

      {value > 1 && (
        <button onClick={onDecrement}>
          <Minus size={20} />
        </button>
      )}

      <span>{value}</span>

      <button onClick={onIncrement}>
        <Plus size={20} />
      </button>
    </CountInputContainer>
  );
};

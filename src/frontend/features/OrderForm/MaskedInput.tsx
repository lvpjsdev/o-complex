import { Input } from '@/frontend/ui/Input';
import { InputMask } from '@react-input/mask';
import { FC, forwardRef } from 'react';

interface CustomInputProps {
  value: string;
  // тут для простоты будем использовать any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (value: any) => void;
}

//eslint-disable-next-line react/display-name
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, handleChange }, _forwardedRef) => {
    return (
      <Input
        ref={_forwardedRef}
        value={value}
        onChange={handleChange}
        className="w-full"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      />
    );
  }
);

interface MaskedInputProps {
  value: string;
  onChange: (value: string) => void;
}
export const MaskedInput: FC<MaskedInputProps> = ({ value, onChange }) => {
  return (
    <InputMask
      mask="+7 (___) ___-__-__"
      replacement={{ _: /\d/ }}
      showMask
      component={CustomInput}
      value={value}
      handleChange={onChange}
    />
  );
};

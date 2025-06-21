import { Input } from '@/frontend/ui/Input';
import { InputMask } from '@react-input/mask';
import { FC, forwardRef, HTMLAttributes } from 'react';

interface CustomInputProps {
  value: string;
  // тут для простоты будем использовать any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (value: any) => void;
  hasError?: boolean;
}

//eslint-disable-next-line react/display-name
const CustomInput = forwardRef<
  HTMLInputElement,
  CustomInputProps & HTMLAttributes<HTMLInputElement>
>(({ value, handleChange, hasError, ...props }, _forwardedRef) => {
  return (
    <Input
      ref={_forwardedRef}
      value={value}
      onChange={handleChange}
      className="w-full max-w-[308px] md:max-w-[400px]"
      style={{ paddingLeft: '8px', paddingRight: '8px' }}
      hasError={hasError}
      {...props}
    />
  );
});

interface MaskedInputProps {
  hasError?: boolean;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}
export const MaskedInput: FC<MaskedInputProps> = ({
  value,
  onChange,
  hasError,
  onBlur,
}) => {
  return (
    <InputMask
      mask="+7 (___) ___-__-__"
      replacement={{ _: /\d/ }}
      showMask
      component={CustomInput}
      value={value}
      handleChange={onChange}
      hasError={hasError}
      onBlur={onBlur}
    />
  );
};

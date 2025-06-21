import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  // тут для простоты будем использовать any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: any) => void;
  type?: 'text' | 'number' | 'email' | 'password';
  min?: number;
}

export const Input: FC<Props> = ({
  value,
  onChange,
  type = 'text',
  min,
  className = '',
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const defaultClasses =
    'bg-background text-foreground rounded-2xl px-14 py-3 text-center text-4xl';

  return (
    <input
      {...props}
      className={className || defaultClasses}
      type={type}
      value={value}
      onChange={handleChange}
      min={min}
    />
  );
};

import { FC, ForwardedRef, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  // тут для простоты будем использовать any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: any) => void;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const Input: FC<Props> = ({
  value,
  onChange,
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
      className={`${defaultClasses} ${className}`}
      value={value}
      onChange={handleChange}
    />
  );
};

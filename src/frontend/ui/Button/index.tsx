import { FC, HTMLAttributes } from 'react';

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-background text-foreground rounded-2xl px-14 py-3 text-4xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

import { FC, HTMLAttributes } from 'react';

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="bg-background-secondary text-foreground-secondary rounded-2xl px-14 py-3 text-4xl"
      {...props}
    >
      {children}
    </button>
  );
};

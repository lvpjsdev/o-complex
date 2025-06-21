import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const mergedClassName = twMerge(
    className,
    `bg-background text-foreground rounded-2xl px-4 py-3 text-4xl`
  );

  return (
    <button className={mergedClassName} {...props}>
      {children}
    </button>
  );
};

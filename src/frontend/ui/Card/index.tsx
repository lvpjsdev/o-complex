import { FC, HTMLAttributes } from 'react';

export const Card: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-background-secondary text-foreground rounded-2xl px-7 py-5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

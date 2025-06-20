import { FC, HTMLAttributes } from 'react';

export const Card: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-background-secondary text-foreground-secondary h-[610px] w-[470px] min-w-[333px] overflow-y-auto rounded-2xl px-5 py-5 md:px-7 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

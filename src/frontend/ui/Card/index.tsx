import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const mergedClassName = twMerge(
    className,
    `bg-background-secondary text-foreground-secondary min-w-[333px] overflow-y-auto rounded-2xl px-5 py-5 md:px-7`
  );

  return (
    <div className={mergedClassName} {...props}>
      {children}
    </div>
  );
};

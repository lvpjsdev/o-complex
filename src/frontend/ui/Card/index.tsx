import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export const Card: FC<Props> = ({
  children,
  className,
  width = '470px',
  height = '610px',
  ...props
}) => {
  const mergedClassName = twMerge(
    className,
    `bg-background-secondary text-foreground-secondary min-w-[333px] overflow-y-auto rounded-2xl px-5 py-5 md:px-7`
  );

  return (
    <div
      className={mergedClassName}
      style={{ width, height, maxWidth: width, maxHeight: height }}
      {...props}
    >
      {children}
    </div>
  );
};

import { FC, PropsWithChildren } from 'react';

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-background-accent text-foreground mx-0 rounded-2xl py-4 text-center">
      <h1 className="text-[40px] md:text-8xl">{children}</h1>
    </div>
  );
};

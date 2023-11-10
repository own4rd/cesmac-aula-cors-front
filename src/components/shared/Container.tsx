// Container.tsx
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container py-4">
      {children}
    </div>
  );
};

export default Container;

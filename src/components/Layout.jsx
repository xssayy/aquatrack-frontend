import { Suspense } from 'react';

export const Layout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

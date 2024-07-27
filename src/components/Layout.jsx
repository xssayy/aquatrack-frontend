import { Suspense } from 'react';
import Loader from './Loader/Loader';

export const Layout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>{children}</Suspense>
    </div>
  );
};

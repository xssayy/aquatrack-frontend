import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


export const SharedLayout = () => {
  return (
    <div>

      {/* <Suspense fallback={null}> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

import { Helmet } from 'react-helmet-async';

export default function DocTitle({ children }) {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}

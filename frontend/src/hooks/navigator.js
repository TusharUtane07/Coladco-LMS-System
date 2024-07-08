/* eslint-disable */

import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useRouter() {
  const navigate = useHistory();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href) => navigate(href),
      replace: (href) => navigate(href, { replace: true }),
    }),
    [navigate]
  );

  return router;
}

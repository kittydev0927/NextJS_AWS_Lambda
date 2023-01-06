import { useEffect, useState } from 'react';

export function useUpdateWidth() {
  const [width, setWidth] = useState<number | undefined>(undefined);

  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  return [width, setWidth];
}

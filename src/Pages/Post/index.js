import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function Home() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log('Params:', params);
  console.log('Query params:', queryParams.get('teste'));

  return (
    <h1>
      Post Page
    </h1>
  );
}

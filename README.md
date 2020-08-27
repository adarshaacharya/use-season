# use-season

0 dependencies react hooks to get the season based on the browser geo location api.

## Usage : 
```jsx
import React from 'react';
import useSeason from './use-season';

function App() {
  const { error, loading, season, fetchSeason } = useSeason();
  if (loading) return <p>loading...</p>;
  return (
    <>
      {error && !season && error}
      {season && !error && season}
      <button onClick={fetchSeason}> Click me </button>
    </>
  );
}

export default App;




```
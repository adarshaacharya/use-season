# use-season

0 dependencies react hooks to get the season based on the browser geo location api.

## Installation :
```bash
  npm install use-season
```

## Usage : 
```jsx
import React from 'react';
import useSeason from 'use-season';

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

### Note : 
This package is based on the browser Geolocation API so, browser will ask you to use your location in that case you must click Allow else it won't work.

### Demo
[Check it out !](https://codesandbox.io/s/use-season-example-1zp6z)

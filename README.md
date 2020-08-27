# use-geo-location

0 dependencies react hooks to get the season based on the browser geo location api.

Usage : 
```jsx
import React from 'react';
import useGeoLocation from './use-geo-location';

function App() {
  const { error, loading, season, fetchWeather } = useGeoLocation();
  if (loading) return <p>loading...</p>;
  return (
    <>
      {error && !season && error}
      {season && !error && season}
      <button onClick={fetch}> Click me </button>
    </>
  );
}

export default App;




```
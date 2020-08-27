import React from 'react';

type IValues = {
  latitude: null | number;
  season: null | string;
  loading: boolean;
  error: string;
};

/**
 * Hooks to find the weather based on the geo location using browser API.
 *
 * @returns season, latitude, loading, error(if present) & fetchWeather function
 *
 * @version 1.0.0
 * @see https://www.npmjs.com/~adarshaacharya
 */
const useGeoLocation = () => {
  const initialVal: IValues = {
    latitude: null,
    season: null,
    loading: true,
    error: '',
  };
  const [state, setState] = React.useState(initialVal);
  const [trigger, setTrigger] = React.useState(0);

  const getSeason = (latitude: number, month: number) => {
    if (month > 2 && month < 9) return latitude > 0 ? 'Summer' : 'Winter';
    else return latitude > 0 ? 'Winter' : 'Summer';
  };

  const fetchWeather = () => {
    setState({
      ...state,
      loading: true,
    });

    setTrigger(Date.now());
  };

  React.useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        setState({
          ...state,
          loading: false,
          latitude: position.coords.latitude,
          season: getSeason(state.latitude!, new Date().getMonth()),
        }),
      (error) =>
        setState({
          ...state,
          loading: false,
          error: error.message,
        })
    );
    //eslint-disable-next-line
  }, [trigger]);

  return {
    ...state,
    fetchWeather,
  };
};

export default useGeoLocation;

/*
We still have not shown a forecast yet. We will use data from open weather map
(h t t p : / / w w w . o p e n w e a t h e r m a p . o r g).
You can create an account on their website. With your account,
you can request an API token. You need the token to request the forecast.
A free account is limited to 60 requests per second and 50,000 requests per day.
We save the API token in a separate file, lib/config.ts:
*/
export const openWeatherMapKey = "bfd174941ada9859a0184db7a75e4db6";
export const apiURL = "http://api.openweathermap.org/data/2.5/";

import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './slices/currentWeatherSlice';
import forecastReducer from './slices/forecastSlice';
import cityWeatherReaducer from './slices/cityWeatherSlice';

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    forecast: forecastReducer,
    cityWeather: cityWeatherReaducer,
  },
});

// تایپ‌های عمومی
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
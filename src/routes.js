import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import AppDashboard from './components/Dashboard';
import NewsApp from './components/NewsApp';
import CurrencyApp from './components/CurrencyApp';
export const AppRoute = {
  dashboard: `/dashboard`,
  news: `/news`,
  currency:`/currency`
};
const AppRoutes = ({news, Crypto, weather}) => {

  return (

    <Routes>
      <Route
        path={AppRoute.dashboard}
        exact
        element={<AppDashboard />}
      />
      <Route
        path={AppRoute.news}
        exact
        element={<NewsApp news={news} />}
      />
      <Route
        path={AppRoute.currency}
        exact
        element={<CurrencyApp Crypto={Crypto} />}
      />
      <Route
        path="*"
        element={<Navigate to={AppRoute.dashboard} replace />}
    />
    </Routes>
  )
}

export default AppRoutes
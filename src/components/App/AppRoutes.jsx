import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import TourPage from '../Tour/TourPage';
import TracksPage from '../Tracks/TracksPage';
import NewsPage from '../News/NewsPage';
import NewsSingle from '../News/NewsSingle';
import OhyshopPage from '../Oxyshop/OhyshopPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/tour" element={<TourPage />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsSingle />} />
            <Route path="/shop" element={<OhyshopPage />} />
        </Routes>
    );
};

export default AppRoutes;

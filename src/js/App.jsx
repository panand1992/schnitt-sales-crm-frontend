import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const Loader = () => (
    <div>Loading...</div>
)

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

const App = () => (
    <Router>
        <Suspense fallback={<Loader />}>
            <AppRoutes />
        </Suspense>
    </Router>
);

export default App;
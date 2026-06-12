import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import '../styles/app.scss';

/* ── Service Worker (PWA offline + web push) ─────────────── */
if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        try {
            await navigator.serviceWorker.register("/sw.js");
            // Also register Firebase Messaging SW for background FCM (web only)
            await navigator.serviceWorker.register("/firebase-messaging-sw.js");
        } catch (e) {
            console.warn("[SW] Registration failed:", e);
        }
    });
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <App />
);
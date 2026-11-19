import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import Layout from "./components/layout/Layout";
import MisalLoader from "./components/MisalLoader"; // Adjust path to your MisalLoader

// Lazy-loaded Auth Pages
const LoginLanding = lazy(() => import("./pages/auth/LoginLanding"));
const Login = lazy(() => import("./pages/auth/Login"));

// Lazy-loaded Owner Pages
const OwnerDashboard = lazy(() => import("./pages/owner/OwnerDashboard"));
const StaffManagement = lazy(() => import("./pages/owner/StaffManagement"));
const Profile = lazy(() => import("./pages/owner/Profile"));
const MenuManagement = lazy(() => import("./pages/owner/MenuManagement"));
const AnalyticsAndReports = lazy(() => import("./pages/owner/AnalyticsAndReports"));

// Lazy-loaded Staff Pages
const StaffDashboard = lazy(() => import("./pages/staff/StaffDashboard"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<MisalLoader />}>
        <Routes>
          {/* AUTH ROUTES */}
          <Route path="/" element={<LoginLanding />} />
          <Route path="/login" element={<LoginLanding />} />

          <Route
            path="/login/owner"
            element={
              <Login
                role="owner"
                title="Owner Portal"
                subtitle="Sign In to Access Your Account"
              />
            }
          />

          <Route
            path="/login/staff"
            element={
              <Login
                role="staff"
                title="Staff Portal"
                subtitle="Sign In to Access Your Account"
              />
            }
          />

          {/* PROTECTED OWNER / STAFF ROUTES */}
          <Route element={<ProtectedRoute allowedRoles={["ADMIN", "OWNER", "STAFF"]} />}>
            <Route element={<Layout />}>
              <Route element={<ProtectedRoute allowedRoles={["OWNER"]} />}>
                <Route path="/owner/dashboard" element={<OwnerDashboard />} />
                <Route path="/owner/staff" element={<StaffManagement />} />
                <Route path="/owner/menu" element={<MenuManagement />} />
                <Route path="/owner/analytics" element={<AnalyticsAndReports />} />
                <Route path="/owner/profile" element={<Profile />} />
              </Route>
            </Route>

            <Route element={<ProtectedRoute allowedRoles={["STAFF"]} />}>
              <Route path="/staff/dashboard" element={<StaffDashboard />} />
            </Route>
          </Route>

          {/* DEFAULT ROUTE */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
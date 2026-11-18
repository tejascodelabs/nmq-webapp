
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";


import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginLanding from "./pages/auth/LoginLanding";
import Layout from "./components/layout/Layout";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import StaffManagement from "./pages/owner/StaffManagement";
import Profile from "./pages/owner/Profile";
import MenuManagement from "./pages/owner/MenuManagement";
import StaffDashboard from "./pages/staff/StaffDashboard";
import AnalyticsAndReports from "./pages/owner/AnalyticsAndReports";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH ROUTES */}
        <Route path="/" element={<LoginLanding />} />
        <Route path="/login" element={<LoginLanding />} />

        <Route path="/login/owner" element={<Login role="owner" title="Owner Portal" subtitle="Sign In to Access Your Account" />} />

        <Route path="/login/staff" element={<Login role="staff" title="Staff Portal" subtitle="Sign In to Access Your Account" />} />

        {/* PROTECTED OWNER / STAFF ROUTES */}
        <Route element={<ProtectedRoute allowedRoles={["ADMIN", "OWNER", "STAFF"]} />} >
          <Route element={<Layout />}>
            <Route element={<ProtectedRoute allowedRoles={["OWNER"]} />} >
              <Route path="/owner/dashboard" element={<OwnerDashboard />} />
              <Route path="/owner/staff" element={<StaffManagement />} />
              <Route path="/owner/menu" element={<MenuManagement />} />
              <Route path="/owner/analytics" element={<AnalyticsAndReports />} />
              <Route path="/owner/profile" element={<Profile />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["STAFF"]} />} >
            <Route path="/staff/dashboard" element={<StaffDashboard />} />
          </Route>
        </Route>

        {/* DEFAULT ROUTE */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

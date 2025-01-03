import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './components/Navigation';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard'; 
import CalendarView from './components/CalendarView'; 
import CompanyList from './components/CompanyList'; 
import AddEditCompany from './components/AddEditCompany'; 
import AddEditCommunicationMethod from './components/AddEditCommunicationMethod'; 

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navigation />
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/companies" element={<CompanyList />} />
        <Route path="/admin/company/add" element={<AddEditCompany />} />
        <Route path="/admin/company/list" element={<CompanyList />} />
        <Route path="/admin/company/edit" element={<AddEditCompany />} />
        <Route path="/admin/company/edit/:id" element={<AddEditCompany />} />
        <Route path="/admin/communication-method/add" element={<AddEditCommunicationMethod />} />
        <Route path="/admin/communication-method/edit/:id" element={<AddEditCommunicationMethod />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/" element={<Navigate to="/admin" />} />
      </Routes>
    </Router>
  );
}

export default App;

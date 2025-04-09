import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import LandingPage from './components/landingPage';
import Dashboard from './components/dashboard';
import App from './App';
import BookDetail from './components/bookDetailsPage';
import BookForm from './components/formUI';
import SignupForm from './components/signUpForm';
import LoginForm from './components/loginForm';


const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="app" element={<App />} />
          <Route path="*" element={<LandingPage />} />
          <Route path="details" element={<BookDetail />} />
          <Route path ="form" element={<BookForm />} />
          <Route path="form/:id" element={<BookForm />} />
          <Route path="form/:id/edit" element={<BookForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

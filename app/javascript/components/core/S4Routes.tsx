import * as React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GuestRoute } from '../../auth/GuestRoute';
import { SignIn } from '../../auth/SingIn';
import { PrivateRoute } from '../../auth/PrivateRoute';
import { Home } from '../home/Home';
import { Layout } from './Layout';
import { useFlipper } from '../../hooks/useWindow';
import { OfflineApp } from '../home/OfflineApp';
import { NotFound } from './NotFound';
import { Dashboard } from '../app/dashboard';
import { PrivacyPolicy } from '../staticPages/PrivacyPolicy';
import { TermsOfUse } from '../staticPages/TermsOfUse';
import { SignUp } from '../../auth/SignUp';
import { ForgotPassword } from '../../auth/ForgotPassword';
import { ResetPassword } from '../../auth/ResetPassword';

export const S4Routes = () => {
  const isOnline = useFlipper('app_online');
  const store = setupStore();

  return (
    <Provider store={store}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        limit={4}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme='dark'
      />
      <BrowserRouter>
        {isOnline && (
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='privacy' element={<PrivacyPolicy />} />
              <Route path='terms' element={<TermsOfUse />} />
              {/* Any Person route */}

              <Route element={<GuestRoute />}>
                <Route path='sign_in' element={<SignIn />} />
                <Route path='sign_up' element={<SignUp />} />
                <Route path='forgot_password' element={<ForgotPassword />} />
                <Route path='reset_password' element={<ResetPassword />} />
              </Route>
              {/* un-signed in routes */}

              <Route element={<PrivateRoute />}>
                <Route path='app' element={<Dashboard />} />
              </Route>
              {/* Private routes */}
            </Route>
            <Route path='*' element={<Layout />}>
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        )}
        {!isOnline && (
          <Routes>
            <Route path='*' element={<Layout />}>
              <Route path='*' element={<OfflineApp />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </Provider>
  );
};

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthForm } from './pages/auth/ui/Auth/AuthForm/AuthForm';
import { AuthTwoFactor } from './pages/auth/ui/Auth/AuthTwoFactor/AuthTwoFactor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/two-factor" element={<AuthTwoFactor />} />
      </Routes>
    </Router>
  );
}

export default App;

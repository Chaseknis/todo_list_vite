import { Routes, Route } from 'react-router-dom';
import NotMatch from '@/routes/NotMatch';
import Layout from '@/components/Layout';
import SinglePage from '@/routes/SinglePage';
import ProtectedRoute from '@/components/ProtectedRoute';

import Home from '@/routes/Home';
import About from '@/routes/About';
import Login from '@/routes/Login';
import Profile from '@/routes/Profile';

const TodoApp = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />}>
                <Route path=":slug" element={<SinglePage />} />
            </Route>
            <Route path="login" element={<Login />} />
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
            <Route path="*" element={<NotMatch />} />

        </Route>
    </Routes>
  );
};
export default TodoApp;

  
  
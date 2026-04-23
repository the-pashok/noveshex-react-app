import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TrainingProgramPage } from './pages/TrainingProgramPage';
import { TrainingProgramsPage } from './pages/TrainingProgramsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<TrainingProgramsPage />} />
        <Route path="/programs/:slug" element={<TrainingProgramPage />} />
        <Route path="/:slug" element={<LegalPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

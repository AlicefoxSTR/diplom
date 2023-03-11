import { ChosePopup } from 'modules/ChosePopup';
import { SigninPopup } from 'modules/SigninPopup/UI/SigninPopup';
import { SignupPopup } from 'modules/SignupPopup/UI/SignupPopup';
import {Routes, Route} from 'react-router-dom'
import './assets/styles/index.css'
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ParentPage } from './pages/ParentPage';
import { ProfilePage } from './pages/ProfilePage';
import { ProgressPage } from './pages/ProgressPage';
import { TeacherPage } from './pages/TeacherPage';
import { TestsPage } from './pages/TestsPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage/>} />
            <Route path='/progress' element={<ProgressPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/tests' element={<TestsPage />} />
            <Route path='/for-parents' element={<ParentPage />} />
            <Route path='/for-teachers' element={<TeacherPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
      </Routes>
      <ChosePopup />
      <SigninPopup  />
      <SignupPopup />

    </div>
  );
}

export default App;

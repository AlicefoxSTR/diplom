
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
import { TestingPage } from 'pages/TestingPage';
import { Popups } from 'modules/Popups/Popups';
import { AccountPage } from 'pages/AccountPage';
import { AccountTestsPage } from 'pages/AccountTestsPage';
import { AccountMyTestsPage } from 'pages/AccountMyTestsPage';
import { CreateTestPage } from 'pages/CreateTestPage';
import { ResultsPage } from 'pages/ResultsPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage/>} />
            <Route path='/progress' element={<ProgressPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/account' element={<AccountPage />} />
            <Route path='/account/results' element={<ResultsPage />} />
            <Route path='/account/tests' element={<AccountTestsPage />} />
            <Route path='/account/my-tests' element={<AccountMyTestsPage />} />
            <Route path='/account/create-test' element={<CreateTestPage />} />
            <Route path='/tests' element={<TestsPage />} />
            <Route path='/for-parents' element={<ParentPage />} />
            <Route path='/for-teachers' element={<TeacherPage />} />
            <Route path='/test/:testId' element={<TestingPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
      </Routes>
      
      <Popups />

    </div>
  );
}

export default App;

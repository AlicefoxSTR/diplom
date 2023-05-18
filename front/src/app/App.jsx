
import {Routes, Route, useLocation} from 'react-router-dom'
import './assets/styles/index.css'
import { Layout } from '../widgets/Layout/Layout';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ParentPage } from '../pages/ParentPage';
import { ProfilePage } from '../pages/ProfilePage';
import { ProgressPage } from '../pages/ProgressPage';
import { TeacherPage } from '../pages/TeacherPage';
import { TestsPage } from '../pages/TestsPage';
import { TestingPage } from 'pages/TestingPage';
import { AccountPage } from 'pages/AccountPage';
import { AccountTestsPage } from 'pages/AccountTestsPage';
import { AccountMyTestsPage } from 'pages/AccountMyTestsPage';
import { CreateTestPage } from 'pages/CreateTestPage';
import { ResultsPage } from 'pages/ResultsPage';
import { Popups } from 'widgets/Popups/Popups';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { UserSlice } from 'entities/User';
import { userApi } from 'entities/User/api/UserApi';

function App() {

  const location = useLocation()

  const { refresh_token, access_token } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [ fetchUserDetail ] = userApi.useFetchUserDetailMutation()
  const [ refreshToken ] = userApi.useRefreshTokenMutation()

  useEffect(()=>{
    fetchUserDetail(access_token).then(
      res => {
        if(res.error && res.error.status===401){
          refreshToken({"refresh": refresh_token})
        }else{
          dispatch(UserSlice.actions.setUser(res.data))
        }
      }
    )
  },[location.pathname])

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

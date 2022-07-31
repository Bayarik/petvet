import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuestComponent from './components/QuestComponent/QuestComponent';
import PagesDoctorVisits from './pages/PagesDoctorVisits/PagesDoctorVisits';
// добавить :id к PagesDoctorVisits
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import DocFind from './pages/DocFind/DocFind';
import DoctorPublic from './pages/DocPublic/DocPublic';
import Navbar from './components/Navbar/Navbar';
import PageProfile from './pages/pageProfile/PageProfile';
import { userLoginAC } from './redux/actions/userActions';
import PetfromPage from './pages/PetformPage/PetfromPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const userCheck = JSON.parse(window.localStorage.getItem('user'));
    if (userCheck?.first_name) dispatch(userLoginAC(userCheck));
  }, []);
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/profile" element={<PrivateRoute condition={!user?.first_name} conditionRoute="/auth"><PageProfile /></PrivateRoute>} />
        <Route path="/pets/new" element={<PrivateRoute condition={user?.user_group !== 2} conditionRoute="/auth"><PetfromPage /></PrivateRoute>} />
        <Route path="/api/v1/visits/" element={<PagesDoctorVisits />} />
        <Route path="/doctors/:id" element={<DoctorPublic />} />
        <Route path="/vets" element={<DocFind />} />
      </Routes>
    </>
  );
}

export default App;

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './main.css';
import TopBar from '../../components/TopBar';

const MainPage = () => {
  const { isAuth } = useSelector((state) => state.user);
  if (!isAuth) {
    return <Navigate to={'/login'} />;
  }
  return (
    <>
      <TopBar />
      <main className='main'>main page</main>
    </>
  );
};

export default MainPage;

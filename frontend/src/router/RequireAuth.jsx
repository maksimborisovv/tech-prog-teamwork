import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';

export const RequireAuth = (props) => {
    const { children } = props;

    const { isAuth } = useSelector((state) => state.user);

    if (!isAuth) {
        return <Navigate to={'/login'} />;
    }

    return (
        <>
            <TopBar />
            {children}
        </>
    );
};

RequireAuth.propTypes = {
    children: PropTypes.element,
};

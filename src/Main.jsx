// Routes
import RoutesApp from './routes/index.routes.jsx';

// Hooks
import useActivateServer from '@/hooks/useActivateServer.js';


import './index.css';

const Main = () => {
    useActivateServer();

    return (
        <RoutesApp />
    );
};

export default Main;

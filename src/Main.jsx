// Routes
import RoutesApp from './routes/index.routes.jsx';

// Hooks
import useActivateServer from '@/hooks/useActivateServer.js';

// Styles 
import './index.css';

const Main = () => {
    useActivateServer();

    return (
        <RoutesApp />
    );
};

export default Main;

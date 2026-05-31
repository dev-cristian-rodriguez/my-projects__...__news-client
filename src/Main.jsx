// Routes
import RoutesApp from './routes/index.routes.jsx';

// Context
import { ThemeProvider } from './context/ThemeContext.jsx';

// Styles
import './index.css';

const Main = () => {
    return (
        <ThemeProvider>
            <RoutesApp />
        </ThemeProvider>
    );
};

export default Main;

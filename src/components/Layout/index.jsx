import { Navbar } from '@/components/navbar/Navbar.jsx';
import { Footer } from '@/components/footer/Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};


export default Layout;

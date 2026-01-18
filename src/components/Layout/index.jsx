import { Navbar } from '@/components/navbar/Navbar.jsx';
import { Footer } from '@/components/footer/Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

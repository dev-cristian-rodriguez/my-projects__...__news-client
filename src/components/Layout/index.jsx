import { Navbar } from '@/components/navbar/Navbar.jsx';
import { Footer } from '@/components/footer/Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

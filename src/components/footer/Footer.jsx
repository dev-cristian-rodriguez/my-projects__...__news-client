import { CiMemoPad } from 'react-icons/ci';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white mt-auto">
            {/* Contact Section */}
            <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <BiNews size={48} className="text-primary" />
                        <h1 className="text-3xl md:text-4xl font-bold">BBC NEWS</h1>
                    </div>
                    <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                        Exploro la API de BBC News para ofrecer acceso a información actualizada y
                        relevante que pasa en el mundo.
                    </p>
                    <a
                        href="https://newsapi.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                        Visitar NewsAPI
                    </a>
                </div>
            </section>

            {/* Footer Section */}
            <section className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="flex items-center gap-2 text-2xl text-slate-400">
                            <CiMemoPad />
                        </div>
                        <p className="text-slate-300 text-sm md:text-base max-w-md">
                            Aprendo todos los días. ¿Qué esperas? Creemos un proyecto juntos
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                className="p-3 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                                rel="noreferrer"
                                href="https://www.facebook.com/cristian.rodriguezbenitez.5/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <AiFillFacebook size={24} />
                            </a>
                            <a
                                className="p-3 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/rodriguezbenitez/"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <AiFillLinkedin size={24} />
                            </a>
                            <a
                                className="p-3 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                                rel="noreferrer"
                                href="https://github.com/CritianRodriguez042502"
                                target="_blank"
                                aria-label="GitHub"
                            >
                                <AiFillGithub size={24} />
                            </a>
                            <a
                                className="p-3 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                                rel="noreferrer"
                                href="https://www.instagram.com/cristianrodriguez0102/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <AiOutlineInstagram size={24} />
                            </a>
                        </div>
                        <p className="text-slate-500 text-sm pt-4 border-t border-slate-800 w-full max-w-md">
                            Creado por Cristian Rodriguez {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    );
}

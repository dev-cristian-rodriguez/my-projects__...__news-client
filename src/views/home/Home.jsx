import { Helmet } from 'react-helmet';
import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';

import news from '@/assents/images/home/news.png';
import newsVideo from '@/assents/videos/bbc-news-video.mp4';

export function Home() {
    return (
        <main className="overflow-x-hidden">
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> News | Home </title>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                                BBC NEWS
                            </h1>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                BBC News es la rama informativa de la British Broadcasting Corporation
                                (BBC), una de las instituciones de medios más grandes y respetadas a nivel
                                mundial. Se especializa en proporcionar noticias imparciales, informativas y
                                de alta calidad tanto a nivel nacional como internacional. La cobertura de
                                BBC News abarca una amplia gama de temas, desde política y economía hasta
                                cultura, ciencia, tecnología, deportes y mucho más.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl transform rotate-3"></div>
                            <img
                                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                src={news}
                                alt="BBC News"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            ¿Por qué elegir BBC News?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Descubre las ventajas de nuestra plataforma de noticias
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                                <BsFill1CircleFill className="text-primary text-3xl" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Credibilidad y Objetividad
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                BBC News es reconocida por su imparcialidad y credibilidad en la
                                presentación de noticias. Destacar este punto fortalecerá la confianza de
                                tus usuarios en la veracidad de la información que estás proporcionando a
                                través de la API de BBC News.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                                <BsFill2CircleFill className="text-primary text-3xl" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Accesibilidad y Variedad de Formatos
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                La plataforma se adapta a una amplia gama de plataformas y formatos,
                                incluyendo contenido multimedia y en línea. Destacar la facilidad de acceso
                                a la información a través de diferentes dispositivos y la presentación
                                dinámica de la información puede ser un punto fuerte para tu web.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                                <BsFill3CircleFill className="text-primary text-3xl" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Cobertura Global y Diversidad
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Es un sistema que ofrece una cobertura amplia y diversa de noticias, no solo
                                a nivel nacional, sino también a nivel internacional. Puedes resaltar la
                                amplitud de temas que abarca, desde política y economía hasta cultura,
                                ciencia, tecnología y más, lo que brinda a tus usuarios una visión integral
                                de los acontecimientos mundiales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-200">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-2">
                            <FiCheckCircle className="text-primary" />
                            Siempre al día
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Mantente informado con las últimas noticias del mundo
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                        <video
                            className="w-full h-auto"
                            controls
                            controlsList="nodownload"
                        >
                            <source src={newsVideo} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>
            </section>
        </main>
    );
}

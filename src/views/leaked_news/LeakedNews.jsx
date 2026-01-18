import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineCalendar } from 'react-icons/hi';
import { NewsGridSkeleton } from '@/components/skeleton/NewsCardSkeleton.jsx';

export function LeakedNews() {
    const navigate = useNavigate();
    const params = useParams().slug;

    const url = `${import.meta.env.VITE_URL_BACKEND_DJANGO}/news/news_category/?slug=${params}`;

    const [showNews, setShowNews] = useState(false);
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');

    const categories = useMemo(
        () => ['Tecnologia', 'Entretenimiento', 'Deportes', 'Cultura', 'Negocios', 'Ciencia'],
        []
    );

    useEffect(() => {
        if (!categories.some((item) => item.toLocaleLowerCase() === params.toLocaleLowerCase())) {
            setSearch(params);
        }

        fetch(url)
            .then((res) => {
                if (res.ok) {
                    setShowNews(true);
                }
                return res.json();
            })
            .then((data) => {
                setNews(data.data);
            });
    }, [params]);

    function onChangeSearch(e) {
        setSearch(e.target.value);
    }

    function changeBetweenCategories(item) {
        if (item !== params) {
            setShowNews(false);
            navigate(`/news/${item}`);
        }
    }

    function onSubmitSearch(e) {
        e.preventDefault();

        setShowNews(false);
        navigate(`/news/${String(e.target.search.value).toLocaleLowerCase()}`);
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const isActiveCategory = (item) => {
        return item.toLowerCase() === params?.toLowerCase();
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> News | {params} </title>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 md:mb-12 text-center">
                    Noticias
                </h1>

                {showNews ? (
                    <>
                        {/* Search & Filter Section */}
                        <section className="mb-8 md:mb-12 space-y-6">
                            {/* Category Pills */}
                            <div className="flex flex-wrap gap-3 justify-center">
                                {categories?.map((item, index) => {
                                    const isActive = isActiveCategory(item);
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => changeBetweenCategories(item)}
                                            disabled={isActive}
                                            className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                                                isActive
                                                    ? 'bg-primary text-white cursor-default shadow-md scale-105'
                                                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:border-primary hover:scale-105 active:scale-95'
                                            }`}
                                        >
                                            {item}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Search Form */}
                            <form
                                className="max-w-2xl mx-auto"
                                onSubmit={onSubmitSearch}
                            >
                                <div className="relative flex gap-2">
                                    <div className="relative flex-1">
                                        <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl" />
                                        <input
                                            name="search"
                                            type="text"
                                            value={search}
                                            onChange={onChangeSearch}
                                            required
                                            placeholder="Buscar noticias..."
                                            className="w-full pl-12 pr-4 py-3 md:py-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap"
                                    >
                                        Buscar
                                    </button>
                                </div>
                            </form>
                        </section>

                        {/* News Cards Grid */}
                        <section>
                            {news?.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {news?.map((item, index) => {
                                        return (
                                            <a
                                                key={index}
                                                href={item.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group block bg-white rounded-xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                            >
                                                <div className="relative overflow-hidden aspect-video bg-slate-200">
                                                    <img
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        src={item.urlToImage || '/placeholder-news.jpg'}
                                                        alt={item.title || 'News image'}
                                                        onError={(e) => {
                                                            e.target.src = 'https://via.placeholder.com/400x225?text=BBC+News';
                                                        }}
                                                    />
                                                </div>
                                                <div className="p-5 md:p-6">
                                                    <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3 line-clamp-3 group-hover:text-primary transition-colors duration-200">
                                                        {item?.title?.length > 110
                                                            ? item.title.slice(0, 110) + '...'
                                                            : item?.title}
                                                    </h2>
                                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                        <HiOutlineCalendar className="text-base" />
                                                        <span>{formatDate(item.publishedAt)}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-12 md:py-16">
                                    <div className="inline-block p-4 bg-slate-100 rounded-full mb-4">
                                        <BiSearch className="text-4xl text-slate-400" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                                        No se encontraron resultados
                                    </h3>
                                    <p className="text-slate-600">
                                        Intenta con una búsqueda diferente
                                    </p>
                                </div>
                            )}
                        </section>
                    </>
                ) : (
                    <div className="space-y-6">
                        {/* Search & Filter Section Skeleton */}
                        <section className="mb-8 md:mb-12 space-y-6">
                            <div className="flex flex-wrap gap-3 justify-center">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="h-10 w-24 md:w-32 bg-slate-200 rounded-full animate-pulse"
                                    ></div>
                                ))}
                            </div>
                            <div className="max-w-2xl mx-auto">
                                <div className="h-12 md:h-14 bg-slate-200 rounded-lg animate-pulse"></div>
                            </div>
                        </section>
                        {/* News Grid Skeleton */}
                        <NewsGridSkeleton count={6} />
                        <div className="text-center py-4">
                            <p className="text-base font-medium text-slate-700">Cargando datos...</p>
                            <span className="text-sm text-slate-500">
                                Esto podría tardar unos segundos
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

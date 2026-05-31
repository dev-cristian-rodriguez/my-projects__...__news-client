export function NewsCardSkeleton() {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-md animate-pulse">
            <div className="aspect-video bg-slate-200 dark:bg-slate-700"></div>
            <div className="p-5 md:p-6 space-y-4">
                <div className="space-y-2">
                    <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                    <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                    <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-32"></div>
                </div>
            </div>
        </div>
    );
}

export function NewsGridSkeleton({ count = 6 }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: count }).map((_, index) => (
                <NewsCardSkeleton key={index} />
            ))}
        </div>
    );
}

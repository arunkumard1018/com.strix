// Skeleton Loading Component
export const DashboardSkeleton = () => {
    return (
        <div className="p-6 animate-pulse">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                {/* Sidebar Skeleton (Hidden on Mobile) */}
                <div className="hidden lg:block w-64">
                    <div className="bg-gray-300 h-16 rounded mb-6"></div>
                    <div className="space-y-4">
                        <div className="bg-gray-300 h-12 rounded"></div>
                        <div className="bg-gray-300 h-12 rounded"></div>
                        <div className="bg-gray-300 h-12 rounded"></div>
                        <div className="bg-gray-300 h-12 rounded"></div>
                        <div className="bg-gray-300 h-12 rounded"></div>
                    </div>
                </div>

                {/* Main Content Skeleton */}
                <div className="flex-1 space-y-6">
                    <div className="flex justify-between">
                        <div className="bg-gray-300 h-10 w-48 rounded"></div>
                        <div className="bg-gray-300 h-10 w-96 rounded hidden sm:block"></div>
                    </div>

                    <div className="bg-gray-300 h-12 rounded w-48 mb-6"></div>

                    {/* Stats Cards Skeleton */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-300 h-32 rounded"></div>
                        <div className="bg-gray-300 h-32 rounded"></div>
                        <div className="bg-gray-300 h-32 rounded"></div>
                    </div>

                    {/* Charts Skeleton */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-gray-300 h-64 rounded"></div>
                        <div className="bg-gray-300 h-64 rounded"></div>
                    </div>

                    {/* Latest Invoices Skeleton */}
                    <div className="space-y-4">
                        <div className="bg-gray-300 h-8 rounded"></div>
                        <div className="bg-gray-300 h-12 rounded"></div>
                        <div className="bg-gray-300 h-12 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

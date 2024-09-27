
export const TableSkeleton = ({rows=5}:{rows?:number}) => {
    return (
        <div className="animate-pulse space-y-8 mt-6 md:mt-20 px-4  md:px-10 ">
            {/* Heading skeleton */}
            <div className="h-20 bg-gray-200 rounded w-full flex items-center justify-between px-10">
            </div>

            {/* Table header skeleton */}
            <div className="h-10 bg-gray-400 rounded w-full"></div>

            {/* Table rows skeleton */}
            {[...Array(rows)].map((_, index) => (
                <div key={index} className="h-8 bg-gray-200 rounded w-full"></div>
            ))}
        </div>
    );
};


export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
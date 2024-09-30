// components/ErrorPage.tsx
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';


export function ServerError() {
    return (
        <div className='mt-24'>
            <div className='text-4xl text-center font-medium'>Internal Server Error</div>
            <p className='text-center text-red-400'>{process.env.END_API_URL}</p>
        </div>
    )
}


export function InternalServerError({ message, reset }: { message?: string, reset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className='flex items-end justify-items-center space-x-2'>
                <div className='h-[8vh] flex items-center justify-center'><h1 className="text-5xl font-bold text-white mb-4 border-r px-2">500</h1></div>
                <div className='h-[8vh] flex items-center justify-center'> <p className='text-sm  text-white mb-4'>Internal Server Error</p></div>
            </div>
            <p className='text-white text-sm'>{message}</p>
            <Button className="px-4 mt-4 py-2 bg-secondary  rounded-lg" variant={'ghost'}
                onClick={() => reset()}>Try Again</Button>
        </div>
    );
}


// /components/errors/errors.tsx
export const PageError = ({ errorName, reset, message, className }: { reset: () => void, message: string, className?: string, errorName: string }) => {
    return (
        <div className={cn("mx-6 flex flex-col items-center justify-center h-full", className)}>
            <h1 className="text-2xl font-bold text-red-600">{errorName}</h1>
            <p>{message}</p>
            <Button
                variant="default"
                className="mt-4 px-4 py-2 rounded"
                onClick={reset}
            >
                Retry
            </Button>
        </div>
    );
};


export const LoadingError = ({ status, reset, message, className }: { reset: () => void, message: string, className?: string, status: number }) => {
    return (
            <div className={cn("mx-6 flex flex-col items-center justify-center h-full", className)}>
                <h1 className="text-4xl font-bold text-red-600">{status}</h1>
                <p className='font-medium text-sm md:text-xl'>{message}</p>
                <Button
                    variant="default"
                    className="mt-4 px-4 py-2 rounded"
                    onClick={reset}
                >
                    Retry
                </Button>
            </div>
    );
};
"use client"
import { Button } from '@/components/ui/button'

function Page() {
    return (
        <div className='mt-24 flex flex-col items-center justify-center space-y-4'>
            <div className='text-4xl text-center font-medium text-green-500'>App Working Fine Check with Components</div>
            <p className='text-center text-red-400'>{process.env.END_API_URL}</p>
            <Button
                variant="outline"
                className='w-[10vw]'
            >
                Show Toast
            </Button>
        </div>
    )
}

export default Page


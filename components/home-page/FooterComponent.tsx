import { cn } from '@/lib/utils'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Link from 'next/link'
import { HERO_PAGE_CONTENT } from '@/config/HeroPageConfig'

function FooterComponent({ className }: { className?: string }) {
    return (
        <footer className={cn("text-foreground bg-muted/10 py-8 mt-8", className)}>
            <div className="grid md:grid-cols-2 gap-4">

                <div>
                    <h2 className="text-4xl  font-bold">Strix Invoice</h2>
                    <p className="mt-2">{HERO_PAGE_CONTENT.footer.description}</p>
                    {/* <div className="flex mt-4 space-x-2">
            <img src="/path/to/appstore-logo.png" alt="App Store" className="w-24" />
            <img src="/path/to/googleplay-logo.png" alt="Google Play" className="w-24" />
          </div> */}
                </div>

                <div className='hidden w-full md:flex justify-around'>
                    {HERO_PAGE_CONTENT.footer.FooterLinks.map((item, index) => (
                        <div key={index * 5}>
                            <h3 className="font-bold">{item.title.toUpperCase()}</h3>
                            {item.paths.map((data) => (
                                <ul className="mt-2 space-y-1" key={data.link}>
                                    <Link href="/" ><li>{data.title}</li></Link>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>

                <Accordion type="single" collapsible className="w-full md:hidden">
                    {HERO_PAGE_CONTENT.footer.FooterLinks.map((item, index) => (
                        <AccordionItem value={`item-${index + 1}`} key={`item-${index + 1}`}>
                            <AccordionTrigger className='text-xl'>{item.title}</AccordionTrigger>
                            <AccordionContent>
                                <AccordianItems item={item.paths} className="text-md mb-4" />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>


            </div>
        </footer>
    )
}

const AccordianItems = ({ item, className }: { item: { title: string, link: string }[], className: string }) => {
    return (
        <ul className=''>
            {item.map((data, index) => (
                <li key={index * 5} className={cn(className)}>{data.title}</li>
            ))}
        </ul>
    )
}

export default FooterComponent
import { inter } from "@/components/fonts/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";



export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}



import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen lg:w-[90%] mx-auto">
      <Navbar />
      <main className="mx-auto container max-w-[100%] px-6 flex-grow pt-16 pb-8">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 mt-auto">
        
      </footer>
    </div>
  );
}

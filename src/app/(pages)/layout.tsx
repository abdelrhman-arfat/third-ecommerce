import Footer from "../_components/footer/Footer";
import Navbar from "../_components/navbar/Navbar";
import ToUp from "../_components/sections/common/ToUp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen overflow-hidden w-[87%] mx-auto sm:w-[90%] md:w-[87%] xl:w-[83%]">
      <ToUp />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

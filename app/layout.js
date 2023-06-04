import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Next JS Routing Basics",
  description: "Created by Code With Rhys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-root container mx-auto pt-4 flex flex-col">
        <Header />
        <main className="flex-auto h-full flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

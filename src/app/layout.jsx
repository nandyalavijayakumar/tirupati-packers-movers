import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Tirupati Packers & Movers - Safe, Fast & Affordable',
  description: 'Trusted Packers and Movers in Tirupati. House shifting, office relocation, local shifting, loading & unloading, vehicle transport services.',
  keywords: 'packers movers tirupati, house shifting tirupati, office relocation tirupati',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

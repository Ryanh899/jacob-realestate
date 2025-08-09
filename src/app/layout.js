import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import { Inter, Montserrat, Roboto, Playfair_Display, Merriweather } from 'next/font/google'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });


// app/layout.js (or a separate metadata file imported by layout)
export const metadata = {
  title: {
    default: "Jacob Hazzard | Luxre Realty — San Clemente & Orange County Realtor",
    template: "%s | Jacob Hazzard, Luxre Realty"
  },
  description: "Jacob Hazzard — Luxury & investment real estate agent at Luxre Realty in San Clemente, CA. Specializing in renovations, selling, buying, rentals, and investment opportunities across Orange County.",
  keywords: ["Jacob Hazzard", "Luxre Realty", "San Clemente realtor", "Orange County real estate", "property renovations", "investment property OC"],
  openGraph: {
    title: "Jacob Hazzard | Luxre Realty — San Clemente & Orange County",
    description: "Luxury real estate, renovations, investments, rentals, and sales across Orange County, California. Based in San Clemente.",
    url: "https://jacobhazzardrealestate.com",
    siteName: "Jacob Hazzard — Luxre Realty",
    images: [
      {
        url: "/white-transparent-bigger.png",
        width: 1200,
        height: 630,
        alt: "Beautiful coastal home with ocean view",
      },
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Hazzard | Luxre Realty",
    description: "San Clemente based realtor specializing in renovations, selling, buying and investment properties in Orange County.",
    images: ["https://jacobhazzardrealestate.com/images/twitter-card.jpg"]
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <body
        className={`${inter.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

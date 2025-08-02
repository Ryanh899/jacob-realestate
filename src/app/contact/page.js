import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

config.autoAddCss = false;

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Jacob Hazzard</title>
            </Head>
            <nav className="bg-white shadow-sm py-4 text-sm uppercase tracking-wide text-center space-x-6 sticky top-0 z-50">
                <Link href="/" className="hover:text-black text-gray-600 f2">Home</Link>
                <Link href="#successes" className="hover:text-black text-gray-600 f2">Recent Sales</Link>
                <Link href="#listings" className="hover:text-black text-gray-600 f2">Listings</Link>
                <Link href="#about" className="hover:text-black text-gray-600 f2">About</Link>
            </nav>
            {/* Page Banner */}
            <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/cordoba7.jpeg')" }}>
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>Let’s Connect</h1>
                    <p className="mt-2 text-lg font-light text-gray-200">Reach out for showings, listings, or renovation consulting.</p>
                </div>
            </section>
            {/* <nav className="bg-white shadow-sm py-4 text-sm uppercase tracking-wide text-center space-x-6 sticky top-0 z-50">
                <Link href="#about" className="hover:text-black text-gray-600 f2">About</Link>
                <Link href="#successes" className="hover:text-black text-gray-600 f2">Recent Sales</Link>
                <Link href="#listings" className="hover:text-black text-gray-600 f2">Listings</Link> */}
                {/* <Link href="#contact" className="hover:text-black text-gray-600 f2">Contact</Link> */}
            {/* </nav> */}
            {/* Contact Info */}
            <section className="bg-white py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold mb-6 f1">Direct Contact</h2>
                <div className="space-y-3 text-gray-700 f2">
                    <p>✉️ Email: <Link href="mailto:jacob@example.com" className="text-blue-600 hover:underline">jacob@example.com</Link></p>
                    <p>📞 Phone: <Link href="tel:+1234567890" className="text-blue-600 hover:underline">(123) 456-7890</Link></p>
                    <div className="flex justify-center space-x-6 mt-4 text-2xl text-gray-600">
                        <Link href="#" className="hover:text-black" >
                            <FontAwesomeIcon icon={faInstagram} />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="hover:text-black" >
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span className="sr-only">Linkedin</span>
                        </Link>
                        <Link href="#" className="hover:text-black" >
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="hover:text-black" >
                            <FontAwesomeIcon icon={faTwitter} />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-[#f9f7f4] py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8 f1">Send a Message</h2>
                    <form
                        action="https://formspree.io/f/your-form-id"  // 👈 Replace with your real Formspree endpoint
                        method="POST"
                        className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="name" placeholder="Your Full Name" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />
                            <input type="email" name="email" placeholder="Your Email Address" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>

                        <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />

                        <input type="text" name="address" placeholder="Property Address (if applicable)" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />

                        <select
                            name="category"
                            required
                            defaultValue=""
                            className="w-full px-4 py-3 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            <option value="" disabled>Reason for Contact</option>
                            <option value="buying">Interested in Buying</option>
                            <option value="selling">Looking to Sell</option>
                            <option value="renovation">Renovation Advice</option>
                            <option value="general">General Inquiry</option>
                        </select>

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message here..."
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        ></textarea>

                        <button type="submit" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#f0eeea] text-center py-6 text-sm text-gray-600 f2">
                <p>&copy; {new Date().getFullYear()} Jacob Hazzard Real Estate. CA DRE #01234567</p>
            </footer>
        </>
    );
}

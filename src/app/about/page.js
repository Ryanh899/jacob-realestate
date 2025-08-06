import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Head>
                <title>About Jacob Hazzard | San Clemente Real Estate</title>
                <meta name="description" content="Learn more about Jacob Hazzard, a real estate expert based in San Clemente, CA. Specializing in renovations and high-value sales." />
            </Head>

            <main className="text-gray-800 bg-[#f9f7f4] font-sans">
                <nav className="bg-white shadow-sm py-4 text-sm uppercase tracking-wide text-center space-x-6 sticky top-0 z-50">
                    <Link href="/" className="hover:text-gray-400 hover:underline text-gray-600 f2">Home</Link>
                    <Link href="/listings" className="hover:text-gray-400 hover:underline text-gray-600 f2">Listings</Link>
                    <Link href="/about" className="hover:text-gray-400 hover:underline text-gray-600 f2"><u>About</u></Link>
                    <Link href="/testimonials" className="hover:text-gray-400 hover:underline text-gray-600 f2">Testimonials</Link>
                    <Link href="/contact" className="hover:text-gray-400 hover:underline text-gray-600 f2">Contact</Link>
                </nav>
                {/* Header */}
                <section className="bg-white py-24 text-center px-4">
                    <h1 className="text-4xl font-semibold mb-4 f1">About Jacob Hazzard</h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-700 f2">
                        Based in the coastal city of San Clemente, Jacob Hazzard is a trusted name in luxury real estate, known for his client-first approach and deep understanding of property potential.
                    </p>
                </section>

                {/* Portrait or Lifestyle Image */}
                <section className="bg-[#f0eeea] py-20 px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src="/headshot1.jpg" // Replace with actual photo path
                                alt="Jacob Hazzard"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-md object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 f1">Experience. Vision. Results.</h2>
                            <p className="text-gray-700 text-base mb-4 f2">
                                Jacob has spent the past decade helping clients unlock hidden value in their homes. Whether prepping a property for a record sale or identifying the perfect investment, his ability to guide renovation strategy and buyer psychology is unmatched.
                            </p>
                            <p className="text-gray-700 text-base f2">
                                With a background in design and analytics, Jacob merges style with substance—delivering stunning spaces and strong returns.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="bg-white py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-xl font-light tracking-widest uppercase mb-6 f1">Core Values</h2>
                        <ul className="space-y-4 text-gray-700 text-lg f2">
                            <li>🏡 Personalized guidance through every step of the sale</li>
                            <li>🛠️ Smart renovations that elevate value and appeal</li>
                            <li>📈 Market strategies based on data, not guesswork</li>
                            <li>📍 Deep knowledge of the San Clemente & OC coastal markets</li>
                        </ul>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-[#f0eeea] text-center">
                    <h2 className="text-3xl font-semibold mb-4 f1">Work With Jacob</h2>
                    <p className="mb-6 text-lg text-gray-600 f2">Let&apos;s turn your next move into a success story. From staging to closing, Jacob brings strategy and style to every sale.</p>
                    <a href="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition">Schedule a Consultation</a>
                </section>

                {/* Footer */}
                <footer className="bg-white text-center py-6 text-sm text-gray-600 f2">
                    <p>&copy; {new Date().getFullYear()} Jacob Hazzard Real Estate. CA DRE #01234567</p>
                </footer>
            </main>
        </>
    );
}

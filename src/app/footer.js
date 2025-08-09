import Image from 'next/image';


export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-gray-300 py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
                {/* Left Column - Brand */}
                <div>
                    <h2 className="text-xl font-semibold tracking-widest mb-4">
                        JACOB HAZZARD <span className="font-extralight">REAL ESTATE</span>
                    </h2>
                    <p className="text-sm text-gray-400">
                        Delivering excellence in every transaction, from first-time buyers to luxury estates.
                    </p>
                    <Image
                        src="/white-transparent-bigger.png"
                        alt="Logo"
                        width={250}
                        height={200}
                        className="w-full max-w-[125] max-h-[125] object-contain md:ml-20"
                    />
                </div>

                {/* Middle Column - Contact Info */}
                <div>
                    <h3 className="uppercase text-sm tracking-widest text-gray-400 mb-4">
                        Contact Us
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <a href="mailto:info@yourgroup.com" className="hover:text-white transition">jacob.hazzard@cbrealty.com</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            (949) 291-9395
                        </li>
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
                            </svg>
                            222 Avenida Del Mar, <br />San Clemente, CA 92672
                        </li>
                    </ul>
                </div>

                {/* Right Column - Branding */}
                <div className="flex flex-col items-start md:items-end">
                    <Image src="/LUXRE Realty Logo.svg" width={150} height={150} alt="Coldwell Banker Realty" className="h-25 w-50 md:mr-3" />
                    <p className="text-sm text-gray-400">
                        Jacob Hazzard | CA DRE# 02222037 <br />
                        Luxre Realty | CA DRE# 01897290
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Jacob Hazzard Real Estate Group. All rights reserved.</p>
                <div className="flex gap-5 mt-3 md:mt-0">
                    <a href="/terms-of-use" className="hover:text-white transition">Privacy Policy</a>
                    <a href="privacy-policy" className="hover:text-white transition">Terms of Use</a>
                </div>
            </div>
        </footer>

    );
}
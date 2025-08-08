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
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12H8m8-4H8m8 8H8m13 2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14z" />
                            </svg>
                            <a href="mailto:info@yourgroup.com" className="hover:text-white transition">info@yourgroup.com</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m13-9l2 9m-5-6h.01" />
                            </svg>
                            (949) 478-2295
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
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition">Terms of Use</a>
                </div>
            </div>
        </footer>

    );
}
'use client';

import { useState } from 'react';
import { FileSearch, CheckCircle2, ExternalLink } from 'lucide-react';
import QRCodeModal from './components/QRCodeModal';

export default function Home() {
    const [isQRModalOpen, setIsQRModalOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            {/* Header Section */}
            <header className="w-full max-w-4xl mb-12 animate-fade-in-up">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8">
                    {/* Logos and Title Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* RTA Logo */}
                        <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 animate-float">
                            <img
                                src="/RTA_Official_Logo.svg.png"
                                alt="Royal Thai Army Logo"
                                className="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Title */}
                        <div className="text-center flex-1">
                            <h1 className="text-2xl md:text-4xl font-bold text-primary-blue mb-2">
                                🎖️ ARDO SAR
                            </h1>
                            <p className="text-lg md:text-xl text-text-secondary font-medium">
                                for RTA Research Project
                            </p>
                            <p className="text-sm text-text-secondary mt-1">
                                Self Assessment Report System
                            </p>
                            <div className="mt-3 flex flex-wrap justify-center gap-3 text-xs font-medium">
                                <span className="bg-pastel-blue px-3 py-1 rounded-full text-primary-blue shadow-sm">
                                    v1.1.0
                                </span>
                                <span className="bg-pastel-green px-3 py-1 rounded-full text-green-700 shadow-sm">
                                    📅 16 มกราคม 2569
                                </span>
                            </div>
                        </div>

                        {/* ARDO Logo */}
                        <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 animate-float animate-delay-200">
                            <img
                                src="/ARDO Logo.png"
                                alt="ARDO Logo"
                                className="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* App Cards Section */}
            <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                {/* Proposal Card */}
                <a
                    href="https://rtaproposaleval.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group animate-fade-in-up animate-delay-100"
                >
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 h-full
                          border-2 border-transparent hover:border-primary-blue
                          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
                          hover:animate-pulse-glow">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-pastel-blue to-pastel-purple rounded-2xl 
                              flex items-center justify-center mb-6 
                              group-hover:scale-110 transition-transform duration-300">
                                <FileSearch size={40} className="text-primary-blue" />
                            </div>
                            <h2 className="text-xl font-bold text-primary-dark mb-2">
                                RTA.PAS [Proposal]
                            </h2>
                            <p className="text-text-secondary mb-4">
                                ระบบกลั่นกรองโครงการวิจัย
                            </p>
                            <p className="text-sm text-slate-500 mb-4">
                                ประเมินข้อเสนอโครงการก่อนอนุมัติ
                            </p>
                            <div className="flex items-center gap-2 text-primary-blue font-medium group-hover:gap-3 transition-all">
                                <span>เข้าสู่ระบบ</span>
                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </a>

                {/* Project Closure Card */}
                <a
                    href="https://rta-pas-fullproject.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group animate-fade-in-up animate-delay-200"
                >
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 h-full
                          border-2 border-transparent hover:border-green-600
                          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
                          hover:animate-pulse-glow">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-pastel-green to-pastel-blue rounded-2xl 
                              flex items-center justify-center mb-6 
                              group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle2 size={40} className="text-green-600" />
                            </div>
                            <h2 className="text-xl font-bold text-primary-dark mb-2">
                                RTA.PAS [Project Closure]
                            </h2>
                            <p className="text-text-secondary mb-4">
                                ระบบประเมินปิดโครงการวิจัย
                            </p>
                            <p className="text-sm text-slate-500 mb-4">
                                ประเมินผลสำเร็จเพื่อปิดโครงการ
                            </p>
                            <div className="flex items-center gap-2 text-green-600 font-medium group-hover:gap-3 transition-all">
                                <span>เข้าสู่ระบบ</span>
                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </a>
            </main>

            {/* Donation Support Section */}
            <section className="w-full max-w-4xl mb-8 animate-fade-in-up animate-delay-300">
                <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 backdrop-blur-sm rounded-3xl shadow-lg p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center md:justify-start gap-2">
                                <span>☕</span> สนับสนุนผู้พัฒนา
                            </h3>
                            <p className="text-gray-600 text-sm">
                                สนับสนุนช่วยค่าเช่า Server ของ Web app นี้<br />
                                เพื่อให้สามารถบริการได้ต่อไป
                            </p>
                        </div>
                        <button
                            onClick={() => setIsQRModalOpen(true)}
                            className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white bg-white p-2 flex-shrink-0 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-200 group relative"
                            title="คลิกเพื่อดูรูปขนาดใหญ่"
                        >
                            <img
                                src="/donation-qr.jpg"
                                alt="QR Code สำหรับบริจาค"
                                className="w-full h-full object-contain rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">🔍 ดูใหญ่</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full max-w-4xl animate-fade-in-up animate-delay-400">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md p-6 text-center">
                    <a
                        href="https://www.canva.com/design/DAG7mNgWuVo/zeHJV8U2i8Qcd_InCC21xQ/view?utm_content=DAG7mNgWuVo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9a5468a0d1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-primary-dark hover:text-primary-blue hover:underline transition-colors"
                    >
                        พล.ท.ดร.กริช อินทราทิพย์
                    </a>
                    <p className="text-sm text-text-secondary mt-1">
                        สำนักงานวิจัยและพัฒนาการทางทหารกองทัพบก (สวพ.ทบ.)
                    </p>
                    <p className="text-xs text-slate-400 mt-3">
                        © 2026 All Rights Reserved
                    </p>
                </div>
            </footer>

            {/* QR Code Modal */}
            <QRCodeModal
                isOpen={isQRModalOpen}
                onClose={() => setIsQRModalOpen(false)}
                imageSrc="/donation-qr.jpg"
                imageAlt="QR Code สำหรับบริจาค"
                downloadFileName="donation-qr-ardo-sar.jpg"
            />
        </div>
    );
}


'use client';

import { FileSearch, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Home() {
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
                                    v1.0.0
                                </span>
                                <span className="bg-pastel-green px-3 py-1 rounded-full text-green-700 shadow-sm">
                                    📅 14 มกราคม 2569
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
        </div>
    );
}

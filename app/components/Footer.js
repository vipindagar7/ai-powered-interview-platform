import { Twitter, Github, Linkedin, Mail, Bot } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-4 text-center">
            <div className=" flex justify-around">
                <div className="px-4">
                    <h1 className="text-2xl font-bold"><Bot className="w-6 h-6 inline m-3" />InterviewAI</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        AI-powered mock interviews to help you land your dream job.
                    </p>
                </div>

                <div className="flex justify-center space-x-4">
                    {[
                        { icon: <Mail className="h-5 w-5" />, label: "Mail" , link:'mailto:codewithvipin@gmail.com'},
                        { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", link:'https://linkedin.com/in/vipindagar07' },
                        { icon: <Github className="h-5 w-5" />, label: "GitHub", link:'https://github.com/vipindagar7/ai-powered-interview-platform.git' },
                    ].map((social, index) => (
                        <Link
                            key={index}
                            href={social.link}
                            target="_blank"
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 transition-colors hover:border-gray-700 hover:bg-gray-900"
                            aria-label={social.label}
                        >
                            <span className="text-gray-400 transition-colors group-hover:text-white">{social.icon}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} InterviewAI. All rights reserved.</p>
        </footer>
    );
}

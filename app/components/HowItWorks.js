import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

const HowItWorks = () => {
    return (
        <div className="mx-auto max-w-4xl px-4">
            <Tabs defaultValue="step1" className="w-full">
                {/* Responsive Tabs List with Dynamic Background */}
                <TabsList className="relative flex w-full h-auto flex-wrap justify-center gap-2 p-2 border border-gray-300 dark:border-gray-800 rounded-lg bg-gray-200 dark:bg-gray-900/50 transition-colors duration-300">
                    {["Choose Role", "AI Questions", "Respond", "Feedback"].map((step, index) => (
                        <TabsTrigger
                            key={index}
                            value={`step${index + 1}`}
                            className="relative flex items-center px-3 py-2 rounded-lg whitespace-nowrap transition-all hover:bg-gray-300 dark:hover:bg-gray-800 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                        >
                            <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 dark:bg-gray-700 text-xs text-gray-900 dark:text-white transition-all data-[state=active]:bg-white data-[state=active]:text-black">
                                {index + 1}
                            </span>
                            <span className="text-gray-900 dark:text-white">{step}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* Tabs Content */}
                {[
                    {
                        title: "Choose Your Job Role & Skills",
                        description:
                            "Select from hundreds of job roles or customize your own. Specify your experience level and the skills you want to focus on.",
                        image: "/1.png",
                    },
                    {
                        title: "AI Asks Questions in Real Time",
                        description:
                            "Our AI interviewer adapts to your responses and asks relevant follow-up questions, just like a real interviewer would.",
                        image: "/2.png",
                    },
                    {
                        title: "Respond via Speech or Text",
                        description:
                            "Answer questions using your voice for a realistic experience, or type your responses if you prefer.",
                        image: "/2.png",
                    },
                    {
                        title: "Instant AI-Powered Feedback & Score",
                        description:
                            "Receive detailed feedback on your answers, including strengths, areas for improvement, and an overall score.",
                        image: "",
                    },
                ].map((step, index) => (
                    <TabsContent key={index} value={`step${index + 1}`} className="mt-8">
                        <div className="overflow-hidden rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/30">
                            <div className="grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
                                {/* Left Section */}
                                <div className="flex flex-col justify-center space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                                </div>

                                {/* Right Section */}
                                <div className="relative rounded-lg border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-950 p-2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-50"></div>
                                    <Image
                                        src={step.image}
                                        alt={`Step ${index + 1}: ${step.title}`}
                                        width='500'
                                        height='300'
                                        className="rounded w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default HowItWorks

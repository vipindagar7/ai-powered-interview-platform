import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import GetEarlyAccessForm from "./EarlyAccessForm";

import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
const Cta = () => {
    return (
        <section id="cta" className="py-20 md:py-32">
            <div className="">
                <div className="mx-auto max-w-4xl rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-100/80 dark:bg-gray-900/50 p-8 backdrop-blur-lg md:p-12 shadow-lg dark:shadow-none">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                        {/* Left Section */}
                        <div>
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    Ready to Ace Your Next Interview?
                                </span>
                            </h2>
                            <p className="mb-6 text-gray-700 dark:text-gray-300">
                                Join thousands of professionals who have improved their interview skills and landed their dream jobs.
                            </p>

                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        
                                {/* CTA Button */}

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline"
                                            size="sm"
                                            className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all hover:from-blue-600 hover:to-purple-600 hover:shadow-lg">
                                            Get Early Access!
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 sm:max-w-[600px]">
                                        <GetEarlyAccessForm />f
                                    </DialogContent>
                                </Dialog>

                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="relative rounded-xl border border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-50"></div>
                            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">What You will Get:</h3>
                            <ul className="space-y-3">
                                {[
                                    "5 practice interviews session",
                                    "AI-generated questions",
                                    "Detailed performance feedback",
                                    "Specific sessions to your role",
                                    "Interview confidence score",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 dark:text-green-500" />
                                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600 dark:text-gray-400">No credit card required</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Cta
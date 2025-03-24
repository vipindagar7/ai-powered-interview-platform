"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";
import {
    CheckCircle,
    MessageSquare,
    Mic,
    Video,
    Zap,
} from "lucide-react"
import { Pointer } from "../../components/magicui/pointer";
import { motion } from "motion/react";

export function Features() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {[
                {
                    title: "AI-Powered Question Generation",
                    description: "Job-specific, adaptive learning questions tailored to your industry and role",
                    icon: <MessageSquare className="h-10 w-10 text-purple-500" />,
                    gradient: "from-purple-500/20 to-purple-700/20",
                },
                {
                    title: "Real-Time Feedback",
                    description: "Detailed performance analysis & actionable improvement tips after each answer",
                    icon: <Zap className="h-10 w-10 text-blue-500" />,
                    gradient: "from-blue-500/20 to-blue-700/20",
                },
                {
                    title: "Speech & Text Input",
                    description: "Practice with voice-based or text-based interview modes to suit your preference",
                    icon: <Mic className="h-10 w-10 text-pink-500" />,
                    gradient: "from-pink-500/20 to-pink-700/20",
                },
                {
                    title: "Interview Session History",
                    description: "Access and review all past interview sessions with face tracking and body language insights",
                    icon: <Video className="h-10 w-10 text-cyan-500" />,
                    gradient: "from-cyan-500/20 to-cyan-700/20",

                },
            ].map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Card className="group relative h-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                        ></div>
                        <CardHeader className="relative">
                            <div className="mb-2">{feature.icon}</div>
                            <CardTitle className="text-lg md:text-xl text-gray-800 dark:text-gray-100">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="relative">
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </CardContent>
                        <Pointer>{feature.icon}</Pointer>
                        <CardFooter className="relative">
                            <div className="flex items-center text-sm text-purple-500 dark:text-purple-400">
                                <CheckCircle className="mr-1 h-4 w-4" /> Included in all plans
                            </div>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}

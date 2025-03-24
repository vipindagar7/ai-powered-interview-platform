"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

// Validation Schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
    const [responseMessage, setResponseMessage] = useState(null);
    const [responseType, setResponseType] = useState("success");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data) => {
        try {
            console.log("Submitting:", data);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setResponseMessage("Message sent successfully!");
                setResponseType("success");
                reset(); // Clear form on success
            } else {
                setResponseMessage(result.message || "Error sending message.");
                setResponseType("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResponseMessage("Something went wrong. Please try again later.");
            setResponseType("error");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
        >
            <Card className="w-full max-w-md shadow-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-blue-600 dark:text-blue-400">
                        Contact Us 📩
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Your Name"
                                {...register("name")}
                                className="mt-1 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                {...register("email")}
                                className="mt-1 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Write your message here..."
                                {...register("message")}
                                className="mt-1 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>

                        {responseMessage && (
                            <p className={`mt-4 text-center text-sm ${responseType === "success" ? "text-green-500" : "text-red-500"}`}>
                                {responseMessage}
                            </p>
                        )}
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
}

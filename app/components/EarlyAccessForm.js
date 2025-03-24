"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

// Validation Schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email"),
});

export default function EarlyAccessForm() {
    const [serverMessage, setServerMessage] = useState(""); // Stores server response
    const [errorMessage, setErrorMessage] = useState(""); // Stores error message

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    // Submits to API
    const onSubmit = async (data) => {
        setServerMessage(""); // Clear previous messages
        setErrorMessage("");

        try {
            const response = await fetch("/api/early-access", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            setServerMessage(result.message); // Show success message
            reset(); // Clear form after submission
        } catch (error) {
            setErrorMessage(error.message); // Show error message
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
        >
            <Card className="w-full max-w-md shadow-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-blue-600 dark:text-purple-400">
                        Get Early Access 🚀
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <Label htmlFor="name" className="dark:text-gray-300">Name</Label>
                            <Input
                                id="name"
                                placeholder="Your Name"
                                {...register("name")}
                                className="mt-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <Label htmlFor="email" className="dark:text-gray-300">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                {...register("email")}
                                className="mt-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 dark:bg-purple-600 text-white hover:bg-blue-700 dark:hover:bg-purple-700"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Join Waitlist"}
                        </Button>

                        {/* Success Message */}
                        {serverMessage && <p className="text-green-500 text-sm mt-2">{serverMessage}</p>}

                        {/* Error Message */}
                        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { ShineBorder } from "../../components/magicui/shine-border";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggleButton";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import GetEarlyAccessForm from "./EarlyAccessForm";
import ContactForm from "./ContactForm";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="w-full fixed p-4 shadow-md bg-transparent backdrop-blur-sm z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="font-bold">
                    <div className="relative overflow-hidden p-3 border rounded-4xl">
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                        <h1 className="text-xs md:text-lg lg:text-xl font-bold tracking-wide">
                            InterviewAI
                        </h1>
                    </div>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation Menu */}
                <div
                    ref={menuRef}
                    className={`${isOpen ? "flex flex-col items-center justify-center backdrop-blur-sm bg-white dark:bg-black z-50" : "hidden"} 
                    fixed lg:flex lg:items-center lg:space-x-6 absolute lg:static w-full left-0 top-16 lg:w-auto p-4 lg:p-0 transition-all ease-in-out duration-300`}
                >
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-6 w-full">
                            <NavigationMenuItem className="w-full">
                                <Link href="/#features" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`${navigationMenuTriggerStyle()} w-full text-center py-3`}
                                        onClick={() => setIsOpen(false)} // Close menu when clicked
                                    >
                                        Why Us?
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="w-full">
                                <Link href="/#how-it-works" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`${navigationMenuTriggerStyle()} text-center py-3 whitespace-nowrap`}
                                        onClick={() => setIsOpen(false)} // Close menu when clicked
                                    >
                                        How It Works?
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="py-3 flex gap-3">
                        <div className="flex flex-wrap gap-4">
                            {/* early access dialog */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setIsOpen(false)} // Close menu when clicked
                                    >
                                        Get Early Access!
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="border-gray-300 dark:border-gray-800  bg-none sm:max-w-[600px]">
                                    <GetEarlyAccessForm />
                                </DialogContent>
                            </Dialog>
                            {/* contact dialog */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setIsOpen(false)} // Close menu when clicked
                                    >
                                        Contact
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="border-gray-300 dark:border-gray-800 sm:max-w-[600px]">
                                    <ContactForm />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

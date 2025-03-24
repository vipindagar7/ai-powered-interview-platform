import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { Features } from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Cta from "./components/Cta";
import GetEarlyAccessForm from "./components/EarlyAccessForm";
import ContactForm from "./components/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
export default function Home() {
  return (
    <main className="flex flex-col p-4 py-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ParticlesBackground className="absolute" />

      <section className="backdrop-blur-sm mt-3 rounded-md p-4 mt-10 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight my-3">
            <span className="block bg-gradient-to-r from-green-400 via-cyan-500 to-green-400 dark:from-teal-300 dark:via-sky-400 dark:to-teal-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Ace Your Next
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-cyan-500 to-green-400 dark:from-teal-300 dark:via-sky-400 dark:to-teal-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Interview with AI-
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-cyan-500 to-green-400 dark:from-teal-300 dark:via-sky-400 dark:to-teal-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              -Powered Precision!
            </span>
          </h1>

          <p className="relative my-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-200 max-w-3xl leading-relaxed border p-4  rounded-lg">
            Get instant feedback, practice real-world scenarios, <br className="hidden sm:block" />
            and build confidence with AI-driven mock interviews.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-green-600 to-cyan-600 dark:from-teal-500 dark:to-sky-500 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all hover:from-cyan-600 hover:to-green-600 dark:hover:from-sky-500 dark:hover:to-teal-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
              >
                 Get Early Access
              </Button>
            </DialogTrigger>
            <DialogContent className="border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 sm:max-w-[600px]">
              <GetEarlyAccessForm />
            </DialogContent>
          </Dialog>

        </div>
      </section>

      {/* features section */}
      <section id="features" className="dark:backdrop-blur-sm rounded-md py-26 mt-18">
        <div className="flex justify-center flex-col items-center">
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-gray-400">
              Our AI-powered platform offers everything you need to prepare for your next interview
            </p>
          </div>
          <Features />
        </div>
      </section>
      {/* how it works */}
      <section id="how-it-works" className="backdrop-blur-sm rounded-md py-26 mt-18">
        <div className="">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-gray-400">Get started in minutes with our simple 4-step process</p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 md:py-32 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-black ">
        <Cta />
      </section>

    </main >
  );
}

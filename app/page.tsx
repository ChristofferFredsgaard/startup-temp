import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../components/max-width-wrapper/MaxWidthWrapper";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10 bg-red-500">Header</header>
        <main className="mb-auto mt-5">
          <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold md:text-5xl lg:text-6xl">
                Unlock a world of
                <span className="text-blue-400"> information </span>
                with just one question—no lengthy readings required!
              </h1>
              <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
                With NameX, you can engage in conversations with our PDF
                documents. Check out our uploaded files and begin posing
                questions instantly.
              </p>

              <Link href="/dashboard" target="_blank">
                Get started <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </MaxWidthWrapper>
        </main>
        <footer className="h-10 bg-blue-500">
          <Footer />
        </footer>
      </div>
    </>
  );
}

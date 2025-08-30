import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex bg-dark-900 text-light-100 p-8 md:p-12">
        <div className="flex flex-col justify-between w-full">
          <div className="h-8 w-8 rounded-md bg-orange-500" />
          <div className="mt-20">
            <h1 className="text-heading-2 font-jost">Just Do It</h1>
            <p className="mt-4 text-lead text-light-400/90 max-w-md">
              Join millions of athletes and fitness enthusiasts who trust Nike
              for their performance needs.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-light-100/90" />
              <span className="h-2 w-2 rounded-full bg-light-100/50" />
              <span className="h-2 w-2 rounded-full bg-light-100/30" />
            </div>
          </div>
          <p className="text-footnote text-light-400/70 mt-12">
            © 2024 Nike. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-md">
          {children}
          <div className="mt-10 text-center text-caption text-dark-700">
            Looking for products?{" "}
            <Link href="/" className="underline">
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

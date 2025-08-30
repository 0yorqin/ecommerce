import Link from "next/link";
import SocialProviders from "@/components/SocialProviders";
import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Sign In • Nike",
};

export default function SignInPage() {
  return (
    <div>
      <div className="text-center text-caption text-dark-700">
        New here?{" "}
        <Link href="/sign-up" className="underline">
          Create an account
        </Link>
      </div>

      <h1 className="mt-3 text-heading-3 text-center">Welcome back</h1>
      <p className="text-center text-dark-700">
        Sign in to continue your journey
      </p>

      <div className="mt-6">
        <SocialProviders />
      </div>

      <div className="my-6 flex items-center gap-3 text-caption text-dark-700">
        <div className="h-px flex-1 bg-light-300" />
        <span>Or sign in with</span>
        <div className="h-px flex-1 bg-light-300" />
      </div>

      <AuthForm
        mode="signin"
        title=""
        submitLabel="Sign In"
      />
    </div>
  );
}

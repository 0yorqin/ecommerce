import Link from "next/link";
import SocialProviders from "@/components/SocialProviders";
import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Sign Up • Nike",
};

export default function SignUpPage() {
  return (
    <div>
      <div className="text-center text-caption text-dark-700">
        Already have an account?{" "}
        <Link href="/sign-in" className="underline">
          Sign In
        </Link>
      </div>

      <h1 className="mt-3 text-heading-3 text-center">Join Nike Today!</h1>
      <p className="text-center text-dark-700">
        Create your account to start your fitness journey
      </p>

      <div className="mt-6">
        <SocialProviders />
      </div>

      <div className="my-6 flex items-center gap-3 text-caption text-dark-700">
        <div className="h-px flex-1 bg-light-300" />
        <span>Or sign up with</span>
        <div className="h-px flex-1 bg-light-300" />
      </div>

      <AuthForm
        mode="signup"
        title=""
        submitLabel="Sign Up"
      />
    </div>
  );
}

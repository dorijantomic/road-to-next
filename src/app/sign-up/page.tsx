import { CardCompact } from "@/components/card-compact";
import { SignUpForm } from "@/components/features/auth/components/sign-up-form";
import { signInPath } from "@/paths";
import Link from "next/link";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Sign Up"
        description="Create an account to get started"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<SignUpForm />}
        footer={
          <Link href={signInPath()} className="text-sm text-muted-foreground">
            Already have an account? Sign in
          </Link>
        }
      />
    </div>
  );
};

export default SignUpPage;

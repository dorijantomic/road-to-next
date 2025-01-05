import { CardCompact } from "@/components/card-compact";
import { SignInForm } from "@/components/features/auth/components/sign-in-form";
import { passwordForgotPath, signUpPath } from "@/paths";
import Link from "next/link";

const SignInPage: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Sign In"
        description="Sign in to your account"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<SignInForm />}
        footer={
          <>
            <Link href={signUpPath()} className="text-sm text-muted-foreground">
              No account? Sign up
            </Link>
            <Link
              href={passwordForgotPath()}
              className="text-sm text-muted-foreground"
            >
              Forgot password?
            </Link>
          </>
        }
      />
    </div>
  );
};

export default SignInPage;

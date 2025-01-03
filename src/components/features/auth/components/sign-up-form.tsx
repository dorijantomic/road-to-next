"use client";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { signUp } from "../actions/sign-up";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { useActionState } from "react";
import { Form } from "@/components/form/form";
import { FieldError } from "@/components/form/field-error";

const SignUpForm = () => {
  const [actionState, action] = useActionState(signUp, EMPTY_ACTION_STATE);
  return (
    <Form action={action} actionState={actionState}>
      <Input name="username" type="text" placeholder="Username" />
      <FieldError actionState={actionState} name="username" />

      <Input name="email" type="email" placeholder="Email" />
      <FieldError actionState={actionState} name="email" />

      <Input name="password" type="password" placeholder="Password" />
      <FieldError actionState={actionState} name="password" />

      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <FieldError actionState={actionState} name="confirmPassword" />

      <SubmitButton label="Sign Up" />
    </Form>
  );
};

export { SignUpForm };

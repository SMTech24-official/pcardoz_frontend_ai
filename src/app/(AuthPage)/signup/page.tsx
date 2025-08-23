"use client";

import { Suspense } from "react";
import SignUpForm from "../_components/SignUpForm";

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpForm />
    </Suspense>
  );
}
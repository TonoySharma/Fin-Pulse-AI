"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Form,
  Input,
  Button,
  TextField,
  Label,
  InputGroup,
  FieldError,
} from "@heroui/react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

// App configurations or dynamic integrations
import FadeUp from "@/components/FadeUp";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email: userData.email as string,
        password: userData.password as string,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "An error occurred during login.");
      } else if (data) {
        toast.success("Login successful!");
        router.push("/");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async (): Promise<void> => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch {
      toast.error("Google authentication failed.");
    }
  };

  return (
    <FadeUp>
      <div className="h-[830px] bg-slate-950 text-slate-100 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-6xl bg-slate-900/80 border border-slate-800/80 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden grid lg:grid-cols-12">

          {/* Left Panel: Gadget Store Branding */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between bg-gradient-to-br from-indigo-950/90 via-slate-900 to-slate-950 p-10 border-r border-slate-800/80 relative">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                GadgetHub Portal
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
                Upgrade Your <span className="text-indigo-400">Tech Journey</span>
              </h1>

              <p className="text-sm text-slate-400 leading-relaxed">
                Log in to unlock premium member deals, track your latest smartphone orders, and manage your tech accessories wishlist.
              </p>

              <div className="space-y-3.5 pt-4">
                {[
                  "Exclusive pre-order access to flagship devices",
                  "Track 100% genuine warranty & super-fast delivery",
                  "Instant trade-in calculations for your old phone",
                  "Dedicated 24/7 priority customer service",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Check className="size-3.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Trusted by 50,000+ Tech Enthusiasts</span>
              <span className="text-indigo-400 font-medium">Explore Deals &rarr;</span>
            </div>
          </div>

          {/* Right Panel: Login Interaction */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full space-y-6">

              <div className="text-center lg:text-left space-y-2">
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Welcome Back
                </h2>
                <p className="text-sm text-slate-400">
                  Enter your tech credentials to access GadgetHub
                </p>
              </div>

              {/* Social Login */}
              <Button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-slate-800/80
                 hover:bg-slate-800 text-slate-200 border border-slate-700/80 py-6 rounded font-medium transition-all"
              >
                <FcGoogle size={22} />
                <span>Continue with Google</span>
              </Button>

              <div className="flex items-center gap-4 py-1">
                <div className="h-[1px] flex-1 bg-slate-800" />
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  Or login with email
                </span>
                <div className="h-[1px] flex-1 bg-slate-800" />
              </div>

              {/* Form */}
              <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                {/* Email Input */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  className="w-full"
                  validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label className="text-xs font-medium text-slate-300">
                    Email Address
                  </Label>
                  <Input
                    placeholder="Inter Your Email"
                    className="w-full bg-slate-950/60 border border-slate-800 text-slate-100 placeholder:text-slate-600 rounded px-4 py-2.5 focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                  <FieldError className="text-xs text-rose-400 mt-1" />
                </TextField>

                {/* Password Input */}
                <TextField
                  name="password"
                  isRequired
                  className="w-full"
                  validate={(value) => {
                    if (value.length < 8) return "Minimum 8 characters required";
                    if (!/[A-Z]/.test(value)) return "Requires at least 1 uppercase letter";
                    if (!/[0-9]/.test(value)) return "Requires at least 1 number";
                    return null;
                  }}
                >
                  <Label className="text-xs font-medium text-slate-300">
                    Password
                  </Label>
                  <InputGroup className="bg-slate-950/60 border border-slate-800 rounded overflow-hidden focus-within:border-indigo-500 transition-colors">
                    <InputGroup.Input
                      name="password"
                      type={isVisible ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full bg-transparent text-slate-100 placeholder:text-slate-600 px-4 py-2.5 focus:outline-none"
                    />
                    <InputGroup.Suffix className="pr-2">
                      <Button
                        isIconOnly
                        variant="ghost"
                        className="text-slate-400 hover:text-slate-200"
                        onPress={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? (
                          <Eye className="size-4" />
                        ) : (
                          <EyeSlash className="size-4" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>
                  <FieldError className="text-xs text-rose-400 mt-1" />
                </TextField>

                {/* Submit Button */}
                <Button
                  type="submit"
                  isPending={isLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded shadow-lg shadow-indigo-600/20 transition-all mt-2"
                >
                  {isLoading ? "Signing in..." : "Log In"}
                </Button>
              </Form>

              <p className="text-center text-xs text-slate-400 pt-2">
                New to GadgetHub?{" "}
                <Link
                  href="/signUp"
                  className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors underline-offset-4 hover:underline"
                >
                  Create an account
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </FadeUp>
  );
}
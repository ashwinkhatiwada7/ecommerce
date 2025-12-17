"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SocialLogin() {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const GoogleSignIn = async () => {
    try {
      await authClient.signIn.social({ provider: "google" });
    } catch (e) {
      console.error(e);
    }
  };
  const Logout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {session ? (
        <button onClick={Logout}>LOgout</button>
      ) : (
        <button onClick={GoogleSignIn}>Login with google</button>
      )}
    </div>
  );
}

9828786531;

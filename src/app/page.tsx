"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/hooks/useAuthContext";

import HomeComponent from "@/components/HomeComponent/index"
import styles from "./index.module.css"

export default function Home() {
  const { state: userState } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!userState.user) {
      router.push('/login');
    }
  }, [userState, router]);

  return (
    <>
      <main className="bg-gray-500">
        <div className={styles.pages}>
          <HomeComponent />
        </div>
      </main>
    </>
  );
}

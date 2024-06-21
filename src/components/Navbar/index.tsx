"use client";

import Link from "next/link"
import styles from "./index.module.css"
import { useLogout } from "@/hooks/useLogout"
import { useAuthContext } from "@/hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout()
  const { state } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link href={"/"}>
          <h1 className="font-bold">Workout Buddy</h1>
        </Link>
        <nav className={styles.nav}>
          {state.user && (
            <div>
              <span>{state.user?.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!state.user && (
            <div>
              <Link href={"/login"}>Login</Link>
              <Link href={"/signup"}>Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
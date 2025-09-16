"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const signInComponent = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div>
          <p> Welcome {session.user.name} </p>
          <button onClick={() => signOut()}> Sign Out</button>
        </div>
      ) : (
        <button className="text-3xl" onClick={() => signIn("github")}>
          {" "}
          Sign In With GitHub
        </button>
      )}
    </div>
  );
};

export default signInComponent;

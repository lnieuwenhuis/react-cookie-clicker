"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [cookies, setCookies] = useState(0);
  function addCookie() {
    setCookies(cookies + 1);
  }

  return (
    <div>
      <div>
        <h1>Cookie Clicker</h1>
        <button onClick={addCookie}>
          <Image
            src="/cookie.png"
            alt="Next.js Logo"
            width={500}
            height={500}
            className="animate-[spin_10s_linear_infinite]"
          />
        </button>
      </div>
      <div>
        {cookies >= 10 && <h1>Gefeliciteerd, je hebt 10 koekjes</h1>}
        <h1>{cookies}</h1>
      </div>
    </div>
  );
}

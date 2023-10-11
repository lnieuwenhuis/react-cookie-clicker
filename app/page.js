import Image from "next/image";

let cookies = 0;

function addCookie() {
  cookies++;
}

export default function Home() {
  return (
    <div>
      <div>
        <h1>Cookie Clicker</h1>
        <button onClick={<h1>test</h1>}>
          <Image
            src="/cookie.png"
            alt="Next.js Logo"
            width={500}
            height={500}
          />
        </button>
      </div>
      <div>
        <h1>{cookies}</h1>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h- h-screen grid items-center p-32 bg-cjsPink">
      <div className="w-1/2 p-24 m-auto bg-cjsWhite text-cjsBrown border border-cjsBrown rounded shadow-md">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className="text-cjsBrown rounded shadow-sm" href="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}

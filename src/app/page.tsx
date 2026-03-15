import Link from "next/link";
import { Button } from "./components/button";

export default function Home() {
	return (
		<>
      <section>
        <h1>
          about
        </h1>
        <Link href="/about">
          <Button >about</Button>
        </Link>
      </section>
		</>
	);
}

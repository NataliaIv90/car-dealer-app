import Link from "next/link";

const centralBtns = [
  { name: 'Buy', link: '#', },
  { name: 'How it work', link: '#' },
  { name: 'Review', link: '#' },
  { name: 'Service', link: '#', },
];

export const Header = () => (
  <header className="bg-white text-slate-950">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href="/" className="m-1.5 p-1.5 text-back">
          Home
        </Link>
      </div>
      <div className="flex lg:flex-1 justify-start">
        {centralBtns.map((btn) => (
          <Link key={btn.name} href={btn.link} className="m-1.5 p-1.5 text-back">
            {btn.name}
          </Link>

        ))}
      </div>
      <div className="flex lg:flex-1">
        <button className="m-1.5 p-1.5 text-back" disabled>
          Login
        </button>
      </div>
    </nav>
  </header>
);

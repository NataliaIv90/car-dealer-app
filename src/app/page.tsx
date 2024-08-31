import Filter from "@/components/filter";

export default function Home() {
  return (
    <main >
      <h1 className="text-gray-950 text-4xl p-5 text-center">
        You choose your car online. We inspect it and deliver it.
      </h1>
      <Filter />
    </main>
  );
}

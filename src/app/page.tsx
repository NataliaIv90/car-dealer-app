import Filter from '@/components/filter';

export default function Home() {
  return (
    <main className='py-10'>
      <h1 className='text-black text-2xl p-5 text-center'>You choose your car online. We inspect it and deliver it.</h1>
      <Filter />
    </main>
  );
}

import { Button } from 'ui';

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h2>Next.js!</h2>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20  text-center">
        <Button />
        <Button />
        <Button />
        <h3 className="text-amber-700 hover:text-orange-500 ">yay</h3>
      </main>
    </div>
  );
}

export default Home;

import { SimpleWidget } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información General</span>

      <div className="flex flex-wrap items-center justify-center p-2">
        <SimpleWidget />
      </div>
    </div>
  );
}
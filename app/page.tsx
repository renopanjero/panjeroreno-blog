import HeaderNav from "@/components/nav/HeaderNav";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center w-full md:max-w-3xl mx-auto overflow-hidden">
        <HeaderNav />
      </div>
      <div className="flex flex-col items-center mt-4"></div>
    </div>
  );
}

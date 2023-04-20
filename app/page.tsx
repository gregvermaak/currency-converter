import Input from "@/components/InputGroup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-bold">Currency Converter</h1>
      <div>
        <Input />
        <Input />
      </div>
    </main>
  );
}

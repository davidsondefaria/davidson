import Header from "../components/organisms/Header";

export default function Main() {
  return (
    <>
      <Header />
      <div className="flex w-full min-h-screen flex-col">
        <div className="border h-[1024px] flex justify-center items-center">
          First
        </div>
        <div className="border h-[1024px] flex justify-center items-center">
          Second
        </div>
        <div className="border h-[1024px] flex justify-center items-center">
          Third
        </div>
      </div>
    </>
  );
}

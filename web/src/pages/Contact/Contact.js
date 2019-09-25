import Header from "src/components/Header";
import Menu from "src/components/Menu";

export default () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8">
      <Header />
      <main className="flex">
        <Menu />
        <section className="flex-1">
          <h1>Contact</h1>
        </section>
      </main>
    </div>
  );
};

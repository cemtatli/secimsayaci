import ThemeChanger from "./theme-changer";

const Header = () => {
  return (
    <header className="flex h-15 items-center justify-center border bg-white dark:bg-zinc-900 border-zinc-200 backdrop-blur-sm dark:border-opacity-10">
      <nav className="flex h-full w-full items-center justify-between px-2">
        <h3 className="select-none px-2 text-xl font-semibold dark:text-white text-slate-950">
          Seçim Sayacı
        </h3>
        <ThemeChanger />
      </nav>
    </header>
  );
};

export default Header;

import ThemeChanger from "./theme-changer";

const Header = () => {
  return (
    <header className="sticky top-2 flex h-15 items-center justify-center rounded-full border z-30  border-zinc-200 text-brand-gray-800 backdrop-blur dark:border-opacity-10">
      <nav className="flex h-full w-full items-center justify-between px-2 ">
        <h3 className="select-none px-2 text-xl font-semibold dark:text-white ">
          Seçim Sayacı <span className="text-xs font-bold tracking-tight">v2.0</span>
        </h3>
        <ThemeChanger />
      </nav>
    </header>
  );
};

export default Header;

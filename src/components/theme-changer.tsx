import React, { useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ThemeContext } from "../context/theme-context";

const ThemeChanger: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  interface ThemeOption {
    value: string;
    label: string;
    icon: JSX.Element;
  }

  const themeOptions: ThemeOption[] = [
    {
      value: "system",
      label: "Sistem",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      value: "light",
      label: "Açık Mod",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ),
    },
    {
      value: "dark",
      label: "Koyu Mod",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          <path d="M19 3v4"></path>
          <path d="M21 5h-4"></path>
        </svg>
      ),
    },
  ];

  return (
    <Menu as="div" className={"select-none"}>
      {({ open }) => (
        <>
          <Menu.Button
            onClick={toggleMenu}
            className="flex h-10 w-full items-center justify-center gap-x-2.5 rounded-full border border-zinc-200  px-3 text-sm font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          >
            {themeOptions.find((option) => option.value === theme)?.icon}
            <span className="hidden md:inline-flex">
              {themeOptions.find((option) => option.value === theme)?.label}
            </span>
          </Menu.Button>
          <Transition
            show={open}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Menu.Items className="absolute right-0 mt-4 w-36 divide-y divide-gray-200 rounded-2xl border border-zinc-200 bg-white font-medium transition-all duration-200 focus:outline-none dark:border-opacity-10 dark:border-opacity-10 dark:bg-zinc-900">
              <div className="p-1">
                {themeOptions.map((option) => (
                  <Menu.Item key={option.value}>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-brand-blue-100 text-brand-blue-600 dark:bg-zinc-800 dark:text-white"
                            : "text-gray-800"
                        } group flex w-full items-center rounded-2xl px-4 py-2 text-sm transition-all duration-300 dark:text-zinc-200 `}
                        onClick={() => handleThemeChange(option.value)}
                      >
                        {option.icon}
                        <span className="ml-2.5">{option.label}</span>
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default ThemeChanger;

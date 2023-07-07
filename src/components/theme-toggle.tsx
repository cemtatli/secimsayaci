import React, { useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ThemeContext } from "../context/theme-context";
import { Laptop2, Lightbulb, LightbulbOff } from "lucide-react";

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
      icon: <Laptop2 size={20} />,
    },
    {
      value: "light",
      label: "Açık Mod",
      icon: <Lightbulb size={20} />,
    },
    {
      value: "dark",
      label: "Koyu Mod",
      icon: <LightbulbOff size={20} />,
    },
  ];

  return (
    <Menu as="div" className="select-none">
      {({ open }) => (
        <>
          <Menu.Button
            onClick={toggleMenu}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 px-3 text-sm font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
            {themeOptions.find((option) => option.value === theme)?.icon}
          </Menu.Button>
          <Transition
            show={open}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Menu.Items className="absolute right-0 mt-3 w-40 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white font-medium transition-all duration-200 dark:border-opacity-10 dark:bg-gray-900">
              <div className="p-1">
                {themeOptions.map((option) => (
                  <Menu.Item key={option.value}>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-white"
                            : "text-gray-800"
                        } group flex w-full items-center rounded-2xl px-4 py-2 text-sm transition-all duration-300 dark:text-gray-200`}
                        onClick={() => handleThemeChange(option.value)}>
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

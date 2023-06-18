import React, { useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ElectionContext } from "../context/election-context";

const CustomDialog: React.FC = () => {
  const { electionType } = useContext(ElectionContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const getElectionDate = () => {
    return electionType === "yerel"
      ? `Her 5 senede bir yapılan belediye seçimleri son olarak 2019 yılında yapılmıştır.
    Buna göre bir sonraki belediye seçimleri 31 Mart`
      : "Bir sonraki genel seçimler 14 Mayıs 2028 veya daha erken";
  };

  return (
    <section className="flex items-center justify-center">
      <button
        className="flex items-center gap-x-2.5 rounded-full border transition-colors duration-300 dark:border-white dark:text-white dark:hover:bg-white/10 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent focus:outline-none"
        onClick={toggleDialog}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        Seçim Tarihi Hakkında Bilgilendirme
      </button>
      <Transition.Root show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={toggleDialog}>
          <div className="flex min-h-screen items-center justify-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-[350px] rounded bg-white p-4 lg:w-[1024px]">
                <Dialog.Title as="h3" className="mb-2 md:text-lg font-semibold">
                  Bilgilendirme
                </Dialog.Title>
                <hr className="my-2.5" />
                <p>
                  {getElectionDate()} tarihinde yapılacaktır. Bu sayaç, en son açıklanan seçim
                  tarihine göre geri sayım yapmaktadır. Aksi bir tarihte sayaç güncellenir.
                </p>
                <div className="mt-4 flex justify-end">
                  <button
                    className="mr-2 text-sm font-bold hover:text-blue-500"
                    onClick={toggleDialog}
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
};

export default CustomDialog;

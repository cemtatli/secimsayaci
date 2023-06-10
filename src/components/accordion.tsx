import { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { ElectionContext } from "../context/election-context";

const AccordionMenu = () => {
  const { electionType } = useContext(ElectionContext);

  const accordionItems = {
    yerel: [
      {
        id: 1,
        title: "Sandıklar ne zaman açılıyor, ne zaman kapanıyor ?",
        content: "Tüm yurtta oy verme saatleri 08.00-17.00 olarak uygulanacak.",
      },
      {
        id: 2,
        title: "Yerel seçimler öne çekilebilir mi? Ertelenebilir mi ?",
        content: `Anayasa'nın "Seçimlerin geriye bırakılması ve ara seçimler" başlıklı 78. maddesinde şu yazılı: "Savaş sebebiyle yeni seçimlerin yapılmasına imkân görülmezse, Türkiye Büyük Millet Meclisi, seçimlerin bir yıl geriye bırakılmasına karar verebilir.`,
      },
      {
        id: 3,
        title: "2024 yılında yerel seçimlerde neleri seçeceğiz ?",
        content: `
        - Büyükşehir Belediye Başkanı
        - İl Belediye Başkanı
        - İlçe Belediye Başkanı
        - Belde Belediye Başkanı
        - Köy muhtarları ve ihtiyar heyeti üyeleri
        - Mahalle muhtarları
        - İl genel meclis ve belediye meclis üyeleri seçilir.`,
      },
    ],
    genel: [
      {
        id: 1,
        title: "Cumhurbaşkanı En Fazla Kaç Yıl Görevde Kalabilir?",
        content:
          "Cumhurbaşkanı seçimi kanunu uyarınca, bir Cumhurbaşkanı en fazla iki dönem görev yapabilir. Fakat, ikinci dönemde Meclis tarafından seçimlerin yenilenmesine karar verilirse, mevcut Cumhurbaşkanı bir kez daha aday olabilir.",
      },
      {
        id: 2,
        title: "Cumhurbaşkanlığı Seçimi Periyodu Nedir?",
        content: "Türkiye'de Cumhurbaşkanlığı seçimleri her beş yılda bir düzenlenmektedir.",
      },
      {
        id: 3,
        title: "Cumhurbaşkanı Seçimi için Gerekli Oy Oranı Nedir?",
        content:
          "Bir adayın Cumhurbaşkanı seçilebilmesi için geçerli oyların salt çoğunluğunu (yüzde 50 + 1 oy) elde etmesi gerekmektedir.",
      },
      {
        id: 4,
        title: "Cumhurbaşkanı Seçimi Süreci Nasıldır?",
        content:
          "Cumhurbaşkanlığı seçiminin ilk turu bir gün içinde tamamlanır. Eğer adaylardan hiçbiri salt çoğunluğu (yüzde 50 + 1 oy) elde edemezse, birinci turda en yüksek oyu alan iki aday, YSK tarafından belirlenen ileri bir tarihte, bir günlük sürecek ikinci turda tekrar yarışır.",
      },
      {
        id: 5,
        title: "Cumhurbaşkanlığı Süresi Ne Zaman Değiştirildi?",
        content:
          "2007 Türkiye anayasa değişikliği referandumu sonrasında, Cumhurbaşkanlığı süresi değiştirilmiştir. Daha önce yedi yıl ve en fazla tek dönem olan süre, referandumun ardından beş yıl ve en fazla iki dönem şeklinde yeniden düzenlenmiştir.",
      },
    ],
  };

  return (
    <section className="space-y-4 mb-5">
      <h2 className="font-semibold text-base dark:text-white text-center md:text-start">
        Sıkça Sorulan Sorular
      </h2>
      {accordionItems[electionType].map((item) => (
        <Disclosure key={item.id}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-3.5 text-sm font-semibold text-left bg-slate-950 dark:bg-white dark:text-slate-950 text-white rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className="font-medium uppercase">{item.title}</span>
                <svg
                  className={`w-5 h-5 ml-2 transform transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path
                    d="M6 15l6-6 6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition-all duration-300 ease-out"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-96"
                leave="transition-all duration-300 ease-in"
                leaveFrom="opacity-100 max-h-96"
                leaveTo="opacity-0 max-h-0"
              >
                <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm font-medium text-gray-900 dark:text-zinc-100">
                  {item.content}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </section>
  );
};

export default AccordionMenu;

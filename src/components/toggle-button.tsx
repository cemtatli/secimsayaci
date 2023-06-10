import { useContext } from "react";
import { ElectionContext } from "../context/election-context";
import { Switch } from "@headlessui/react";

const ToggleButton = () => {
  const { electionType, setElectionType } = useContext(ElectionContext);

  const handleToggle = () => {
    const newElectionType = electionType === "yerel" ? "genel" : "yerel";
    setElectionType(newElectionType);
  };

  return (
    <Switch.Group>
      <section className="flex items-center justify-center">
        <Switch.Label className="mr-4 text-slate-950 dark:text-white text-sm font-medium">
          Yerel Seçimler
        </Switch.Label>
        <Switch
          checked={electionType === "genel"}
          onChange={handleToggle}
          className={`${
            electionType === "genel"
              ? "bg-blue-500 focus:ring-blue-400"
              : "bg-gray-200 focus:ring-gray-400"
          } relative inline-flex items-center h-6 rounded-full w-11 dark:bg-blue-500 transition-colors duration-300 ease-in-out focus:outline-none`}
        >
          <span className="sr-only">Toggle</span>
          <span
            className={`${
              electionType === "genel" ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out`}
          />
        </Switch>
        <Switch.Label className="ml-4 text-slate-950 dark:text-white text-sm font-medium">
          Genel Seçimler
        </Switch.Label>
      </section>
    </Switch.Group>
  );
};

export default ToggleButton;

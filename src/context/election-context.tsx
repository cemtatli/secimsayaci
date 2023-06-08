import React, { createContext, useState } from "react";

type ElectionType = "yerel" | "genel";

type ElectionContextType = {
  electionType: ElectionType;
  setElectionType: (type: ElectionType) => void;
};

export const ElectionContext = createContext<ElectionContextType>({
  electionType: "yerel",
  setElectionType: () => {},
});

export const ElectionProvider: React.FC = ({ children }) => {
  const [electionType, setElectionType] = useState<ElectionType>("yerel");

  const contextValue: ElectionContextType = {
    electionType,
    setElectionType,
  };

  return <ElectionContext.Provider value={contextValue}>{children}</ElectionContext.Provider>;
};

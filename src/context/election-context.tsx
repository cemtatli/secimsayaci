import React, { createContext, useState, ReactNode } from "react";

type ElectionType = "yerel" | "genel";

type ElectionContextType = {
  electionType: ElectionType;
  setElectionType: (type: ElectionType) => void;
};

export const ElectionContext = createContext<ElectionContextType>({
  electionType: "yerel",
  setElectionType: () => {
    //
  },
});

type ElectionProviderProps = {
  children: ReactNode;
};

export const ElectionProvider: React.FC<ElectionProviderProps> = ({ children }) => {
  const [electionType, setElectionType] = useState<ElectionType>("yerel");

  const handleSetElectionType = (type: ElectionType) => {
    setElectionType(type);
  };

  const contextValue: ElectionContextType = {
    electionType,
    setElectionType: handleSetElectionType,
  };

  return <ElectionContext.Provider value={contextValue}>{children}</ElectionContext.Provider>;
};

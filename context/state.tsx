import { createContext, useContext, useState } from "react";

interface AppContextState {
  isPetitionModalOpen: boolean;
}

interface IThemeContext {
  state: AppContextState;
  togglePetitionModal: () => void;
}

const AppContext = createContext<IThemeContext>({
  state: { isPetitionModalOpen: false },
  togglePetitionModal: () => ({
    isPetitionModalOpen: false,
  }),
});

export function AppWrapper({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) {
  const [state, setState] = useState<AppContextState>({
    isPetitionModalOpen: false,
  });

  return (
    <AppContext.Provider
      value={{
        state,
        togglePetitionModal: () =>
          setState({
            ...state,
            isPetitionModalOpen: !state.isPetitionModalOpen,
          }),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

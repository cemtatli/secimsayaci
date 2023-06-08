import { ThemeProvider } from "./context/theme-context";
import MainLayout from "./layout/main-layout";
import Header from "./components/header";
import Timer from "./components/timer";
import Dialog from "./components/dialog";
import { ElectionProvider } from "./context/election-context";
import ToggleButton from "./components/toggle-button";
import AccordionMenu from "./components/accordion";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <ElectionProvider>
          <Header />
          <main>
            <ToggleButton />
            <Timer />
            <Dialog />
            <AccordionMenu />
          </main>
        </ElectionProvider>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;

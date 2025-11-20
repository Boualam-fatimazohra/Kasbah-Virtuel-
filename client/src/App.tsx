import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { LanguageProvider } from '@/contexts/LanguageContext';
import VirtualTours from "./pages/VirtualTours";
import Games from "./pages/Games";
import Activities from "./pages/Activities";
import IntangibleHeritage from "./pages/IntangibleHeritage";
import Podcast from "./pages/Podcast";
import Tourism from "./pages/Tourism";
import Videos from "./pages/Videos";
import GamesBackOffice from "./pages/Admin/GamesBackOffice"
import Authentification from "./pages/Admin/Authentification";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/virtual-tours" component={VirtualTours} />
      <Route path="/intangible-heritage" component={IntangibleHeritage} />
      <Route path="/handicrafts" component={Activities} />
      <Route path="/games" component={Games} />
      <Route path="/admin/games" component={GamesBackOffice} /> {/* ✅ Corrigé */}
      <Route path="/videos" component={Videos} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/Admin" component={Authentification} />
      <Route path="/tourism" component={Tourism} />
      <Route path="/Activities" component={Activities} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
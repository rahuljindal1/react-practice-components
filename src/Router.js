import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accordion from "./components/Accordion";
import ColorGenerator from "./components/ColorGenerator";
import Rating from "./components/Rating";
import ImageSlider from "./components/ImageSlider";
import { treeViewConfig } from "./data/tree-view";
import TreeView from "./components/TreeView";
import QRGenerator from "./components/QRGenerator";
import LightDarkTheme from "./components/LightDarkTheme";
import CustomScrollIndicator from "./components/CustomScrollIndicator";
import TabView from "./components/TabView";
import { tabConfig } from "./data/tab-view";
import ModalContainer from "./components/Modal";
import GithubFinder from "./components/GithubFinder";
import AutoComplete from "./components/AutoComplete";
import TicTacToe from "./components/TicTacToe";

export default function Router() {
  const router = createBrowserRouter([
    { path: "/accordion", element: <Accordion /> },
    { path: "/color-generator", element: <ColorGenerator /> },
    { path: "/rating", element: <Rating /> },
    { path: "/image-slider", element: <ImageSlider /> },
    { path: "/tree-view", element: <TreeView config={treeViewConfig} /> },
    { path: "/qr-generator", element: <QRGenerator /> },
    { path: "/light-dark-theme", element: <LightDarkTheme /> },
    { path: "/custom-scroll-indicator", element: <CustomScrollIndicator /> },
    { path: "/tab-view", element: <TabView config={tabConfig} /> },
    { path: "/modal", element: <ModalContainer /> },
    { path: "/github-finder", element: <GithubFinder /> },
    { path: "/auto-complete", element: <AutoComplete /> },
    { path: "/tic-tac-toe", element: <TicTacToe /> },
    { path: "*", element: <Accordion /> },
  ]);

  return <RouterProvider router={router} />;
}

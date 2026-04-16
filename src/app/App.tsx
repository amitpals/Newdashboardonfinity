import WidgetOnWindowHome from "../imports/WidgetOnWindowHome/WidgetOnWindowHome";

export default function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-gradient-to-br from-[rgb(199,232,255)] to-[rgb(255,255,196)]">
      <div className="mx-auto max-w-[1920px] h-full">
        <WidgetOnWindowHome />
      </div>
    </div>
  );
}
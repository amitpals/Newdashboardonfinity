import WidgetOnWindowHome from "../imports/WidgetOnWindowHome/WidgetOnWindowHome";

export default function App() {
  return (
    <div className="w-full h-[100dvh] overflow-hidden bg-gradient-to-br from-[rgb(199,232,255)] to-[rgb(255,255,196)]">
      <div className="h-full min-h-0 overflow-hidden">
        <WidgetOnWindowHome />
      </div>
    </div>
  );
}

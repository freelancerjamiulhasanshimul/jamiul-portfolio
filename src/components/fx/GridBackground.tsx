export default function GridBackground() {
  return (
    <>
      <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-deep" />
        <div
          className="animate-aurora absolute -top-[30%] left-[8%] h-[70vh] w-[60vw] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(closest-side, rgba(77,163,255,0.13), transparent)" }}
        />
        <div
          className="animate-aurora absolute right-[-10%] top-[30%] h-[75vh] w-[55vw] rounded-full blur-[140px] [animation-delay:-6s]"
          style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.11), transparent)" }}
        />
        <div
          className="animate-aurora absolute bottom-[-25%] left-[25%] h-[65vh] w-[50vw] rounded-full blur-[150px] [animation-delay:-11s]"
          style={{ background: "radial-gradient(closest-side, rgba(127,224,210,0.07), transparent)" }}
        />
        <div className="grid-lines absolute inset-0" />
      </div>
      <div className="noise-layer" aria-hidden="true" />
    </>
  );
}

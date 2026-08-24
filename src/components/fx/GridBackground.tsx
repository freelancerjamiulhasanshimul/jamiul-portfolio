export default function GridBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -top-32 right-[-10%] h-[480px] w-[60vw] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(74,108,143,0.07), transparent)" }}
      />
      <div
        className="absolute bottom-[-20%] left-[-12%] h-[520px] w-[55vw] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(closest-side, rgba(192,122,91,0.06), transparent)" }}
      />
    </div>
  );
}

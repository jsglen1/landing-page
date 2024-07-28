import SectionStartDesktop from "./section-start-desktop";
import SectionStartMobile from "./section-start-mobile";

export default function SectionStart() {
  return (
    <>
      <div className="hidden md:block">
        <SectionStartDesktop />
      </div>

      <div className="block md:hidden">
        <SectionStartMobile />
      </div>
    </>
  );
}

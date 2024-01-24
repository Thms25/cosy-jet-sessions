import { arrowDown } from "@/utils/data/svgData";
import Image from "next/image";

export default function DynamicBanner({ title, subtitle, caption }) {
  return (
    <section>
      <div className="m-auto p-4 md:p-12 md:flex items-start justify-around lg:text-right">
        <Image
          priority
          className="object-cover w-1/2 h-full m-auto"
          src="/images/cjs-banner.png"
          alt="cjs-banner"
          width={1710}
          height={751}
        />
        <div className="w-1/2 m-auto">
          <h2 className="lg:text-xl text-cjsBrown font-title">{title}</h2>
          <h4 className="text-lg text-cjsPink font-title my-4">{subtitle}</h4>
        </div>
      </div>
      <p className="text-md text-cjsBrown font-main mb-6">{caption}</p>
      <div className="w-8 h-8 animate-bounce m-auto">{arrowDown}</div>
    </section>
  );
}

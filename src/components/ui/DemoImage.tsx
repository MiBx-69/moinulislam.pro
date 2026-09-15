import Image from "next/image";
import { cn } from "@/lib/utils";

interface DemoImageProps {
  src: string;
  alt: string;
  type?: "browser" | "mobile" | "minimal";
  width?: number;
  height?: number;
  containerClassName?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function DemoImage({
  src,
  alt,
  type = "minimal",
  width,
  height,
  containerClassName,
  imageClassName,
  priority = false,
}: DemoImageProps) {
  
  // Default dimensions based on type if not explicitly provided
  const defaultWidth = type === "mobile" ? 600 : 1600;
  const defaultHeight = type === "mobile" ? 1200 : 900;

  if (type === "browser") {
    return (
      <div className={cn("relative w-full max-w-[1200px] mx-auto rounded-[22px] md:rounded-[28px] overflow-hidden shadow-[0_20px_40px_rgba(31,27,23,0.1)] border border-[#E6E0D5] bg-white flex flex-col", containerClassName)}>
        {/* Professional Mac window controls mock */}
        <div className="h-12 md:h-14 bg-[#EFEAE1] border-b border-[#E6E0D5] flex items-center px-4 md:px-6 gap-2 md:gap-2.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-90" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-90" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-90" />
        </div>
        <div className="relative w-full flex justify-center items-start">
          <Image
            src={src}
            alt={alt}
            width={width || defaultWidth}
            height={height || defaultHeight}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className={cn(
              "w-full h-auto block object-contain",
              imageClassName
            )}
          />
        </div>
      </div>
    );
  }

  // mobile or minimal (no fake CSS frame)
  return (
    <div className={cn("relative w-full flex justify-center items-center max-w-[1200px] mx-auto", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        width={width || defaultWidth}
        height={height || defaultHeight}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        className={cn(
          "w-full h-auto block object-contain drop-shadow-2xl",
          imageClassName
        )}
      />
    </div>
  );
}

import { cn } from "@reputable/lib/utils";

export const Sidebar = ({ isOpen }: { isOpen?: boolean }) => {
  const windowClassName = cn(
    "h-full absolute top-0 right-0 bg-white lg:bg-white/30 lg:backdrop-blur-xl h-full lg:h-auto lg:relative z-[999] w-0 duration-300 transition-all border-l border-neutral-200",
    "dark:bg-black lg:dark:bg-black/30",
    !isOpen && "border-r-transparent",
    isOpen && "w-80 border-r border-r-neutral-200 dark:border-r-neutral-800"
  );

  return (
    <div className={windowClassName}>
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full p-6 overflow-auto">test</div>
      </div>
    </div>
  );
};

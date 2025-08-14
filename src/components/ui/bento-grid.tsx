"use client";

import { cn } from "../../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",
        className
      )}
      style={{
        gridAutoRows: 'min-content'
      }}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-[0_0_15px_rgba(106,90,205,0.2)] transition-all duration-300 p-6 flex flex-col relative overflow-hidden",
        className
      )}
    >
      {header}
      <div className="flex flex-col h-full">
        <div className="group-hover/bento:translate-x-1 transition-all duration-300 flex-grow">
          {icon && <div className="mb-4">{icon}</div>}
          {title && <div className="mb-3">{title}</div>}
          {description && (
            <div className="font-light text-sm leading-relaxed mb-6">{description}</div>
          )}
        </div>
        <div className="mt-auto pt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

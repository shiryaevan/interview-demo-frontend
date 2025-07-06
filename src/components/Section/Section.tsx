import type { PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren) => {
  return <div className="w-full max-w-5xl mx-auto px-4">{children}</div>;
};

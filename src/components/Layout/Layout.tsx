import type { PropsWithChildren } from "react";

import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Section>
        <div className="py-6">{children}</div>
      </Section>
    </>
  );
};

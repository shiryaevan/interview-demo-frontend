import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import type { PropsWithChildren } from "react";

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

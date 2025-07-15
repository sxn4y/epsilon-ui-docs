"use client";

import Button from "@/components/ui/button";
import SReveal from "@/components/ui/sReveal";
import { ELayout, ESidebar, EContentbar } from "@/components/ui/eLayout";
import TextBox from "@/components/ui/textBox";

export default function Home() {
  return (
    <ELayout reveal={true} stagger={0.2} staggerFrom="end">
      <ESidebar>
        <form className="flex gap-2">
          <TextBox id="test"/>
          <Button variant="secondary" parallax type="submit">
            Submit
          </Button>
        </form>
      </ESidebar>
      <EContentbar>
        <SReveal delay={0.5} opacity={0} className="flex flex-wrap justify-center h-full w-full">
          <Button
            onClick={() => void 0}
            className="self-center hover:shadow-lg font-bold m-2"
            variant="primary"
            parallax
          >
            Primary
          </Button>
          <Button
            onClick={() => void 0}
            className="self-center hover:shadow-lg font-bold m-2"
            variant="secondary"
            parallax
          >
            Secondary
          </Button>
          <Button
            onClick={() => void 0}
            className="self-center hover:shadow-lg font-bold m-2"
            variant="outline"
            parallax
          >
            Outline
          </Button>
          <Button
            onClick={() => void 0}
            className="self-center hover:shadow-lg font-bold m-2"
            variant="positive"
            parallax
          >
            Positive
          </Button>
          <Button
            onClick={() => void 0}
            className="self-center hover:shadow-lg font-bold m-2"
            variant="danger"
            parallax
          >
            Danger
          </Button>
          <Button
            onClick={() => void 0}
            className="self-center hover:shadow-lg font-bold m-2"
            variant="link"
          >
            Link
          </Button>
          <Button
            onClick={() => void 0}
            className="self-center hover:shadow-lg font-bold m-2"
            variant="fancy"
            parallax
          >
            Fancy
          </Button>
        </SReveal>
      </EContentbar>
      <ESidebar side="right">sdfgsdfg</ESidebar>
    </ELayout>
  );
}

"use client";

import Button from "@/components/ui/button";
import SReveal from "@/components/ui/sReveal";
import { ELayout, ESidebar } from "@/components/ui/eLayout";

export default function Home() {
  return (
    <SReveal className="flex flex-wrap justify-center h-screen">
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
  );
}

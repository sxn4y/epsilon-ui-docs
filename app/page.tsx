"use client";

import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center space-around h-screen">
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
        variant="danger"
        parallax
      >
        Danger
      </Button>
      <Button
        onClick={() => void 0}
        className="self-center hover:shadow-lg font-bold m-2"
        variant="link"
        parallax
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
    </div>
  );
}

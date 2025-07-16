"use client";

import Button from "@/components/ui/button";
import SReveal from "@/components/ui/sReveal";
import { ELayout, ESidebar, EContentbar } from "@/components/ui/eLayout";
import TextBox from "@/components/ui/textBox";
import { GoSearch } from "react-icons/go";
import { NavBar, NavItem } from '@/components/ui/navbar'; // Usage example

export default function Home() {
  return (
    <div>
      <NavBar
        variant="fancy"
        className="sticky backdrop-blur-sm backdrop-saturate-150 top-0 w-full z-50 shadow-lg border-b border-dashed"
        brand={<span className="text-xl font-bold">Logo</span>}
      >
        <NavItem href="/" active>
          Home
        </NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavBar>
      <ELayout stagger={0.2}>
        <ESidebar className="shadow-lg/80">
          <form className="flex gap-2 items-start">
            <TextBox
              variant="fancy"
              className="shadow-lg hover:shadow-lg/30"
              name="test"
              placeholder="Search..."
            />
            <Button
              variant="fancy"
              className="shadow-lg hover:shadow-lg/30"
              parallax
              tiltFactor={0}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </ESidebar>
        <EContentbar>
          <SReveal
            delay={0.5}
            opacity={0}
            className="flex flex-wrap items-center justify-center h-screen w-full"
            direction="hor"
          >
            <Button
              onClick={() => void 0}
              className="hover:shadow-lg font-bold m-2"
              variant="primary"
              parallax
            >
              Primary
            </Button>
            <Button
              onClick={() => void 0}
              className="hover:shadow-lg font-bold m-2"
              variant="secondary"
              parallax
            >
              Secondary
            </Button>
            <Button
              onClick={() => void 0}
              className="hover:shadow-lg font-bold m-2"
              variant="outline"
              parallax
            >
              Outline
            </Button>
            <Button
              onClick={() => void 0}
              className="hover:shadow-lg font-bold m-2"
              variant="positive"
              parallax
            >
              Positive
            </Button>
            <Button
              onClick={() => void 0}
              className="hover:shadow-lg font-bold m-2"
              variant="danger"
              parallax
            >
              Danger
            </Button>
            <Button
              onClick={() => void 0}
              className="hover:shadow-lg font-bold m-2"
              variant="link"
            >
              Link
            </Button>
            <Button
              onClick={() => void 0}
              className="hover:shadow-lg font-bold m-2"
              variant="fancy"
              parallax
            >
              Fancy
            </Button>
          </SReveal>
        </EContentbar>
        <ESidebar side="right">sdfgsdfg</ESidebar>
      </ELayout>
    </div>
  );
}

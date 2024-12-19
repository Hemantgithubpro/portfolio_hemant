"use client";

import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 text-primary">
          <Terminal strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hemant Jha
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Engineer & Computer Science Student
        </p>
        <div className="flex justify-center gap-4">
          <SocialButton href="https://github.com/hemantgithubpro" icon={<Github />} label="GitHub" />
          <SocialButton href="https://www.linkedin.com/in/hemant-kumar-jha-79a922284/" icon={<Linkedin />} label="LinkedIn" />
          <SocialButton href="mailto:hemantjha2005@gmail.com" icon={<Mail />} label="Email" />
        </div>
      </div>
    </section>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {icon}
      </a>
    </Button>
  );
}
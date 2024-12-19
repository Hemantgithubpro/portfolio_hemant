"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg text-muted-foreground mb-6">
          I'm currently looking for new opportunities. Feel free to reach out!
        </p>
        <Button asChild>
          <a href="mailto:hemantjha2005@gmail.com">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </a>
        </Button>
      </div>
    </section>
  );
}
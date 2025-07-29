import { Star, Users } from "lucide-react";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahcodes",
      text: "StorieAI transformed how I document UI. It analyzed my Next.js repo and generated clean stories in minutes.",
    },
    {
      name: "David Thompson",
      handle: "@davethompson",
      text: "Our component testing loop is dramatically faster. Stories are ready when code is, not weeks later.",
    },
    {
      name: "Priya Nair",
      handle: "@priyanair",
      text: "The coverage dashboard surfaced gaps we’d missed. We prioritized quickly and shipped stories with confidence.",
    },
    {
      name: "Miguel Santos",
      handle: "@miguels",
      text: "As a design systems lead, I finally get consistent, stories across packages. StorieAI keeps us aligned.",
    },
    {
      name: "Kenji Watanabe",
      handle: "@kenji_codes",
      text: "Zero context switching: generate stories, check coverage, and run the server without leaving VS Code.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            The best AI assistant for storybook
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            and we can prove it.
          </p>
          <div className="flex justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
        </div>

        <div className="p-8 min-h-[200px] rounded-xl border bg-card text-card-foreground shadow">
          <div className="text-center">
            <p className="text-lg text-card-foreground mb-6 italic leading-relaxed">
              &quot;{testimonials[currentTestimonial].text}&quot;
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonials[currentTestimonial].handle}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial
                    ? "bg-primary w-8"
                    : "bg-secondary"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript", "C", "C++", "TypeScript", "Python", "React", "Node.js",
  "Next.js", "MySQL", "Express", "MongoDB", "Git", "PHP", "Tailwind CSS",
];

export function Skills() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
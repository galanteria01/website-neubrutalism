import { Brain, Code, Cpu, Database } from "lucide-react";

export const skills = [
  {
    name: "Frontend",
    icon: Code,
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "bg-yellow-400",
    border: "border-yellow-600",
  },
  {
    name: "AI/ML",
    icon: Brain,
    items: ["TensorFlow", "PyTorch", "NLP", "Vision"],
    color: "bg-purple-400",
    border: "border-purple-600",
  },
  {
    name: "Backend",
    icon: Database,
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    color: "bg-cyan-400",
    border: "border-cyan-600",
  },
  {
    name: "DevOps",
    icon: Cpu,
    items: ["Docker", "K8s", "CI/CD", "AWS"],
    color: "bg-pink-400",
    border: "border-pink-600",
  },
];

export const quotes = [
  "Code is poetry, bugs are typos",
  "Coffee in, code out ☕",
  "Making AI less artificial",
  "Debugging is my cardio",
  "Ship fast, iterate faster",
];

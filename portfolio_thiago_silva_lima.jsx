import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <header className="text-center space-y-6">
          <img
            src="/thiago-profile.png"
            alt="Thiago Silva Lima"
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-cyan-400 shadow-lg"
          />
          <h1 className="text-4xl font-bold tracking-tight">Thiago Silva Lima</h1>
          <p className="text-lg text-gray-300">
            IT Support • Infrastructure • Software Development
          </p>
          <div className="flex justify-center gap-6 text-cyan-400">
            <a href="https://github.com/thiago23sl" target="_blank"><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/thiago-s-lima23/" target="_blank"><Linkedin size={28} /></a>
            <a href="mailto:thiagosilvalima784@gmail.com"><Mail size={28} /></a>
          </div>
        </header>

        {/* About */}
        <Card className="rounded-2xl bg-slate-800/70 backdrop-blur shadow-xl border border-slate-700">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-400">About Me</h2>
            <p>
              IT professional and Systems Analysis and Development student with hands-on experience in technical support,
              infrastructure, hardware and software maintenance, and software development. Strong problem-solving skills,
              user-focused mindset, and continuous learning attitude.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="rounded-2xl bg-slate-800/70 backdrop-blur shadow-xl border border-slate-700">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-400">Experience</h2>

            <div>
              <h3 className="font-bold">IT Intern – Mandirituba City Hall</h3>
              <p className="text-sm text-gray-400">2025 – Present</p>
              <ul className="list-disc ml-5 mt-2 text-gray-300">
                <li>On-site and remote technical support</li>
                <li>Hardware, software, and network maintenance</li>
                <li>Windows Server administration and infrastructure support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Freelancer – Computer Maintenance</h3>
              <p className="text-sm text-gray-400">2022 – 2025</p>
              <ul className="list-disc ml-5 mt-2 text-gray-300">
                <li>Computer assembly, formatting, and optimization</li>
                <li>Fault diagnosis and customer support</li>
                <li>System installation and performance tuning</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="rounded-2xl bg-slate-800/70 backdrop-blur shadow-xl border border-slate-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-400">Projects</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-slate-700 rounded-xl p-4">
                <h3 className="font-bold">Academic Management System</h3>
                <p className="text-sm text-gray-400">Python system with CRUD operations, JSON persistence and validations.</p>
                <p className="text-xs mt-2">Python • JSON • CLI</p>
                <a className="text-cyan-400 text-sm" href="https://github.com/thiago23sl" target="_blank">View on GitHub</a>
              </div>
              <div className="border border-slate-700 rounded-xl p-4">
                <h3 className="font-bold">Library Management System</h3>
                <p className="text-sm text-gray-400">Java application with queues, graphs and recommendation logic.</p>
                <p className="text-xs mt-2">Java • Data Structures</p>
                <a className="text-cyan-400 text-sm" href="https://github.com/thiago23sl" target="_blank">View on GitHub</a>
              </div>
              <div className="border border-slate-700 rounded-xl p-4">
                <h3 className="font-bold">IT Support & Infrastructure Projects</h3>
                <p className="text-sm text-gray-400">Hands-on projects involving networks, servers and user support.</p>
                <p className="text-xs mt-2">Windows Server • Networks</p>
                <a className="text-cyan-400 text-sm" href="https://github.com/thiago23sl" target="_blank">View on GitHub</a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="rounded-2xl bg-slate-800/70 backdrop-blur shadow-xl border border-slate-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-400">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300">
              <li>Technical Support</li>
              <li>IT Infrastructure</li>
              <li>Windows & Windows Server</li>
              <li>Computer Networks</li>
              <li>Python & Java</li>
              <li>Web Development</li>
              <li>Git & GitHub</li>
              <li>Hardware & Maintenance</li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Thiago Silva Lima · Built with React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

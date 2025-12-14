import { motion } from "framer-motion";

type Tool = {
  abbr: string;
  name: string;
  tag?: string;
  color: string;
};

const tools: Tool[] = [
  { abbr: "HTML", name: "HTML5", tag: "Language", color: "from-[#FF5722] to-[#FF8A65]" },
  { abbr: "JS", name: "JavaScript", tag: "Language", color: "from-[#F0DB4F] to-[#F7DF1E]" },
  { abbr: "TS", name: "TypeScript", tag: "Language", color: "from-[#2F74C0] to-[#2B6CB0]" },
  { abbr: "PY", name: "Python", tag: "Language", color: "from-[#3776AB] to-[#306998]" },
  { abbr: "JV", name: "Java", tag: "Language", color: "from-[#D32F2F] to-[#E53935]" },
  { abbr: "RE", name: "React", tag: "Library", color: "from-[#61DAFB] to-[#22C1FF]" },
  { abbr: "CSS", name: "CSS3", tag: "Language", color: "from-[#2965F1] to-[#1E40AF]" },
  { abbr: "ND", name: "Node.js", tag: "Runtime", color: "from-[#83CD29] to-[#3AA035]" },
];

const ToolTile = ({ t, i }: { t: Tool; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.04, duration: 0.45 }}
    whileHover={{ translateY: -6, scale: 1.02 }}
    className="group"
  >
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg border border-white/6 bg-gradient-to-br ${t.color} p-5 min-h-[120px] flex flex-col justify-between`}
      aria-label={`${t.name} ${t.tag ?? ""}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center text-white font-bold text-lg">{t.abbr}</div>
          <div>
            <div className="text-white font-medium text-base">{t.name}</div>
            <div className="text-xs text-white/90 mt-1">{t.tag}</div>
          </div>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-250 text-white/90">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M5 12h14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        <span className="text-xs bg-white/90 text-black px-2 py-1 rounded-full">{t.abbr}</span>
        <span className="text-xs bg-white/20 text-white/90 px-2 py-1 rounded-full">{t.tag}</span>
      </div>
    </div>
  </motion.div>
);

const Tools = () => (
  <section id="tools" className="py-12 md:py-16 px-6 md:px-12 lg:px-24">
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="code-syntax text-xl md:text-2xl mb-8"
    >
      {"<"}Tools and Languages{"/>"}
    </motion.h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {tools.map((t, i) => (
        <ToolTile key={t.abbr} t={t} i={i} />
      ))}
    </div>
  </section>
);

export default Tools;

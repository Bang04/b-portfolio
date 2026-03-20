import { motion } from "framer-motion";
import  FanCard  from "../ui/FanCard"
import { toyProjects } from "../../data/toyProject";

const Tag = ({ label }: { label: string }) => (
  <span className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-white shadow-sm">
    <span className="w-3 h-3 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full" />
    {label}
  </span>
);


export const ToyProjects = () => {
  return (
    <section className="py-24 px-6 bg-white/60">
      <h2 className="text-3xl font-semibold text-center mb-12">Toy Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {toyProjects.map((proj) => (
          <motion.div
            key={proj.id}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-md transition"
          >

            {/* 부채꼴 이미지 */}
            <FanCard images={proj.images} />

            {/* 헤더 */}
            <div className="flex items-center gap-2 mb-2">
              <span>{proj.type === "team" ? "👥" : "👤"}</span>
              <h3 className="font-semibold text-xl">{proj.title}</h3>
            </div>

            <p className="text-sm text-gray-500">{proj.period}</p>

            {/* 설명 */}
            <p className="mt-3 text-sm">{proj.desc}</p>
            <p className="mt-2 text-sm text-gray-600">기능: {proj.features}</p>

            {/* 역할 */}
            <div className="mt-4">
              <p className="font-medium text-sm mb-1">담당 역할</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {proj.role.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* 성과 */}
            <div className="mt-4">
              <p className="font-medium text-sm mb-1">성과</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {proj.result.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* 기술 태그 */}
            <div className="flex flex-wrap gap-2 mt-4">
              {proj.tags.map((tag, i) => (
                <Tag key={i} label={tag} />
              ))}
            </div>

            {/* 링크 */}
            <div className="flex gap-4 mt-6">
              {proj.links.github && (
                <a
                  href={proj.links.github}
                  target="_blank"
                  className="text-sm px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                >
                  GitHub
                </a>
              )}

              {proj.links.demo && (
                <a
                  href={proj.links.demo}
                  target="_blank"
                  className="text-sm px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200"
                >
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
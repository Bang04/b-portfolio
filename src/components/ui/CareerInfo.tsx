import { motion } from "framer-motion"
import { careerData } from "../../data/carearData";
import { useState } from "react";
const Tag = ({ label }: any) => (
    <span className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-white shadow-sm">
        <span className="w-3 h-3 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full" />
        {label}
    </span>
);

export const CareerInfo = () => {
    const [activeCompany, setActiveCompany] = useState<number | null>(null);


    return (
        <section className="py-24 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Career</h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {careerData.map((item) => (
            <div key={item.id}>
              <div
                onClick={() => setActiveCompany(item.id === activeCompany ? null : item.id)}
                className="cursor-pointer p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm"
              >
                <h3 className="font-semibold text-lg">{item.company}</h3>
                <p className="text-sm text-gray-500">{item.period}</p>
              </div>

              {activeCompany === item.id && (
                <div className="mt-6 space-y-6">
                  {item.projects.map((proj, idx) => {
                    const hasImages = proj.images && proj.images.length > 0;

                    return (
                      <div key={idx} className="p-6 bg-white rounded-2xl shadow-md">

                        {/* 이미지 영역 */}
                        {hasImages ? (
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {Array.from({ length: 4 }).map((_, i) => {
                              const img = proj.images[i];
                              const isApp = typeof img === "object" && img?.type === "app";

                              return (
                                <motion.div
                                  key={i}
                                  whileHover={{ scale: img ? 1.05 : 1 }}
                                  className="w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"
                                >
                                  {img ? (
                                    <img
                                      src={typeof img === "string" ? img : img.src}
                                      alt={proj.title}
                                      className={`w-full h-full ${isApp ? "object-contain max-h-full" : "object-cover"}`}
                                    />
                                  ) : (
                                    <div className="text-xs text-gray-400">Empty</div>
                                  )}
                                </motion.div>
                              );
                            })}
                          </div>
                        ) : (
                          // 이미지 없을 때
                           <div className="mb-4">
                            <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                              <div className="absolute inset-0 opacity-60 bg-gradient-to-tr from-purple-200 via-blue-100 to-purple-100" />
                              <span className="relative text-xs text-gray-400">No Image</span>
                            </div>
                          </div>
                        )}

                        {/* 텍스트 */}
                        <h4 className="font-semibold text-lg">{proj.title}</h4>
                        <p className="text-sm text-gray-500">{proj.period}</p>
                        <p className="text-sm mt-2">성과: {proj.result}</p>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {proj.tags.map((tag, i) => (
                            <Tag key={i} label={tag} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    )
}


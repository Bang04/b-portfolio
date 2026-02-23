import { motion } from "framer-motion"
export const CareerInfo = () => {
    return (
      <div className="mx-auto mb-20 w-full max-w-screen-lg px-4">
            <h2 className="text-xl font-bold mb-6">💼 경력 & 프로젝트</h2>         
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="basis-1/3  sm:w-full flex flex-row border-gray-400 rounded-xl py-5  items-center shadow-lg  bg-white">
                    <div className="flex basis-1/4 justify-around">🏢 </div>
                    <div className="flex flex-col">
                        <div className="m-0 p-0 text-lg">노벨테크놀로지</div>
                        <div className="flex flex-wrap justify-between">
                            <div className="text-sm text-gray-400">2020.04~2023.08</div>
                            <div className="text-sm text-gray-400">(3년5개월)</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.5,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="basis-1/3  sm:w-full flex flex-row border-gray-400 rounded-xl py-5  items-center shadow-lg  bg-white">

                    <div className="flex basis-1/4 justify-around">🏢 </div>
                    <div className="flex flex-col">
                        <div className="m-0 p-0 text-lg">일오삼미디어</div>
                        <div className="flex flex-wrap justify-between">
                            <div className="text-sm text-gray-400">2017.07~2018.07</div>
                            <div className="text-sm text-gray-400">(1년 1개월)</div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 1,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="basis-1/3  sm:w-full flex flex-row border-gray-400 rounded-xl py-5  items-center shadow-lg  bg-white">

                    <div className="flex basis-1/4 justify-around">🏢 </div>
                    <div className="flex flex-col">
                        <div className="m-0 p-0 text-lg ">트론트</div>
                        <div className="flex flex-wrap justify-between">
                            <div className="text-sm text-gray-400">2014.01-2015.03</div>
                            <div className="text-sm text-gray-400">(1년 3개월)</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}


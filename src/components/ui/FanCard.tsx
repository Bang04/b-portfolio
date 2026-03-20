import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

// 부채꼴 이미지 컴포넌트
type ImageItem = { src: string; type: string };

type ImagesType = Record<string, string> | ImageItem[];

const FanCard = ({ images }: { images?: ImagesType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // object → array 변환 (web, tablet, mobile)
  let imageList: { type: string; src: string }[] = [];

  if (Array.isArray(images)) {
    imageList = images;
  } else if (images) {
    imageList = Object.entries(images).map(([type, src]) => ({
      type,
      src: src as string,
    }));
  }

  if (!imageList || imageList.length === 0) {
    return (
      <div className="w-full h-48 rounded-xl bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 flex items-center justify-center">
        <span className="text-xs text-gray-400">No Image</span>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative flex justify-center items-center h-60 mb-4">
      <AnimatePresence>
        {imageList.slice(0, 3).map((img, idx) => {
          const count = imageList.length;
          let rotate = 0;
          let xOffset = 0;

          if (count === 2) {
            rotate = idx === 0 ? -10 : 10;
            xOffset = idx === 0 ? -30 : 30;
          } else if (count >= 3) {
            rotate = idx === 0 ? -15 : idx === 1 ? 0 : 15;
            xOffset = idx === 0 ? -40 : idx === 1 ? 0 : 40;
          }

          return (
            <motion.div
              key={img.src + idx}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotate, x: xOffset }
                  : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.2, zIndex: 10 }}
              className="absolute w-40 h-56 rounded-xl shadow-md overflow-hidden bg-white"
            >
              <img
                src={img.src}
                alt={img.type}
                className={`w-full h-full ${img.type === "mobile" ? "object-contain" : "object-cover"}`}
              />

              {/* 타입 뱃지 */}
              <span className="absolute top-2 left-2 text-[10px] px-2 py-1 rounded bg-white/80">
                {img.type}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FanCard;
"use client";
import React from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useScroll,
} from "framer-motion";
import NavBar from "../molecules/NavBar";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context";
import useMeasure from "react-use-measure";

const headerClasses = (section: string) =>
  section === "Home"
    ? `fixed top-[52px] w-[440px]`
    : "fixed top-0 left-1/2 -translate-x-1/2 mt-1 w-full max-w-[864px]";

const Header = () => {
  const { activeSection } = useActiveSectionContext();
  const [headerRef, { width: headerWidth }] = useMeasure();

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <div ref={headerRef} className={cn("z-50", headerClasses(activeSection))}>
        {activeSection === "Home" && (
          <div className={"overflow-hidden"}>
            <div>
              <h1 className="text-8xl font-bold ">Hello, I'm</h1>
              <h1 className="text-8xl font-bold">Davidson</h1>
              <p className="text-2xl">
                I create dynamic web solutions to deliver seamless digital
                experiences.
              </p>
            </div>
          </div>
        )}
        <motion.div animate={{ width: headerWidth }} className="relative">
          {/* <motion.div
            variants={navBgVariants}
            animate={activeSection === "Home" ? "home" : "expanded"}
            className={
              activeSection === "Home"
                ? `absolute top-[${navMiddleY}px] left-[${navMiddleX}px] w-1 h-1 bg-background-100 rounded-full`
                : `absolute w-full h-full bg-background-100 rounded-full`
            }
          ></motion.div> */}
          <div className={activeSection === "Home" ? "" : "px-4"}>
            <NavBar activeSection={activeSection} />
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default Header;

// const headerVariants = {
//   home: { x: 0 },
//   expanded: { x: 0 },
// };

// const Header = () => {
//   const { activeSection, setActiveSection, setTimeOfLastClick } =
//     useActiveSectionContext();

//   const t = useScroll();

//   console.log(t.scrollY, t.scrollYProgress);

//   return (
//     <motion.div
//       variants={headerVariants}
//       animate={activeSection === "Home" ? "home" : "expanded"}
//       transition={{ layout: { duration: 1 } }}
//       layout
//       className={cn("z-50", headerClasses(activeSection))}
//     >
//       {activeSection === "Home" && (
//         <motion.div
//           layout="position"
//           className={activeSection === "Home" ? `border` : "none"}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <h1 className="text-8xl font-bold ">Hello, I'm</h1>
//           <h1 className="text-8xl font-bold">Davidson</h1>
//           <p className="text-2xl">
//             I create dynamic web solutions to deliver seamless digital
//             experiences.
//           </p>
//         </motion.div>
//       )}
//       <motion.div layout="position" className={"relative"}>
//         {/* <motion.div
//           variants={navBgVariants}
//           animate={activeSection === "Home" ? "home" : "expanded"}
//           initi
//           transition={{ layout: { duration: 1 } }}
//           layout
//           className={
//             activeSection === "Home"
//               ? "absolute w-0 h-0  bg-background-100 rounded-full"
//               : "absolute w-full h-full bg-background-100 rounded-full"
//           }
//         ></motion.div> */}
//         <div className={activeSection === "Home" ? "" : "px-4"}>
//           <NavBar activeSection={activeSection} />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Header;

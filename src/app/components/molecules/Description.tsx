import React, { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";

interface IDescription {
  item: string;
  subitem?: string[] | string;
}

const duration = 0.5;

const Description = ({ item, subitem }: IDescription) => {
  const [open, setOpen] = useState(false);
  const subItem = typeof subitem === "string" ? [subitem] : subitem;

  console.log(open);
  return (
    <MotionConfig transition={{ duration }}>
      <div className="cursor-pointer" onClick={() => setOpen((curr) => !curr)}>
        <p>{item}</p>
      </div>
      {/* {open && subItem?.map((sub) => <p key="aaaaa">{sub}</p>)} */}
      <ResizableDescription renderKey={`${open}`}>
        <div>
          {open && (
            <div>
              {subItem?.map((sub, index) => (
                <p key={`subitem-${index}`}>{sub}</p>
              ))}
            </div>
          )}
        </div>
      </ResizableDescription>
    </MotionConfig>
  );
};

export default Description;

interface IResizableDescription {
  children?: React.ReactNode;
  renderKey?: string;
}

/**
 * Reference: https://www.youtube.com/watch?v=G3OyF-lRAWo
 * https://github.com/samselikoff/2022-06-09-resizable-panel/commit/fe04a842367657b4acb1058c454d3eca739c419d
 **/
const ResizableDescription = ({
  children,
  renderKey,
}: IResizableDescription) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      animate={{ height: height || "auto" }}
      className="relative overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          // key={JSON.stringify(children, ignoreCircularReferences())}
          key={renderKey}
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
            // transition: { duration: duration / 2, delay: duration / 2 },
          }}
          exit={{
            opacity: 0,
            x: -100,
            // transition: { duration: duration / 2 }
          }}
        >
          <div ref={ref} className={`${height ? "absolute" : "relative"} px-2`}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

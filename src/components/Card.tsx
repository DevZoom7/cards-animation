import { motion } from "framer-motion";

interface Props {
   ind: number;
   id: number;
   svg: string;
   onClick: () => void;
}

export default function Card({ svg, id, onClick, ind }: Props) {
   return (
      <motion.div
         initial={{
            y: 0,
            backgroundColor: "transparent",
            padding: 0,
         }}
         animate={{
            y: ind * 40,
            paddingInline: `clamp(5px, ${2 * ind + 2}vw, ${ind * 20 + 20}px)`,
            backgroundColor: colors[id],
         }}
         className="card"
         onClick={onClick}
      >
         <img src={svg} alt="svg!" />
      </motion.div>
   );
}

const colors = ["rgb(201, 12, 69)", "orange", "rgb(78, 78, 255)"];

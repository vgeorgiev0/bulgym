import Link from "next/link";
import { motion } from "framer-motion";

interface PdfLinkProps {
  id: string;
  title: string;
}

const PdfLink: React.FC<PdfLinkProps> = ({ id, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
      className="mb-4 rounded-md bg-white p-4 shadow-md hover:shadow-lg"
    >
      <Link href={`/docs/${id}`}>
        <p className="text-lime-900 hover:underline">
          {title.substring(0, 34)}
          {title.length > 34 && "..."}
        </p>
      </Link>
    </motion.div>
  );
};

export default PdfLink;

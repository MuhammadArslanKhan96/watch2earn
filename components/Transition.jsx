import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import variants from '../components/Data/variant'

const Transition = ({ children }) => {
    const { asPath } = useRouter();

    return (
        <div className="effect-2">
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              key={asPath}
              variants={variants}
              initial="in"
              animate="inactive"
              exit="out"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      );
    };

export default Transition;
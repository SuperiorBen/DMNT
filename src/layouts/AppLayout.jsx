import PropTypes from 'prop-types';
import { MenuPartial } from '../modules/menu/components/MenuPartial';
import { motion } from 'framer-motion';

export const AppLayout = ({ children }) => {

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration:2}}
      >
      <MenuPartial />

      {/* Content pages */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        {children}
      </div>
    </ motion.div>

  )
}


// Props validation
AppLayout.propTypes = {
  children: PropTypes.node
};


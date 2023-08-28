import PropTypes from 'prop-types';
import { MenuPartial } from '../modules/menu/components/MenuPartial';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

export const AppLayout = ({ children }) => {

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1}}
    >
      <MenuPartial />

      {/* Content pages */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <Suspense fallback={<h2>Loading...</h2>}>
          {children}
        </Suspense>
      </div>
      <div style={{position:'fixed', width:'100vw', height:'100vh', top:0, left:0, zIndex:-1, background:'#fff'}} ></div>
    </ motion.div>

  )
}


// Props validation
AppLayout.propTypes = {
  children: PropTypes.node
};


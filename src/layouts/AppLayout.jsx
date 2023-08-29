import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
// import { MenuPartial } from '../modules/menu/components/MenuPartial';
const MenuPartial = lazy(() => import('../modules/menu/components/MenuPartial'))


export const AppLayout = ({ children }) => {

  return (
    <Suspense>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <MenuPartial />
        {/* Content pages */}
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>

          {children}
        </div>
        <div style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: -1, background: '#fff' }} ></div>
      </ motion.div>
    </Suspense>
  )
}


// Props validation
AppLayout.propTypes = {
  children: PropTypes.node
};


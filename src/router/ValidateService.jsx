import { Navigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

export const ValidateService = ({ children }) => {
    const { detail } = useParams();
    if (detail === 'marketing-digital' || detail === 'desarrollo-web-aplicaciones' ||
        detail === 'audiovisuales' || detail === 'material-pop') {
        return children
    }
    return <Navigate to="/servicio-desconocido" />
}

// Props validation
ValidateService.propTypes = {
    children: PropTypes.node
};


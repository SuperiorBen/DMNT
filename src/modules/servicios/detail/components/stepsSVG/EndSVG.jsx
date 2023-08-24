import PropTypes from 'prop-types';

export const EndSVG = ({ item, title }) => {

    return (
        <div style={{ position: 'relative', width: '18em', height: '4em' }}>
            <p style={{ fontSize: '1.5em', fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em', position: 'absolute', zIndex: 1, top: '0.8em', left: '4.5em',userSelect:'none' }}>{title}</p>

            <svg viewBox="0 0 241 60" style={{ width: '18em', height: '4em', fill: item.fillColor, position: 'absolute', zIndex: 0, transition:'0.2s' }}>
                <mask id="path-1-inside-1_1197_102" style={{ fill: item.fillColor, transition:'0.2s' }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 59.5161L65 29.9999L0 0.483676V0H231C236.523 0 241 4.47715 241 10V50C241 55.5228 236.523 60 231 60H0V59.5161Z" />
                </mask>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 59.5161L65 29.9999L0 0.483676V0H231C236.523 0 241 4.47715 241 10V50C241 55.5228 236.523 60 231 60H0V59.5161Z"
                    style={{ fill: item.fillColor, fillOpacity: item.opacityColor, transition:'0.2s' }} />
                <path d="M65 29.9999L65.8269 31.8209L69.8372 29.9999L65.8269 28.1789L65 29.9999ZM0 59.5161L-0.826927 57.6951L-2 58.2278V59.5161H0ZM0 0.483676H-2V1.77203L-0.826927 2.30472L0 0.483676ZM0 0V-2H-2V0H0ZM0 60H-2V62H0V60ZM64.1731 28.1789L-0.826927 57.6951L0.826927 61.3372L65.8269 31.8209L64.1731 28.1789ZM-0.826927 2.30472L64.1731 31.8209L65.8269 28.1789L0.826927 -1.33736L-0.826927 2.30472ZM2 0.483676V0H-2V0.483676H2ZM0 2H231V-2H0V2ZM231 2C235.418 2 239 5.58172 239 10H243C243 3.37258 237.627 -2 231 -2V2ZM239 10V50H243V10H239ZM239 50C239 54.4183 235.418 58 231 58V62C237.627 62 243 56.6274 243 50H239ZM231 58H0V62H231V58ZM2 60V59.5161H-2V60H2Z"
                    style={{ fill: item.fillBorderColor, fillOpacity: item.opacityBorderColor, transition:'0.2s' }} mask="url(#path-1-inside-1_1197_102)" />
            </svg>


        </div >
    )
}

// Props validation
EndSVG.propTypes = {
    item: PropTypes.object,
    title: PropTypes.string,
};

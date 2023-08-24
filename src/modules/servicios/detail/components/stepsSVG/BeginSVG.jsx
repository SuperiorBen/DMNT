import PropTypes from 'prop-types';

export const BeginSVG = ({ item, title }) => {

    return (
        <div style={{ position: 'relative', width: '18em', height: '4em' }}>
            <p style={{ fontSize: '1.5em', fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em', position: 'absolute', zIndex: 1, top: '0.8em', left: '0.8em', userSelect: 'none' }}>{title}</p>
            <svg viewBox="0 0 274 62" xmlns="http://www.w3.org/2000/svg" style={{ width: '18em', height: '4em', fill: item.fillColor, position: 'absolute', zIndex: 0, transition: '0.2s' }}>
                <mask id="path-1-inside-1_1239_2" style={{ fill: item.fillColor, transition: '0.2s' }}>
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M209 60.5162L274 31L209 1.48375V0.999978H207.935L207.25 0.689087V0.999978H10C4.47715 0.999978 0 5.47713 0 11V51C0 56.5228 4.47716 61 10 61H207.25V61.3109L207.935 61H209V60.5162Z" />
                </mask>
                <path fillRule="evenodd" clipRule="evenodd" d="M209 60.5162L274 31L209 1.48375V0.999978H207.935L207.25 0.689087V0.999978H10C4.47715 0.999978 0 5.47713 0 11V51C0 56.5228 4.47716 61 10 61H207.25V61.3109L207.935 61H209V60.5162Z"
                    style={{ fill: item.fillColor, fillOpacity: item.opacityColor, transition: '0.2s' }} />
                <path d="M274 31L274.827 32.821L278.837 31L274.827 29.1789L274 31ZM209 60.5162L208.173 58.6952L207 59.2279V60.5162H209ZM209 1.48375H207V2.77211L208.173 3.3048L209 1.48375ZM209 0.999978H211V-1.00002H209V0.999978ZM207.935 0.999978L207.108 2.82102L207.502 2.99998H207.935V0.999978ZM207.25 0.689087L208.077 -1.13195L205.25 -2.41566V0.689087H207.25ZM207.25 0.999978V2.99998H209.25V0.999978H207.25ZM207.25 61H209.25V59H207.25V61ZM207.25 61.3109H205.25V64.4156L208.077 63.1319L207.25 61.3109ZM207.935 61V59H207.502L207.108 59.1789L207.935 61ZM209 61V63H211V61H209ZM273.173 29.1789L208.173 58.6952L209.827 62.3372L274.827 32.821L273.173 29.1789ZM208.173 3.3048L273.173 32.821L274.827 29.1789L209.827 -0.337287L208.173 3.3048ZM207 0.999978V1.48375H211V0.999978H207ZM207.935 2.99998H209V-1.00002H207.935V2.99998ZM206.423 2.51013L207.108 2.82102L208.762 -0.82106L208.077 -1.13195L206.423 2.51013ZM209.25 0.999978V0.689087H205.25V0.999978H209.25ZM10 2.99998H207.25V-1.00002H10V2.99998ZM2 11C2 6.5817 5.58172 2.99998 10 2.99998V-1.00002C3.37258 -1.00002 -2 4.37256 -2 11H2ZM2 51V11H-2V51H2ZM10 59C5.58173 59 2 55.4183 2 51H-2C-2 57.6274 3.37259 63 10 63V59ZM207.25 59H10V63H207.25V59ZM209.25 61.3109V61H205.25V61.3109H209.25ZM207.108 59.1789L206.423 59.4898L208.077 63.1319L208.762 62.821L207.108 59.1789ZM209 59H207.935V63H209V59ZM207 60.5162V61H211V60.5162H207Z"
                    style={{ fill: item.fillBorderColor, fillOpacity: item.opacityBorderColor, transition: '0.2s' }} mask="url(#path-1-inside-1_1239_2)" />
            </svg>
        </div >
    )
}

// Props validation
BeginSVG.propTypes = {
    item: PropTypes.object,
    title: PropTypes.string,
};

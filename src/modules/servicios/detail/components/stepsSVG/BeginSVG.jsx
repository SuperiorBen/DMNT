import PropTypes from 'prop-types';

export const BeginSVG = ({ item, title }) => {

    return (
        <div style={{
            position: 'relative',display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: window.screen.width > 1536 ? '18em' : '12em',
            height: window.screen.width > 1536 ? '4em' : '3em'
        }}>
            <p style={{ fontSize: window.screen.width > 1536 ? '1.5em' : '1.2em', fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em', position: 'absolute', zIndex: 1, 
             userSelect: 'none' }}>{title}</p>
            <svg viewBox="0 0 274 62" style={{ 
                width: window.screen.width > 1536 ? '18em' : '12em',
                height: window.screen.width > 1536 ? '4em' : '3em',
                fill: item.fillColor, position: 'absolute', zIndex: 0, transition: '0.2s' }}>
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

export const BeginSVGmobil = ({ item, title }) => {
    return (
        <div style={{ position: 'relative', width: '7em', height: '6em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{
                fontSize: '1em', fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em', position: 'absolute', zIndex: 1,
                userSelect: 'none', width: '7em', height: '6em', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>{title}</p>
            <svg viewBox="0 0 112 99" style={{ width: '7em', height: '6em', fill: item.fillColor, position: 'absolute', zIndex: 0, transition: '0.2s' }}>
                <mask id="path-1-inside-1_1255_2" style={{ fill: item.fillColor, transition: '0.2s' }}>
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M3.52711 74.4813L56.0001 97.0017L108.473 74.4813L110.858 74.4813L110.858 73.4579L111.426 73.214L110.858 73.214L110.858 10C110.858 4.47715 106.38 -2.20539e-07 100.858 -4.61951e-07L11.1432 -4.38349e-06C5.62037 -4.6249e-06 1.14322 4.47715 1.14322 10L1.14322 73.214L0.574437 73.214L1.14322 73.4581L1.14322 74.4813L3.52711 74.4813Z" />
                </mask>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.52711 74.4813L56.0001 97.0017L108.473 74.4813L110.858 74.4813L110.858 73.4579L111.426 73.214L110.858 73.214L110.858 10C110.858 4.47715 106.38 -2.20539e-07 100.858 -4.61951e-07L11.1432 -4.38349e-06C5.62037 -4.6249e-06 1.14322 4.47715 1.14322 10L1.14322 73.214L0.574437 73.214L1.14322 73.4581L1.14322 74.4813L3.52711 74.4813Z"
                    style={{ fill: item.fillColor, fillOpacity: item.opacityColor, transition: '0.2s' }} />
                <path d="M56.0001 97.0017L55.6057 97.9206L56.0001 98.0899L56.3945 97.9206L56.0001 97.0017ZM3.52711 74.4813L3.9215 73.5623L3.73264 73.4813L3.52711 73.4813L3.52711 74.4813ZM108.473 74.4813L108.473 73.4813L108.268 73.4813L108.079 73.5623L108.473 74.4813ZM110.858 74.4813L110.858 75.4813L111.858 75.4813L111.858 74.4813L110.858 74.4813ZM110.858 73.4579L110.463 72.539L109.858 72.7989L109.858 73.4579L110.858 73.4579ZM111.426 73.214L111.82 74.133L111.426 72.214L111.426 73.214ZM110.858 73.214L109.858 73.214L109.858 74.214L110.858 74.214L110.858 73.214ZM100.858 -4.61951e-07L100.858 -1L100.858 -4.61951e-07ZM11.1432 -4.38349e-06L11.1432 0.999996L11.1432 -4.38349e-06ZM1.14322 10L2.14322 10L1.14322 10ZM1.14322 73.214L1.14322 74.214L2.14322 74.214L2.14322 73.214L1.14322 73.214ZM0.574437 73.214L0.574437 72.214L0.180043 74.133L0.574437 73.214ZM1.14322 73.4581L2.14322 73.4581L2.14322 72.7991L1.53761 72.5392L1.14322 73.4581ZM1.14322 74.4813L0.143216 74.4813L0.143216 75.4813L1.14322 75.4813L1.14322 74.4813ZM56.3945 96.0828L3.9215 73.5623L3.13272 75.4002L55.6057 97.9206L56.3945 96.0828ZM108.079 73.5623L55.6057 96.0828L56.3945 97.9206L108.867 75.4002L108.079 73.5623ZM110.858 73.4813L108.473 73.4813L108.473 75.4813L110.858 75.4813L110.858 73.4813ZM109.858 73.4579L109.858 74.4813L111.858 74.4813L111.858 73.4579L109.858 73.4579ZM111.031 72.2951L110.463 72.539L111.252 74.3768L111.82 74.133L111.031 72.2951ZM110.858 74.214L111.426 74.214L111.426 72.214L110.858 72.214L110.858 74.214ZM109.858 10L109.858 73.214L111.858 73.214L111.858 10L109.858 10ZM100.858 1C105.828 1 109.858 5.02944 109.858 10L111.858 10C111.858 3.92487 106.933 -1 100.858 -1L100.858 1ZM11.1432 0.999996L100.858 1L100.858 -1L11.1432 -1L11.1432 0.999996ZM2.14322 10C2.14322 5.02944 6.17266 0.999995 11.1432 0.999996L11.1432 -1C5.06808 -1 0.143219 3.92487 0.143219 10L2.14322 10ZM2.14322 73.214L2.14322 10L0.143219 10L0.143216 73.214L2.14322 73.214ZM0.574437 74.214L1.14322 74.214L1.14322 72.214L0.574437 72.214L0.574437 74.214ZM1.53761 72.5392L0.968831 72.2951L0.180043 74.133L0.748822 74.3771L1.53761 72.5392ZM2.14322 74.4813L2.14322 73.4581L0.143216 73.4581L0.143216 74.4813L2.14322 74.4813ZM3.52711 73.4813L1.14322 73.4813L1.14322 75.4813L3.52711 75.4813L3.52711 73.4813Z"
                    style={{ fill: item.fillBorderColor, fillOpacity: item.opacityBorderColor, transition: '0.2s' }} mask="url(#path-1-inside-1_1255_2)" />
            </svg>
        </div >
    )
}


// Props validation
BeginSVG.propTypes = {
    item: PropTypes.object,
    title: PropTypes.string,
};
BeginSVGmobil.propTypes = {
    item: PropTypes.object,
    title: PropTypes.string,
};

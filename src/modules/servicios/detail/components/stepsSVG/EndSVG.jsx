import PropTypes from 'prop-types';

export const EndSVG = ({ item, title }) => {

    return (
        <div style={{
            position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: window.screen.width > 1536 ? '18em' : '12em',
            height: window.screen.width > 1536 ? '4em' : '3em',
        }}>
            <p style={{
                fontSize: window.screen.width > 1536 ? '1.5em' : '1.2em', fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em', position: 'absolute', zIndex: 1,
                userSelect: 'none'
            }}>{title}</p>

            <svg viewBox="0 0 274 62" style={{
                width: window.screen.width > 1536 ? '18em' : '12em',
                height: window.screen.width > 1536 ? '4em' : '3em',
                fill: item.fillColor, position: 'absolute', zIndex: 0, transition: '0.2s'
            }}>
                <mask id="path-1-inside-1_1197_102" style={{ fill: item.fillColor, transition: '0.2s' }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 59.5161L65 29.9999L0 0.483676V0H231C236.523 0 241 4.47715 241 10V50C241 55.5228 236.523 60 231 60H0V59.5161Z" />
                </mask>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 59.5161L65 29.9999L0 0.483676V0H231C236.523 0 241 4.47715 241 10V50C241 55.5228 236.523 60 231 60H0V59.5161Z"
                    style={{ fill: item.fillColor, fillOpacity: item.opacityColor, transition: '0.2s' }} />
                <path d="M65 29.9999L65.8269 31.8209L69.8372 29.9999L65.8269 28.1789L65 29.9999ZM0 59.5161L-0.826927 57.6951L-2 58.2278V59.5161H0ZM0 0.483676H-2V1.77203L-0.826927 2.30472L0 0.483676ZM0 0V-2H-2V0H0ZM0 60H-2V62H0V60ZM64.1731 28.1789L-0.826927 57.6951L0.826927 61.3372L65.8269 31.8209L64.1731 28.1789ZM-0.826927 2.30472L64.1731 31.8209L65.8269 28.1789L0.826927 -1.33736L-0.826927 2.30472ZM2 0.483676V0H-2V0.483676H2ZM0 2H231V-2H0V2ZM231 2C235.418 2 239 5.58172 239 10H243C243 3.37258 237.627 -2 231 -2V2ZM239 10V50H243V10H239ZM239 50C239 54.4183 235.418 58 231 58V62C237.627 62 243 56.6274 243 50H239ZM231 58H0V62H231V58ZM2 60V59.5161H-2V60H2Z"
                    style={{ fill: item.fillBorderColor, fillOpacity: item.opacityBorderColor, transition: '0.2s' }} mask="url(#path-1-inside-1_1197_102)" />
            </svg>
        </div >
    )
}


export const EndSVGmobil = ({ item, title }) => {

    return (
        <div style={{ position: 'relative', width: '7em', height: '6em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{
                fontSize: '1em', fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em', position: 'absolute', zIndex: 1,
                userSelect: 'none', width: '7em', height: '6em', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>{title}</p>

            <svg viewBox="0 0 112 99" style={{ width: '7em', height: '6em', fill: item.fillColor, position: 'absolute', zIndex: 0, transition: '0.2s' }}>
                <mask id="path-1-inside-1_1199_189" style={{ fill: item.fillColor, transition: '0.2s' }}>
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M1.02732 0.114863L54.9999 23.2789L108.973 0.114868L109.857 0.114868L109.857 76C109.857 81.5228 105.38 86 99.8574 86L10.1431 86C4.6202 86 0.143055 81.5228 0.143055 76L0.143059 0.114863L1.02732 0.114863Z" />
                </mask>
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M1.02732 0.114863L54.9999 23.2789L108.973 0.114868L109.857 0.114868L109.857 76C109.857 81.5228 105.38 86 99.8574 86L10.1431 86C4.6202 86 0.143055 81.5228 0.143055 76L0.143059 0.114863L1.02732 0.114863Z"
                    style={{ fill: item.fillColor, fillOpacity: item.opacityColor, transition: '0.2s' }} />
                <path d="M54.9999 23.2789L54.2112 25.1168L54.9999 25.4553L55.7887 25.1168L54.9999 23.2789ZM1.02732 0.114863L1.81611 -1.72302L1.43837 -1.88514L1.02732 -1.88514L1.02732 0.114863ZM108.973 0.114868L108.973 -1.88513L108.562 -1.88513L108.184 -1.72302L108.973 0.114868ZM109.857 0.114868L111.857 0.114868L111.857 -1.88513L109.857 -1.88513L109.857 0.114868ZM99.8574 86L99.8574 88L99.8574 86ZM10.1431 86L10.1431 84L10.1431 86ZM0.143059 0.114863L0.143059 -1.88514L-1.85694 -1.88514L-1.85694 0.114863L0.143059 0.114863ZM55.7887 21.441L1.81611 -1.72302L0.238533 1.95275L54.2112 25.1168L55.7887 21.441ZM108.184 -1.72302L54.2112 21.441L55.7887 25.1168L109.761 1.95275L108.184 -1.72302ZM108.973 2.11487L109.857 2.11487L109.857 -1.88513L108.973 -1.88513L108.973 2.11487ZM107.857 0.114868L107.857 76L111.857 76L111.857 0.114868L107.857 0.114868ZM107.857 76C107.857 80.4182 104.276 84 99.8574 84L99.8574 88C106.485 88 111.857 82.6274 111.857 76L107.857 76ZM99.8574 84L10.1431 84L10.1431 88L99.8574 88L99.8574 84ZM10.1431 84C5.72477 84 2.14306 80.4182 2.14306 76L-1.85694 76C-1.85694 82.6274 3.51564 88 10.1431 88L10.1431 84ZM2.14306 76L2.14306 0.114863L-1.85694 0.114863L-1.85694 76L2.14306 76ZM0.143059 2.11486L1.02732 2.11486L1.02732 -1.88514L0.143059 -1.88514L0.143059 2.11486Z"
                    style={{ fill: item.fillBorderColor, fillOpacity: item.opacityBorderColor, transition: '0.2s' }} mask="url(#path-1-inside-1_1199_189)" />
            </svg>


        </div >
    )
}

// Props validation
EndSVG.propTypes = {
    item: PropTypes.object,
    title: PropTypes.string,
};

// Props validation
EndSVGmobil.propTypes = {
    item: PropTypes.object,
    title: PropTypes.string,
};


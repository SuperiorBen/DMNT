import avatar from "../../assets/multimediaForm/lic.svg";
export const LinkCard = () => {
    return (
        <div style={{ width: '25em', height: '15em', position: 'relative' }}>
            <div style={{
                width: '25em', height: '13em', position: 'absolute', top: '0em', zIndex: 1,
                display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', borderRadius: '5px'
            }}>
                <div style={{ width: '1em', height: '7em', position: 'relative', zIndex: 1, backgroundColor: '#9665FD', marginRight: '1em' }} />
                {/* Titles */}
                <div style={{ position: 'relative', height: '7em', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <p style={{ fontSize: '1.5em', fontWeight: 700, margin: 0, lineHeight: '1em', color: '#9665FD', width: '15em' }}>El diseño es el embajador silencioso de tu marca.</p>
                    <p style={{ fontSize: '3em', fontWeight: 700, margin: 0, lineHeight: '1em', color: '#9665FD' }}>Contáctanos</p>
                </div>
                <a href="#" style={{
                    backgroundColor: '#9665FD', borderRadius: '5px', height: '3em', width: '20em', textDecoration: 'none',
                    position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <p style={{ color: '#fff', fontSize: '1.2em', fontWeight: 700 }}>Realizar consulta</p></a>
                <div style={{
                    background: 'linear-gradient(360deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 100%)',
                    backdropFilter: 'blur(5px)', position: 'absolute', top: 0, left: 0,
                    width: '100%', height: '100%', zIndex: 0
                }} />
            </div>
            <img src={avatar} alt="avatar" style={{ width: '6em', height: '14em', position: 'absolute', top: '0em', right: 0, zIndex: 1 }} />

            <div style={{ width: '20em', height: '15em', position: 'absolute', top: '-1em', right: '3em', zIndex: 0, }}>
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="b" gradientTransform="rotate(270 .5 .5)">
                            <stop offset="0%" stopColor="rgba(8,199,209,0.2)" />
                            <stop offset="100%" stopColor="rgba(8,199,209,1)" />
                        </linearGradient>
                    </defs>
                    <g clipPath="url(#a)">
                        <path fill="url(#b)">
                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                                values="
                                M843 616q-24 116-129.5 167t-202 14.5Q415 761 302.5 743t-111-130.5Q193 500 156.5 362T273 249q153 25 245.5-32.5t156 26.5q63.5 84 128 170.5T843 616Z;
                                M844 622q-8 122-141 107.5t-236.5 89Q363 922 300.5 806t-145-211Q73 500 161 409t142-220.5q54-129.5 166-34T646.5 298Q712 346 782 423t62 199Z;
                                M772 550q-134 50-135.5 208T537 802.5Q439 689 325.5 699T243 604.5q31-104.5 48-174t36.5-236Q347 28 475 105t189 154.5q61 77.5 151.5 159T772 550Z;
                                M761 554q-113 54-159.5 84t-139 145.5q-92.5 115.5-186 31T225 615q42-115-22-246t61-171q125-40 252-89.5T735 161q92 102 115.5 220.5T761 554Z;
                            
                                M843 616q-24 116-129.5 167t-202 14.5Q415 761 302.5 743t-111-130.5Q193 500 156.5 362T273 249q153 25 245.5-32.5t156 26.5q63.5 84 128 170.5T843 616Z;"/>
                        </path>
                    </g>
                </svg>
            </div>
        </div>
    )
}

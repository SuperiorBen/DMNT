import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types';
// import shareSeo from "../../../assets/shareSeo.webp";
export const SeoHelmet = ({
    title,
    description = "Creamos experiencias digitales con tu marca, generando contenido de valor con un alto grado de responsabilidad y calidad. Creemos que si se puede soñar, se puede lograr",
    canonical }) => {
    return (
        <>
            <Helmet>
                { /* Standard metadata tags */}
                <title >{title}</title>
                <meta name='description' content={description} />
                <link rel="canonical" href={canonical} />
                { /* End standard metadata tags */}
                { /* Facebook tags */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                { /* End Facebook tags */}
                { /* Twitter tags */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="Hector Calles" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                { /* End Twitter tags */}

                {/* <meta property="og:image" content={shareSeo} />
                <meta property="og:image:width" content="369" />
                <meta property="og:image:height" content="300" /> */}


            </Helmet>
        </>
    )
}

// Props validation
SeoHelmet.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    canonical: PropTypes.string,
};

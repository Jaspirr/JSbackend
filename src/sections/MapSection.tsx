import React from 'react'

const MapSection = () => {
  return (
    // Sektion för kartan i formuläret.
    <section>
        <iframe 
            className="google-map"
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8130.103205429762!2d13.489654227595334!3d59.37425280019574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb17fdca3f043%3A0xa1b6b573b4e31e85!2sInre%20hamn%2C%20652%2026%20Karlstad!5e0!3m2!1ssv!2sse!4v1666942818609!5m2!1ssv!2sse" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">

        </iframe>
    </section>
  )
}

export default MapSection
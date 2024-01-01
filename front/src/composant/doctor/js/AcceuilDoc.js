import React from 'react'
import '../css/acceuil.css'
function AcceuilDoc() {
  return (
    <div>
       
       <>
  <section id="services">
    <h2>Nos Services</h2>
    <ul>
      <li>Consultations générales</li>
      <li>Examens médicaux</li>
      <li>Conseils en santé</li>
      {/* Ajoutez d'autres services si nécessaire */}
    </ul>
  </section>
  <section id="contact">
    <h2>Contactez-nous</h2>
    <p>Adresse : [Adresse du cabinet]</p>
    <p>Téléphone : [Numéro de téléphone]</p>
    <p>Horaires d'ouverture :</p>
    <ul>
      <li>Lundi - Vendredi : 9h00 - 18h00</li>
      <li>Samedi : 9h00 - 12h00</li>
    </ul>
  </section>
  <footer>
    <p>© 2023 Dr. [Nom du médecin]. Tous droits réservés.</p>
  </footer>
</>

    </div>
  )
}

export default AcceuilDoc

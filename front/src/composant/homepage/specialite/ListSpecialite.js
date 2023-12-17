import React from 'react'
import Specialite from './Specialite'
import './specialite.css'
function ListSpecialite() {
  const data=[
    {specialite:"Pédiatre",
       imgUrl:"https://medical-rh.com/wp-content/uploads/pediatre-medical-rh.jpg"
      },
      {specialite:"Cardiologue",
      imgUrl:"https://th.bing.com/th/id/R.4daba8515b40ba7ea7d5627a22eb3363?rik=ee6XNqTDIgNjnQ&pid=ImgRaw&r=0"
     },
     {specialite:"Médecin généraliste",
     imgUrl:"https://th.bing.com/th/id/OIP.uQO3fLxJT6yPkF7ymPMlogHaE7?rs=1&pid=ImgDetMain"
    },
    {specialite:"Dentiste",
    imgUrl:"https://images.larepubliquedespyrenees.fr/2021/04/01/6065cb05a43f5eb8778e8a97/golden/olesia-bilkei-shutterstock.jpg"
   },
   {specialite:"Ophtalmologue",
   imgUrl:"https://www.previssima.fr/files/previssima/images_redacteurs/actualites2017/sante/ophtalmologiste.jpg"
  },
  {specialite:"Orthopediste",
  imgUrl:"https://img-3.journaldesfemmes.fr/SihyqzHgg2Yc8jKcXEy8EhpN7Z8=/1500x/smart/358606e877984fc9b8da3ff0ca2315ce/ccmcms-jdf/11435703.jpg"
 },

  ]
  return (
    <div className='grid-container'>
      {data.map(el=><Specialite el={el}/>)}
    </div>
  )
}

export default ListSpecialite

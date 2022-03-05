import React from 'react';
import './app.css';
import aboutimg from './pexels-fauxels-3182782.jpg';
import aboutimg2 from './pexels-ron-lach-10638065.jpg';
import aboutimg3 from './pexels-canva-studio-3194518.jpg';

export default function Whale() {
    return <div className="body2"><div className="about"><div className="abouttxt"><h2>Qui sommes nous</h2> <p>Fort de 10 ans d'éxperience. Nous vous accompagnons dans la formation du metier de l'informatique.<br /> Nos nombreux modules sont réguliérement mise à jours.</p></div> <img src={aboutimg2} alt="informatique" className="img1" /></div>
        <div className="about"><img src={aboutimg} alt="informatique" className="img1" /><div className="abouttxt2"><h2>Méthodologie</h2><p>Notre méthode consiste à un suivi personnaliser et une formation soutenue. Avec des exercices dans les mêmes conditions que dans le milieu professionnel.<br /> évaluation et notation des apprenants toute au long du cycle de formation.</p></div></div>
        <div className="about"><div className="abouttxt"><h2>Fonctionnement</h2><p> Notre fonctionnement consiste à vous former par petit groupe de 5 à 12 maximums afin d'assurés un bon suivi. Des sessions allant d'une semaine de 39 heures à 6 mois selon votre programme et les modules. </p></div> <img src={aboutimg3} alt="informatique" className="img1" /></div>
    </div>;
}
;
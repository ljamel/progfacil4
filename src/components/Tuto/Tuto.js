import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

export default function Manatee() {
    return <div className="body2"><h1>Formation sur mesure</h1>
        <p>Avant votre entrée en formation, l’équipe pédagogique vous accompagne dans la définition de votre projet et adapte votre planning. Ainsi vous bénéficierez d’un planning individualisé et en accord avec votre objectif professionnel.</p>

        <Accordion>

        <Accordion.Item eventKey="0">
            <Accordion.Header>PRINCIPES DE BASE DES SYSTÈMES D’EXPLOITATION LINUX</Accordion.Header>
            <Accordion.Body>
                <p>PROGRAMME<br />La norme POSIX<br />Le noyau, c&oelig;ur du syst&egrave;me<br />Le syst&egrave;me de fichiers</p>
                <p>GESTION DE PROCESSUS ET SHELL<br />D&eacute;marrage et arr&ecirc;t du syst&egrave;me (d&eacute;marrage, processus Init et ex&eacute;cution, arr&ecirc;t)<br />Installation d&rsquo;une distribution Linux</p>
                <p>PLANIFICATION DES T&Acirc;CHES CRON<br />Automatisation de t&acirc;ches avec la r&eacute;alisation de scripts<br />Strat&eacute;gies et outils de sauvegarde et de restauration</p>


            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Base de données ORACLE PL/SQL</Accordion.Header>
            <Accordion.Body>
                <p>INTRODUCTION<br />Qu&rsquo;est-ce qu&rsquo;un SGBDR ?<br />Le SQL<br />Le SQL adapt&eacute; &agrave; Oracle</p>
                <p><br />SQL ADAPT&Eacute; &Agrave; ORACLE : LES BASES<br />Structure g&eacute;n&eacute;rale d&rsquo;une requ&ecirc;te<br />Les diff&eacute;rentes clauses<br />Requ&ecirc;te &agrave; plusieurs relations et sous-requ&ecirc;tes<br />Les boucles et les conditions</p>
                <p><br />LE BLOC PL/SQL<br />D&eacute;finition d&rsquo;un bloc PL/SQL<br />Interagir avec la base de donn&eacute;es<br />Les curseurs<br />Le traitement des erreurs<br />La gestion des transactions</p>
                <p><br />DES OUTILS ORACLE DANS LA MOD&Eacute;LISATION<br />Les tables<br />Les s&eacute;quences<br />Les Index</p>
                <p><br />LE PL/SQL STOCK&Eacute; EN BASE<br />Les triggers<br />Les fonctions et proc&eacute;dures</p>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
            <Accordion.Header>Développeur(se) PHP orienté objet - Symfony</Accordion.Header>
            <Accordion.Body>
                <h3 class="theme-color s-titre">CONTR&Ocirc;LEUR</h3>
                <div id="list-style-none">
                    <ul class="filtre-liste">
                        <li>Routing</li>
                        <li>Cr&eacute;er des routes avec Annotations</li>
                        <li>Autowiring, injection de d&eacute;pendance</li>
                        <li>La classe Response</li>
                        <li>La classe Request</li>
                    </ul>
                </div>
                <h3 class="theme-color s-titre">MOD&Egrave;LE</h3>
                <div id="list-style-none">
                    <ul class="filtre-liste">
                        <li>Migrations</li>
                        <li>Modification des donn&eacute;es (EntityManager)</li>
                        <li>S&eacute;lections des donn&eacute;es (Repository)</li>
                    </ul>
                </div>
                <h3 class="theme-color s-titre">MOTEUR DE TEMPLATES : TWIG</h3>
                <div id="list-style-none">
                    <ul class="filtre-liste">
                        <li>Filtres, fonctions, tests</li>
                        <li>Constantes globales</li>
                        <li>Webpack Encore : appronfondissement</li>
                    </ul>
                </div>
                <h3 class="theme-color s-titre">DEBUG</h3>
                <div id="list-style-none">
                    <ul class="filtre-liste">
                        <li>Web Profiler (barre de d&eacute;bug) et fichiers de log</li>
                        <li>Exception / erreurs</li>
                    </ul>
                </div>
                <h3 class="theme-color s-titre">S&Eacute;CURIT&Eacute;</h3>
                <div id="list-style-none">
                    <ul class="filtre-liste">
                        <li>Authentification (entit&eacute; User)</li>
                        <li>Autorisations, droits d&rsquo;acc&egrave;s (r&ocirc;les)</li>
                        <li>Configuration</li>
                    </ul>
                </div>
                <h3 class="theme-color s-titre">PROJET</h3>
                <div id="list-style-none">
                    <ul class="filtre-liste">
                        <li>Initiation &agrave; GIT et github</li>
                        <li>G&eacute;rer le d&eacute;veloppement d&rsquo;un projet avec GIT</li>
                    </ul>
                </div>
                <h3 class="theme-color s-titre">LES FORMULAIRES</h3>
                <div id="list-style-none">
                    <ul class="filtre-liste">
                        <li>Cr&eacute;er et traiter des formulaires simples</li>
                        <li>Appliquer des r&egrave;gles de validation</li>
                        <li>Prototyper le rendu avec Twig</li>
                    </ul>
                </div>
                <h3 class="theme-color s-titre">TRAVAUX PRATIQUES</h3>
                <div id="list-style-none">
                    <ul class="filtre-liste">
                        <li>R&eacute;aliser un site web type e-commerce avec Symfony</li>
                    </ul>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
            <Accordion.Header>Vmware installation et configuration</Accordion.Header>
            <Accordion.Body>
                <p>PREMIERS PAS AVEC LA VIRTUALISATION</p>
                <p>Avantages de la virtualisation<br />Inconv&eacute;nients d&rsquo;une machine physique<br />Aper&ccedil;u de VMware vSphere<br />D&eacute;finition des principaux composants</p>
                <p>INSTALLER ET CONFIGURER VMWARE ET VCENTER</p>
                <p>G&eacute;rer les licences et les caract&eacute;ristiques de l&rsquo;hyperviseur VMware ESXi<br />Installer et configurer un serveur ESXi<br />Mise en place du d&eacute;ploiement automatis&eacute; et M&eacute;thode de Boot d&rsquo;un serveur ESXi<br />Installer, configurer vCenter et g&eacute;rer les inventaires<br />Communication entre ESXi et vCenter</p>
                <p>Description des travaux pratiques :</p>
                <p>Installer, configurer un serveur ESXi, vCenter 6 et d&eacute;ployer l'Appliance vCenter 6.</p>
                <p>G&Eacute;RER LE R&Eacute;SEAU ET LE STOCKAGE</p>
                <p>Les switchs virtuels standard<br />Configuration r&eacute;seau avanc&eacute;e : s&eacute;curit&eacute;, gestion du trafic/du teaming<br />Stockage SAN Fibre Channel, SAN iSCSI et NFS<br />Datastores : cr&eacute;ation et gestion.</p>
                <p>Description des travaux pratiques :</p>
                <p>Configurer et g&eacute;rer un r&eacute;seau virtuel et optimiser le stockage.</p>
                <p>ADMINISTER DES MACHINES VIRTUELLES (VM)</p>
                <p>Clonage, snapshot et migration &agrave; froid<br />Gestion du mat&eacute;riel virtuel : Thin Provisionning, VMDirectPath<br />Sauvegarde avec VMware Data Protection<br />Surveillance et gestion de l'utilisation des ressources</p>
                <p>Description des travaux pratiques :</p>
                <p>Cr&eacute;er des VM, et des templates.<br />Cloner, sauvegarder et migrer &agrave; froid les VMs.<br />Surveiller et g&eacute;rer l'utilisation des ressources.</p>
                <p>S&Eacute;CURISER L' ACC&Egrave;S &Agrave; L'INFRASTRUCTURE</p>
                <p>ESXi : int&eacute;grer le pare-feu &agrave; l'Active Directory<br />S&eacute;curisation des acc&egrave;s<br />Gestion des r&ocirc;les et permissions.<br />Gestion des mises &agrave; jour (VMware Update Manager)</p>
                <p>Description des travaux pratiques :</p>
                <p>S&eacute;curiser l'acc&egrave;s &agrave; l'infrastructure VMware.<br />Configurer et administrer le pare-feu dans ESXi.<br />Installer vCenter Update Manager</p>
                <p>SURVEILLANCE ET GESTION DES RESSOURCES</p>
                <p>G&eacute;rer les ressources d&rsquo;une VM (Share, limites, r&eacute;servations)<br />Optimiser l&rsquo;utilisation des ressources processeurs et de la m&eacute;moire<br />Optimisation de l'utilisation des CPU, de la m&eacute;moire.<br />Les alarmes.</p>
                <p>FAIRE &Eacute;VOLUER LE DATACENTER</p>
                <p>VMware VMotion, VMware Storage VMotion, VMware Enhanced VMotion.<br />Gestion d'un Cluster Distributed Resource Scheduler (DRS).<br />Configuration du Enhanced VMotion Compatibility (EVC).<br />Gestion de Distributed Power Management (DPM).<br />Installation de VMware Converter Standalone : installation, migration.</p>
                <p>Description des travaux pratiques :</p>
                <p>optimiser les ressources (VMware Distributed Resource Schedule).<br />G&eacute;rer les mises &agrave; jour de l'infrastructure virtuelle.</p>
                <p>PROC&Eacute;DURE DE HAUTE DISPONIBILIT&Eacute;</p>
                <p>Mettre en place un processus de haute disponibilit&eacute; du service<br />G&eacute;rer un cluster VMware High Availability (HA) et voir les cas de d&eacute;clenchement de HA<br />Pr&eacute;sentation des vStorage API<br />Sauvegarder des machines virtuelles VM avec VMware Data Recovery<br />R&eacute;partir les ressources : DRS et DPM</p>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
            <Accordion.Header>Cybersécurités et surveillance système et réseau</Accordion.Header>
            <Accordion.Body>
                <p>INTRODUCTION</p>
                <p>La s&eacute;curit&eacute; informatique<br />Attaques et logiciels malveillants<br />Les politiques de s&eacute;curit&eacute;<br />Conduite &agrave; tenir en cas d&rsquo;incident</p>
                <p>CRYPTOLOGIE</p>
                <p>Les fonctions de hachage<br />Les algorithmes de chiffrement &agrave; cl&eacute; publique<br />La signature num&eacute;rique<br />Le protocole OpenPGP<br />Le chiffrement des syst&egrave;mes de fichiers</p>
                <p>PROTOCOLE SSH</p>
                <p>Le protocole, la s&eacute;curit&eacute; de type TE de SE Linux<br />L&rsquo;authentification &agrave; cl&eacute;s publiques<br />La configuration de SSH<br />Les politiques de s&eacute;curit&eacute;<br />MLS/MCS</p>
                <p>PKI ET SSL</p>
                <p>Les certificats x509<br />SSL</p>
                <p>PARE-FEU</p>
                <p>Les diff&eacute;rents pare-feu<br />Iptables<br />Tcp_wrappers<br />Xinetd<br />Squid</p>
                <p>VPN</p>
                <p>OpenVPN<br />IPSec</p>
                <p>LA S&Eacute;CURISATION DES SERVICES</p>
                <p>Chroot<br />Panorama des services r&eacute;seaux<br />La s&eacute;curisation des services Web : IIS, Apache,...<br />La s&eacute;curisation du DNS, d&rsquo;une base de donn&eacute;es MySQL, de l&rsquo;e-mail<br />La s&eacute;curisation d'un serveur : les journaux de bord</p>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    </div>;
}

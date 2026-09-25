export interface LegalArticle {
  id: string;
  number: string;
  title: string;
  summary?: string;
  content?: string[];
  subsections?: {
    subtitle?: string;
    items?: string[];
    paragraphs?: string[];
  }[];
  contactCard?: {
    entity: string;
    address: string;
    url: string;
    email: string;
    phone: string;
  };
  note?: string;
}

export interface TermsContent {
  title: string;
  subtitle: string;
  preamble: {
    title: string;
    intro: string;
    parties: { role: string; designation: string }[];
  };
  articles: LegalArticle[];
}

export const TERMS_FR: TermsContent = {
  title: "Conditions Générales d’Utilisation",
  subtitle: "Conditions générales d'utilisation du site speakfrenchwitheva.com",
  preamble: {
    title: "Préambule",
    intro: "Les présentes conditions générales d'utilisation sont conclues entre :",
    parties: [
      {
        role: "Le gérant du site internet",
        designation: "l'Éditeur",
      },
      {
        role: "Toute personne souhaitant accéder au site et à ses services",
        designation: "l'Utilisateur",
      },
    ],
  },
  articles: [
    {
      id: "art-1",
      number: "Article 1",
      title: "Principes",
      content: [
        "Les présentes conditions générales d'utilisation ont pour objet l'encadrement juridique de l'utilisation du site speakfrenchwitheva.com et de ses services.",
      ],
      contactCard: {
        entity: "L'entreprise individuelle Eva Ngalouo Bocquet EI",
        address: "22 boulevard Kellermann, 75013 PARIS",
        url: "https://speakfrenchwitheva.com/",
        email: "speakfrenchwitheva@gmail.com",
        phone: "+33613020803",
      },
      note: "Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut acceptation de ces conditions.",
    },
    {
      id: "art-2",
      number: "Article 2",
      title: "Évolution et durée des CGU",
      content: [
        "Les présentes conditions générales d'utilisation sont conclues pour une durée indéterminée. Le contrat produit ses effets à l'égard de l'Utilisateur à compter du début de l’utilisation du service.",
        "Le site speakfrenchwitheva.com se réserve le droit de modifier les clauses de ces conditions générales d'utilisation à tout moment et sans justification.",
      ],
    },
    {
      id: "art-3",
      number: "Article 3",
      title: "Accès au site",
      content: [
        "Tout utilisateur ayant accès à internet peut accéder gratuitement et depuis n'importe où au site speakfrenchwitheva.com.",
        "Les frais supportés par l'utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à la charge de l'Éditeur.",
        "Le site et ses différents services peuvent être interrompus ou suspendus par l’éditeur, notamment à l’occasion d’une maintenance, sans obligation de préavis ou de justification.",
      ],
    },
    {
      id: "art-4",
      number: "Article 4",
      title: "Responsabilités",
      content: [
        "La responsabilité de l'Éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption du site ou à une de ses fonctionnalités.",
        "Le matériel de connexion au site utilisé est sous l'entière responsabilité de l'Utilisateur qui doit prendre toutes les mesures appropriées pour protéger le matériel et les données notamment d'attaques virales par Internet. L'utilisateur est par ailleurs le seul responsable des sites et données qu'il consulte.",
      ],
      subsections: [
        {
          subtitle: "Poursuites judiciaires à l'encontre de l'Utilisateur",
          paragraphs: [
            "L'Éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à l'encontre de l'Utilisateur :",
          ],
          items: [
            "du fait de l'usage du site ou de tout service accessible via Internet ;",
            "du fait du non-respect par l'Utilisateur des présentes conditions générales.",
          ],
        },
        {
          paragraphs: [
            "L'Éditeur n'est pas responsable des dommages causés à l'Utilisateur, à des tiers et/ou à l'équipement de l'Utilisateur du fait de sa connexion ou de son utilisation du site et l'Utilisateur renonce à toute action contre l'Éditeur de ce fait.",
            "Si l'Éditeur venait à faire l'objet d'une procédure amiable ou judiciaire à raison de l'utilisation du site par l'Utilisateur, il pourra se retourner contre lui pour obtenir indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure.",
          ],
        },
      ],
    },
    {
      id: "art-5",
      number: "Article 5",
      title: "Propriété intellectuelle",
      content: [
        "Tous les documents techniques, produits, photographies, textes, logos, dessins, vidéos, etc., sont soumis à des droits d'auteur et sont protégés par le Code de la propriété intellectuelle. Lorsqu'ils sont remis à nos clients, ils demeurent la propriété exclusive de Eva Ngalouo Bocquet EI, seul titulaire des droits de propriété intellectuelle sur ces documents, qui doivent lui être rendus à sa demande.",
        "Nos clients s'engagent à ne faire aucun usage de ces documents susceptible de porter atteinte aux droits de propriété industrielle ou intellectuelle du fournisseur et s'engagent à ne les divulguer à aucun tiers, en dehors d'une autorisation expresse et préalable donnée par l'Éditeur.",
      ],
    },
    {
      id: "art-6",
      number: "Article 6",
      title: "Liens hypertextes",
      content: [
        "La mise en place par l'Utilisateur de tous liens hypertextes vers tout ou partie du site est strictement interdite, sauf autorisation préalable et écrite de l'Éditeur, sollicitée par courriel à l'adresse suivante : speakfrenchwitheva@gmail.com.",
        "L'Éditeur est libre de refuser cette autorisation sans avoir à justifier de quelque manière que ce soit sa décision. Dans le cas où l'Éditeur accorderait son autorisation, celle-ci n'est dans tous les cas que temporaire et pourra être retirée à tout moment, sans obligation de justification à la charge de l’éditeur.",
        "Dans tous les cas, tout lien devra être retiré sur simple demande de l'Éditeur.",
        "Toute information accessible via un lien vers d'autres sites n'est pas sous le contrôle de l'Éditeur qui décline toute responsabilité quant à leur contenu.",
      ],
    },
    {
      id: "art-7",
      number: "Article 7",
      title: "Protection des données personnelles",
      subsections: [
        {
          subtitle: "Données collectées",
          paragraphs: [
            "Les données à caractère personnel qui sont collectées sur ce site sont les suivantes :",
          ],
          items: [
            "Ouverture de compte : lors de la création du compte de l'utilisateur ;",
            "Connexion : lors de la connexion de l'utilisateur au site web, celui-ci enregistre, notamment, ses nom, prénom, données de connexion, d'utilisation, de localisation et ses données relatives au paiement ;",
            "Profil : l'utilisation des prestations prévues sur le site web permet de renseigner un profil, pouvant comprendre une adresse et un numéro de téléphone ;",
            "Paiement : dans le cadre du paiement des produits et prestations proposés sur le site web, celui-ci enregistre des données financières relatives au compte bancaire ou à la carte de crédit de l'utilisateur ;",
            "Communication : lorsque le site web est utilisé pour communiquer des données personnelles, les informations données par l'utilisateur font l'objet d'une conservation temporaire ;",
            "Cookies : les cookies sont utilisés dans le cadre de l'utilisation du site. L'utilisateur a la possibilité de désactiver les cookies à partir des paramètres de son navigateur.",
          ],
        },
        {
          subtitle: "Utilisation des données personnelles",
          paragraphs: [
            "Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services du site web, leur amélioration et le maintien d'un environnement sécurisé. Plus précisément, les utilisations sont les suivantes :",
          ],
          items: [
            "accès et utilisation du site web par l'utilisateur ;",
            "gestion du fonctionnement et optimisation du site web ;",
            "organisation des conditions d'utilisation des Services de paiement ;",
            "vérification, identification et authentification des données transmises par l'utilisateur ;",
            "proposition à l'utilisateur de la possibilité de communiquer avec d'autres utilisateurs du site web ;",
            "mise en oeuvre d’une assistance utilisateurs ;",
            "personnalisation des services en affichant des publicités en fonction de l'historique de navigation de l'utilisateur, selon ses préférences ;",
            "prévention et détection des fraudes, malwares (malicious softwares ou logiciels malveillants) et gestion des incidents de sécurité ;",
            "gestion des éventuels litiges avec les utilisateurs ;",
            "envoi d'informations commerciales et publicitaires, en fonction des préférences de l'utilisateur.",
          ],
        },
        {
          subtitle: "Partage des données personnelles avec des tiers",
          paragraphs: [
            "Les données personnelles peuvent être partagées avec des sociétés tierces, dans les cas suivants :",
          ],
          items: [
            "lorsque l'Utilisateur utilise les services de paiement, pour la mise en oeuvre de ces services, le site web est en relation avec des sociétés bancaires et financières tierces avec lesquelles elle a passé des contrats ;",
            "lorsque l'Utilisateur publie, dans les zones de commentaires libres du site web, des informations accessibles au public ;",
            "lorsque l'Utilisateur autorise le site web d'un tiers à accéder à ses données ;",
            "lorsque le site web recourt aux services de prestataires pour fournir l'assistance utilisateurs, la publicité et les services de paiement. Ces prestataires disposent d'un accès limité aux données de l'utilisateur, dans le cadre de l'exécution de ces prestations, et ont une obligation contractuelle de les utiliser en conformité avec les dispositions de la réglementation applicable en matière de protection des données à caractère personnel ;",
            "si la loi l'exige, le site web peut effectuer la transmission de données pour donner suite aux réclamations présentées contre le site web et se conformer aux procédures administratives et judiciaires ;",
            "si le site web est impliqué dans une opération de fusion, acquisition, cession d'actifs ou procédure de redressement judiciaire, l'éditeur pourra être amené à céder ou partager tout ou une partie de ses actifs, y compris les données à caractère personnel. Dans ce cas, les utilisateurs seraient informés, avant que les données à caractère personnel ne soient transférées à une tierce partie.",
          ],
        },
        {
          subtitle: "Sécurité et confidentialité",
          paragraphs: [
            "Le site web met en oeuvre des mesures organisationnelles, techniques, logicielles et physiques en matière de sécurité du numérique pour protéger les données personnelles contre les altérations, destructions et accès non autorisés. Toutefois, il est à signaler qu'internet n'est pas un environnement complètement sécurisé et le site web ne peut pas garantir la sécurité de la transmission ou du stockage internet.",
          ],
        },
        {
          subtitle: "Mise en oeuvre des droits des utilisateurs (RGPD)",
          paragraphs: [
            "En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants, qu'ils peuvent exercer en faisant leur demande à l'adresse suivante : 22 boulevard Kellermann, 75013 PARIS",
          ],
          items: [
            "Le droit d'accès : ils peuvent exercer leur droit d'accès, pour connaître les données personnelles les concernant. Dans ce cas, avant la mise en oeuvre de ce droit, le site web peut demander une preuve de l'identité de l'utilisateur afin d'en vérifier l'exactitude ;",
            "Le droit de rectification : si les données à caractère personnel détenues par le site web sont inexactes, ils peuvent demander la mise à jour des informations ;",
            "Le droit de suppression des données : les utilisateurs peuvent demander la suppression de leurs données à caractère personnel conformément aux lois applicables en matière de protection des données ;",
            "Le droit à la limitation du traitement : les utilisateurs peuvent demander au site web de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD ;",
            "Le droit de s'opposer au traitement des données : les utilisateurs peuvent s'opposer à ce que leurs données soient traitées conformément aux hypothèses prévues par le RGPD ;",
            "Le droit à la portabilité : ils peuvent réclamer que le site web leur remette les données personnelles qui lui sont fournies pour les transmettre à un nouveau site web.",
          ],
        },
        {
          subtitle: "Évolution de la présente clause",
          paragraphs: [
            "Le site web se réserve le droit d'apporter toute modification à la présente clause relative à la protection des données à caractère personnel à tout moment. Si une modification est apportée à la présente clause de protection des données à caractère personnel, le site web s'engage à publier la nouvelle version sur son site. Le site web informe également les utilisateurs de la modification par messagerie électronique, dans un délai minimum de 15 jours avant la date d'effet. Si l'utilisateur n'est pas d'accord avec les termes de la nouvelle rédaction de la clause de protection des données à caractère personnel, il a la possibilité de supprimer son compte.",
          ],
        },
      ],
    },
    {
      id: "art-8",
      number: "Article 8",
      title: "Cookies",
      content: [
        "Le site speakfrenchwitheva.com peut collecter automatiquement des informations standards. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification et plus généralement pour améliorer le service que nous vous offrons.",
      ],
    },
    {
      id: "art-9",
      number: "Article 9",
      title: "Loi applicable",
      content: [
        "Les présentes conditions générales d'utilisation sont soumises à l'application du droit français. Si les parties n'arrivent pas à résoudre un litige à l'amiable, le litige sera soumis à la compétence des tribunaux français.",
      ],
    },
  ],
};

export const TERMS_EN: TermsContent = {
  title: "Terms of Use",
  subtitle: "General Terms of Use for the speakfrenchwitheva.com website",
  preamble: {
    title: "Preamble",
    intro: "These General Terms of Use are entered into between:",
    parties: [
      {
        role: "The website operator",
        designation: "the Publisher",
      },
      {
        role: "Any person wishing to access the website and its services",
        designation: "the User",
      },
    ],
  },
  articles: [
    {
      id: "art-1",
      number: "Article 1",
      title: "Principles",
      content: [
        "The purpose of these Terms of Use is to provide a legal framework for the use of the speakfrenchwitheva.com website and its services.",
      ],
      contactCard: {
        entity: "The sole proprietorship Eva Ngalouo Bocquet EI",
        address: "22 Boulevard Kellermann, 75013 Paris",
        url: "https://speakfrenchwitheva.com/",
        email: "speakfrenchwitheva@gmail.com",
        phone: "+33613020803",
      },
      note: "These Terms of Use must be accepted by all Users; access to the website constitutes acceptance of these terms.",
    },
    {
      id: "art-2",
      number: "Article 2",
      title: "Amendments and Term of the Terms of Use",
      content: [
        "These Terms of Use are entered into for an indefinite term. The agreement takes effect with respect to the User as of the start of use of the service.",
        "The website speakfrenchwitheva.com reserves the right to modify the provisions of these Terms of Use at any time and without justification.",
      ],
    },
    {
      id: "art-3",
      number: "Article 3",
      title: "Access to the Website",
      content: [
        "Any user with Internet access may access the speakfrenchwitheva.com website free of charge from anywhere.",
        "The costs incurred by the user to access the website (Internet connection, computer equipment, etc.) are not the responsibility of the Publisher.",
        "The website and its various services may be interrupted or suspended by the Publisher, particularly for maintenance purposes, without any obligation to provide advance notice or justification.",
      ],
    },
    {
      id: "art-4",
      number: "Article 4",
      title: "Liability",
      content: [
        "The Publisher shall not be held liable in the event of any failure, malfunction, difficulty, or interruption of the website or any of its features.",
        "The equipment used to connect to the website is the sole responsibility of the User, who must take all appropriate measures to protect the equipment and data, particularly from virus attacks via the Internet. The User is also solely responsible for the websites and data they access.",
      ],
      subsections: [
        {
          subtitle: "Legal proceedings brought against the User",
          paragraphs: [
            "The Publisher shall not be held liable in the event of legal proceedings brought against the User:",
          ],
          items: [
            "arising from the use of the website or any service accessible via the Internet;",
            "arising from the User’s failure to comply with these Terms and Conditions.",
          ],
        },
        {
          paragraphs: [
            "The Publisher is not liable for any damage caused to the User, to third parties, and/or to the User’s equipment as a result of the User’s connection to or use of the site, and the User waives any right to take legal action against the Publisher in this regard.",
            "If the Publisher were to become the subject of an out-of-court settlement or legal proceedings as a result of the User’s use of the site, the Publisher may take action against the User to seek compensation for all damages, sums, judgments, and costs that may arise from such proceedings.",
          ],
        },
      ],
    },
    {
      id: "art-5",
      number: "Article 5",
      title: "Intellectual Property",
      content: [
        "All technical documents, products, photographs, texts, logos, drawings, videos, etc., are subject to copyright and are protected by the Intellectual Property Code. When provided to our clients, they remain the exclusive property of Eva Ngalouo Bocquet EI, the sole owner of the intellectual property rights to these documents, which must be returned to her upon request.",
        "Our clients agree not to make any use of these documents that could infringe upon the supplier’s industrial or intellectual property rights and agree not to disclose them to any third party without the Publisher’s express prior authorization.",
      ],
    },
    {
      id: "art-6",
      number: "Article 6",
      title: "Hyperlinks",
      content: [
        "The User is strictly prohibited from creating any hyperlinks to all or part of the website without the prior written authorization of the Publisher, which must be requested via email at the following address: speakfrenchwitheva@gmail.com.",
        "The Publisher is free to refuse such authorization without having to justify its decision in any way. In the event that the Publisher grants its authorization, such authorization is in any case only temporary and may be revoked at any time, without the Publisher being required to provide any justification.",
        "In any case, any link must be removed upon simple request from the Publisher.",
        "Any information accessible via a link to other websites is not under the control of the Publisher, who disclaims all liability for their content.",
      ],
    },
    {
      id: "art-7",
      number: "Article 7",
      title: "Protection of Personal Data",
      subsections: [
        {
          subtitle: "Data Collected",
          paragraphs: [
            "The personal data collected on this website includes the following:",
          ],
          items: [
            "Account creation: when the user creates an account;",
            "Login: when the user logs in to the website, the website records, among other things, the user’s first and last name, login credentials, location, and payment information;",
            "Profile: using the services provided on the website allows users to complete a profile, which may include an address and a phone number;",
            "Payment: in connection with the payment for products and services offered on the website, the website records financial data related to the user’s bank account or credit card;",
            "Communication: when the website is used to communicate personal data, the information provided by the user is temporarily stored;",
            "Cookies: cookies are used as part of the website’s operation. The user can disable cookies through their browser settings.",
          ],
        },
        {
          subtitle: "Use of Personal Data",
          paragraphs: [
            "The personal data collected from users is used to provide the website’s services, improve them, and maintain a secure environment. More specifically, the data is used for the following purposes:",
          ],
          items: [
            "user access to and use of the website;",
            "managing the operation and optimization of the website;",
            "establishing the terms of use for payment services;",
            "verifying, identifying, and authenticating data submitted by the user;",
            "enabling the user to communicate with other users of the website;",
            "providing user support;",
            "personalizing services by displaying advertisements based on the user’s browsing history and preferences;",
            "preventing and detecting fraud and malware (malicious software) and managing security incidents;",
            "managing any disputes with users;",
            "sending commercial and promotional information based on the user’s preferences.",
          ],
        },
        {
          subtitle: "Sharing Personal Data with Third Parties",
          paragraphs: [
            "Personal data may be shared with third-party companies in the following cases:",
          ],
          items: [
            "When the User uses payment services, in order to provide these services, the website interacts with third-party banking and financial institutions with which it has entered into contracts;",
            "when the User posts information accessible to the public in the website’s open comment sections;",
            "when the User authorizes a third-party website to access their data;",
            "when the website uses service providers to provide user support, advertising, and payment services. These service providers have limited access to user data, solely for the purpose of performing these services, and are contractually obligated to use such data in accordance with the provisions of applicable regulations regarding the protection of personal data;",
            "if required by law, the website may disclose data to address claims filed against the website and to comply with administrative and judicial proceedings;",
            "if the website is involved in a merger, acquisition, asset sale, or bankruptcy proceeding, the publisher may be required to transfer or share all or part of its assets, including personal data. In such cases, users will be notified before any personal data is transferred to a third party.",
          ],
        },
        {
          subtitle: "Security and Privacy",
          paragraphs: [
            "The website implements organizational, technical, software, and physical measures related to digital security to protect personal data against alteration, destruction, and unauthorized access. However, it should be noted that the Internet is not a completely secure environment, and the website cannot guarantee the security of Internet transmission or storage.",
          ],
        },
        {
          subtitle: "Exercise of User Rights (GDPR)",
          paragraphs: [
            "In accordance with applicable regulations governing personal data, users have the following rights, which they may exercise by submitting a request to the following address: 22 Boulevard Kellermann, 75013 PARIS",
          ],
          items: [
            "The right of access: users may exercise their right of access to review the personal data concerning them. In such cases, before granting access, the website may request proof of the user’s identity to verify its accuracy;",
            "The right to rectification: if the personal data held by the website is inaccurate, users may request that the information be updated;",
            "The right to erasure: users may request the erasure of their personal data in accordance with applicable data protection laws;",
            "The right to restriction of processing: users may request that the website restrict the processing of their personal data in accordance with the circumstances provided for by the GDPR;",
            "The right to object to data processing: users may object to the processing of their data in accordance with the circumstances provided for by the GDPR;",
            "The right to data portability: users may request that the website provide them with the personal data they have supplied so that they may transfer it to a new website.",
          ],
        },
        {
          subtitle: "Changes to This Policy",
          paragraphs: [
            "The website reserves the right to make any changes to this privacy policy at any time. If a change is made to this privacy policy, the website agrees to publish the new version on its site. The website will also notify users of the change via email at least 15 days before the effective date. If a user does not agree with the terms of the revised privacy policy, they may delete their account.",
          ],
        },
      ],
    },
    {
      id: "art-8",
      number: "Article 8",
      title: "Cookies",
      content: [
        "The speakfrenchwitheva.com website may automatically collect standard information. All information collected indirectly will be used solely to track the volume, type, and pattern of traffic on this site, to improve its design and layout, for other administrative and planning purposes, and, more generally, to enhance the service we provide to you.",
      ],
    },
    {
      id: "art-9",
      number: "Article 9",
      title: "Governing Law",
      content: [
        "These Terms and Conditions of Use are governed by French law. If the parties are unable to resolve a dispute amicably, the dispute shall be subject to the jurisdiction of the French courts.",
      ],
    },
  ],
};

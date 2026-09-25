export interface LegalPrivacyArticle {
  id: string;
  number: string;
  title: string;
  content?: string[];
  subsections?: {
    subtitle?: string;
    paragraphs?: string[];
    items?: string[];
  }[];
  detailsCard?: {
    title: string;
    items: { label: string; value: string; isLink?: boolean; linkType?: "email" | "tel" | "url" }[];
  }[];
  externalLinks?: { label: string; url: string }[];
}

export interface LegalPrivacyContent {
  title: string;
  subtitle: string;
  intro: {
    paragraphs: string[];
    cnilUrl: string;
  };
  articles: LegalPrivacyArticle[];
}

export const LEGAL_PRIVACY_FR: LegalPrivacyContent = {
  title: "Mentions Légales et Politique de confidentialité",
  subtitle: "Mentions légales et politique de confidentialité du site speakfrenchwitheva.com",
  intro: {
    paragraphs: [
      "L'entreprise individuelle Eva Ngalouo Bocquet EI, soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l'ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d'actions à la disposition des individus afin qu'ils puissent au mieux exercer leurs droits.",
      "Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site de la CNIL.",
      "La poursuite de la navigation sur ce site vaut acceptation sans réserve des dispositions et conditions d'utilisation qui suivent. La version actuellement en ligne de ces conditions d'utilisation est la seule opposable pendant toute la durée d'utilisation du site et jusqu'à ce qu'une nouvelle version la remplace.",
    ],
    cnilUrl: "https://www.cnil.fr/",
  },
  articles: [
    {
      id: "art-1",
      number: "Article 1",
      title: "Mentions légales",
      detailsCard: [
        {
          title: "1.1 Site (ci-après « le site »)",
          items: [
            { label: "Nom de domaine", value: "speakfrenchwitheva.com", isLink: true, linkType: "url" },
          ],
        },
        {
          title: "1.2 Éditeur (ci-après « l'éditeur »)",
          items: [
            { label: "Entité", value: "L’entreprise individuelle Eva Ngalouo Bocquet EI" },
            { label: "Adresse", value: "22 boulevard Kellermann, 75013 PARIS" },
            { label: "Numéro SIREN", value: "938 624 293" },
            { label: "Téléphone", value: "+33613020803", isLink: true, linkType: "tel" },
            { label: "Adresse e-mail", value: "speakfrenchwitheva@gmail.com", isLink: true, linkType: "email" },
          ],
        },
        {
          title: "1.3 Hébergeur (ci-après « l’hébergeur »)",
          items: [
            { label: "Hébergeur", value: "Canva" },
            { label: "Siège social", value: "110 Kippax Street, Surry Hills, New South Wales 2010, Australie" },
          ],
        },
      ],
    },
    {
      id: "art-2",
      number: "Article 2",
      title: "Accès au site",
      content: [
        "L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale et notamment l'envoi de courriers électroniques non sollicités.",
      ],
    },
    {
      id: "art-3",
      number: "Article 3",
      title: "Contenu du site",
      content: [
        "Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle.",
        "Ils sont la propriété pleine et entière de l'éditeur ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'éditeur, sont strictement interdites.",
        "Le fait pour l'éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.",
      ],
    },
    {
      id: "art-4",
      number: "Article 4",
      title: "Gestion du site",
      content: [
        "Pour la bonne gestion du site, l'éditeur peut à tout moment :",
      ],
      subsections: [
        {
          items: [
            "suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes ;",
            "supprimer toute information pouvant perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales ;",
            "suspendre le site afin de procéder à des mises à jour.",
          ],
        },
      ],
    },
    {
      id: "art-5",
      number: "Article 5",
      title: "Responsabilités",
      content: [
        "La responsabilité de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.",
        "Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment en cas d'attaques. Par ailleurs, vous êtes seul responsable des sites et des données que vous consultez.",
      ],
      subsections: [
        {
          subtitle: "Poursuites judiciaires",
          paragraphs: [
            "L'éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre :",
          ],
          items: [
            "du fait de l'usage du site ou de tout service accessible via Internet ;",
            "du fait du non-respect par vous des présentes conditions générales.",
          ],
        },
        {
          paragraphs: [
            "L'éditeur n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site et vous renoncez à toute action contre lui de ce fait.",
            "Si l'éditeur venait à faire l'objet d'une procédure amiable ou judiciaire en raison de votre utilisation du site, il pourra se retourner contre vous pour obtenir l'indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure.",
          ],
        },
      ],
    },
    {
      id: "art-6",
      number: "Article 6",
      title: "Liens hypertextes",
      content: [
        "La mise en place par les utilisateurs de tous liens hypertextes vers tout ou partie du site est autorisée par l'éditeur. Tout lien devra être retiré sur simple demande de l'éditeur.",
        "Toute information accessible via un lien vers d'autres sites n'est pas publiée par l'éditeur. L'éditeur ne dispose d'aucun droit sur le contenu présent dans ledit lien.",
      ],
    },
    {
      id: "art-7",
      number: "Article 7",
      title: "Collecte et protection des données",
      content: [
        "Vos données sont collectées par l'entreprise individuelle Eva Ngalouo Bocquet EI.",
        "Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) : est réputée identifiable une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou plusieurs éléments spécifiques propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale.",
        "Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes.",
      ],
    },
    {
      id: "art-8",
      number: "Article 8",
      title: "Droit d'accès, de rectification et de déréférencement de vos données",
      subsections: [
        {
          subtitle: "Vos droits RGPD",
          paragraphs: [
            "En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants :",
          ],
          items: [
            "le droit d'accès : ils peuvent exercer leur droit d'accès, pour connaître les données personnelles les concernant, en écrivant à l'adresse électronique ci-dessous mentionnée. Dans ce cas, avant la mise en oeuvre de ce droit, la Plateforme peut demander une preuve de l'identité de l'utilisateur afin d'en vérifier l'exactitude ;",
            "le droit de rectification : si les données à caractère personnel détenues par la Plateforme sont inexactes, ils peuvent demander la mise à jour des informations ;",
            "le droit de suppression des données : les utilisateurs peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois applicables en matière de protection des données ;",
            "le droit à la limitation du traitement : les utilisateurs peuvent demander à la Plateforme de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD ;",
            "le droit de s'opposer au traitement des données : les utilisateurs peuvent s'opposer à ce que leurs données soient traitées conformément aux hypothèses prévues par le RGPD ;",
            "le droit à la portabilité : ils peuvent réclamer que la Plateforme leur remette les données personnelles qu'ils ont fournies pour les transmettre à une nouvelle Plateforme.",
          ],
        },
        {
          subtitle: "Modalités d'exercice",
          paragraphs: [
            "Vous pouvez exercer ce droit en nous contactant :",
            "• Adresse postale : 22 boulevard Kellermann, 75013 PARIS",
            "• Adresse e-mail : speakfrenchwitheva@gmail.com",
            "Toute demande doit être accompagnée de la photocopie d'un titre d'identité en cours de validité signé et faire mention de l'adresse à laquelle l'éditeur pourra contacter le demandeur. La réponse sera adressée dans le mois suivant la réception de la demande. Ce délai d'un mois peut être prolongé de deux mois si la complexité de la demande et/ou le nombre de demandes l'exigent.",
            "De plus, et depuis la loi n° 2016-1321 du 7 octobre 2016, les personnes qui le souhaitent ont la possibilité d'organiser le sort de leurs données après leur décès. Pour plus d'information sur le sujet, vous pouvez consulter le site Internet de la CNIL : https://www.cnil.fr/.",
            "Nous vous recommandons de nous contacter dans un premier temps avant de déposer une réclamation auprès de la CNIL, car nous sommes à votre entière disposition pour régler votre problème.",
          ],
        },
      ],
    },
    {
      id: "art-9",
      number: "Article 9",
      title: "Utilisation des données",
      content: [
        "Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d'un environnement stable. La base légale des traitements est l'exécution du contrat entre l'utilisateur et la Plateforme. Plus précisément, les utilisations sont les suivantes :",
      ],
      subsections: [
        {
          items: [
            "accès et utilisation de la Plateforme par l'utilisateur ;",
            "gestion du fonctionnement et optimisation de la Plateforme ;",
            "mise en oeuvre d'une assistance utilisateurs ;",
            "vérification, identification et authentification des données transmises par l'utilisateur ;",
            "personnalisation des services en affichant des publicités en fonction de l'historique de navigation de l'utilisateur ;",
            "prévention et détection des fraudes, malwares (malicious softwares ou logiciels malveillants) et gestion des incidents de sécurité ;",
            "gestion des éventuels litiges avec les utilisateurs ;",
            "envoi d'informations commerciales et publicitaires, en fonction des préférences de l'utilisateur.",
          ],
        },
      ],
    },
    {
      id: "art-10",
      number: "Article 10",
      title: "Politique de conservation des données",
      content: [
        "La Plateforme conserve vos données pour la durée nécessaire pour vous fournir ses services ou son assistance. Dans la mesure raisonnablement nécessaire ou requise pour satisfaire aux obligations légales ou réglementaires, régler des litiges, empêcher les fraudes et abus ou appliquer nos modalités et conditions, nous pouvons également conserver certaines de vos informations nécessaires, même après que vous avez fermé votre compte ou que nous n'ayons plus besoin pour vous fournir nos services.",
      ],
    },
    {
      id: "art-11",
      number: "Article 11",
      title: "Partage des données personnelles avec des tiers",
      content: [
        "Les données personnelles peuvent être partagées avec des sociétés tierces exclusivement dans l'Union européenne, dans les cas suivants :",
      ],
      subsections: [
        {
          items: [
            "lorsque l'utilisateur publie, dans les zones de commentaires libres de la Plateforme, des informations accessibles au public ;",
            "quand l'utilisateur autorise le site web d'un tiers à accéder à ses données ;",
            "quand la Plateforme recourt aux services de prestataires pour fournir l'assistance utilisateurs, la publicité et les services de paiement. Ces prestataires disposent d'un accès limité aux données de l'utilisateur dans le cadre de l'exécution de ces prestations, et ont l'obligation contractuelle de les utiliser en conformité avec les dispositions de la réglementation applicable en matière de protection des données à caractère personnel ;",
            "si la loi l'exige, la Plateforme peut effectuer la transmission de données pour donner suite aux réclamations présentées contre la Plateforme et se conformer aux procédures administratives et judiciaires.",
          ],
        },
      ],
    },
    {
      id: "art-12",
      number: "Article 12",
      title: "Offres commerciales",
      content: [
        "Vous êtes susceptible de recevoir des offres commerciales de l'éditeur. Si vous ne le souhaitez pas, veuillez nous contacter à l’adresse suivante : speakfrenchwitheva@gmail.com.",
        "Vos données sont susceptibles d'être utilisées par les partenaires de l'éditeur à des fins de prospection commerciale, si vous ne le souhaitez pas, veuillez nous contacter à l’adresse suivante : speakfrenchwitheva@gmail.com.",
        "Si, lors de la consultation du site, vous accédez à des données à caractère personnel, vous devez vous abstenir de toute utilisation non autorisée et de tout acte pouvant constituer une atteinte à la vie privée ou à la réputation des personnes. L'éditeur décline toute responsabilité à cet égard. Les données sont conservées et utilisées pour une durée conforme à la législation en vigueur.",
      ],
    },
    {
      id: "art-13",
      number: "Article 13",
      title: "Cookies",
      subsections: [
        {
          subtitle: "Qu'est-ce qu'un cookie ?",
          paragraphs: [
            "Un « Cookie » ou traceur est un fichier électronique déposé sur un terminal (ordinateur, tablette, smartphone..) et lu par exemple lors de la consultation d'un site internet, de la lecture d'un courrier électronique, de l'installation ou de l'utilisation d'un logiciel ou d'une application mobile et ce, quel que soit le type de terminal utilisé (source : https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi).",
            "En naviguant sur ce site, des cookies émanant de la société responsable du site concerné et/ou des sociétés tierces pourront être déposés sur votre terminal.",
            "Lors de la première navigation sur ce site, une bannière explicative sur l'utilisation des « cookies » apparaîtra. Dès lors, en poursuivant la navigation, le client et prospect sera réputé informé et avoir accepté l'utilisation desdits cookies. Le consentement donné sera valable pour une période de treize (13) mois. L'utilisateur a la possibilité de désactiver les cookies à partir des paramètres de son navigateur.",
            "Toutes les informations collectées ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et d'autres fins administratives et de planification et plus généralement pour améliorer le service que nous vous offrons.",
          ],
        },
        {
          subtitle: "Le type de cookies utilisés et leurs objectifs",
          items: [
            "Cookies fonctionnels : ils nous permettent d'améliorer le fonctionnement du site internet et de le rendre plus convivial pour le visiteur (par exemple stockage des données de connexion).",
            "Cookies de mesure d'audience : ils permettent de générer des statistiques anonymes sur les visites (nombre de visiteurs uniques, pages consultées, temps passé).",
            "Cookies de suivi : ils permettent d'analyser votre navigation pour vous proposer des publicités ou services personnalisés (soumis à consentement préalable).",
            "Cookies des tiers : ils permettent de suivre les pages visitées pour adapter les annonces publicitaires à votre profil (soumis à consentement préalable).",
            "Cookies liés aux réseaux sociaux : ils permettent aux réseaux sociaux d'enregistrer les articles et pages partagés via leurs boutons de partage.",
            "Cookies d'amélioration du site : ils permettent de tester différentes versions d'une page internet afin d'optimiser l'expérience utilisateur.",
          ],
        },
        {
          subtitle: "Cookies tiers présents sur ce site",
          items: [
            "Google : Google Analytics, Google Tag Manager, Google AdSense, Google Dynamic Remarketing, Google AdWords conversion, DoubleClick.",
            "Facebook : Facebook Connect, Facebook Social Plugins, Facebook Custom Audience.",
            "Durée de vie : la durée de validité de ces cookies est de 13 mois.",
          ],
        },
        {
          subtitle: "Vos droits et gestion des cookies",
          paragraphs: [
            "Vous disposez d'un droit d'accès, de rectification, de limitation et de suppression de vos données personnelles liées aux cookies en nous contactant à speakfrenchwitheva@gmail.com.",
            "Blocage et suppression : vous pouvez facilement bloquer et supprimer vous-même les cookies à tout moment via les paramètres de votre navigateur internet, ou de manière centralisée via www.youronlinechoices.eu.",
            "Liens de configuration par navigateur :",
            "• Firefox : https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information",
            "• Google Chrome : https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&hl=fr",
            "• Internet Explorer : https://support.microsoft.com/fr-fr/help/278835/how-to-delete-cookie-files-in-internet-explorer",
            "• Safari : https://support.apple.com/kb/ph21411?locale=fr_FR",
          ],
        },
      ],
    },
    {
      id: "art-14",
      number: "Article 14",
      title: "Photographies et représentation des produits",
      content: [
        "Les photographies de produits, accompagnant leur description, ne sont pas contractuelles et n'engagent pas l'éditeur.",
      ],
    },
    {
      id: "art-15",
      number: "Article 15",
      title: "Loi applicable",
      content: [
        "Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux du siège social de l'éditeur, sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier.",
      ],
    },
    {
      id: "art-16",
      number: "Article 16",
      title: "Contactez-nous",
      content: [
        "Pour toute question, information sur les services présentés sur le site, ou concernant le site lui-même, vous pouvez laisser un message à l'adresse suivante : speakfrenchwitheva@gmail.com.",
      ],
    },
  ],
};

export const LEGAL_PRIVACY_EN: LegalPrivacyContent = {
  title: "Legal Notice and Privacy Policy",
  subtitle: "Legal Notice and Privacy Policy for speakfrenchwitheva.com",
  intro: {
    paragraphs: [
      "Eva Ngalouo Bocquet EI, a sole proprietorship, is committed to protecting individual rights—particularly with regard to automated data processing—and, in the interest of transparency with its customers, has established a policy that outlines all such processing activities, the purposes for which they are carried out, and the remedies available to individuals so that they may best exercise their rights.",
      "For further information on the protection of personal data, please visit the CNIL website.",
      "By continuing to browse this website, you unconditionally accept the following terms and conditions of use. The version of these terms of use currently online is the only one that is legally binding for the duration of your use of the website and until a new version replaces it.",
    ],
    cnilUrl: "https://www.cnil.fr/",
  },
  articles: [
    {
      id: "art-1",
      number: "Article 1",
      title: "Legal Notices",
      detailsCard: [
        {
          title: "1.1 Website (hereinafter “the website”)",
          items: [
            { label: "Domain name", value: "speakfrenchwitheva.com", isLink: true, linkType: "url" },
          ],
        },
        {
          title: "1.2 Publisher (hereinafter “the publisher”)",
          items: [
            { label: "Sole proprietorship", value: "Eva Ngalouo Bocquet EI" },
            { label: "Address", value: "22 Boulevard Kellermann, 75013 PARIS" },
            { label: "SIREN number", value: "938 624 293" },
            { label: "Phone number", value: "+33613020803", isLink: true, linkType: "tel" },
            { label: "Email address", value: "speakfrenchwitheva@gmail.com", isLink: true, linkType: "email" },
          ],
        },
        {
          title: "1.3 Web Host (hereinafter “the Web Host”)",
          items: [
            { label: "Host", value: "Canva" },
            { label: "Headquarters", value: "110 Kippax Street, Surry Hills, New South Wales 2010, Australia" },
          ],
        },
      ],
    },
    {
      id: "art-2",
      number: "Article 2",
      title: "Access to the Website",
      content: [
        "Access to and use of the website are strictly limited to personal use. You agree not to use this website or the information or data contained therein for commercial, political, or advertising purposes, or for any form of commercial solicitation, including, but not limited to, sending unsolicited emails.",
      ],
    },
    {
      id: "art-3",
      number: "Article 3",
      title: "Website Content",
      content: [
        "All trademarks, photographs, texts, comments, illustrations, images (whether animated or not), video clips, sounds, as well as any computer applications that may be used to operate this website, and more generally all elements reproduced or used on the website, are protected by applicable intellectual property laws.",
        "They are the full and exclusive property of the publisher or its partners. Any reproduction, representation, use, or adaptation, in any form whatsoever, of all or part of these elements—including computer applications—without the publisher’s prior written consent is strictly prohibited.",
        "The fact that the publisher does not take legal action upon becoming aware of such unauthorized uses does not constitute acceptance of said uses or a waiver of the right to pursue legal action.",
      ],
    },
    {
      id: "art-4",
      number: "Article 4",
      title: "Website Management",
      content: [
        "To ensure the proper management of the website, the publisher may at any time:",
      ],
      subsections: [
        {
          items: [
            "suspend, interrupt, or restrict access to all or part of the website; restrict access to the website, or to certain parts of the website, to a specific category of users;",
            "remove any information that may disrupt the site’s operation or violate national or international laws;",
            "suspend the site in order to perform updates.",
          ],
        },
      ],
    },
    {
      id: "art-5",
      number: "Article 5",
      title: "Liability",
      content: [
        "The publisher shall not be held liable in the event of any failure, malfunction, difficulty, or interruption in operation that prevents access to the site or any of its features.",
        "You are solely responsible for the equipment you use to connect to the site. You must take all appropriate measures to protect your equipment and your own data, particularly in the event of attacks. Furthermore, you are solely responsible for the sites and data you access.",
      ],
      subsections: [
        {
          subtitle: "Legal Proceedings",
          paragraphs: [
            "The publisher shall not be held liable in the event of legal proceedings brought against you:",
          ],
          items: [
            "arising from your use of the website or any service accessible via the Internet;",
            "arising from your failure to comply with these terms and conditions.",
          ],
        },
        {
          paragraphs: [
            "The publisher is not liable for any damages caused to you, third parties, and/or your equipment as a result of your connection to or use of the site, and you waive any right to take legal action against the publisher in this regard.",
            "If the publisher were to become the subject of an out-of-court settlement or legal proceedings as a result of your use of the site, it may seek compensation from you for all damages, sums, judgments, and costs that may arise from such proceedings.",
          ],
        },
      ],
    },
    {
      id: "art-6",
      number: "Article 6",
      title: "Hyperlinks",
      content: [
        "The publisher authorizes users to create hyperlinks to all or part of the website. Any such link must be removed upon the publisher’s request.",
        "Any information accessible via a link to other websites is not published by the publisher. The publisher has no rights over the content contained in such links.",
      ],
    },
    {
      id: "art-7",
      number: "Article 7",
      title: "Data Collection and Protection",
      content: [
        "Your data is collected by the sole proprietorship Eva Ngalouo Bocquet EI.",
        "Personal data refers to any information relating to an identified or identifiable natural person (data subject): an identifiable person is one who can be identified, directly or indirectly, in particular by reference to a name, an identification number, or to one or more factors specific to their physical, physiological, genetic, mental, economic, cultural, or social identity.",
        "The personal information that may be collected on the website is primarily used by the publisher to manage its relationship with you and, where applicable, to process your orders.",
      ],
    },
    {
      id: "art-8",
      number: "Article 8",
      title: "Right of Access, Rectification, and Deletion of Your Data",
      subsections: [
        {
          subtitle: "User GDPR Rights",
          paragraphs: [
            "Pursuant to the regulations governing personal data, users have the following rights:",
          ],
          items: [
            "the right of access: Users may exercise their right of access to learn what personal data is held about them by writing to the email address listed below. In such cases, before granting access, the Platform may request proof of the user’s identity to verify its accuracy;",
            "the right to rectification: if the personal data held by the Platform is inaccurate, users may request that the information be updated;",
            "the right to erasure: users may request the erasure of their personal data, in accordance with applicable data protection laws;",
            "the right to restriction of processing: users may request that the Platform restrict the processing of their personal data in accordance with the circumstances provided for by the GDPR;",
            "the right to object to data processing: users may object to the processing of their data in accordance with the circumstances provided for by the GDPR;",
            "the right to data portability: they may request that the Platform provide them with the personal data they have provided so that they may transfer it to a new Platform.",
          ],
        },
        {
          subtitle: "Exercising Your Rights",
          paragraphs: [
            "You may exercise this right by contacting us at the following address:",
            "• Postal address: 22 Boulevard Kellermann, 75013 PARIS",
            "• Email address: speakfrenchwitheva@gmail.com",
            "All requests must be accompanied by a photocopy of a valid, signed identification document and must include the address where the publisher can contact the requester. A response will be sent within one month of receiving the request. This one-month period may be extended by two months if the complexity of the request and/or the number of requests so require.",
            "Furthermore, pursuant to Law No. 2016-1321 of October 7, 2016, individuals who so wish may make arrangements regarding the handling of their data after their death. For more information on this subject, please visit the CNIL website: https://www.cnil.fr/.",
            "We recommend that you contact us first before filing a complaint with the CNIL, as we are here to help resolve your issue.",
          ],
        },
      ],
    },
    {
      id: "art-9",
      number: "Article 9",
      title: "Use of Data",
      content: [
        "The personal data collected from users is used to provide the Platform’s services, improve them, and maintain a stable environment. The legal basis for processing is the performance of the contract between the user and the Platform. More specifically, the data is used for the following purposes:",
      ],
      subsections: [
        {
          items: [
            "user access to and use of the Platform;",
            "management of the Platform’s operation and optimization;",
            "provision of user support;",
            "verification, identification, and authentication of data provided by the user;",
            "personalization of services by displaying advertisements based on the user’s browsing history;",
            "prevention and detection of fraud and malware (malicious software), and management of security incidents; resolution of any disputes with users;",
            "sending commercial and promotional information based on the user’s preferences.",
          ],
        },
      ],
    },
    {
      id: "art-10",
      number: "Article 10",
      title: "Data Retention Policy",
      content: [
        "The Platform retains your data for as long as necessary to provide you with its services or support. To the extent reasonably necessary or required to comply with legal or regulatory obligations, resolve disputes, prevent fraud and abuse, or enforce our terms and conditions, we may also retain certain necessary information about you, even after you have closed your account or we no longer need it to provide you with our services.",
      ],
    },
    {
      id: "art-11",
      number: "Article 11",
      title: "Sharing Personal Data with Third Parties",
      content: [
        "Personal data may be shared with third-party companies exclusively within the European Union in the following cases:",
      ],
      subsections: [
        {
          items: [
            "when the user posts publicly accessible information in the Platform’s open comment sections;",
            "when the user authorizes a third-party website to access their data;",
            "when the Platform uses service providers to provide user support, advertising, and payment services. These service providers have limited access to the user’s data for the purpose of performing these services and are contractually obligated to use such data in accordance with the provisions of applicable data protection regulations;",
            "if required by law, the Platform may disclose data to respond to claims filed against the Platform and to comply with administrative and judicial proceedings.",
          ],
        },
      ],
    },
    {
      id: "art-12",
      number: "Article 12",
      title: "Marketing Offers",
      content: [
        "You may receive marketing offers from the publisher. If you do not wish to receive them, please contact us at: speakfrenchwitheva@gmail.com.",
        "Your data may be used by the publisher’s partners for marketing purposes; if you do not wish this, please contact us at: speakfrenchwitheva@gmail.com.",
        "If, while browsing the site, you access personal data, you must refrain from any unauthorized use and any action that could constitute an invasion of privacy or damage to a person’s reputation. The publisher assumes no liability in this regard. Data is retained and used for a period consistent with applicable law.",
      ],
    },
    {
      id: "art-13",
      number: "Article 13",
      title: "Cookies",
      subsections: [
        {
          subtitle: "What is a cookie?",
          paragraphs: [
            "A “cookie” or tracker is an electronic file stored on a device (computer, tablet, smartphone, etc.) and read, for example, when visiting a website, reading an email, or installing or using software or a mobile app, regardless of the type of device used (source: https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi).",
            "When browsing this website, cookies from the company responsible for the website and/or third-party companies may be stored on your device.",
            "When you first visit this website, a banner explaining the use of “cookies” will appear. By continuing to browse the site, customers and prospects are deemed to have been informed and to have accepted the use of these cookies. The consent given will be valid for a period of thirteen (13) months. Users may disable cookies through their browser settings.",
            "All information collected will be used solely to track the volume, type, and pattern of traffic on this website, to improve its design and layout, for other administrative and planning purposes, and more generally to enhance the service we provide to you.",
          ],
        },
        {
          subtitle: "Types of cookies used and their purposes",
          items: [
            "Functional cookies: These help us improve the website’s performance and make it more user-friendly for visitors (e.g. storing login data).",
            "Audience measurement cookies: These generate anonymous statistics on website visits (unique visitors, visited pages, duration).",
            "Tracking cookies: These analyze browsing habits to provide targeted advertisements or personalized services (subject to prior consent).",
            "Third-party cookies: These track visited pages across the internet to tailor ads to your profile (subject to prior consent).",
            "Social media cookies: These enable social networks to record shared articles and pages via sharing buttons.",
            "Site improvement cookies: These test different versions of web pages to determine the best user experience.",
          ],
        },
        {
          subtitle: "Third-party cookies present on this website",
          items: [
            "Google: Google Analytics, Google Tag Manager, Google AdSense, Google Dynamic Remarketing, Google AdWords Conversion, DoubleClick.",
            "Facebook: Facebook Connect, Facebook Social Plugins, Facebook Custom Audience.",
            "Lifespan: These cookies have a lifespan of thirteen months.",
          ],
        },
        {
          subtitle: "Your rights and cookie management",
          paragraphs: [
            "You have the right to access, correct, restrict, and delete personal data associated with cookies by emailing us at speakfrenchwitheva@gmail.com.",
            "Blocking and deletion: You can block and delete cookies anytime in your web browser settings, or centrally via www.youronlinechoices.eu.",
            "Browser configuration guides:",
            "• Firefox: https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information",
            "• Google Chrome: https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&hl=fr",
            "• Internet Explorer: https://support.microsoft.com/fr-fr/help/278835/how-to-delete-cookie-files-in-internet-explorer",
            "• Safari: https://support.apple.com/kb/ph21411?locale=fr_FR",
          ],
        },
      ],
    },
    {
      id: "art-14",
      number: "Article 14",
      title: "Product Photographs and Representations",
      content: [
        "Product photographs accompanying their descriptions are not contractually binding and do not obligate the publisher.",
      ],
    },
    {
      id: "art-15",
      number: "Article 15",
      title: "Governing Law",
      content: [
        "These Terms of Use for the website are governed by French law and subject to the jurisdiction of the courts where the publisher’s corporate headquarters are located, unless a specific jurisdiction is designated by a particular law or regulation.",
      ],
    },
    {
      id: "art-16",
      number: "Article 16",
      title: "Contact Us",
      content: [
        "For any questions or information regarding the products and services featured on the website or the website itself, please send a message to: speakfrenchwitheva@gmail.com.",
      ],
    },
  ],
};

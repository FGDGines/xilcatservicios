import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { TranslationSchema } from './schema-i18n'

const resources: Resource = {
  en: {
    translation: {
      title: 'Expert Advice for your Nationality Procedures in Barcelona',
      description:
        'More than a service, we offer personalized solutions for your situation',
      buttonAction: 'Book Appointment',
      about: {
        title: 'ABOUT US',
        description:
          'For over 15 years, we have been advising and improving the quality of life for many foreigners arriving in Spain. On our website, you will find some of the answers you need to resolve some basic immigration issues.',
      },
      bot: {
        welcome: 'Hello! How can we assist you?',
        question: {
          1: `Who are we?`,
          2: `Our best service?`,
          3: `How can you contact us?`,
        },
      },
      services: {
        title: 'OUR SERVICES',
        description:
          'We offer a complete range of solutions to manage your nationality and immigration procedures, adapting to your particular needs',
        service: {
          a: {
            subtitle: 'Multimanagement',
            description:
              'Comprehensive management of your administrative needs, simplifying each process for you',
          },
          b: {
            subtitle: 'Immigration',
            description:
              'We offer clear and effective solutions to regularize and understand your migratory situation in Spain',
          },
          c: {
            subtitle: 'Nationality',
            description:
              'We facilitate the path to citizenship, accompanying you at each stage of the process',
          },
          d: {
            subtitle: 'Legal Service',
            description:
              'We provide legal representation and specialized advice at each step of your legal procedures and challenges',
          },
        },
      },
      buttonAction2: 'Want to know more',
      powers: {
        title: 'WHAT WE OFFER',
        description:
          'Select your category of interest and learn more about the different services we offer',
        buttonAction: 'Select category',
        power: {
          a: {
            title: 'Notarial Powers',
            description:
              'It is the authority given to a person to carry out and execute certain legal and material acts on our behalf. The attorney-in-fact (the person who receives the authority) does not have to accept the power; it is a unilateral decision of the grantor (the person who grants the authority).',
          },
          b: {
            title: 'Powers of Attorney',
            description: 'Document in which the notary states the veracity of what happened during an assembly, congress, session, judicial hearing or meeting of any nature, as well as the agreements or decisions taken.',
          },
          c: {
            title: 'Certified copy',
            description: 'The certification of a document is an act through which the same administrative validity is given to the photocopy of a document as to the original. That is, this copy will be equally valid to operate with it, without it being necessary to present the original document.'
          },
          d: {
            title: 'Apostille',
            description: 'The apostille is a seal that certifies the authenticity of the signature of public officials or diplomatic agents in the exercise of their functions and the position in which they have acted, which must be registered in the database of the Ministry of Foreign Affairs of the country of origin, so that the document is valid and has legal effects in another country that is a member of the 1961 Hague Convention on the Abolition of the Legalization Requirement for Foreign Public Documents.'
          },
          e: {
            title: 'Legalization',
            description: 'Legalization is an administrative act that grants validity to a foreign public document, verifying the authenticity of the signature placed on a document and the quality in which the authority signing the document has acted.'
          },
          f: {
            title: 'Sworn translation',
            description: 'Sworn translation (also called, depending on the country, public translation, official translation or certified translation) is the translation of any type of document, carried out by a translator recognized by an official body and called, for that reason, official translator, sworn translator. , certified translator or expert translator, among other names.'
          },
          g: {
            title: 'Central Civil Registry',
            description: 'It is the basic document of recognition and legal existence. At Xilcat we help you get an appointment since lately all civil registries have collapsed and only work by making an appointment online. The online system allows you to obtain: birth certificates for children born in Spain and appointments to register them, also appointments for civil marriages and to register a marriage of a Spaniard married to a person outside Spanish territory.'
          },
          h: {
            title: 'Activity licenses',
            description: 'The activity license is the document that certifies the use of a premises, warehouse or office for the exercise of a specific commercial activity. This document will describe the habitability conditions of the establishment in question, as well as the necessary conditioning for the activity that is going to be carried out there.'
          },
          i: {
            title: 'Flat Transfers',
            description: 'no Info'
          }
        },
      },
      teams: {
        title: 'OUR TEAM',
        description: 'Find your advisor',
        buttonAction: 'Schedule Appointment',
        team: {
          a: {
            name: 'Maria Torres',
            profession: 'Jurisdiction Specialist',
          },
          b: {
            name: 'Bella Fuentes',
            profession: 'Jurisdiction Specialist',
          },
          c: {
            name: 'Martha Ventanilla',
            profession: 'Jurisdiction Specialist',
          },
        },
      },
      contact: {
        title: 'Contact Information',
        description:
          'We work at 101% in your process to offer you the best solution.',
        numberPhoneOne: '(+34) 638.35.35.30',
        numberPhoneTwo: '(+34) 663.72.23.00',
        address: 'Calle Joan Güell 184 - Nou boulevard, Office 25, Barcelona.',
        social: 'Our social networks',
        form: {
          field1: {
            name: 'Name',
            placeholder: 'Jack Sullivan',
          },
          field2: {
            name: 'Email',
            placeholder: 'jack@example.com',
          },
          field3: {
            name: 'Subject or topic',
            placeholder: 'Legal Advice',
          },
          field4: {
            name: 'Message',
            placeholder: 'Write a message',
          },
          buttonAction: 'Send Message',
        },
      },
      cookies: {
        title: "Cookies Politics",
        description: `Access to this Website may involve the use of cookies. Cookies are small amounts of information that are stored in the browser used by each User - on the different devices they may use to browse - so that the server remembers certain information that will later be read only by the server that implemented it. Cookies make browsing easier, more user-friendly, and do not damage the browsing device.
        Cookies are automatic procedures for collecting information related to the preferences determined by the User during their visit to the Website in order to recognize them as a User, and personalize their experience and use of the Website, and they can also, for example, help to identify and resolve errors.
        The information collected through cookies may include the date and time of visits to the Website, the pages viewed, the time spent on the Website and the sites visited just before and after the Website. However, no cookie allows it to contact the User's telephone number or any other means of personal contact. No cookie can extract information from the User's hard drive or steal personal information. The only way for the User's private information to be part of the Cookie file is for the user to personally provide that information to the server.
        Cookies that allow a person to be identified are considered personal data. Therefore, the Privacy Policy described above will apply to them. In this sense, the User's consent will be necessary for their use. This consent will be communicated, based on an authentic choice, offered through an affirmative and positive decision, before the initial, removable and documented treatment.`,
        subtitle1: 'Our own cookies',
        subdescription1: `They are those cookies that are sent to the User's computer or device and managed exclusively by Gestoria xilcat services for the best functioning of the Website. The information collected is used to improve the quality of the Website and its Content and your experience as a User. These cookies allow us to recognize the User as a recurring visitor to the Website and adapt the content to offer content that fits their preferences.`,
        subtitle2: 'Social media cookies',
        subdescription2: `Gestoria xilcat services incorporates social network plugins, which allow access to them from the Website. For this reason, social network cookies may be stored in the User's browser. The owners of these social networks have their own data protection and cookie policies, being themselves, in each case, responsible for their own files and their own privacy practices. The User must refer to them to find out about these cookies and, where applicable, the processing of their personal data. For information purposes only, the links where you can consult these privacy and/or cookie policies are indicated below:`,
        
        subtitle3: 'Registration of Personal Data',
        subdescription3: `In compliance with the provisions of the RGPD and the LOPD-GDD, we inform you that the personal data collected by Gestoria xilcat services, through the forms extended on its pages, will be incorporated and processed in our file in order to facilitate, expedite and fulfill the commitments established between Gestoría xilcat services and the User or maintain the relationship established in the forms that the user fills out, or to respond to a request or query from the same. Likewise, in accordance with the provisions of the RGPD and the LOPD-GDD, unless the exception provided for in article 30.5 of the RGPD applies, a record of processing activities is maintained that specifies, according to its purposes, the processing activities. carried out and the other circumstances established in the RGPD.`,

        subtitle4: 'Disable, reject and delete cookies',
        subdescription4: `The User can disable, reject and delete the cookies – totally or partially – installed on their device through the settings of their browser (including, for example, Chrome, Firefox, Safari, Explorer). In this sense, the procedures for rejecting and deleting cookies may differ from one Internet browser to another. Consequently, the User must follow the instructions provided by the Internet browser he or she is using. In the event that you reject the use of cookies – in whole or in part – you may continue using the Website, although the use of some of its features may be limited.`
      },
      legal: {
        title: 'Website Privacy Policy',
        section1: {
          title: 'Privacy and data protection policy',
          description: `Respecting the provisions of current legislation, Gestoria xilcat services (hereinafter also Website) undertakes to adopt the necessary technical and organizational measures, according to the level of security appropriate to the risk of the data collected.`
        },
        section2: {
          title: 'Laws that this privacy policy incorporates',
          description: 'This privacy policy is adapted to current Spanish and European regulations regarding the protection of personal data on the internet. Specifically, it respects the following rules:',
          item1: 'Regulation (EU) 2016/679 of the European Parliament and of the Council, of April 27, 2016, on the protection of natural persons with regard to the processing of personal data and the free circulation of these data (GDPR).',
          item2: 'Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital rights (LOPD-GDD).',
          item3: 'Royal Decree 1720/2007, of December 21, which approves the Regulations for the development of Organic Law 15/1999, of December 13, on the Protection of Personal Data (RDLOPD).',
          item4: 'Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE).'
        },
        section3: {
          title: 'Identity of the person responsible for the processing of personal data',
          description: `The person responsible for the processing of personal data collected in Gestoria xilcat services is: XILENA DEL CARMEN ALEMAN SAMPAYO, with NIF: 23896437N (hereinafter, Data Controller). Their contact information is as follows: Address: Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona- Zip: 08028 Contact telephone: (+34) 663.72.23.00 - 638.35.35.30 Contact email: xilena.aleman@hotmail .com`
        },
        section4: {
          title: 'Registration of Personal Data',
          description: `In compliance with the provisions of the RGPD and the LOPD-GDD, we inform you that the personal data collected by Gestoria xilcat services, through the forms extended on its pages, will be incorporated and processed in our file in order to facilitate, expedite and fulfill the commitments established between Gestoría xilcat services and the User or maintain the relationship established in the forms that the user fills out, or to respond to a request or query from the same. Likewise, in accordance with the provisions of the RGPD and the LOPD-GDD, unless the exception provided for in article 30.5 of the RGPD applies, a record of processing activities is maintained that specifies, according to its purposes, the processing activities. carried out and the other circumstances established in the RGPD.`
        },
        section5: {
          title: 'Principles applicable to the processing of personal data',
          description: `The processing of the User's personal data will be subject to the following principles included in article 5 of the RGPD and in article 4 and following of Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of the digital rights:`,
          item1:`Principle of legality, loyalty and transparency: the User's consent will be required at all times following completely transparent information about the purposes for which personal data is collected.`,
          item2:`Purpose limitation principle: personal data will be collected for specific, explicit and legitimate purposes`,
          item3:`Data minimization principle: the personal data collected will only be strictly necessary in relation to the purposes for which they are processed.`,
          item4:`Accuracy principle: personal data must be accurate and always up to date.`,
          item5:`Principle of limitation of the conservation period: personal data will only be maintained in a way that allows the identification of the User for the time necessary for the purposes of its processing.`,
          item6:`Principle of integrity and confidentiality: personal data will be treated in a way that guarantees its security and confidentiality.`,
          item7:`Principle of proactive responsibility: the data controller will be responsible for ensuring that the above principles are met.`,
        },
        section6: {
          title: 'Categories of personal data',
          description: `The categories of data processed in Gestoría xilcat services are only identifying data. Under no circumstances are special categories of personal data processed within the meaning of Article 9 of the GDPR.`
        },
        section7: {
          title: 'Legal basis for the processing of personal data',
          description: `The legal basis for the processing of personal data is consent. Gestoría xilcat services undertakes to obtain the express and verifiable consent of the User for the processing of their personal data for one or more specific purposes. The User will have the right to withdraw their consent at any time. It will be as easy to withdraw consent as it is to give it. As a general rule, withdrawal of consent will not condition the use of the Website. On occasions in which the User must or can provide their data through forms to make queries, request information or for reasons related to the content of the Website, they will be informed if the completion of any of them is mandatory. because they are essential for the correct development of the operation carried out.`
        },
        section8: {
          title: 'Purposes of the processing for which personal data are intended',
          description: `Personal data is collected and managed by Gestoría xilcat services in order to facilitate, expedite and fulfill the commitments established between the Website and the User or the maintenance of the relationship established in the forms that the latter fills out or to attend to a request or query. Likewise, the data may be used for commercial personalization, operational and statistical purposes, and activities specific to the corporate purpose of Gestoría xilcat services, as well as for the extraction, storage of data and marketing studies to adapt the Content offered to the User. as well as improve the quality, operation and navigation of the Website. At the time the personal data is obtained, the User will be informed about the specific purpose or purposes of the processing for which the personal data will be used; that is, the use or uses that will be given to the information collected.`
        },
        section9: {
          title: 'Retention periods of personal data',
          description: `Personal data will only be retained for the minimum time necessary for the purposes of its processing and, in any case, only for the following period: 24 months, or until the User requests its deletion. At the time the personal data is obtained, the User will be informed of the period for which the personal data will be retained or, where this is not possible, the criteria used to determine this period.`
        },
        section10: {
          title: 'Recipients of personal data',
          text1: `The User's personal data will be shared with the following recipients or categories of recipients:`,
          text2: `XILCAT SERVICIOS, With Address at Calle Joan Güell 184 - Nou boulevard, Office 25, Barcelona- CP: 08028`,
          text3: `In the event that the Controller intends to transfer personal data to a third country or international organization, at the time the personal data is obtained, the User will be informed about the third country or international organization to which the data is transferred. intention to transfer the data, as well as the existence or absence of an adequacy decision from the Commission.`,
        },
        section11: {
          title: 'Personal data of minors',
          description: `Respecting the provisions of articles 8 of the RGPD and 7 of Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital rights, only those over 14 years of age may grant their consent for the processing of your personal data lawfully by Gestoría xilcat services. If it is a minor under 14 years of age, the consent of the parents or guardians will be necessary for the treatment, and this will only be considered lawful to the extent that they have authorized it.`
        },
        section12: {
          title: `Secrecy and security of personal data`,
          description1: `Gestoría xilcat services undertakes to adopt the necessary technical and organizational measures, according to the level of security appropriate to the risk of the data collected, so that the security of personal data is guaranteed and accidental destruction, loss or alteration is avoided. or unlawful use of personal data transmitted, stored or otherwise processed, or unauthorized communication or access to such data.`,
          description2: 'The Website has an SSL (Secure Socket Layer) certificate, which ensures that personal data is transmitted securely and confidentially, as the transmission of data between the server and the User, and in feedback, is fully encrypted or encrypted. .',
          description3: 'However, because Gestoría xilcat services cannot guarantee the impregnability of the Internet or the total absence of hackers or others who fraudulently access personal data, the Data Controller undertakes to inform the User without undue delay when an incident occurs. violation of the security of personal data that is likely to entail a high risk to the rights and freedoms of natural persons. Following the provisions of Article 4 of the GDPR, a violation of the security of personal data is understood to be any violation of security that causes the accidental or unlawful destruction, loss or alteration of personal data transmitted, preserved or otherwise processed, or unauthorized communication or access to said data. The personal data will be treated as confidential by the Data Controller, who undertakes to inform and guarantee through a legal or contractual obligation that said confidentiality is respected by its employees, associates, and any person to whom the data is made accessible. information.'
        },
        section13: {
          title: 'Rights derived from the processing of personal data',
          description1: 'The User has Gestoría xilcat services and may, therefore, exercise against the Data Controller the following rights recognized in the RGPD and Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital rights :',
          item1: `Principle of legality, loyalty and transparency: the User's consent will be required at all times following completely transparent information about the purposes for which personal data is collected.`,
          item2: `Right of access: It is the User's right to obtain confirmation of whether or not Gestoría xilcat services is processing their personal data and, if so, obtain information about their specific personal data and the processing that Gestoría xilcat services has carried out or will carry out. , as well as, among other things, the information available on the origin of said data and the recipients of the communications made or planned for them.`,
          item3: `Right to rectification: It is the User's right to have their personal data modified that turns out to be inaccurate or, taking into account the purposes of the treatment, incomplete.`,
          item4: `Right to deletion ("the right to be forgotten"): It is the right of the User, provided that current legislation does not establish otherwise, to obtain the deletion of their personal data when they are no longer necessary for the purposes for which they were collected. or treaties; the User has withdrawn his consent to the treatment and this does not have another legal basis; the User opposes the treatment and there is no other legitimate reason to continue with it; the personal data have been processed unlawfully; personal data must be deleted in compliance with a legal obligation; or the personal data have been obtained as a result of a direct offer of information society services to a minor under 14 years of age. In addition to deleting the data, the Controller, taking into account the available technology and the cost of its application, must take reasonable measures to inform those responsible who are processing the personal data of the interested party's request to delete any link to those personal data.`,
          item5: `Right to limitation of processing: It is the User's right to limit the processing of their personal data. The User has the right to obtain the limitation of processing when he challenges the accuracy of his personal data; the treatment is illicit; The Data Controller no longer needs the personal data, but the User needs it to make claims; and when the User has opposed the treatment.`,
          item6: `Right to data portability: In the event that the processing is carried out by automated means, the User will have the right to receive their personal data from the Data Controller in a structured, commonly used and machine-readable format, and to transmit them to another controller. of the treatment. Whenever technically possible, the Data Controller will directly transmit the data to that other controller.`,
          item7: `right of opposition: It is the User's right not to have their personal data processed or to cease their processing by Gestoria xilcat services.`,
          item8: `Right not to be subject to a decision based solely on automated processing, including profiling: This is the User's right not to be subject to an individualized decision based solely on the automated processing of their personal data, including profiling. , existing unless current legislation establishes otherwise.`,
    
          description2:  'Thus, the User may exercise their rights by written communication addressed to the Data Controller with the reference "RGPD-www.xilcatservicios.com", specifying:',
          item9: 'Name, surname of the User and copy of the DNI. In cases where representation is admitted, identification by the same means of the person representing the User will also be necessary, as well as the document accrediting the representation. The photocopy of the DNI may be replaced by any other legally valid means that proves identity.',
          item10: 'Request with the specific reasons for the request or information you want to access.',
          item11: 'Address for notification purposes.',
          item12: 'Date and signature of the applicant.',
          item13: 'Any document that proves the request you make.',

          description3: 'This application and any other attached document may be sent to the following address and/or email: Postal address: Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona- CP: 08028 Email: xilena.aleman@hotmail.com'
        },
        section14: {
          title: 'Links to third party websites',
          description: 'The Website may include hyperlinks or links that allow access to web pages of third parties other than Gestoria xilcat services, and which are therefore not operated by Gestoria xilcat services. The owners of these websites will have their own data protection policies, being themselves, in each case, responsible for their own files and their own privacy practices.'
        },
        section15: {
          title: 'Claims before the supervisory authority',
          description: 'In the event that the User considers that there is a problem or violation of current regulations in the way in which their personal data is being processed, they will have the right to effective judicial protection and to file a claim with a supervisory authority, in particular, in the State in which you have your habitual residence, place of work or place of the alleged infringement. In the case of Spain, the control authority is the Spanish Data Protection Agency (https://www.aepd.es/).'
        },
        section16: {
          title: 'ACCEPTANCE AND CHANGES TO THIS PRIVACY POLICY',
          description: 'It is necessary that the User has read and agrees with the conditions on the protection of personal data contained in this Privacy Policy, as well as that he accepts the processing of his personal data so that the Data Controller can proceed with it in the form, during the deadlines and for the purposes indicated. The use of the Website will imply acceptance of its Privacy Policy. Gestoria xilcat services reserves the right to modify its Privacy Policy, according to its own criteria, or motivated by a legislative, jurisprudential or doctrinal change of the Spanish Data Protection Agency. Changes or updates to this Privacy Policy will not be explicitly notified to the User. The User is recommended to consult this page periodically to be aware of the latest changes or updates. This Privacy Policy was updated to adapt to Regulation (EU) 2016/679 of the European Parliament and of the Council, of April 27, 2016, regarding the protection of natural persons with regard to the processing of personal data and the freedom circulation of these data (RGPD) and Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital rights. This website Privacy Policy document has been created using the online privacy policy template generator on 09/02/2022.'
        },
      },
      politics: {
        title: `LEGAL NOTICE AND GENERAL CONDITIONS OF USE`,
        section1: {
          title: 'PRIVACY AND DATA PROTECTION POLICY',
          description: `In compliance with the duty of information provided in Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE) of July 11, the following general information on this website is provided below. : The ownership of this website: www.xilcatservicios.com, (hereinafter, Website) is held by: XILENA DEL CARMEN ALEMAN SAMPAYO, with NIF: 23896437N, and whose contact information is: Address: Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona- CP: 08028 Contact phone: (+34) 663.72.23.00 - 638.35.35.30 Contact email: xilena.aleman@hotmail.com`,
        },
        section2: {
          title: `GENERAL TERMS AND CONDITIONS OF USE`,
          subtitle1: 'The object of the conditions: The Website',
          description1: `The purpose of these General Conditions of Use (hereinafter, Conditions) is to regulate access and use of the Website. For the purposes of these Conditions, the Website will be understood as: the external appearance of the screen interfaces, both statically and dynamically, that is, the navigation tree; and all the elements integrated in both the screen interfaces and the navigation tree (hereinafter, Contents) and all those online services or resources that it offers to Users (hereinafter, Services). Gestoria xilcat services reserves the right to modify, at any time, and without prior notice, the presentation and configuration of the Website and the Contents and Services that may be incorporated therein. The User acknowledges and accepts that at any time Gestoria xilcat services may interrupt, deactivate and/or cancel any of these elements that are integrated into the Website or access to them. Access to the Website by the User is free and, as a general rule, is free without the User having to provide any compensation to be able to enjoy it, except in relation to the cost of connection through the telecommunications network provided. by the access provider that the User has contracted. The use of any of the Content or Services of the Website may be done through the User's prior subscription or registration.`,
          subtitle2: 'The User',
          description2: `Access, navigation and use of the Website, as well as the spaces enabled to interact between Users, and the User and Gestoria xilcat services, such as comments and/or blogging spaces, confers the status of User, therefore All the Conditions established herein, as well as their subsequent modifications, are accepted from the moment you begin browsing the Website, without prejudice to the application of the corresponding mandatory legal regulations as the case may be. Given the relevance of the above, the User is recommended to read them every time they visit the Website. The Gestoria xilcat services Website provides a wide variety of information, services and data. The User assumes responsibility for correct use of the Website. This responsibility will extend to:`,
          item1: 'A use of the information, Content and/or Services and data offered by Gestoria xilcat services without it being contrary to the provisions of these Conditions, the Law, morality or public order, or that in any other way may result in injury to the rights of third parties or the operation of the Website itself.',
          item2: 'The veracity and legality of the information provided by the User in the forms issued by Gestoria xilcat services for access to certain Content or Services offered by the Website. In any case, the User will immediately notify Gestoria xilcat services about any fact that allows the improper use of the information registered in said forms, such as, but not only, theft, loss, or unauthorized access to identifiers. and/or passwords, in order to proceed to their immediate cancellation.',
          description3: 'Gestoria xilcat services reserves the right to withdraw all comments and contributions that violate the law, respect for the dignity of the person, that are discriminatory, xenophobic, racist, pornographic, spamming, that attack youth or childhood, the order or public safety or that, in your opinion, are not appropriate for publication. In any case, Gestoria xilcat services will not be responsible for the opinions expressed by Users through comments or other blogging or participation tools that may exist. Mere access to this Website does not imply establishing any type of commercial relationship between Gestoria xilcat services and the User. The User declares to be of legal age and to have sufficient legal capacity to be bound by these Conditions. Therefore, this Gestoria xilcat services Website is not directed at minors.',
          description4: 'Gestoria xilcat services declines any responsibility for non-compliance with this requirement. The Website is aimed mainly at Users residing in Spain. Gestoria xilcat services does not ensure that the Website complies with the laws of other countries, either totally or partially. If the User resides or is domiciled in another place and decides to access and/or navigate the Website, he or she will do so under his or her own responsibility, and must ensure that such access and navigation complies with the local legislation that is applicable to him/her, not assuming responsibility for xilcat services any liability that may arise from said access.',
        },
        section3: {
          title: 'ACCESS AND NAVIGATION ON THE WEBSITE: EXCLUSION OF WARRANTIES AND LIABILITY',
          description: `Gestoria xilcat services does not guarantee the continuity, availability and usefulness of the Website, nor the Contents or Services. Gestoria xilcat services will do everything possible to ensure the proper functioning of the Website, however, it is not responsible or guarantees that access to this Website will not be uninterrupted or that it will be error-free. Nor is it responsible or guaranteed that the content or software that can be accessed through this Website is free of error or causes damage to the User's computer system (software and hardware). In no case will Gestoria xilcat services be responsible for losses, damages or losses of any kind arising from access, navigation and use of the Website, including, but not limited to, those caused to computer systems or those caused by the introduction of viruses. Gestoria xilcat services is also not responsible for any damages that may be caused to users due to improper use of this Website. In particular, it is not responsible in any way for any telecommunications drops, interruptions, lack or defect that may occur.`,
        },
        section4: {
          title: 'LINK POLICY',
          description: `It is reported that the Gestoria xilcat services Website makes or may make available to Users link means (such as, among others, links, banners, buttons), directories and search engines that allow Users to access websites belonging to and/or managed by third parties. The installation of these links, directories and search engines on the Website is intended to facilitate Users' search for and access to the information available on the Internet, without it being considered a suggestion, recommendation or invitation to visit them. . Gestoria xilcat services does not offer or market, by itself or through third parties, the products and/or services available on said linked sites. Likewise, it will not guarantee the technical availability, accuracy, veracity, validity or legality of sites other than its property that can be accessed through the links. Gestoria xilcat services will under no circumstances review or control the content of other websites, nor does it approve, examine or make its own the products and services, content, files and any other material existing on the aforementioned linked sites. Gestoria xilcat services does not assume any responsibility for any damages that may occur due to the access, use, quality or legality of the contents, communications, opinions, products and services of websites not managed by Gestoria xilcat services and that are linked in this Website. The User or third party who makes a hyperlink from a web page of another, different, website to the Gestoria xilcat services Website must know that: Reproduction - in whole or in part - of any of the Contents and/or Services of the Website is not permitted. Website without express authorization from Gestoria xilcat services. Nor is any false, inaccurate or incorrect statement permitted on the Gestoria xilcat services Website, nor on its Contents and/or Services. With the exception of the hyperlink, the website on which said hyperlink is established will not contain any element of this Website, protected as intellectual property by the Spanish legal system, unless expressly authorized by Gestoria xilcat services. The establishment of the hyperlink will not imply the existence of relations between Gestoria xilcat services and the owner of the website from which it is made, nor the knowledge and acceptance of Gestoria xilcat services of the contents, services and/or activities offered on said website. and vice versa.`,
        },
        section5: {
          title: 'INTELLECTUAL AND INDUSTRIAL PROPERTY',
          description: `Gestoria xilcat services by itself or as an assignee, is the owner of all intellectual and industrial property rights of the Website, as well as the elements contained therein (by way of example and not exhaustive, images, sound, audio, video, software or texts, brands or logos, color combinations, structure and design, selection of materials used, computer programs necessary for its operation, access and use, etc.). They will, therefore, be works protected as intellectual property by the Spanish legal system, with both Spanish and Community regulations in this field, as well as international treaties related to the matter and signed by Spain, being applicable to them. All rights reserved. By virtue of the provisions of the Intellectual Property Law, the reproduction, distribution and public communication, including the method of making available, of all or part of the contents of this website, for commercial purposes, are expressly prohibited. on any medium and by any technical means, without the authorization of Gestoria xilcat services. The User agrees to respect the intellectual and industrial property rights of Gestoria xilcat services. You may view the elements of the Website or even print, copy and store them on the hard drive of your computer or on any other physical medium as long as it is exclusively for your personal use. The User, however, may not delete, alter, or manipulate any protection device or security system that was installed on the Website. In the event that the User or third party considers that any of the Contents of the Website constitutes a violation of the intellectual property protection rights, they must immediately notify Gestoria xilcat services through the contact details in the GENERAL INFORMATION section of this Legal Notice and General Conditions of Use.`,
        },
        section6: {
          title: 'LEGAL ACTIONS, APPLICABLE LAW AND JURISDICTION',
          description: 'Gestoria xilcat services reserves the right to file civil or criminal actions that it deems necessary for improper use of the Website and Contents, or for non-compliance with these Conditions. The relationship between the User and Gestoria xilcat services will be governed by the regulations in force and applicable in Spanish territory. If any controversy arises in relation to the interpretation and/or application of these Conditions, the parties will submit their conflicts to ordinary jurisdiction, submitting to the corresponding judges and courts in accordance with law.',
        }
      },
      blog: {
        title: "Xilcatservices's blog"
      },
      footer: {
        description:
          'We work at 101% in your process to offer you the best solution',
        newsletter: {
          title: 'NEWSLETTER',
          description: 'Subscribe to our newsletter to get the latest news',
          placeholder: 'Your e-mail',
          links: {
            1: 'About Us',
            2: 'Our Services',
            3: 'Offerings',
            4: 'Contact Us',
            5: 'Blog',
            6: 'Client Zone'
          },
        },
      },
    } as TranslationSchema,
  },
//
  es: {
    translation: {
      title: 'Asesoría experta para tus gestiones de nacionalidad en Barcelona',
      description:
        'Más que un servicio, ofrecemos soluciones personalizadas para tu situación',
      buttonAction: 'Reservar Cita',
      about: {
        title: 'SOBRE NOSOTROS',
        description:
          'Llevamos más de 15 años asesorando y mejorando la calidad de vida de muchos extranjeros que llegan a España. En nuestra Web encontrarás algunas de las respuestas que necesitas para resolver algunos temas básicos de extranjería.',
      },
      bot: {
        welcome: 'Hola ¿Como podemos ayudarte?',
        question: {
          1: `Quienes Somos?`,
          2: `Nuestro mejor servicio?`,
          3: `Como te contactas con nosotros?`,
        },
      },
      services: {
        title: 'NUESTROS SERVICIOS',
        description:
          'Ofrecemos un rango completo de soluciones para gestionar tus trámites de nacionalidad y extranjería, adaptándonos a tus necesidades particulares',
        service: {
          a: {
            subtitle: 'Multigestión',
            description:
              'Gestión y manejo integral de tus necesidades administrativas, simplificando cada proceso para ti',
          },
          b: {
            subtitle: 'Extranjería',
            description:
              'Ofrecemos soluciones claras y efectivas para regularizar y comprender tu situación migratoria en España',
          },
          c: {
            subtitle: 'Nacionalidad',
            description:
              'Facilitamos el camino hacia la ciudadanía, acompañándote en cada etapa del proceso',
          },
          d: {
            subtitle: 'Servicio Jurídico',
            description:
              'Brindamos representación legal y asesoría especializada en cada paso de tus trámites y desafíos legales',
          },
        },
      },
      buttonAction2: 'Quieres saber mas',
      powers: {
        title: 'QUE OFRECEMOS',
        description:
          'Selecciona tu categoría de interés y conoce mas sobre los diferentes servicios que proponemos',
        buttonAction: 'Selecciona la categoría',
        power: {
          a: {
            title: 'Poderes Notariales',
            description:
              'Es la autoridad que se da a una persona para realizar y ejecutar determinados actos jurídicos y materiales en nuestro nombre. El apoderado (persona que recibe la autoridad) no tiene que aceptar el poder, es una decisión unilateral del poderdante (persona que concede la autoridad).',
          },
          b: {
            title: 'Actas Notariales',
            description: 'Documento en el que el notario hace constar la veracidad de lo acontecido durante una asamblea, congreso, sesión, vista judicial o reunión de cualquier naturaleza, así como de los acuerdos o decisiones tomadas.',
          },
          c: {
            title: 'Copia Compulsada',
            description: `La compulsa de un documento es un acto a través del cual se le da la misma validez administrativa a la fotocopia de un documento que al original. Es decir, esa copia será igualmente válida para operar con ella, sin que sea necesario presentar el documento original.`
          },
          d: {
            title: 'Apostillado',
            description: 'La apostilla es un sello que certifica la autenticidad de la firma de funcionarios públicos o agentes diplomáticos en ejercicio de sus funciones y el cargo en que hayan actuado, la cual deberá estar registrada en la base de datos del Ministerio de Relaciones Exteriores de su país de origen, para que el documento sea válido y surta efectos legales en otro país miembro del Convenio de la Haya de 1961, sobre la abolición del requisito de legalización para documentos públicos extranjeros.'
          },
          e: {
            title: 'Legalización',
            description: 'La legalización es un acto administrativo por el que se otorga validez a un documento público extranjero, comprobando la autenticidad de la firma puesta en un documento y la calidad en que la autoridad firmante del documento ha actuado.'
          },
          f: {
            title: 'Traducción Jurada',
            description: 'La traducción jurada (también llamada, según el país, traducción pública, traducción oficial o traducción certificada) es la traducción de cualquier tipo de documento, realizada por un traductor reconocido por un organismo oficial y llamado, por esa razón, traductor oficial, traductor jurado, traductor certificado o perito traductor, entre otras denominaciones.'
          },
          g: {
            title: 'Registro Civil Central',
            description: 'Es el documento básico de reconocimiento y existencia legal. En Xilcat te ayudamos a conseguir cita ya que últimamente todos los registros civiles están colapsados y solo funcionan sacando cita online. El sistema online te permite sacar: partidas de nacimiento de niños nacidos en España y citas para registrarlos, también cita para matrimonios por lo civil y para registrar un matrimonio de español casado con una persona fuera del territorio español.'
          },
          h: {
            title: 'Licencias de actividad',
            description: 'La licencia de actividad es el documento que acredita el uso de un local, nave u oficina para el ejercicio de una determinada actividad comercial. En este documento se describirán las condiciones de habitabilidad del establecimiento en cuestión, así como el acondicionamiento necesario para la actividad que se va a realizar en él.'
          },
          i: {
            title: 'Traspasos Plano',
            description: 'No hay informacion'
          }
        },
      },
      teams: {
        title: 'NUESTRO EQUIPO',
        description: 'Encuentra tu asesor',
        buttonAction: 'Agendar Cita',
        team: {
          a: {
            name: 'Maria Torres',
            profession: 'Especialista en Jurisdicción',
          },
          b: {
            name: 'Bella Fuentes',
            profession: 'Especialista en Jurisdicción',
          },
          c: {
            name: 'Martha Ventanilla',
            profession: 'Especialista en Jurisdicción',
          },
        },
      },
      contact: {
        title: 'Información de Contacto',
        description:
          'Trabajamos al 101% en tu trámite para ofrecerte la mejor solución.',
        numberPhoneOne: '(+34) 638.35.35.30',
        numberPhoneTwo: '(+34) 663.72.23.00',
        address:
          'Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona.',
        social: 'Nuestras redes sociales',
        form: {
          field1: {
            name: 'Nombre',
            placeholder: 'Jack Sullivan',
          },
          field2: {
            name: 'Email',
            placeholder: 'jack@ejemplo.com',
          },
          field3: {
            name: 'Asunto o tema',
            placeholder: 'Asesoría Jurídica',
          },
          field4: {
            name: 'Mensaje',
            placeholder: 'Escribe un mensaje',
          },
          buttonAction: 'Enviar mensaje',
        },
      },
      cookies: {
        title: 'Politica de cookies',
        description: `El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
        Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
        La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
        Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.`,
        subtitle1: 'Cookies propias',
        subdescription1: `Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por Gestoria xilcat servicios para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.`,
        subtitle2: 'Cookies de redes sociales',
        subdescription2: `Gestoria xilcat servicios incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:`,
        
        subtitle3: 'Registro de Datos de Carácter Personal',
        subdescription3: `En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por Gestoria xilcat servicios, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre Gestoría xilcat servicios y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.`,

        subtitle4: 'Deshabilitar, rechazar y eliminar cookies',
        subdescription4: `El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.`
      },
      legal: {
        title: 'Política de privadesa del lloc web',
        section1: {
          title: 'Politica de privacidad y proteccion de datos',
          description: `Respetando lo establecido en la legislación vigente, Gestoria xilcat servicios (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.`
        },
        section2: {
          title: 'Leyes que incorpora esta política de privacidad',
          description: 'Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas',
          item1: 'El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).',
          item2: 'La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).',
          item3: 'El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).',
          item4: 'La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).'
        },
        section3: {
          title: 'Identidad del responsable del tratamiento de los datos personales',
          description: `El responsable del tratamiento de los datos personales recogidos en Gestoria xilcat servicios es: XILENA DEL CARMEN ALEMAN SAMPAYO, con NIF: 23896437N (en adelante, Responsable del tratamiento). Sus datos de contacto son los siguientes: Dirección: Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona- CP: 08028 Teléfono de contacto: (+34) 663.72.23.00 - 638.35.35.30 Email de contacto: xilena.aleman@hotmail.com`
        },
        section4: {
          title: 'Registro de Datos de Carácter Personal',
          description: `En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por Gestoria xilcat servicios, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre Gestoría xilcat servicios y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.`
        },
        section5: {
          title: 'Principios aplicables al tratamiento de los datos personales',
          description: `El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:`,
          item1:`Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.`,
          item2:`Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos`,
          item3:`Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.`,
          item4:`Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.`,
          item5:`Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.`,
          item6:`Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.`,
          item7:`Principio de responsabilidad proactiva: el responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.`,
        },
        section6: {
          title: 'Categorías de datos personales',
          description: `Las categorías de datos que se tratan en Gestoría xilcat servicios son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.`
        },
        section7: {
          title: 'Base legal para el tratamiento de los datos personales',
          description: `La base legal para el tratamiento de los datos personales es el consentimiento. Gestoría xilcat servicios se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos. El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web. En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.`
        },
        section8: {
          title: 'Fines del tratamiento a que se destinan los datos personales',
          description: `Los datos personales son recabados y gestionados por Gestoría xilcat servicios con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta. Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de Gestoría xilcat servicios, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web. En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada.`
        },
        section9: {
          title: 'Períodos de retención de los datos personales',
          description: `Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: 24 meses, o hasta que el Usuario solicite su supresión. En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este plazo.`
        },
        section10: {
          title: 'Destinatarios de los datos personales',
          text1: 'Los datos personales del Usuario serán compartidos con los siguientes destinatarios o categorías de destinatarios:',
          text2: 'XILCAT SERVICIOS, Con Dirección en la Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona- CP: 08028',
          text3: `En caso de que el Responsable del tratamiento tenga la intención de transferir datos personales a un tercer país u organización internacional, en el momento en que se obtengan los datos personales, se informará al Usuario acerca del tercer país u organización internacional al cual se tiene la intención de transferir los datos, así como de la existencia o ausencia de una decisión de adecuación de la Comisión.`,
        },
        section11: {
          title: 'Datos personales de menores de edad',
          description: `Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por Gestoría xilcat servicios. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.`
        },
        section12: {
          title: 'Secreto y seguridad de los datos personales',
          description1: `Gestoría xilcat servicios se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.`,
          description2: 'El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada.',
          description3: `Sin embargo, debido a que Gestoría xilcat servicios no puede garantizar la inexpugnabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos. Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.`
        },
        section13: {
          title: 'Derechos derivados del tratamiento de los datos personales',
          description1: 'El Usuario tiene sobre Gestoría xilcat servicios y podrá, por tanto, ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:',
          item1: `Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.`,
          item2: `Derecho de acceso: Es el derecho del Usuario a obtener confirmación de si Gestoría xilcat servicios está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que Gestoría xilcat servicios haya realizado o realice, así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o previstas de los mismos.`,
          item3: `Derecho de rectificación: Es el derecho del Usuario a que se modifiquen sus datos personales que resulten ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.`,
          item4: `Derecho de supresión ("el derecho al olvido"): Es el derecho del Usuario, siempre que la legislación vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; el Usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados ilícitamente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, el Responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su aplicación, deberá adoptar medidas razonables para informar a los responsables que estén tratando los datos personales de la solicitud del interesado de supresión de cualquier enlace a esos datos personales.`,
          item5: `Derecho a la limitación del tratamiento: Es el derecho del Usuario a limitar el tratamiento de sus datos personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; el tratamiento sea ilícito; el Responsable del tratamiento ya no necesite los datos personales, pero el Usuario lo necesite para hacer reclamaciones; y cuando el Usuario se haya opuesto al tratamiento.`,
          item6: `Derecho a la portabilidad de los datos: En caso de que el tratamiento se efectúe por medios automatizados, el Usuario tendrá derecho a recibir del Responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre que sea técnicamente posible, el Responsable del tratamiento transmitirá directamente los datos a ese otro responsable.`,
          item7: 'Derecho de oposición: Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos por parte de Gestoria xilcat servicios.',
          item8: 'Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles: Es el derecho del Usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.',
    
          description2:  'Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del tratamiento con la referencia "RGPD-www.xilcatservicios.com", especificando:',
          item9: 'Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación por el mismo medio de la persona que representa al Usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro medio válido en derecho que acredite la identidad.',
          item10: 'Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.',
          item11: 'Domicilio a efecto de notificaciones.',
          item12: 'Fecha y firma del solicitante.',
          item13: 'Todo documento que acredite la petición que formula.',
          description3: 'Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico: Dirección postal: Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona- CP: 08028 Correo electrónico: xilena.aleman@hotmail.com'
        },
        section14: {
          title: 'Enlaces a sitios web de terceros',
          description: 'El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de Gestoria xilcat servicios, y que por tanto no son operados por Gestoria xilcat servicios. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.'
        },
        section15: {
          title: 'Reclamaciones ante la autoridad de control',
          description: 'En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española de Protección de Datos (https://www.aepd.es/)'
        },
        section16: {
          title: 'ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD',
          description: 'Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo. Gestoria xilcat servicios se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones. Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales. Este documento de Política de Privacidad de un sitio web ha sido creado mediante el generador de plantilla de política de privacidad online el día 02/09/2022.'
        },
      },
      politics: {
        title: 'AVISO LEGAL Y CONDICIONES GENERALES DE USO',
        section1: {
          title: 'POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS',
          description: `En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web: La titularidad de este sitio web: www.xilcatservicios.com, (en adelante, Sitio Web) la ostenta: XILENA DEL CARMEN ALEMAN SAMPAYO, con NIF: 23896437N, y cuyos datos de contacto son: Dirección: Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona- CP: 08028 Teléfono de contacto: (+34) 663.72.23.00 - 638.35.35.30 Email de contacto: xilena.aleman@hotmail.com`,
        },
        section2: {
          title: `TÉRMINOS Y CONDICIONES GENERALES DE USO`,
          subtitle1: 'El objeto de las condiciones: El Sitio Web',
          description1: `El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios). Gestoria xilcat servicios se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento Gestoria xilcat servicios pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos. El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario. La utilización de alguno de los Contenidos o Servicios del Sitio Web podrá hacerse mediante la suscripción o registro previo del Usuario.`,
          subtitle2: 'El Usuario',
          description2: 'El acceso, la navegación y uso del Sitio Web, así como por los espacios habilitados para interactuar entre los Usuarios, y el Usuario y Gestoria xilcat servicios, como los comentarios y/o espacios de blogging, confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda al Usuario leerlas cada vez que visite el Sitio Web. El Sitio Web de Gestoria xilcat servicios proporciona gran diversidad de información, servicios y datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:',
          item1: 'Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por Gestoria xilcat servicios sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.',
          item2: 'La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por Gestoria xilcat servicios para el acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio Web. En todo caso, el Usuario notificará de forma inmediata a Gestoria xilcat servicios acerca de cualquier hecho que permita el uso indebido de la información registrada en dichos formularios, tales como, pero no solo, el robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata cancelación.',
          description3: 'Gestoria xilcat servicios se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren la ley, el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, spamming, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados para su publicación. En cualquier caso, Gestoria xilcat servicios no será responsable de las opiniones vertidas por los Usuarios a través de comentarios u otras herramientas de blogging o de participación que pueda haber. El mero acceso a este Sitio Web no supone entablar ningún tipo de relación de carácter comercial entre Gestoria xilcat servicios y el Usuario. El Usuario declara ser mayor de edad y disponer de la capacidad jurídica suficiente para vincularse por las presentes Condiciones. Por lo tanto, este Sitio Web de Gestoria xilcat servicios no se dirige a menores de edad. Gestoria xilcat servicios declina cualquier responsabilidad por el incumplimiento de este requisito. El Sitio Web está dirigido principalmente a Usuarios residentes en España.',
          description4: 'Gestoria xilcat servicios declina cualquier responsabilidad por el incumplimiento de este requisito. El Sitio Web está dirigido principalmente a Usuarios residentes en España. Gestoria xilcat servicios no asegura que el Sitio Web cumpla con legislaciones de otros países, ya sea total o parcialmente. Si el Usuario reside o tiene su domiciliado en otro lugar y decide acceder y/o navegar en el Sitio Web lo hará bajo su propia responsabilidad, deberá asegurarse de que tal acceso y navegación cumple con la legislación local que le es aplicable, no asumiendo Gestoria xilcat servicios responsabilidad alguna que se pueda derivar de dicho acceso.',
        },
        section3: {
          title: 'ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD',
          description: 'Gestoria xilcat servicios no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios. Gestoria xilcat servicios hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error. Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio Web, esté libre de error o cause un daño al sistema informático (software y hardware) del Usuario. En ningún caso Gestoria xilcat servicios será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y el uso del Sitio Web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas informáticos o los provocados por la introducción de virus. Gestoria xilcat servicios tampoco se hace responsable de los daños que pudiesen ocasionarse a los usuarios por un uso inadecuado de este Sitio Web. En particular, no se hace responsable en modo alguno de las caídas, interrupciones, falta o defecto de las telecomunicaciones que pudieran ocurrir.',
        },
        section4: {
          title: 'POLÍTICA DE ENLACES',
          description: 'Se informa que el Sitio Web de Gestoria xilcat servicios pone o puede poner a disposición de los Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros. La instalación de estos enlaces, directorios y motores de búsqueda en el Sitio Web tiene por objeto facilitar a los Usuarios la búsqueda de y acceso a la información disponible en Internet, sin que pueda considerarse una sugerencia, recomendación o invitación para la visita de los mismos. Gestoria xilcat servicios no ofrece ni comercializa por sí ni por medio de terceros los productos y/o servicios disponibles en dichos sitios enlazados. Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o legalidad de sitios ajenos a su propiedad a los que se pueda acceder por medio de los enlaces. Gestoria xilcat servicios en ningún caso revisará o controlará el contenido de otros sitios web, así como tampoco aprueba, examina ni hace propios los productos y servicios, contenidos, archivos y cualquier otro material existente en los referidos sitios enlazados. Gestoria xilcat servicios no asume ninguna responsabilidad por los daños y perjuicios que pudieran producirse por el acceso, uso, calidad o licitud de los contenidos, comunicaciones, opiniones, productos y servicios de los sitios web no gestionados por Gestoria xilcat servicios y que sean enlazados en este Sitio Web. El Usuario o tercero que realice un hipervínculo desde una página web de otro, distinto, sitio web al Sitio Web de Gestoria xilcat servicios deberá saber que: No se permite la reproducción —total o parcialmente— de ninguno de los Contenidos y/o Servicios del Sitio Web sin autorización expresa de Gestoria xilcat servicios. No se permite tampoco ninguna manifestación falsa, inexacta o incorrecta sobre el Sitio Web de Gestoria xilcat servicios, ni sobre los Contenidos y/o Servicios del mismo. A excepción del hipervínculo, el sitio web en el que se establezca dicho hiperenlace no contendrá ningún elemento, de este Sitio Web, protegido como propiedad intelectual por el ordenamiento jurídico español, salvo autorización expresa de Gestoria xilcat servicios. El establecimiento del hipervínculo no implicará la existencia de relaciones entre Gestoria xilcat servicios y el titular del sitio web desde el cual se realice, ni el conocimiento y aceptación de Gestoria xilcat servicios de los contenidos, servicios y/o actividades ofrecidas en dicho sitio web, y viceversa.',
        },
        section5: {
          title: 'PROPIEDAD INTELECTUAL E INDUSTRIAL',
          description: `Gestoria xilcat servicios por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (a título enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o textos, marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.). Serán, por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico español, siéndoles aplicables tanto la normativa española y comunitaria en este campo, como los tratados internacionales relativos a la materia y suscritos por España. Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Gestoria xilcat servicios. El Usuario se compromete a respetar los derechos de propiedad intelectual e industrial de Gestoria xilcat servicios. Podrá visualizar los elementos del Sitio Web o incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, exclusivamente, para su uso personal. El Usuario, sin embargo, no podrá suprimir, alterar, o manipular cualquier dispositivo de protección o sistema de seguridad que estuviera instalado en el Sitio Web. En caso de que el Usuario o tercero considere que cualquiera de los Contenidos del Sitio Web suponga una violación de los derechos de protección de la propiedad intelectual, deberá comunicarlo inmediatamente a Gestoria xilcat servicios a través de los datos de contacto del apartado de INFORMACIÓN GENERAL de este Aviso Legal y Condiciones Generales de Uso.`,
        },
        section6: {
          title: 'ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN',
          description: 'Gestoria xilcat servicios se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones. La relación entre el Usuario y Gestoria xilcat servicios se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a derecho.',
        }
      },
      blog: {
        title: "Blog de Servicios Xilcat"
      },
      footer: {
        description:
          'Trabajamos al 101% en tu tramite para ofrecerte la mejor solucion',
        newsletter: {
          title: 'NEWS LETTER',
          description:
            'Suscribete a nuestra newsletter para obtener las ultimas noticias',
          placeholder: 'Tu correo electrónico',
          links: {
            1: 'Nosotros',
            2: 'Nuestros Servicios',
            3: 'Ofrecemos',
            4: 'Contáctenos',
            5: 'Blog',
            6: 'Zona Cliente'
          },
        },
      },
    } as TranslationSchema,
  },
//
  ca: {
    translation: {
      title: `Consell Expert per als teus Procediments de Nacionalitat a Barcelona`,
      description: `Més que un servei, oferim solucions personalitzades per a la teva situació`,
      buttonAction: `Reservar Cita`,
      about: {
        title: `SOBRE NOSALTRES`,
        description: `Portem més de 15 anys assessorant i millorant la qualitat de vida de molts estrangers que arriben a Espanya. En el nostre web trobaràs algunes de les respostes que necessites per resoldre alguns temes bàsics d'estrangeria.`,
      },
      bot: {
        welcome: 'Hola! Com podem ajudar-te?',
        question: {
          1: `Qui som?`,
          2: `El nostre millor servei?`,
          3: `Com pots contactar amb nosaltres?`,
        },
      },
      services: {
        title: `ELS NOSTRES SERVEIS`,
        description: `Oferim una gamma completa de solucions per gestionar els teus tràmits de nacionalitat i estrangeria, adaptant-nos a les teves necessitats particulars`,
        service: {
          a: {
            subtitle: `Multigestió`,
            description: `Gestió i maneig integral de les teves necessitats administratives, simplificant cada procés per a tu`,
          },
          b: {
            subtitle: `Estrangeria`,
            description: `Oferim solucions clares i efectives per regularitzar i comprendre la teva situació migratòria a Espanya`,
          },
          c: {
            subtitle: `Nacionalitat`,
            description: `Facilitem el camí cap a la ciutadania, acompanyant-te en cada etapa del procés`,
          },
          d: {
            subtitle: `Servei Jurídic`,
            description: `Oferim representació legal i assessorament especialitzat en cada pas dels teus tràmits i reptes legals`,
          },
        },
      },
      buttonAction2: `Vols saber més`,
      powers: {
        title: `QUÈ OFERIM`,
        description: `Selecciona la teva categoria d'interès i coneix més sobre els diferents serveis que proposem`,
        buttonAction: `Selecciona la categoria`,
        power: {
          a: {
            title: `Poders Notarials`,
            description: `És l'autoritat que es dóna a una persona per realitzar i executar determinats actes jurídics i materials en el nostre nom. L'apoderat (persona que rep l'autoritat) no ha d'acceptar el poder, és una decisió unilateral del poderdant (persona que concedeix l'autoritat).`,
          },
          b: {
            title: `Actes Notarials`,
            description: `Document en què el notari fa constar la veracitat del que ha passat durant una assemblea, congrés, sessió, vista judicial o reunió de qualsevol naturalesa, així com dels acords o decisions preses.`,
          },
          c: {
            title: 'Còpia Compulsada',
            description: `La compulsa d'un document és un acte a través del qual es dóna la mateixa validesa administrativa a la fotocòpia d'un document que a l'original. És a dir, aquesta còpia serà igualment vàlida per operar-hi, sense que sigui necessari presentar el document original.`
          },
          d: {
            title: 'Postil·lat',
            description: `La postil·la és un segell que certifica l'autenticitat de la signatura de funcionaris públics o agents diplomàtics en exercici de les seves funcions i el càrrec en què hagin actuat, la qual haurà d'estar registrada a la base de dades del Ministeri de Relacions Exteriors del país de origen, perquè el document sigui vàlid i tingui efectes legals en un altre país membre del Conveni de la Haia de 1961, sobre l'abolició del requisit de legalització per a documents públics estrangers.`
          },
          e: {
            title: 'Legalització',
            description: `La legalització és un acte administratiu pel qual s'atorga validesa a un document públic estranger, comprovant l'autenticitat de la signatura posada en un document i la qualitat en què l'autoritat signant del document ha actuat.`
          },
          f: {
            title: 'Traducció Jurada',
            description: `La traducció jurada (també anomenada, segons el país, traducció pública, traducció oficial o traducció certificada) és la traducció de qualsevol tipus de document, realitzada per un traductor reconegut per un organisme oficial i anomenat, per aquesta raó, traductor oficial, traductor jurat , traductor certificat o perit traductor, entre altres denominacions.`
          },
          g: {
            title: 'Registre Civil Central',
            description: `És el document bàsic de reconeixement i existència legal. A Xilcat t'ajudem a aconseguir cita ja que últimament tots els registres civils estan col·lapsats i només funcionen traient cita online. El sistema online et permet treure: partides de naixement de nens nascuts a Espanya i cites per registrar-los, també cita per a matrimonis civils i per registrar un matrimoni d'espanyol casat amb una persona fora del territori espanyol.`
          },
          h: {
            title: `Llicències d'activitat`,
            description: `La llicència dactivitat és el document que acredita lús dun local, nau o oficina per a lexercici duna determinada activitat comercial. En aquest document es descriuran les condicions d'habitabilitat de l'establiment en qüestió, així com el condicionament necessari per a l'activitat que s'hi realitzarà.`
          },
          i: {
            title: 'Traspassos Plànol',
            description: 'No info'
          }
        },
      },
      teams: {
        title: `EL NOSTRE EQUIP`,
        description: `Troba el teu assessor`,
        buttonAction: `Agenda Cita`,
        team: {
          a: {
            name: `Maria Torres`,
            profession: `Especialista en Jurisdicció`,
          },
          b: {
            name: `Bella Fuentes`,
            profession: `Especialista en Jurisdicció`,
          },
          c: {
            name: `Martha Ventanilla`,
            profession: `Especialista en Jurisdicció`,
          },
        },
      },
      contact: {
        title: `Informació de Contacte`,
        description: `Treballem al 101% en el teu tràmit per oferir-te la millor solució.`,
        numberPhoneOne: `(+34) 638.35.35.30`,
        numberPhoneTwo: `(+34) 663.72.23.00`,
        address: `Carrer Joan Güell 184 - Nou boulevard, Despatx 25, Barcelona.`,
        social: `Les nostres xarxes socials`,
        form: {
          field1: {
            name: `Nom`,
            placeholder: `Jack Sullivan`,
          },
          field2: {
            name: `Email`,
            placeholder: `jack@exemple.com`,
          },
          field3: {
            name: `Assumpte o tema`,
            placeholder: `Assessoria Jurídica`,
          },
          field4: {
            name: `Missatge`,
            placeholder: `Escriu un missatge`,
          },
          buttonAction: 'Enviar missatge',
        },
      },
      cookies: {
        title: 'Política e cookies',
        description: `L'accés a aquest Lloc Web pot implicar la utilització de galetes. Les galetes són petites quantitats d'informació que s'emmagatzemen al navegador utilitzat per cada Usuari -en els diferents dispositius que pugui utilitzar per navegar- perquè el servidor recordi certa informació que posteriorment i únicament el servidor que la va implementar llegirà. Les galetes faciliten la navegació, la fan més amigable, i no fan malbé el dispositiu de navegació.
        Les cookies són procediments automàtics de recollida d'informació relativa a les preferències determinades per l'Usuari durant la visita al Lloc Web per tal de reconèixer-lo com a Usuari, i personalitzar la seva experiència i l'ús del Lloc Web, i poden també, per exemple, ajudar a identificar i resoldre errors.
        La informació recollida a través de les galetes pot incloure la data i hora de visites al Lloc Web, les pàgines visionades, el temps que ha estat al Lloc Web i els llocs visitats just abans i després. Tot i això, cap galeta permet que aquesta mateixa pugui contactar amb el número de telèfon de l'Usuari o amb qualsevol altre mitjà de contacte personal. Cap galeta no pot extreure informació del disc dur de l'Usuari o robar informació personal. L'única manera que la informació privada de l'Usuari formi part del fitxer Cookie és que l'usuari doni personalment aquesta informació al servidor.
        Les galetes que permeten identificar una persona es consideren dades personals. Per tant, a les mateixes els serà aplicable la Política de Privadesa anteriorment descrita. En aquest sentit, per utilitzar-les serà necessari el consentiment de l'Usuari. Aquest consentiment serà comunicat, en base a una elecció autèntica, ofert mitjançant una decisió afirmativa i positiva, abans del tractament inicial, removible i documentat.`,
        subtitle1: 'Cookies pròpies',
        subdescription1: `Són aquelles galetes que són enviades a l'ordinador o dispositiu de l'Usuari i gestionades exclusivament per Gestoria xilcat serveis per al millor funcionament del Lloc Web. La informació que es recull s'empra per millorar la qualitat del Lloc Web i el seu Contingut i la seva experiència com a Usuari. Aquestes cookies permeten reconèixer l'Usuari com a visitant recurrent del Lloc Web i adaptar el contingut per oferir continguts que s'ajustin a les seves preferències.`,
        subtitle2: 'Cookies de xarxes socials',
        subdescription2: `Gestoria xilcat serveis incorpora plugins de xarxes socials, que permeten accedir-hi a partir del Lloc Web. Per aquesta raó, les galetes de xarxes socials es poden emmagatzemar al navegador de l'Usuari. Els titulars de les xarxes socials esmentades disposen de les seves pròpies polítiques de protecció de dades i de cookies, sent ells mateixos, en cada cas, responsables dels seus propis fitxers i de les seves pròpies pràctiques de privadesa. L'Usuari ha de referir-s'hi per informar-se sobre aquestes galetes i, si escau, del tractament de les seves dades personals. Únicament a títol informatiu s'indiquen a continuació els enllaços en què es poden consultar aquestes polítiques de privadesa i/o de cookies:`,
        
        subtitle3: 'Registre de Dades de Caràcter Personal',
        subdescription3: `En compliment del que estableix el RGPD i la LOPD-GDD, us informem que les dades personals demanades per Gestoria xilcat serveis, mitjançant els formularis estesos a les vostres pàgines quedaran incorporats i seran tractats al nostre fitxer per tal de poder facilitar, agilitzar i complir els compromisos establerts entre Gestoria xilcat serveis i l'Usuari o el manteniment de la relació que s'estableixi als formularis que aquest empleni, o per atendre'n una sol·licitud o consulta. Així mateix, de conformitat amb el que preveu el RGPD i la LOPD-GDD, llevat que sigui aplicable l'excepció prevista a l'article 30.5 del RGPD, es manté un registre d'activitats de tractament que especifica, segons les seves finalitats, les activitats de tractament dutes a terme i les altres circumstàncies establertes al RGPD.`,

        subtitle4: 'Deshabilitar, rebutjar i eliminar cookies',
        subdescription4: `L'Usuari pot deshabilitar, rebutjar i eliminar les cookies —totalment o parcialment— instal·lades al dispositiu mitjançant la configuració del vostre navegador (entre els quals es troben, per exemple, Chrome, Firefox, Safari, Explorer). En aquest sentit, els procediments per rebutjar i eliminar les galetes poden diferir d'un navegador d'Internet a un altre. En conseqüència, l'Usuari ha d'acudir a les instruccions facilitades pel navegador d'Internet que utilitzi. En cas que rebutgi l'ús de cookies —totalment o parcialment— podrà continuar usant el Lloc Web, si bé podrà tenir limitada la utilització d'algunes de les prestacions del mateix.`
      },
      legal: {
        title: 'Política de privadesa del lloc web',
        section1: {
          title: 'Política de privadesa i protecció de dades',
          description: `Respectant el que estableix la legislació vigent, Gestoria xilcat serveis (d'ara endavant, també Lloc Web) es compromet a adoptar les mesures tècniques i organitzatives necessàries, segons el nivell de seguretat adequat al risc de les dades recollides.`
        },
        section2: {
          title: 'Lleis que incorpora aquesta política de privadesa',
          description: 'Aquesta política de privadesa està adaptada a la normativa espanyola i europea vigent en matèria de protecció de dades personals a internet. En concret, aquesta respecta les normes següents:',
          item1: `El Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d'abril del 2016, relatiu a la protecció de les persones físiques pel que fa al tractament de dades personals ia la lliure circulació d'aquestes dades (RGPD).`,
          item2: 'La Llei Orgànica 3/2018, del 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals (LOPD-GDD).',
          item3: 'El Reial decret 1720/2007, de 21 de desembre, pel qual saprova el Reglament de desplegament de la Llei Orgànica 15/1999, de 13 de desembre, de Protecció de Dades de Caràcter Personal (RDLOPD).',
          item4: 'La Llei 34/2002, de 11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE).'
        },
        section3: {
          title: 'Identitat del responsable del tractament de les dades personals',
          description: `El responsable del tractament de les dades personals recollides a Gestoria xilcat serveis és: XILENA DEL CARMEN ALEMANY SAMPAIG, amb NIF: 23896437N (d'ara endavant, Responsable del tractament). Les vostres dades de contacte són les següents: Adreça: Carrer Joan Güell 184 - Nou boulevard, Despatx 25, Barcelona- CP: 08028 Telèfon de contacte: (+34) 663.72.23.00 - 638.35.35.30 Email de contacte: xilena.aleman@hotmail .com`
        },
        section4: {
          title: 'Registre de Dades de Caràcter Personal',
          description: `En compliment del que estableix el RGPD i la LOPD-GDD, us informem que les dades personals demanades per Gestoria xilcat serveis, mitjançant els formularis estesos a les vostres pàgines quedaran incorporats i seran tractats al nostre fitxer per tal de poder facilitar, agilitzar i complir els compromisos establerts entre Gestoria xilcat serveis i l'Usuari o el manteniment de la relació que s'estableixi als formularis que aquest empleni, o per atendre'n una sol·licitud o consulta. Així mateix, de conformitat amb el que preveu el RGPD i la LOPD-GDD, llevat que sigui aplicable l'excepció prevista a l'article 30.5 del RGPD, es manté un registre d'activitats de tractament que especifica, segons les seves finalitats, les activitats de tractament dutes a terme i les altres circumstàncies establertes al RGPD.`
        },
        section5: {
          title: 'Principis aplicables al tractament de les dades personals',
          description: `El tractament de les dades personals de l'Usuari se sotmetrà als següents principis recollits a l'article 5 del RGPD ia l'article 4 i següents de la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals:`,
          item1:`Principi de licitud, lleialtat i transparència: es requerirà en tot moment el consentiment de l'Usuari prèvia informació completament transparent de les finalitats per a les quals es recullen les dades personals.`,
          item2:`Principi de limitació de la finalitat: les dades personals seran recollides amb fins determinats, explícits i legítims`,
          item3:`Principi de minimització de dades: les dades personals recollides seran únicament les estrictament necessàries en relació amb les finalitats per a les quals són tractades.`,
          item4:`Principi d'exactitud: les dades personals han de ser exactes i estar sempre actualitzades.`,
          item5:`Principi de limitació del termini de conservació: les dades personals només seran mantingudes de manera que es permeti la identificació de l'Usuari durant el temps necessari per als fins del tractament.`,
          item6:`Principi d'integritat i confidencialitat: les dades personals seran tractades de manera que se'n garanteixi la seguretat i la confidencialitat.`,
          item7:`Principi de responsabilitat proactiva: el responsable del tractament serà responsable dassegurar que els principis anteriors es compleixen.`,
        },
        section6: {
          title: 'Categories de dades personals',
          description: `Les categories de dades que es tracten a Gestoria xilcat serveis són únicament dades identificatives. En cap cas, no es tracten categories especials de dades personals en el sentit de l'article 9 del RGPD.`
        },
        section7: {
          title: 'Base legal per al tractament de les dades personals',
          description: `La base legal per al tractament de les dades personals és el consentiment. Gestoria xilcat serveis es compromet a demanar el consentiment exprés i verificable de l'Usuari per al tractament de les seves dades personals per a un o diversos fins específics. L'Usuari tindrà dret a retirar el consentiment en qualsevol moment. Serà tan fàcil retirar el consentiment com donar-ho. Com a regla general, la retirada del consentiment no condicionarà lús del Lloc Web. En les ocasions en què l'Usuari hagi o pugui facilitar les seves dades a través de formularis per fer consultes, sol·licitar informació o per motius relacionats amb el contingut del Lloc Web, se us informarà en cas que l'emplenament d'algun d'ells sigui obligatòria pel fet que aquests siguin imprescindibles per al desenvolupament correcte de l'operació realitzada.`
        },
        section8: {
          title: 'Fins del tractament a què es destinen les dades personals',
          description: `Les dades personals són recollides i gestionades per Gestoria xilcat serveis amb la finalitat de poder facilitar, agilitzar i complir els compromisos establerts entre el Lloc Web i l'Usuari o el manteniment de la relació que s'estableixi als formularis que aquest últim empleni o per atendre una sol·licitud o consulta. Igualment, les dades podran ser utilitzades amb una finalitat comercial de personalització, operativa i estadística, i activitats pròpies de l'objecte social de Gestoria xilcat serveis, així com per a l'extracció, emmagatzematge de dades i estudis de màrqueting per adequar el contingut ofert a l'usuari, així com millorar la qualitat, funcionament i navegació pel Lloc Web. En el moment en què s'obtinguin les dades personals, s'informarà l'Usuari sobre la finalitat o les finalitats específiques del tractament a què es destinaran les dades personals; és a dir, de l'ús o els usos que es donarà a la informació recopilada.`
        },
        section9: {
          title: 'Períodes de retenció de les dades personals',
          description: `Les dades personals només seran retingudes durant el temps mínim necessari per als fins del seu tractament i, en tot cas, únicament durant el termini següent: 24 mesos, o fins que l'Usuari sol·liciti la seva supressió. En el moment en què s'obtinguin les dades personals, s'informarà l'usuari sobre el termini durant el qual es conservaran les dades personals o, quan això no sigui possible, els criteris utilitzats per determinar aquest termini.`
        },
        section10: {
          title: `Destinataris de les dades personals`,
          text1: `Les dades personals de l'Usuari seran compartides amb els següents destinataris o categories de destinataris:`,
          text2: `XILCAT SERVEIS, Amb Direcció al Carrer Joan Güell 184 - Nou boulevard, Despatx 25, Barcelona- CP: 08028`,
          text3: `En cas que el Responsable del tractament tingui la intenció de transferir dades personals a un tercer país o organització internacional, en el moment que s'obtinguin les dades personals, s'informarà l'Usuari sobre el tercer país o organització internacional al qual es té intenció de transferir les dades, així com de l‟existència o absència d‟una decisió d‟adequació de la Comissió.`,
        },
        section11: {
          title: `Dades personals de menors d'edat`,
          description: `Respectant allò establert als articles 8 del RGPD i 7 de la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals, només els majors de 14 anys podran atorgar el seu consentiment per al tractament de les vostres dades personals de forma lícita per Gestoria xilcat serveis. Si es tracta d'un menor de 14 anys, caldrà el consentiment dels pares o tutors per al tractament, i aquest només es considerarà lícit en la mesura que aquests ho hagin autoritzat.`
        },
        section12: {
          title: 'Secret i seguretat de les dades personals',
          description1: `Gestoria xilcat serveis es compromet a adoptar les mesures tècniques i organitzatives necessàries, segons el nivell de seguretat adequat al risc de les dades recollides, de manera que es garanteixi la seguretat de les dades de caràcter personal i s'eviti la destrucció, pèrdua o alteració accidental o il·lícita de dades personals transmeses, conservades o tractades d'una altra manera, o la comunicació o accés no autoritzats a aquestes dades.`,
          description2: `El Lloc Web compta amb un certificat SSL (Secure Socket Layer), que assegura que les dades personals es transmeten de forma segura i confidencial, en ser la transmissió de les dades entre el servidor i l'Usuari, i en retroalimentació, totalment xifrada o encriptada .`,
          description3: `No obstant això, pel fet que Gestoria xilcat serveis no pot garantir la inexpugnabilitat d'internet ni l'absència total de hackers o altres que accedeixin de manera fraudulent a les dades personals, el Responsable del tractament es compromet a comunicar a l'Usuari sense dilació indeguda quan passi una violació de la seguretat de les dades personals que sigui probable que comporti un alt risc per als drets i llibertats de les persones físiques. Seguint el que estableix l'article 4 del RGPD, s'entén per violació de la seguretat de les dades personals tota violació de la seguretat que ocasioni la destrucció, pèrdua o alteració accidental o il·lícita de dades personals transmeses, conservades o tractades d'una altra manera, o la comunicació o accés no autoritzats a aquestes dades. Les dades personals seran tractades com a confidencials pel Responsable del tractament, qui es compromet a informar de i a garantir per mitjà d'una obligació legal o contractual que aquesta confidencialitat sigui respectada pels seus empleats, associats, i tota persona a qui li faci accessible la informació.`
        },
        section13: {
          title: `Drets derivats del tractament de les dades personals`,
          description1: `L'Usuari té sobre Gestoria xilcat serveis i podrà, per tant, exercir davant del Responsable del tractament els següents drets reconeguts al RGPD i la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals :`,
          item1: `Principi de licitud, lleialtat i transparència: es requerirà en tot moment el consentiment de l'Usuari prèvia informació completament transparent de les finalitats per a les quals es recullen les dades personals.`,
          item2: `Dret d'accés: És el dret de l'Usuari a obtenir confirmació de si Gestoria xilcat serveis està tractant o no les vostres dades personals i, en cas afirmatiu, obtenir informació sobre les vostres dades concretes de caràcter personal i del tractament que Gestoria xilcat serveis hagi realitzat o realitzi , així com, entre una altra, de la informació disponible sobre l'origen d'aquestes dades i els destinataris de les comunicacions realitzades o previstes.`,
          item3: `Dret de rectificació: És el dret de l'Usuari al fet que es modifiquin les seves dades personals que resultin ser inexactes o, tenint en compte els fins del tractament, incomplets.`,
          item4: `Dret de supressió ("el dret a l'oblit"): És el dret de l'Usuari, sempre que la legislació vigent no estableixi el contrari, a obtenir la supressió de les seves dades personals quan aquestes ja no siguin necessàries per a les finalitats per a les quals van ser recollides o tractats; l'Usuari hagi retirat el consentiment al tractament i aquest no compti amb una altra base legal; l'Usuari s'oposi al tractament i no hi hagi cap altre motiu legítim per continuar amb aquest; les dades personals hagin estat tractades il·lícitament; les dades personals s'han de suprimir en compliment d'una obligació legal; o les dades personals hagin estat obtingudes producte duna oferta directa de serveis de la societat de la informació a un menor de 14 anys. A més de suprimir les dades, el Responsable del tractament, tenint en compte la tecnologia disponible i el cost de la seva aplicació, haurà d'adoptar mesures raonables per informar els responsables que estiguin tractant les dades personals de la sol·licitud de l'interessat de supressió de qualsevol enllaç a aquestes dades personals.`,
          item5: `Dret a la limitació del tractament: És el dret de l'Usuari a limitar el tractament de les vostres dades personals. L'Usuari té dret a obtenir la limitació del tractament quan impugni l'exactitud de les dades personals; el tractament sigui il·lícit; el Responsable del tractament ja no necessiti les dades personals, però l'usuari ho necessiti per fer reclamacions; i quan l'usuari s'hagi oposat al tractament.`,
          item6: `Dret a la portabilitat de les dades: En cas que el tractament s'efectuï per mitjans automatitzats, l'Usuari tindrà dret a rebre del Responsable del tractament les dades personals en un format estructurat, d'ús comú i lectura mecànica, ia transmetre'ls a un altre responsable del tractament. Sempre que sigui tècnicament possible, el responsable del tractament transmetrà directament les dades a aquest altre responsable.`,
          item7: `Dret d'oposició: És el dret de l'Usuari que no es dugui a terme el tractament de les seves dades de caràcter personal o se'n cessi el tractament per part de Gestoria xilcat serveis.`,
          item8: `Dret a no ser objecte d'una decisió basada únicament en el tractament automatitzat, inclosa l'elaboració de perfils: És el dret de l'Usuari a no ser objecte d'una decisió individualitzada basada únicament en el tractament automatitzat de les vostres dades personals, inclosa l'elaboració de perfils , existent llevat que la legislació vigent estableixi el contrari.`,
    
          description2:  `Així, doncs, l'Usuari podrà exercitar els seus drets mitjançant comunicació escrita dirigida al Responsable del tractament amb la referència "RGPD-www.xilcatservicios.com", especificant:`,
          item9: `Nom, cognoms de l'usuari i còpia del DNI. En els casos en què s'admeti la representació, també serà necessària la identificació pel mateix mitjà de la persona que representa l'Usuari, així com el document acreditatiu de la representació. La fotocòpia del DNI podrà ser substituïda per qualsevol altre mitjà vàlid en dret que acrediti la identitat.`,
          item10: `Petició amb els motius específics de la sol·licitud o informació a què es vol accedir.`,
          item11: `Domicili a efectes de notificacions.`,
          item12: 'Data i signatura del sol·licitant.',
          item13: 'Tot document que acrediti la petició que formula.',
          description3: `Aquesta sol·licitud i qualsevol altre document adjunt podrà enviar-se a la següent adreça i/o correu electrònic: Adreça postal: Carrer Joan Güell 184 - Nou boulevard, Despatx 25, Barcelona- CP: 08028 Correu electrònic: xilena.aleman@hotmail.com`
        },
        section14: {
          title: 'Enllaços a llocs web de tercers',
          description: `El Lloc Web pot incloure hipervincles o enllaços que permeten accedir a pàgines web de tercers diferents de Gestoria xilcat serveis, i que per tant no són operats per Gestoria xilcat serveis. Els titulars d'aquests llocs web disposaran de les seves pròpies polítiques de protecció de dades, i ells mateixos seran, en cada cas, responsables dels seus propis fitxers i de les seves pròpies pràctiques de privadesa.`
        },
        section15: {
          title: `Reclamacions davant de l'autoritat de control`,
          description: `En cas que l'Usuari consideri que hi ha un problema o infracció de la normativa vigent en la forma com s'estan tractant les dades personals, tindrà dret a la tutela judicial efectiva ia presentar una reclamació davant d'una autoritat de control, en particular, a l'Estat on tingui la residència habitual, el lloc de treball o el lloc de la suposada infracció. En el cas dEspanya, lautoritat de control és lAgència Espanyola de Protecció de Dades (https://www.aepd.es/).`
        },
        section16: {
          title: 'ACCEPTACIÓ I CANVIS EN AQUESTA POLÍTICA DE PRIVACITAT',
          description: `Cal que l'Usuari hagi llegit i estigui conforme amb les condicions sobre la protecció de dades de caràcter personal contingudes en aquesta Política de Privadesa, així com que accepti el tractament de les seves dades personals perquè el Responsable del tractament pugui procedir-hi a la forma, durant els terminis i per a les finalitats indicades. L'ús del Lloc Web implicarà l'acceptació de la Política de Privadesa del mateix. Gestoria xilcat serveis es reserva el dret a modificar la seva Política de Privadesa, d'acord amb el seu propi criteri, o motivat per un canvi legislatiu, jurisprudencial o doctrinal de l'Agència Espanyola de Protecció de Dades. Els canvis o actualitzacions d'aquesta Política de Privadesa no seran notificats de manera explícita a l'Usuari. Es recomana a l'Usuari consultar aquesta pàgina de forma periòdica per estar al corrent dels darrers canvis o actualitzacions. Aquesta Política de Privadesa va ser actualitzada per adaptar-se al Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d'abril de 2016, relatiu a la protecció de les persones físiques pel que fa al tractament de dades personals ia la lliure circulació d'aquestes dades (RGPD) ia la Llei orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals. Aquest document de Política de Privadesa d'un lloc web ha estat creat mitjançant el generador de plantilla de política de privadesa en línia el dia 02/09/2022.`
        },
      },
      politics: {
        title: `AVÍS LEGAL I CONDICIONS GENERALS D'ÚS`,
        section1: {
          title: 'POLÍTICA DE PRIVACITAT I PROTECCIÓ DE DADES',
          description: `En compliment amb el deure informació disposat a la Llei 34/2002 de Serveis de la Societat de la Informació i el Comerç Electrònic (LSSI-CE) d'11 de juliol, es faciliten a continuació les dades d'informació general següents d'aquest lloc web : La titularitat d'aquest lloc web: www.xilcatservicios.com, (d'ara endavant, Lloc Web) l'ostenta: XILENA DEL CARMEN ALEMAN SAMPAYO, amb NIF: 23896437N, les dades de contacte de les quals són: Adreça: Carrer Joan Güell 184 - Nou boulevard, Despatx 25, Barcelona- CP: 08028 Telèfon de contacte: (+34) 663.72.23.00 - 638.35.35.30 Email de contacte: xilena.aleman@hotmail.com`,
        },
        section2: {
          title: `TERMES I CONDICIONS GENERALS D'ÚS`,
          subtitle1: `L'objecte de les condicions: El Lloc Web`,
          description1: `L'objecte d'aquestes Condicions Generals d'Ús (d'ara endavant, Condicions) és regular l'accés i la utilització del Lloc Web. Als efectes de les presents Condicions s'entendrà com a Lloc Web: l'aparença externa de les interfícies de pantalla, tant de forma estàtica com de forma dinàmica, és a dir, l'arbre de navegació; i tots els elements integrats tant a les interfícies de pantalla com a l'arbre de navegació (d'ara endavant, Continguts) i tots aquells serveis o recursos en línia que si escau ofereixi als Usuaris (d'ara endavant, Serveis). Gestoria xilcat serveis es reserva la facultat de modificar, en qualsevol moment, i sense avís previ, la presentació i configuració del Lloc Web i dels Continguts i Serveis que hi poguessin estar incorporats. L'Usuari reconeix i accepta que en qualsevol moment Gestoria xilcat serveis pugui interrompre, desactivar i/o cancel·lar qualsevol d'aquests elements que s'integren al Lloc Web o accedir-hi. L'accés al Lloc Web per l'Usuari té caràcter lliure i, per regla general, és gratuït sense que l'Usuari hagi de proporcionar una contraprestació per poder-ne gaudir, llevat del cost de connexió a través de la xarxa de telecomunicacions subministrada pel proveïdor d'accés que hagi contractat l'usuari. La utilització d'algun dels Continguts o Serveis del Lloc Web es pot fer mitjançant la subscripció o el registre previ de l'Usuari.`,
          subtitle2: `L'Usuari`,
          description2: `L'accés, la navegació i l'ús del Lloc Web, així com pels espais habilitats per interactuar entre els Usuaris, i l'Usuari i Gestoria xilcat serveis, com els comentaris i/o espais de blogging, confereix la condició d'Usuari, per la qual cosa s'accepten, des que s'inicia la navegació pel Lloc Web, totes les Condicions aquí establertes, així com les seves modificacions ulteriors, sens perjudici de l'aplicació de la corresponent normativa legal de compliment obligat segons el cas. Atesa la rellevància de l'anterior, es recomana a l'Usuari llegir-les cada cop que visiteu el Lloc Web. El Lloc Web de Gestoria xilcat serveis proporciona una gran diversitat d'informació, serveis i dades. L'Usuari assumeix la seva responsabilitat per fer un ús correcte del Lloc Web. Aquesta responsabilitat s'estendrà a:`,
          item1: `Un ús de la informació, Continguts i/o Serveis i dades ofertes per Gestoria xilcat serveis sense que sigui contrari al que disposen aquestes Condicions, la Llei, la moral o l'ordre públic, o que de qualsevol altra manera puguin suposar lesió de els drets de tercers o del mateix funcionament del Lloc Web.`,
          item2: `La veracitat i licitud de les informacions aportades per l'Usuari als formularis estesos per Gestoria xilcat serveis per a l'accés a certs Continguts o Serveis oferts pel Lloc Web. En tot cas, l'Usuari notificarà de forma immediata a Gestoria xilcat serveis sobre qualsevol fet que permeti l'ús indegut de la informació registrada en aquests formularis, com ara, però no només, el robatori, la pèrdua, o l'accés no autoritzat a identificadors i/o contrasenyes, a fi de procedir a la seva immediata cancel·lació.`,
          description3: `Gestoria xilcat serveis es reserva el dret de retirar tots aquells comentaris i aportacions que vulnerin la llei, el respecte a la dignitat de la persona, que siguin discriminatoris, xenòfobs, racistes, pornogràfics, spamming, que atemptin contra la joventut o la infància, el ordre o la seguretat pública o que, a parer seu, no resultessin adequats per a la seva publicació. En qualsevol cas, Gestoria xilcat serveis no serà responsable de les opinions abocades pels Usuaris a través de comentaris o altres eines de blogging o de participació que hi pugui haver. El mer accés a aquest Lloc Web no suposa entaular cap mena de relació de caràcter comercial entre Gestoria xilcat serveis i l'Usuari. L'Usuari declara que és més gran i disposar de la capacitat jurídica suficient per vincular-se per aquestes Condicions. Per tant, aquest Lloc Web de Gestoria xilcat serveis no sadreça a menors dedat.`,
          description4:  `Gestoria xilcat serveis declina qualsevol responsabilitat per l´incompliment d´aquest requisit. El Lloc Web està dirigit principalment a Usuaris residents a Espanya. Gestoria xilcat serveis no assegura que el Lloc Web compleixi amb legislacions d'altres països, ja sigui totalment o parcialment. Si l'Usuari resideix o té el seu domiciliat en un altre lloc i decideix accedir i/o navegar al Lloc Web ho farà sota la seva pròpia responsabilitat, assegureu-vos que aquest accés i navegació compleix amb la legislació local que us és aplicable, no assumint Gestòria xilcat serveis cap responsabilitat que es pugui derivar del dit accés.`,
        },
        section3: {
          title: 'ACCÉS I NAVEGACIÓ AL LLOC WEB: EXCLUSIÓ DE GARANTIES I RESPONSABILITAT',
          description: `Gestoria xilcat serveis no garanteix la continuïtat, disponibilitat i utilitat del Lloc Web, ni dels Continguts o Serveis. Gestoria xilcat serveis farà tot el possible pel bon funcionament del Lloc Web, però, no es responsabilitza ni garanteix que l'accés a aquest Lloc Web no sigui ininterromput o que estigui lliure d'error. Tampoc no es responsabilitza o garanteix que el contingut o programari al qual es pugui accedir a través d'aquest Lloc Web, estigui lliure d'error o causi un dany al sistema informàtic (programari i maquinari) de l'Usuari. En cap cas Gestoria xilcat serveis serà responsable per les pèrdues, danys o perjudicis de qualsevol tipus que sorgeixin per l'accés, navegació i ús del Lloc Web, incloent-se, però no limitant-se, als ocasionats als sistemes informàtics o els provocats per la introducció de virus. Gestoria xilcat serveis tampoc no es fa responsable dels danys que poguessin ocasionar-se als usuaris per un ús inadequat d'aquest Lloc Web. En particular, no es fa responsable de cap manera de les caigudes, interrupcions, falta o defecte de les telecomunicacions que poguessin ocórrer.`,
        },
        section4: {
          title: `POLÍTICA D'ENLLAÇOS`,
          description: `S'informa que el Lloc Web de Gestoria xilcat serveis posa o pot posar a disposició dels Usuaris mitjans d'enllaç (com, entre d'altres, links, banners, botons), directoris i motors de cerca que permeten als Usuaris accedir a llocs web pertanyents i/o gestionats per tercers. La instal·lació d'aquests enllaços, directoris i motors de cerca al Lloc Web té per objecte facilitar als Usuaris la cerca de i accés a la informació disponible a Internet, sense que es pugui considerar un suggeriment, recomanació o invitació per a la visita dels mateixos . Gestoria xilcat serveis no ofereix ni comercialitza per si ni per mitjà de tercers els productes i/o serveis disponibles en aquests llocs enllaçats. Així mateix, tampoc garantirà la disponibilitat tècnica, exactitud, veracitat, validesa o legalitat de llocs aliens a la seva propietat a què es pugui accedir per mitjà dels enllaços. Gestoria xilcat serveis en cap cas revisarà o controlarà el contingut d'altres llocs web, així com tampoc aprova, examina ni fa propis els productes i serveis, continguts, arxius i qualsevol altre material existent als referits llocs enllaçats. Gestoria xilcat serveis no assumeix cap responsabilitat pels danys i perjudicis que poguessin produir-se per l'accés, ús, qualitat o licitud dels continguts, comunicacions, opinions, productes i serveis dels llocs web no gestionats per Gestoria xilcat serveis i que siguin enllaçats a aquest Lloc Web. L'Usuari o tercer que realitzi un hiperenllaç des d'una pàgina web d'un altre, diferent, lloc web al Lloc Web de Gestoria xilcat serveis haurà de saber que: No es permet la reproducció —totalment o parcialment— de cap dels Continguts i/o Serveis del Lloc Web sense autorització expressa de Gestoria xilcat serveis. No es permet tampoc cap manifestació falsa, inexacta o incorrecta sobre el Lloc Web de Gestoria xilcat serveis, ni sobre els Continguts i/o Serveis del mateix. A excepció de l'hiperenllaç, el lloc web on s'estableixi aquest hiperenllaç no contindrà cap element, d'aquest Lloc Web, protegit com a propietat intel·lectual per l'ordenament jurídic espanyol, excepte autorització expressa de Gestoria xilcat serveis. L'establiment de l'hipervincle no implicarà l'existència de relacions entre Gestoria xilcat serveis i el titular del lloc web des del qual es realitzi, ni el coneixement i l'acceptació de Gestoria xilcat serveis dels continguts, serveis i/o activitats ofertes en aquest lloc web, i viceversa.`,
        },
        section5: {
          title: `PROPIETAT INTEL·LECTUAL I INDUSTRIAL`,
          description: `Gestoria xilcat serveis per si o com a part cessionària, és titular de tots els drets de propietat intel·lectual i industrial del Lloc Web, així com dels elements continguts en aquest (a títol enunciatiu i no exhaustiu, imatges, so, àudio, vídeo, programari o textos, marques o logotips, combinacions de colors, estructura i disseny, selecció de materials usats, programes dordinador necessaris per al seu funcionament, accés i ús, etc.). Seran, per tant, obres protegides com a propietat intel·lectual per l'ordenament jurídic espanyol, i els seran aplicables tant la normativa espanyola i comunitària en aquest camp, com els tractats internacionals relatius a la matèria i subscrits per Espanya. Tots els drets reservats. En virtut del que disposa la Llei de propietat intel·lectual, queden expressament prohibides la reproducció, la distribució i la comunicació pública, inclosa la seva modalitat de posada a disposició, de la totalitat o part dels continguts d'aquesta pàgina web, amb fins comercials, en qualsevol suport i per qualsevol mitjà tècnic, sense lautorització de Gestoria xilcat serveis. L'Usuari es compromet a respectar els drets de propietat intel·lectual i industrial de Gestoria xilcat serveis. Podreu visualitzar els elements del Lloc Web o fins i tot imprimir-los, copiar-los i emmagatzemar-los al disc dur del vostre ordinador o en qualsevol altre suport físic sempre que sigui, exclusivament, per al seu ús personal. L'Usuari, però, no podrà suprimir, alterar, o manipular qualsevol dispositiu de protecció o sistema de seguretat que estigués instal·lat al Lloc Web. En cas que l'Usuari o tercer consideri que qualsevol dels Continguts del Lloc Web suposi una violació dels drets de protecció de la propietat intel·lectual, ho haurà de comunicar immediatament a Gestoria xilcat serveis a través de les dades de contacte de l'apartat d'INFORMACIÓ GENERAL de aquest Avís Legal i Condicions Generals dÚs.`,
        },
        section6: {
          title: 'ACCIONS LEGALS, LEGISLACIÓ APLICABLE I JURISDICCIÓ',
          description: `Gestoria xilcat serveis es reserva la facultat de presentar les accions civils o penals que consideri necessàries per la utilització indeguda del Lloc Web i Continguts, o per l'incompliment de les presents Condicions. La relació entre l'Usuari i Gestoria xilcat serveis es regirà per la normativa vigent i aplicable al territori espanyol. Si sorgeix qualsevol controvèrsia en relació amb la interpretació i/o l'aplicació d'aquestes Condicions, les parts sotmetran els seus conflictes a la jurisdicció ordinària sotmetent-se als jutges i tribunals que corresponguin d'acord amb el dret.`,
        }
      },
      blog: {
        title: "Bloc de Xilcatservices"
      },
      footer: {
        description: `Treballem al 101% en el teu tràmit per oferir-te la millor solució`,
        newsletter: {
          title: `NEWSLETTER`,
          description: `Subscriu-te a la nostra newsletter per obtenir les últimes notícies`,
          placeholder: `El teu correu electrònic`,
          links: {
            1: `Nosaltres`,
            2: `Els nostres Serveis`,
            3: `Oferim`,
            4: `Contacta amb nosaltres`,
            5: `Blog`,
            6: 'zona client'
          },
        },
      },
    } as TranslationSchema,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // idioma predeterminado
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

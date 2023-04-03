import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
    lng: '',
    resources: {
        PT: {
            translation: {
                id: '1',
                title: 'pt',
                content:
                    'O Natal das crianças da Indiana da favela Indiana Tijuca é um projeto organizado pela Associação de moradores. Esse projeto visa oferecer às crianças uma festa de Natal onde elas encontram com o Papai Noel, recebem presentes, comem bolo, etc... O objetivo desse site é de permitir a quem quiser exercer o espírito de Natal e ajudar financeiramente para a organização desse evento.',
                subtitles: {
                    history: 'Para ver os anos anteriores :',
                    action: 'Para participar esse ano :',
                },
                name: 'Natal',
            },
        },
        FR: {
            translation: {
                id: '2',
                title: 'fr',
                content:
                    "Le Noël des enfants de la favela Indiana Tijuca est un projet organisé par l'Association des résidents. Ce projet vise à offrir aux enfants une fête de Noël, ils y rencontrent le Père Noël, reçoivent des cadeaux, mangent du gâteau, etc... Le but de ce site est de permettre à qui le veut de participer à l'esprit de Noël en aidant financièrement à l'organisation de cet événement.",
                subtitles: {
                    history: 'Pour voir les années précédentes :',
                    action: 'Pour participer cette année :',
                },
                name: 'Noël',
            },
        },
        EN: {
            translation: {
                id: '3',
                title: 'en',
                content:
                    "The Indiana's Children's Christmas of the Indiana Tijuca favela is a project organized by the Residents' Association. This project aims to offer children a Christmas event, there they meet meet Santa Claus, receive presents, eat cake, etc... The objective of this website is enable whoever wants to participate to this Christmas spirit by helping financially to organize this event.",
                subtitles: {
                    history: 'To see previous years:',
                    action: 'To participate this year :',
                },
                name: 'Christmas',
            },
        },
    },
    keySeparator: false,
    interpolation: { escapeValue: false },
});

export default i18n;

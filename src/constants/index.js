import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '100+', label: 'Brands' },
    { value: '30+', label: 'Shops' },
    { value: '50k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "La Pantoufle",
        price: "$17.20",
    },
    {
        imgURL: shoe5,
        name: "Chateau Belleville",
        price: "$18.90",
    },
    {
        imgURL: shoe6,
        name: "Le Blend",
        price: "$19.0",
    },
    {
        imgURL: shoe7,
        name: "French Roast",
        price: "$15.0",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "La Pantoufle", link: "/" },
            { name: "Le Blend", link: "/" },
            { name: "French Roast", link: "/" },
            { name: "Unapu Ciudad", link: "/" },
            { name: "Chelbesa - Ethiopie", link: "/" },
            { name: "Kiri Ab", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "gauthierleclair1@outlook.fr", link: "gauthierleclair1@outlook.fr" },
            { name: "0685709581", link: "tel:0685709581" },
            { name: "Réalisé avec enthousiasme :)", link: "tel:0685709581" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
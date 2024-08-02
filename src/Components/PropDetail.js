import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { Carousel } from 'react-responsive-carousel';
import Lightbox from 'react-awesome-lightbox';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-awesome-lightbox/build/style.css';
import './PropDetail.css';

const propertysinfo = [
  {
    "id": 1,
    name: 'Family House ',
    description: '2100 Club, the world’s first blockchain bar, designed by LYCS Architecture.The bar is participated by many well-known entrepreneurs and cornerstone investors in the Blockchain industry. 2100 Club is a social platform that shares and exchanges the cutting edge blockchain technologies, researches and investments. The slogan of 2100Club shares the idea ‘to own, to live to live until 2100’ to all the new economic drivers and innovators. It has been further developed as the basis design concept of interior space which interpreting its intellectual spirit instead of creating a theme bar.',
    price: '$1,500/month',
    address: '1234 Elm Street, Springfield, IL',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 2,
    name: 'Modern Apartment',
    description: 'A modern apartment in the city center with all amenities nearby.',
    price: '$2,000/month',
    address: '5678 Oak Street, Metropolis, NY',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 3,
    name: 'Beach House',
    description: 'A white concrete house beside mountain in front body of water End of Day Laguna Beach, United States.',
    price: '$5,000/month',
    address: '5678 Oak Street, Metropolis, NY,United States',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1539066026605-ffa3664b9beb?q=80&w=1018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
    images: [
      'https://images.unsplash.com/photo-1539066026605-ffa3664b9beb?q=80&w=1018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
      'https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 4,
    name: 'Mountain Apartment',
    description: 'Colorful houses in Manarola Village, Cinque Terre Coast of Italy. Manarola is a beautiful small town in the province of La Spezia,',
    price: '$3,000/month',
    address: '567small town in the province of La Spezia, NY',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://plus.unsplash.com/premium_photo-1661962904716-1d4682b5bb59?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://plus.unsplash.com/premium_photo-1661962904716-1d4682b5bb59?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1680351370944-c938d9fc4dad?q=80&w=978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1667969521623-af7f633baf26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  {
    "id": 5,
    name: 'Modern Apartment ',
    description: 'A modern apartment in the city center with all amenities nearby.',
    price: '$2,000/month',
    address: '5678 Oak Street, Metropolis, NY',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 6,
    name: 'House',
    description: 'white and brown concrete building under blue sky during daytime.',
    price: '$2,500/month',
    address: 'Ny,United State',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 7,
    name: 'House',
    description: 'A Beautiful House has beautiful wheather and has all entities near the house.',
    price: '$1,000/month',
    address: '39,Texas,USA',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 8,
    name: 'Modern Apartment',
    description: 'A modern apartment in the city center with all amenities nearby.',
    price: '$2,750/month',
    address: '5678 Oak Street, Metropolis, NY',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1521782462922-9318be1cfd04?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600563440091-ab11f30e01d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 9,
    name: 'Cozy Cottage',
    description: 'A charming cottage in a quiet neighborhood with a beautiful backyard.',
    price: '$1,900/month',
    address: '1234 Maple Street, Suburbiaville, CA',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbnRhbHxlbnwwfHwwfHx8MA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 10,
    name: 'Luxury Mansion',
    description: 'A luxurious mansion with private pool and outdoor kitchen.',
    price: '$5,000/month',
    address: '1234 Beach Boulevard, Miami, FL',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 11,
    name: 'Urban Loft',
    description: 'A stylish loft apartment with panoramic city views.',
    price: '$3,500/month',
    address: '789 Loft Avenue, Downtown, LA',
    bedrooms: 1,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1539066026605-ffa3664b9beb?q=80&w=1018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
      'https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 12,
    name: 'Riverside Retreat',
    description: 'A cozy house nestled beside a scenic river with tranquil surroundings.',
    price: '$2,200/month',
    address: '456 River Lane, Serenity Valley, WA',
    bedrooms: 2,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://plus.unsplash.com/premium_photo-1661962904716-1d4682b5bb59?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1680351370944-c938d9fc4dad?q=80&w=978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1667969521623-af7f633baf26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 13,
    name: 'Historic Townhouse',
    description: 'An elegant townhouse with classical architecture and modern interior.',
    price: '$4,000/month',
    address: '789 Heritage Street, Historic District, Boston, MA',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1485996463739-9cb09adbe6c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMHJlbnRhbHxlbnwwfHwwfHx8MA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 14,
    name: 'Countryside Villa',
    description: 'A luxurious villa with expansive gardens and breathtaking views of the countryside.',
    price: '$6,500/month',
    address: '1234 Meadow Lane, Countryside Hills, TX',
    bedrooms: 5,
    bathrooms: 4,
    bgimage: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1593642532459-c870b025d9d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1567976968278-e9b291e0c2e6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1567984937841-9db5f8b3f2a6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 15,
    name: 'Mountain Chalet',
    description: 'A cozy chalet nestled in the mountains with ski-in/ski-out access.',
    price: '$4,800/month',
    address: '789 Alpine Drive, Mountain Ridge, CO',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1569429590901-5f3760f3d6b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1569429590895-19215fca19a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 16,
    name: 'Beachfront Condo',
    description: 'A modern condo with stunning ocean views and direct beach access.',
    price: '$7,200/month',
    address: '123 Sandy Beach Road, Oceanfront Plaza, CA',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://media.istockphoto.com/id/1179123568/photo/modern-house-exterior-with-swimming-pool.webp?s=170667a&w=0&k=20&c=wItG0moR7tGK-lPfGTEv9a7AkmiAA5KEMYn7bzEY0IY=',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 17,
    name: 'City Center Penthouse',
    description: 'A luxurious penthouse in the heart of the city with stunning skyline views.',
    price: '$8,500/month',
    address: '789 Central Plaza, City Center, NY',
    bedrooms: 3,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 18,
    name: 'Lakeside Cabin',
    description: 'A charming cabin by the lake, perfect for nature enthusiasts.',
    price: '$2,800/month',
    address: '123 Lakeview Trail, Tranquil Waters, OR',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 19,
    name: 'Garden Oasis',
    description: 'A serene retreat with lush gardens and a peaceful atmosphere.',
    price: '$3,200/month',
    address: '789 Garden Path, Botanical Haven, CA',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 20,
    name: 'Coastal Retreat',
    description: 'A peaceful retreat by the coast with stunning ocean sunsets.',
    price: '$4,500/month',
    address: '123 Coastal Drive, Seaside Haven, FL',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 21,
    name: 'Historic Townhouse',
    description: 'A beautifully restored historic townhouse with period features and modern amenities.',
    price: '$6,500/month',
    address: '456 Heritage Street, Old Town, MA',
    bedrooms: 4,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 22,
    name: 'Countryside Villa',
    description: 'A luxurious villa nestled in the countryside with sprawling gardens and scenic views.',
    price: '$9,000/month',
    address: '789 Green Valley, Serene Meadows, TX',
    bedrooms: 5,
    bathrooms: 4,
    bgimage: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 23,
    name: 'Mountain Chalet',
    description: 'A cozy chalet nestled in the mountains, offering breathtaking alpine views.',
    price: '$3,800/month',
    address: '123 Alpine Way, Snowy Peaks, CO',
    bedrooms: 2,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 24,
    name: 'Riverside Retreat',
    description: 'A serene retreat by the riverbank, offering tranquility and natural beauty.',
    price: '$4,200/month',
    address: '456 Riverfront Avenue, Serenity River, WA',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 25,
    name: 'Urban Loft',
    description: 'A spacious loft in the heart of the city, featuring industrial chic design and cityscape views.',
    price: '$5,800/month',
    address: '789 Loft Street, Metropolitan Hub, IL',
    bedrooms: 2,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 26,
    name: 'Beachfront Condo',
    description: 'An elegant beachfront condo with panoramic ocean views and direct beach access.',
    price: '$7,200/month',
    address: '123 Oceanview Drive, Sunny Beach, CA',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 27,
    name: 'City Center Penthouse',
    description: 'A luxurious penthouse in the heart of the bustling city, offering stunning skyline views.',
    price: '$10,000/month',
    address: '789 Skyline Avenue, Downtown Metropolis, NY',
    bedrooms: 3,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1521574873411-508db8dbe55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 28,
    name: 'Lakeside Cabin',
    description: 'A charming cabin by the lake, offering peace and tranquility amidst natural surroundings.',
    price: '$3,500/month',
    address: '456 Lakeview Road, Serene Waters, MN',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 29,
    name: 'Garden Oasis',
    description: 'A secluded oasis with lush gardens, perfect for relaxation and outdoor gatherings.',
    price: '$4,800/month',
    address: '789 Garden Retreat, Blossom Valley, FL',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1520608421741-68228b76b6df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 30,
    name: 'Coastal Retreat',
    description: 'A tranquil retreat by the coast, offering stunning sunsets and direct beach access.',
    price: '$8,500/month',
    address: '123 Coastal Lane, Sunset Bay, OR',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 31,
    name: 'Historic Townhouse',
    description: 'A meticulously restored historic townhouse with elegant period features and modern amenities.',
    price: '$9,500/month',
    address: '456 Heritage Lane, Old Town, MA',
    bedrooms: 5,
    bathrooms: 4,
    bgimage: 'https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 32,
    name: 'Countryside Villa',
    description: 'An expansive countryside villa surrounded by rolling hills and lush gardens, offering privacy and serenity.',
    price: '$12,000/month',
    address: '789 Meadow Lane, Serenity Valley, VT',
    bedrooms: 6,
    bathrooms: 5,
    bgimage: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 33,
    name: 'Mountain Chalet',
    description: 'A cozy mountain chalet nestled amidst alpine peaks, offering breathtaking views and access to ski slopes.',
    price: '$6,800/month',
    address: '123 Alpine Trail, Snowy Peaks, CO',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 34,
    name: 'Riverside Retreat',
    description: 'A charming riverside retreat with a private dock, offering fishing, boating, and scenic views.',
    price: '$4,200/month',
    address: '456 River Bend Road, Tranquil Waters, WA',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1568391300292-a5a1d96b82aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 35,
    name: 'Urban Loft',
    description: 'A stylish urban loft with exposed brick walls and industrial chic decor, located in a vibrant city center.',
    price: '$5,500/month',
    address: '789 Loft Avenue, Downtown Art District, CA',
    bedrooms: 2,
    bathrooms: 2,
    bgimage: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 36,
    name: 'Beachfront Condo',
    description: 'A luxurious beachfront condo with panoramic ocean views and direct beach access, perfect for coastal living.',
    price: '$7,200/month',
    address: '123 Ocean View Drive, Sandy Shores, FL',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 37,
    name: 'City Center Penthouse',
    description: 'A sophisticated city center penthouse with skyline views and luxury amenities, ideal for urban living.',
    price: '$10,500/month',
    address: '456 Skyline Avenue, Metro Heights, NY',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 38,
    name: 'Lakeside Cabin',
    description: 'A cozy lakeside cabin surrounded by pine forests, offering tranquility and outdoor recreational activities.',
    price: '$3,500/month',
    address: '789 Pinecrest Lane, Serene Pines, MN',
    bedrooms: 2,
    bathrooms: 1,
    bgimage: 'https://images.unsplash.com/photo-1506126279646-a697353d3166?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 39,
    name: 'Garden Oasis',
    description: 'A charming garden oasis with lush greenery, tranquil ponds, and a cozy cottage for peaceful living.',
    price: '$4,800/month',
    address: '123 Garden Grove, Blossom Springs, OR',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 40,
    name: 'Coastal Retreat',
    description: 'A serene coastal retreat with panoramic ocean views and direct beach access, perfect for relaxation.',
    price: '$8,500/month',
    address: '456 Coastal Drive, Pacific Haven, CA',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 41,
    name: 'Country Estate',
    description: 'A grand country estate with sprawling gardens, a private pool, and luxurious interiors for refined living.',
    price: '$15,000/month',
    address: '123 Estate Drive, Grand Meadows, TX',
    bedrooms: 7,
    bathrooms: 6,
    bgimage: 'https://images.unsplash.com/photo-1521812814624-9571995714fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 42,
    name: 'Modern City Apartment',
    description: 'A sleek modern city apartment with floor-to-ceiling windows, offering stunning urban views and luxury amenities.',
    price: '$6,000/month',
    address: '456 Urban Street, Metropolis Center, IL',
    bedrooms: 2,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 43,
    name: 'Elegant Suburban Home',
    description: 'An elegant suburban home with a spacious backyard, ideal for family gatherings and outdoor entertaining.',
    price: '$7,500/month',
    address: '789 Suburban Lane, Serenity Meadows, NJ',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1608429835892-30be51ea4d6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 44,
    name: 'Rustic Farmhouse',
    description: 'A charming rustic farmhouse surrounded by rolling fields and picturesque barns, perfect for country living.',
    price: '$4,000/month',
    address: '123 Farm Road, Rustic Acres, PA',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 45,
    name: 'Mountain Chalet',
    description: 'A cozy mountain chalet nestled among snow-covered peaks, offering ski-in/ski-out access and stunning alpine views.',
    price: '$6,500/month',
    address: '456 Chalet Road, Snowy Pines, CO',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 46,
    name: 'Vintage Victorian House',
    description: 'A beautifully restored vintage Victorian house with intricate woodwork, wrap-around porch, and period charm.',
    price: '$5,500/month',
    address: '789 Victorian Lane, Heritage Hill, GA',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 47,
    name: 'Luxury Beachfront Villa',
    description: 'A luxurious beachfront villa with a private pool, tropical gardens, and stunning sunset views.',
    price: '$12,000/month',
    address: '123 Villa Way, Palm Cove, FL',
    bedrooms: 5,
    bathrooms: 4,
    bgimage: 'https://images.unsplash.com/photo-1659720879153-24703db812c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 48,
    name: 'Urban Loft',
    description: 'A spacious urban loft with an industrial vibe, open-plan layout, and panoramic cityscape views.',
    price: '$8,000/month',
    address: '456 Loft Avenue, Cityscape View, NY',
    bedrooms: 3,
    bathrooms: 2,
    bgimage: 'https://images.unsplash.com/photo-1550355191-aa8a80b41353?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 49,
    name: 'Suburban Sanctuary',
    description: 'A suburban sanctuary with a spacious backyard, ideal for family living, and outdoor entertainment.',
    price: '$5,000/month',
    address: '123 Sanctuary Drive, Harmony Heights, NJ',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    "id": 50,
    name: 'Seaside Escape',
    description: 'A charming seaside escape with breathtaking ocean views, tranquil coastal living, and direct beach access.',
    price: '$9,000/month',
    address: '456 Coastal Drive, Pacific Haven, CA',
    bedrooms: 4,
    bathrooms: 3,
    bgimage: 'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
];

const PropDetail = () => {
  const { id } = useParams();
  const propertyinfo = propertysinfo.find((u) => u.id === parseInt(id));
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!propertyinfo) {
    return <Typography>Property not found</Typography>;
  }

  return (
    <animated.div style={fade} className="Prop-detail">
      <div className="Prop-carousel">
        <Carousel
          onClickItem={(index) => {
            setPhotoIndex(index);
            setIsOpen(true);
          }}
        >
          {propertyinfo.images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img src={image} alt={`${propertyinfo.title} ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="Prop-info">
        <h1>{propertyinfo.name}</h1>
        <p>{propertyinfo.description}</p>
        <ul>
          <li>Price: {propertyinfo.price}</li>
          <li>Location: {propertyinfo.address}</li>
          <li>Bedrooms: {propertyinfo.bedrooms}</li>
          <li>Bathrooms: {propertyinfo.bathrooms}</li>
        </ul>
      </div>
      {isOpen && (
        <Lightbox
          images={propertyinfo.images.map(image => ({ url: image }))}
          startIndex={photoIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </animated.div>
    
  );
};

export default PropDetail;
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface CardThingProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const CardThing: React.FC<CardThingProps> = ({ image, title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={image} />}
    >
      <Meta title={title} description={description} />
    </Card>
  </a>
);

export default CardThing;
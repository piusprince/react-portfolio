import React from "react";
import {
  AboutPageWrapper,
  Title,
  Text,
  GamesTitle,
  Game,
  Card,
  CardImg,
  CardTitle,
  NovelsTitle,
  Novel,
} from "./AboutElements";
import { data, novels } from "./data";

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <Title>Want to know more about me?</Title>
      <Text>
        I am Pius Prince Oduro, a web developer from Ghana and a student at
        University of Ghana. I am always enthusiastic about how technology could
        be used to solve daily challenges in our communitiies and life in
        general. I usually endeavour to work with commitment wherever I find
        myself. During my free times, I play games and keep abreast with
        trending movies and tv shows. I enjoy reading novels as well. I love
        football/soccer and I support FC Barcelona. I love listening to music
        with my favourites genres being pop, country, classical and hip hop.{" "}
      </Text>

      <GamesTitle>Games I play</GamesTitle>
      <Game>
        {data.map((game) => (
          <Card key={game.id}>
            <CardImg src={game.img} alt="Game image" loading="lazy" />
            <CardTitle>{game.title}</CardTitle>
          </Card>
        ))}
      </Game>
      <NovelsTitle>Some novels I've read</NovelsTitle>
      <Novel>
        {novels.map((novel) => (
          <Card key={novel.id}>
            <CardImg src={novel.img} alt="Novel image" loading="lazy" />
            <CardTitle>{novel.title}</CardTitle>
          </Card>
        ))}
      </Novel>
    </AboutPageWrapper>
  );
};

export default AboutPage;

import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <Flex flex="1" p="40px" direction="column" gap={5}>
      <Heading fontSize="30px">Welcome</Heading>
      <Text lineHeight={2}>
        It is my pleasure to assist you in learning how to become an expert at
        the game of Setback (Pitch, Hi-Low-Jack). Please keep in mind that just
        reading this entire guide will not{" "}
        <span style={{ fontStyle: "italic" }}>magically</span> transform you
        into a powerhouse Setback player overnight. It is up to you to use the
        knowledge extracted from my guide and apply it to real life playing time
        as you read along. Word of advice, don’t try to cram your brain with all
        of the information provided, but instead read a little at a time and
        then apply what you have just learned to a couple of hands of Setback.
        This process of learning a little then applying should become a constant
        routine for you in order to get the most out of this guide. This method
        may seem annoying, but trust me it works. I want you to look at becoming
        an expert at Setback as a long term goal. Past experiences of setting
        long term goals proves that they are attainable, however not anytime in
        the near future. Now I want you to break down learning the basics and
        strategy of Setback as short term goals. In order to accomplish your set
        long term goal, you must first reach each individual short term goal
        that acts as obstacles. By learning in small steps (short term goals)
        you get closer and closer to achieving your top priority. Although the
        pace may be slow, you are still decreasing the distance between you and
        your ultimate objective. Eventually, over an extended period of time you
        will be able to become a top Setback player like myself. Lastly, please
        keep in mind that Setback is a game of trial and error. Learn from your
        mistakes, don’t ignore them.
      </Text>
      <Heading fontSize="30px">About Me</Heading>
      <Text lineHeight={2}>
        Ever since I was a young kid the concept of cards intrigued me. I
        remember watching the big time gamblers play poker on TV, and think to
        myself, “One day that will be me.” Something about watching adults risk
        huge sums of their money in the hope that their investment would pay off
        changed my life forever. While most kids participated in sports and
        band, my extracurricular activities consisted of learning card games and
        then developing a strategy that would increase my chance of winning.
        Growing up, it was common for my family to get together at least once a
        day and indulge ourselves in a few card games. I guess you can say that
        card playing was the one hobby that brought our family together, kind of
        like how some families have a board game night. The card games we played
        ranged from Setback to Gin, and even Texas Hold’em. Although our
        knowledge of different card games was flexible, we usually always chose
        to play Setback, which happens to also go by the names of Pitch and
        Hi-Low-Jack. On New Year’s eve of 1999, I learned how to play Setback
        for the first time. Even though I was only seven years old at the time,
        I impressed my parents and their friends with my fast ability to
        comprehend the basics of the game. Earlier in the day, I remember
        watching my parents play the game of Setback with their friends.The
        entire time I was watching them I kept thinking to myself “They are
        having so much fun, I want to play!”. Sure enough, after enough nagging
        and convincing, my mother finally devoted some time out of her busy
        schedule to teach me the complicated, but playable game of Setback. I am
        extremely thankful that my mother took the time to introduce this
        wonderful game into my life, on the Eve of the New Millennium.
      </Text>
      <Heading fontSize="30px">Overview</Heading>
      <Text lineHeight={2}>
        By utilizing the information contained in this site, you will learn the
        rules, take a deep dive into strategy, put your knowledge to the test
        with practice, and finally play against the computer and others. It is
        important to note that there are many different rules and variations to
        the game of Setback. Throughout this guide, I will cover each of those
        variations, as well as all of the different rule configurations of the
        game. However, there will be more emphasis on the game type that
        involves playing 2 vs 2 with partners. While explaining those rules and
        strategy, I will be using common terminology that all Setback players
        should know. If you come across an unknown term or expression, chances
        are that I have included a brief definition for it in the glossary. The
        glossary can be found in a tab on the rules page. As the site
        progresses, it is my goal to continue to add new problems, tutorials,
        and quizzes that you can use to hone your skills. Currently, there is no
        functionality for online play. This feature of the site will be added
        shortly.
        <br />
        <br />
        Finally, thank you for choosing my site to learn the game. Whether you
        are a new player, or an experienced one, I hope that the content
        provided will help you to expand on your knowledge of the game. With
        this site, it is my intention to help revive the popularity of a game
        that I feel has been dying out with the previous generations. In
        addition, it is also my goal to spur a global interest in the game. For
        reasons unknown, the game is mainly popular in the Northeast of the
        United States, specifically in CT, MA, & RI. I would love to see that
        passion spread. Alas, let's dive into the material.
      </Text>
      <Flex justify="space-between" align="center">
        <Text>- Ben Zentek</Text>

        <NavLink to="/rules" style={{ textDecoration: "none" }}>
          <Button bg="bg.100">
            Rules &nbsp;
            <ArrowForwardIcon />
          </Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};
export default About;

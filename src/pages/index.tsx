import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import Article from '../components/common/articles/article';
import { githubRepositoryLoader } from '../loaders/article/githubRepositoryLoader';

export interface IndexProps {
  text?: string;
}
// https://api.github.com/repos/team-lab/walkontable
const teamLabRepositoryLoader = githubRepositoryLoader('team-lab');
const arakiTakakiRepositoryLoader = githubRepositoryLoader('ArakiTakaki');

const Index: FC<IndexProps> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <Article id="walkontable" loader={teamLabRepositoryLoader} />
      <Article id="lit-sandbox" loader={arakiTakakiRepositoryLoader} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps, never> = async () => {
  return {
    props: {
      text: 'hello react',
    },
  };
};

export default Index;

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { CustomConfigs } from './customConfigs.interface';

const customConfigs: CustomConfigs = {
  nest: {
    PORT: 4000,
  },
  graphql: {
    playground: false,
    debug: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    typePaths: ['./**/*.graphql'],
  },
  // database: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   DB_HOST: process.env.DB_HOST,
  //   DB_PORT: parseInt(process.env.DB_PORT),
  //   DB_SCHEMA: process.env.DB_SCHEMA,
  // },
};

export default (): CustomConfigs => customConfigs;

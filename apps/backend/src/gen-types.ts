import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  //  indicates where the GraphQLModule should look for GraphQL SDL schema definition files you'll be writing.
  typePaths: ['./src/**/*.graphql'],
  // indicates where to save generated TypeScript output
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: true,
  emitTypenameField: true,
});

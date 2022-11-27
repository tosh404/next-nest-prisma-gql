export interface CustomConfigs {
  nest: NestConfig;
  graphql: GraphqlConfig;
  // database: DatabaseConfig;
  // cors: CorsConfig
  // security: SecurityConfig;
  // swagger: SwaggerConfig;
}
export interface NestConfig {
  PORT: number;
}

// export interface DatabaseConfig {
//   DATABASE_URL: string;
//   DB_HOST: string;
//   DB_PORT: number;
//   DB_SCHEMA: string;
// }

export interface GraphqlConfig {
  playground: boolean;
  debug: boolean;
  plugins: any;
  typePaths: string[];
}

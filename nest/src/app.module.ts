import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { PagesModule } from './pages/pages.module';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      }),
      ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname, 'static'),
      }),
      FilesModule,
      PagesModule,
  ],
})
export class AppModule {}

import express from 'express';
import { PrismaClient } from '@prisma/client'
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator'

const server = express();
const prisma = new PrismaClient()
const config: Config = {
  dictionaries: [names]
}

server.get('/', async (request, response) => {
  let htmlResponse = '<h1>Full Cycle Rocks!</h1>'
  await prisma.people.create({
    data: {
      name: uniqueNamesGenerator(config)
    }
  })
  const peoples = await prisma.people.findMany()
  peoples.forEach(people => {
    htmlResponse += `<li>${people.name}</li>`
  })
  return response.send(htmlResponse);
});

export default server;
import path from 'path'

export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'ImageGram API',
        version: '1.0.0',
      },
      servers: [
        {
            url: 'http://localhost:3000/api/v1',
        },
    ],
    },
    apis: [path.resolve('./src/Routers/v1/*.js')]
};
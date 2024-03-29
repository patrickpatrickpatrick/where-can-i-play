# Where Can I Play?

This is the frontend of 'Where Can I Play?'. It is a website that lets users find the nearest places to play their favourite arcade games. [The repository of the backend of 'Where Can I Play?' can be seen here](https://github.com/patrickpatrickpatrick/wcip-backend-node).

This is a project created with `create-next-app`. It uses [Typescript](https://www.typescriptlang.org/).

This is currently an MVP and so the style, features and implementation will change. Please refer to the [project board](https://github.com/users/patrickpatrickpatrick/projects/1) for what I am currently working on/going to work on.

## Live Examples

Currently using Heroku to deploy the MVP.

- [Base Url](https://where-can-i-play-973eeff17911.herokuapp.com/)
- [Results for the game 'Time Crisis II'](https://where-can-i-play-973eeff17911.herokuapp.com/game/13893)
- [Specific arcade selected for the game 'Time Crisis II'](https://where-can-i-play-973eeff17911.herokuapp.com/game/13893?arcadeId=5480809514)

## Dependencies

- [Next.js](https://nextjs.org/)
- [react-select](https://github.com/JedWatson/react-select)
- [Leaflet](https://github.com/Leaflet/Leaflet)
- [react-leaflet](https://github.com/PaulLeCam/react-leaflet)

## Running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3001](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

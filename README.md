**TokPlay**

TokPlay is a clone application from Tokopedia Play, a web app in which users can see list of videos, search video based on product name, and watch the video in the other page. Users can also see list of products related to the video.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Run Project](#run-project)

## Features

1. **Pages**:

   - `/`: Homepage showing lists of video thumbnail pictures, and a search bar
   - `/video-detail?id=${id}`: Display one of a video, list of products related to the video, and comments related to the video

2. **Comments**:

   - Users can see previous comments from other users
   - User can also upload a new comment without having to register/login

3. **Product list**:

   - In video detail page, users can see recommended product based on video they are watching

## Bonus Features

1. **Search video**:

   - Users can search for a video related to the keyword given, be it product name or product brand (for example: lipstick, iphone, mouse, concealer, cushion, ESQA, CLIO, somethinc, etc.)


## Tech Stack

Here are the tech stacks that TokPlay uses in its client-side:
- React framework
- Vite
- Chakra UI
- Axios

## Getting Started

There are two ways to run this project: in local machine and in production. In local machine, we need to do some configuration first. Make sure that we have run this <a href="https://github.com/auraselena/tokplay-api">server-side project</a> before running this frontend side.

### Installation

1. Clone the frontend repository: `https://github.com/auraselena/tokopedia-play-clone-client`
2. Install dependencies: `npm install`

### Environment Variables

1. Create a `.env` file in the project root
2. Add new variable `VITE_API-URL` and input server url as the value

## Run project

To start the development server, run:

```
npm run dev
```

Open web browser and visit `http://localhost:5173` to access TokPlay in local machine. However, the project has been deployed and can be accessed at [https://tokopedia-play-clone-d0geof9e5-auraselena.vercel.app/](https://tokopedia-play-clone-d0geof9e5-auraselena.vercel.app/)
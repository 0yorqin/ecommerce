# Nike E-commerce Store

A modern e-commerce application built with Next.js, TypeScript, and a comprehensive tech stack including Better Auth, Neon PostgreSQL, Drizzle ORM, and Zustand for state management.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **State Management**: Zustand
- **Linting**: ESLint

## Features

- 🛍️ Product catalog with Nike items
- 🎨 Responsive design with Tailwind CSS
- 🔐 Authentication system with Better Auth
- 📊 PostgreSQL database with Drizzle ORM
- 🚀 State management with Zustand
- 🔍 Product search and filtering
- 📱 Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in your environment variables:
- `DATABASE_URL`: Your Neon PostgreSQL connection string
- `BETTER_AUTH_SECRET`: A random secret key for authentication
- `BETTER_AUTH_URL`: Your app URL (http://localhost:3000 for development)

4. Generate and push database schema:
```bash
npm run db:push
```

5. Seed the database with Nike products:
```bash
npm run db:seed
```

6. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Schema

The application includes the following main tables:

- **products**: Stores product information (name, description, price, images, etc.)
- **users**: Stores user authentication data

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:seed` - Seed database with sample data

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   └── page.tsx        # Homepage
├── components/         # React components
├── lib/
│   ├── auth/          # Better Auth configuration
│   ├── db/            # Database schema and connection
│   └── store/         # Zustand stores
└── scripts/           # Database seeding scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
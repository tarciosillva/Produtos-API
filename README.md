1. `npm install`

# 2. Install knex
`npm install knex`

# 3. Create and Config ./knexfile.js with
`npx knex init`

# 4. Create user migration 
`npx knex migrate:make migration_name`

# 5. Create user seed  
`npx knex seed:make seed_name`

# 6. Run Migration
`npx knex migrate:latest`

# 7. Seed run
`npx knex seed:run`


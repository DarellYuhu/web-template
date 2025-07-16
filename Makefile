db-seed:
	npx prisma db seed

db-reset:
	npx prisma migrate reset --skip-seed

/*
  Warnings:

  - Added the required column `password_hash` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password_hash" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL,
    "problem" TEXT NOT NULL,
    "impact" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "systems" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,

    CONSTRAINT "systems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "systems" ADD CONSTRAINT "systems_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

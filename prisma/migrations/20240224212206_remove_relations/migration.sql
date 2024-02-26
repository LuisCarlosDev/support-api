/*
  Warnings:

  - You are about to drop the column `ticket_id` on the `systems` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `tickets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "systems" DROP CONSTRAINT "systems_ticket_id_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_user_id_fkey";

-- AlterTable
ALTER TABLE "systems" DROP COLUMN "ticket_id";

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "user_id";

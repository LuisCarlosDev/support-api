/*
  Warnings:

  - You are about to drop the column `user_id` on the `tickets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_user_id_fkey";

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "user_id";

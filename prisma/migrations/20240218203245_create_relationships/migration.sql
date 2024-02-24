/*
  Warnings:

  - You are about to drop the column `ticketId` on the `systems` table. All the data in the column will be lost.
  - Added the required column `ticket_id` to the `systems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "systems" DROP CONSTRAINT "systems_ticketId_fkey";

-- AlterTable
ALTER TABLE "systems" DROP COLUMN "ticketId",
ADD COLUMN     "ticket_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tickets" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "systems" ADD CONSTRAINT "systems_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

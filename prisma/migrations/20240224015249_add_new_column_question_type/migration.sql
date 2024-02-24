/*
  Warnings:

  - You are about to drop the column `problem` on the `tickets` table. All the data in the column will be lost.
  - Added the required column `question` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question_type` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "problem",
ADD COLUMN     "question" TEXT NOT NULL,
ADD COLUMN     "question_type" TEXT NOT NULL;

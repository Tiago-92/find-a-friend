/*
  Warnings:

  - Added the required column `pet_id` to the `orgs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orgs" ADD COLUMN     "pet_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "orgs" ADD CONSTRAINT "orgs_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

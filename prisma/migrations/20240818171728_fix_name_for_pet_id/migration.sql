/*
  Warnings:

  - You are about to drop the column `pet_id` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `pets` table. All the data in the column will be lost.
  - Added the required column `petId` to the `orgs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orgs" DROP CONSTRAINT "orgs_pet_id_fkey";

-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "pet_id",
ADD COLUMN     "petId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "state";

-- AddForeignKey
ALTER TABLE "orgs" ADD CONSTRAINT "orgs_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `petId` on the `orgs` table. All the data in the column will be lost.
  - Added the required column `orgId` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orgs" DROP CONSTRAINT "orgs_petId_fkey";

-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "petId";

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "orgId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "orgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

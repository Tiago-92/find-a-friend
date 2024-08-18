/*
  Warnings:

  - You are about to drop the column `city` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the column `spacious` on the `pets` table. All the data in the column will be lost.
  - Added the required column `city` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `environment` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orgs" ADD COLUMN     "city" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "city",
DROP COLUMN "spacious",
ADD COLUMN     "environment" TEXT NOT NULL;

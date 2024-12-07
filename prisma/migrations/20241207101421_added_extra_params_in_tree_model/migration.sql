/*
  Warnings:

  - Added the required column `age` to the `Tree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diseaseResistance` to the `Tree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humidity` to the `Tree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `Tree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastWatered` to the `Tree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pestResistance` to the `Tree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Tree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sunlight` to the `Tree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperature` to the `Tree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wateringFreq` to the `Tree` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tree" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "diseaseResistance" BOOLEAN NOT NULL,
ADD COLUMN     "harvestQty" DOUBLE PRECISION,
ADD COLUMN     "humidity" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "imgUrl" TEXT NOT NULL,
ADD COLUMN     "lastHarvest" TIMESTAMP(3),
ADD COLUMN     "lastTreated" TIMESTAMP(3),
ADD COLUMN     "lastWatered" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "pestResistance" BOOLEAN NOT NULL,
ADD COLUMN     "species" TEXT NOT NULL,
ADD COLUMN     "sunlight" TEXT NOT NULL,
ADD COLUMN     "temperature" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "wateringFreq" INTEGER NOT NULL;

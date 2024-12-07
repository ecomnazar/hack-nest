-- CreateEnum
CREATE TYPE "TreeStatus" AS ENUM ('DELETED', 'WARNING', 'WELL');

-- AlterTable
ALTER TABLE "Tree" ADD COLUMN     "status" "TreeStatus" NOT NULL DEFAULT 'WELL';

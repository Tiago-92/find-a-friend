-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "about" VARCHAR(300) NOT NULL,
    "age" TEXT NOT NULL,
    "energyLevel" TEXT NOT NULL,
    "animalSize" TEXT NOT NULL,
    "independeceLevel" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "spacious" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

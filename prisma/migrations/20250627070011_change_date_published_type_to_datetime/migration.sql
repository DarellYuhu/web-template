/*
  Warnings:

  - You are about to alter the column `datePublished` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "datePublished" DATETIME NOT NULL,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_Article" ("article", "authorName", "category", "datePublished", "id", "imageUrl", "title") SELECT "article", "authorName", "category", "datePublished", "id", "imageUrl", "title" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE UNIQUE INDEX "Article_id_key" ON "Article"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

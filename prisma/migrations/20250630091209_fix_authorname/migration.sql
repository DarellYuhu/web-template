/*
  Warnings:

  - Added the required column `authorName` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "datePublished" DATETIME NOT NULL,
    "imageUrl" TEXT NOT NULL,
    CONSTRAINT "Article_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Article" ("article", "categoryId", "datePublished", "id", "imageUrl", "title") SELECT "article", "categoryId", "datePublished", "id", "imageUrl", "title" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE UNIQUE INDEX "Article_id_key" ON "Article"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

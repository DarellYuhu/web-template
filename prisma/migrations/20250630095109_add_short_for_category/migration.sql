/*
  Warnings:

  - Added the required column `short` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "datePublished" DATETIME NOT NULL,
    "imageUrl" TEXT NOT NULL,
    CONSTRAINT "Article_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Article" ("article", "authorName", "categoryId", "datePublished", "id", "imageUrl", "title") SELECT "article", "authorName", "categoryId", "datePublished", "id", "imageUrl", "title" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "short" TEXT NOT NULL
);
INSERT INTO "new_Category" ("id", "name") SELECT "id", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
CREATE UNIQUE INDEX "Category_short_key" ON "Category"("short");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

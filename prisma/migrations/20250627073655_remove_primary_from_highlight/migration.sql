/*
  Warnings:

  - You are about to drop the column `isPrimary` on the `Highlight` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Highlight" (
    "articleId" TEXT NOT NULL,
    CONSTRAINT "Highlight_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Highlight" ("articleId") SELECT "articleId" FROM "Highlight";
DROP TABLE "Highlight";
ALTER TABLE "new_Highlight" RENAME TO "Highlight";
CREATE UNIQUE INDEX "Highlight_articleId_key" ON "Highlight"("articleId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

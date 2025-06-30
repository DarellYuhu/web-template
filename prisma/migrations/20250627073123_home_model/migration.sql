-- CreateTable
CREATE TABLE "Highlight" (
    "articleId" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL,
    CONSTRAINT "Highlight_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TopPick" (
    "articleId" TEXT NOT NULL,
    CONSTRAINT "TopPick_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Popular" (
    "articleId" TEXT NOT NULL,
    CONSTRAINT "Popular_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Highlight_articleId_key" ON "Highlight"("articleId");

-- CreateIndex
CREATE UNIQUE INDEX "TopPick_articleId_key" ON "TopPick"("articleId");

-- CreateIndex
CREATE UNIQUE INDEX "Popular_articleId_key" ON "Popular"("articleId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

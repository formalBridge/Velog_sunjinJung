-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "profile_picture" TEXT
);

-- CreateTable
CREATE TABLE "User_Categories" (
    "category_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category_name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "User_Categories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User_Columns" (
    "column_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "User_Columns_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "User_Categories" ("category_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_Categories_category_name_key" ON "User_Categories"("category_name");

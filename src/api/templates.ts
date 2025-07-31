import path from "path";
import fs from "fs/promises";
import { templateSchema } from "@/schema";

export const getTemplate = async () => {
  const filePath = path.join(process.cwd(), "public", "data", "template.json");
  const json = await fs.readFile(filePath, "utf-8");
  const template = JSON.parse(json);
  const valid = templateSchema.parse(template);
  return valid;
};

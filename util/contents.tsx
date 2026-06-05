import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  href: string;
  lang: string;
  icon: string;
}

export function getContents(category: "projects" | "articles"): ContentItem[] {
  const dir = path.join(process.cwd(), "content", category);

  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const slug = file.replace(".md", "");

    const fullPath = path.join(dir, file);

    const fileContent = fs.readFileSync(
      fullPath,
      "utf8"
    );

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      description: data.description,
      href: data.href,
      lang: data.lang,
      icon: data.icon,
    };
  });
}
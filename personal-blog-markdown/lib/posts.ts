import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import { Post } from '@/types';
import warningIcon from '@/public/icons/icon-warning.svg'
import tipIcon from '@/public/icons/icon-tip.svg'
import infoIcon from '@/public/icons/icon-info.svg'


const postsDirectory = join(process.cwd(), '_posts');

export async function getPost(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);

    // Dosya yoksa null döndür
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Markdown'u HTML'ye çevir + kod bloklarını algıla
    const contentHtml = await remark()
        .use(remarkRehype, { allowDangerousHtml: true }) // AST formatına çevir
        .use(rehypeHighlight) // Kod bloklarını renklendir
        .use(remarkGfm) // Tabloları aktif et
        .use(rehypeStringify) // HTML string olarak döndür
        .process(content);

    // ⚡️ Warning, Tip ve Information içerikli <p> etiketlerine data-type ekleme
    let contentHtmlString = contentHtml
        .toString()
        .replace(/<p><strong>Warning/g, `<p data-type="warning"><img src=${warningIcon.src} alt='Warning icon' width='20' height='20' /><strong>Warning`)
        .replace(/<p><strong>Tip/g, `<p data-type="tip"><img src=${tipIcon.src} alt='Tip icon' width='20' height='20' /><strong>Tip`)
        .replace(/<p><strong>Information/g, `<p data-type="info"><img src=${infoIcon.src} alt='Information icon' width='20' height='20' /><strong>Information`);

    return { ...data, slug, contentHtml: contentHtmlString } as Post;
}

export function getAllPosts(): Post[] {
    // posts dizinindeki tüm dosya adlarını al
    const postNames = fs.readdirSync(postsDirectory);
    const allPostsData = postNames
        .map((name) => {
            // Dosya adından md'yi kaldır
            const slug = name.replace(/\.md$/, '');
            const fullPath = join(postsDirectory, name);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);
            return { ...data, slug } as Post;
        })
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return allPostsData
}
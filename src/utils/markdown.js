import { marked } from "marked";
import DOMPurify from "dompurify";

/**
 * Extracts YAML frontmatter and markdown content from a string.
 * This is a simple parser, you might want to use 'gray-matter' for robustness.
 */
function extractFrontmatter(fileContent) {
    const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

    if (!match) {
        return { metadata: {}, content: fileContent };
    }

    const yamlFrontmatter = match[1];
    const markdownContent = match[2];

    const metadata = {};
    yamlFrontmatter.split(/\r?\n/).forEach((line) => {
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
            const key = line.slice(0, colonIndex).trim();
            let value = line.slice(colonIndex + 1).trim();

            // Remove surrounding quotes if present
            if (
                (value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))
            ) {
                value = value.slice(1, -1);
            }

            metadata[key] = value;
        }
    });

    return { metadata, content: markdownContent };
}

/**
 * Validates and transforms raw metadata into a structured BlogPost object
 */
function processMetadata(metadata, slug, excerpt) {
    try {
        return {
            id: slug, // Use slug as ID if not provided
            slug: slug,
            title: metadata.title || "Untitled Post",
            excerpt: metadata.excerpt || excerpt || "",
            content: "", // Will be populated later
            author: metadata.author || "Anonymous",
            authorImage: metadata.authorImage || null,
            authorRole: metadata.authorRole || "Contributor",
            publishedAt: metadata.publishedAt || metadata.date || new Date().toISOString(),
            readTime: metadata.readTime || "5 min read", // Estimate if missing
            category: metadata.category || "Uncategorized",
            tags: metadata.tags
                ? metadata.tags.replace(/[\[\]'"]/g, "").split(",").map((t) => t.trim())
                : [],
            coverImage: metadata.coverImage || metadata.image || null,
        };
    } catch (error) {
        console.error("Error processing metadata for:", slug, error);
        // Return a fallback object so the app doesn't crash
        return {
            id: slug,
            slug: slug,
            title: "Error Parsing Post",
            excerpt: "There was an error parsing the metadata for this post.",
            content: "",
            author: "System",
            authorImage: null,
            authorRole: "",
            publishedAt: new Date().toISOString(),
            readTime: "0 min read",
            category: "Error",
            tags: [],
            coverImage: null,
        };
    }
}

/**
 * Estimates read time based on word count (avg 200 words/min)
 */
function estimateReadTime(text) {
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
}

/**
 * Generates a simple text excerpt from markdown content
 */
function generateExcerpt(markdown, length = 150) {
    // Remove markdown formatting (very basic)
    const plainText = markdown
        .replace(/[#*`_\]\[]/g, "")
        .replace(/\(.*?\)/g, "")
        .trim();
    if (plainText.length <= length) return plainText;
    return plainText.substring(0, length).trim() + "...";
}

/**
 * Parses a complete markdown file (.md) into a BlogPost object with HTML content
 */
export async function parseMarkdownFile(fileContent, slug) {
    const { metadata, content } = extractFrontmatter(fileContent);

    // Parse Markdown to HTML
    const rawHtml = await marked(content);

    // Sanitize HTML (CRITICAL for security)
    const cleanHtml = DOMPurify.sanitize(rawHtml, {
        USE_PROFILES: { html: true }, // Allow standard HTML tags
        ADD_ATTR: ["target", "rel", "class", "id"], // Allow helpful attributes
    });

    // Fallbacks if not provided in frontmatter
    const autoExcerpt = generateExcerpt(content);
    const autoReadTime = estimateReadTime(content);

    // Construct the final object
    const post = processMetadata(metadata, slug, autoExcerpt);
    post.content = cleanHtml;

    // Use auto-calculated values if missing from frontmatter
    if (!post.readTime || post.readTime === "5 min read") {
        post.readTime = autoReadTime;
    }

    return post;
}

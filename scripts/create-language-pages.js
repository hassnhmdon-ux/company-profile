const fs = require("fs");
const path = require("path");

const buildDirectory = path.join(__dirname, "..", "build");
const sourcePath = path.join(buildDirectory, "index.html");
const arabicDirectory = path.join(buildDirectory, "ar");
const arabicPath = path.join(arabicDirectory, "index.html");

const replaceTag = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) {
    throw new Error(`Unable to generate Arabic page: missing ${label}`);
  }

  return html.replace(pattern, replacement);
};

const buildArabicHtml = (englishHtml) => {
  let html = englishHtml;

  html = replaceTag(
    html,
    /<html lang="en" dir="ltr">/,
    '<html lang="ar" dir="rtl">',
    "English html language attributes"
  );
  html = replaceTag(
    html,
    /<title>[^<]*<\/title>/,
    "<title>إيوان الموصل | استيراد وتوزيع وتطوير العلامات الغذائية في العراق</title>",
    "page title"
  );
  html = replaceTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/>/,
    '<meta name="description" content="إيوان الموصل شريك موثوق لمصنّعي الأغذية في استيراد المنتجات وتوزيعها وتطوير علاماتها التجارية في العراق منذ عام 2004." />',
    "meta description"
  );
  html = replaceTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    '<meta property="og:title" content="إيوان الموصل | بوابتك إلى سوق الغذاء العراقي" />',
    "Open Graph title"
  );
  html = replaceTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    '<meta property="og:description" content="خبرة في استيراد الأغذية وتوزيعها وتطوير علاماتها التجارية في السوق العراقي." />',
    "Open Graph description"
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    '<meta property="og:url" content="https://www.eawanalmosul.com/ar/" />',
    "Open Graph URL"
  );
  html = replaceTag(
    html,
    /<meta property="og:locale" content="[^"]*"\s*\/>/,
    '<meta property="og:locale" content="ar_IQ" />',
    "Open Graph locale"
  );
  html = replaceTag(
    html,
    /<meta property="og:locale:alternate" content="[^"]*"\s*\/>/,
    '<meta property="og:locale:alternate" content="en_IQ" />',
    "alternate Open Graph locale"
  );
  html = replaceTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    '<meta name="twitter:title" content="إيوان الموصل | بوابتك إلى سوق الغذاء العراقي" />',
    "Twitter title"
  );
  html = replaceTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    '<meta name="twitter:description" content="استيراد وتوزيع وتطوير العلامات الغذائية في السوق العراقي." />',
    "Twitter description"
  );
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    '<link rel="canonical" href="https://www.eawanalmosul.com/ar/" />',
    "canonical link"
  );

  return html;
};

const englishHtml = fs.readFileSync(sourcePath, "utf8");
const arabicHtml = buildArabicHtml(englishHtml);

fs.mkdirSync(arabicDirectory, { recursive: true });
fs.writeFileSync(arabicPath, arabicHtml, "utf8");

console.log(`Created ${path.relative(process.cwd(), arabicPath)}`);


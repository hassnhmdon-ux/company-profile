import fs from "fs";
import path from "path";

const publicFile = (name) => path.join(__dirname, "..", "public", name);

test("publishes consistent search-engine metadata", () => {
  const html = fs.readFileSync(publicFile("index.html"), "utf8");
  const document = new DOMParser().parseFromString(html, "text/html");

  expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(
    "https://www.eawanalmosul.com/"
  );
  expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toContain(
    "index, follow"
  );
  expect(document.querySelector('link[hreflang="ar"]')?.getAttribute("href")).toBe(
    "https://www.eawanalmosul.com/?lang=ar"
  );
  expect(document.querySelector('link[hreflang="en"]')?.getAttribute("href")).toBe(
    "https://www.eawanalmosul.com/"
  );

  const structuredData = JSON.parse(
    document.querySelector('script[type="application/ld+json"]').textContent
  );
  const organization = structuredData["@graph"].find(
    (item) => item["@type"] === "Organization"
  );
  const website = structuredData["@graph"].find(
    (item) => item["@type"] === "WebSite"
  );

  expect(organization.name).toBe("Eawan Almosul General Trading Co. Ltd.");
  expect(organization.legalName).toBe("Eawan Almosul General Trading Co. Ltd.");
  expect(organization.alternateName).toEqual(
    expect.arrayContaining([
      "Eawan Almosul",
      "Eawan Al Mosul",
      "\u0625\u064a\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0635\u0644",
      "\u0634\u0631\u0643\u0629 \u0627\u064a\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0635\u0644 \u0644\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0627\u0644\u0645\u062d\u062f\u0648\u062f\u0629",
    ])
  );
  expect(website.inLanguage).toEqual(expect.arrayContaining(["en-IQ", "ar-IQ"]));
  expect(website.publisher["@id"]).toBe(organization["@id"]);
});

test("advertises the canonical URL through robots and sitemap", () => {
  const robots = fs.readFileSync(publicFile("robots.txt"), "utf8");
  const sitemap = fs.readFileSync(publicFile("sitemap.xml"), "utf8");

  expect(robots).toContain("Sitemap: https://www.eawanalmosul.com/sitemap.xml");
  expect(sitemap).toContain("<loc>https://www.eawanalmosul.com/</loc>");
});

test("packages the Arabic font locally", () => {
  expect(fs.statSync(path.join(__dirname, "fonts", "noto-sans-arabic-arabic.woff2")).size).toBeGreaterThan(0);
  expect(fs.statSync(path.join(__dirname, "fonts", "noto-sans-arabic-latin.woff2")).size).toBeGreaterThan(0);
});

test("packages the downloadable company profile", () => {
  const profile = publicFile(
    path.join("documents", "eawan-almosul-company-profile-2026-en.pdf")
  );
  expect(fs.statSync(profile).size).toBeGreaterThan(3_000_000);
  expect(fs.readFileSync(profile).subarray(0, 5).toString("ascii")).toBe("%PDF-");
});

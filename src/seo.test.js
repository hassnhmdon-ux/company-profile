import fs from "fs";
import path from "path";

const publicFile = (name) => path.join(__dirname, "..", "public", name);

test("publishes consistent search-engine metadata", () => {
  const html = fs.readFileSync(publicFile("index.html"), "utf8");
  const document = new DOMParser().parseFromString(html, "text/html");

  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://www.eawanalmosul.com/"
  );
  expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
    "content",
    expect.stringContaining("index, follow")
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

  expect(organization.name).toBe("Eawan Al-Mosul General Trading Co. Ltd.");
  expect(organization.alternateName).toEqual(
    expect.arrayContaining(["Eawan Almosul", "Eawan Al Mosul", "Ø¥ÙŠÙˆØ§Ù† Ø§Ù„Ù…ÙˆØµÙ„"])
  );
  expect(website.publisher["@id"]).toBe(organization["@id"]);
});

test("advertises the canonical URL through robots and sitemap", () => {
  const robots = fs.readFileSync(publicFile("robots.txt"), "utf8");
  const sitemap = fs.readFileSync(publicFile("sitemap.xml"), "utf8");

  expect(robots).toContain("Sitemap: https://www.eawanalmosul.com/sitemap.xml");
  expect(sitemap).toContain("<loc>https://www.eawanalmosul.com/</loc>");
});

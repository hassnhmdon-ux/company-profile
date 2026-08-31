import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.localStorage.clear();
  window.history.replaceState({}, "", "/");
  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";
});

test("renders the Iraqi market homepage", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /your gateway to the iraqi food market/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /explore our brands/i })).toHaveAttribute(
    "href",
    "#brands"
  );
  expect(screen.getByRole("link", { name: /start a conversation/i })).toHaveAttribute(
    "href",
    "#contact"
  );
  expect(screen.getByText("Dry warehouses")).toBeInTheDocument();
  expect(screen.getByText("Dedicated cold storage")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Trade Marketing" })).toBeInTheDocument();
  expect(screen.queryByText("Private Label")).not.toBeInTheDocument();
  expect(screen.queryByText("Nasiriyah")).not.toBeInTheDocument();
  const englishProfileLinks = screen.getAllByRole("link", {
    name: /Download Company Profile/i,
  });
  expect(englishProfileLinks).toHaveLength(2);
  englishProfileLinks.forEach((link) => {
    expect(link).toHaveAttribute(
      "href",
      "/documents/eawan-almosul-company-profile-2026-en.pdf"
    );
    expect(link).toHaveAttribute(
      "download",
      "Eawan-Almosul-Company-Profile-2026.pdf"
    );
  });

  expect(screen.getByAltText("Mutlu logo")).toHaveClass("scale-100");
  expect(screen.getByAltText("Nuh'un Ankara logo")).toHaveClass("scale-100");
  expect(screen.getByAltText("Regal logo")).toHaveClass("scale-[1.65]");
  expect(screen.getByAltText("LOLO Rice logo")).toHaveClass("scale-[2]");
  expect(screen.getByAltText("MIGITA logo")).toHaveClass("scale-[1.12]");
  expect(screen.getByAltText("Mutlu logo")).toHaveAttribute("loading", "lazy");
  expect(screen.getByRole("button", { name: /Mutlu logo/i })).toHaveClass(
    "focus-visible:ring-2"
  );

  expect(screen.getAllByAltText(/^Mutlu product \d+$/i)).toHaveLength(9);
  expect(screen.getByAltText("Mutlu product 1")).toHaveAttribute("loading", "lazy");
  expect(screen.getByAltText("Iraq distribution network map")).toHaveAttribute(
    "loading",
    "lazy"
  );

  fireEvent.click(screen.getByRole("button", { name: /Nuh'un Ankara logo/i }));
  expect(screen.getAllByAltText(/^Nuh'un Ankara product \d+$/i)).toHaveLength(22);
  expect(screen.getByAltText("Nuh'un Ankara product 1")).toHaveClass("scale-[1.65]");

  fireEvent.click(screen.getByRole("button", { name: /Vitamin Enriched/i }));
  expect(screen.getAllByAltText(/^Vitamin Enriched product \d+$/i)).toHaveLength(10);

  fireEvent.click(screen.getByRole("button", { name: /LOLO Rice logo/i }));
  expect(screen.getByAltText("LOLO Rice product 1")).toHaveClass("scale-100");
  expect(screen.getByAltText("LOLO Rice product 2")).toHaveClass("scale-[0.84]");

  fireEvent.click(screen.getByRole("button", { name: /Regal logo/i }));
  expect(screen.getAllByAltText(/^Regal product \d+$/i)).toHaveLength(14);

  fireEvent.click(screen.getByRole("button", { name: /MIGITA logo/i }));
  expect(screen.getByText("New agency")).toBeInTheDocument();
  expect(screen.getByAltText("Migita Ginger Hard Candy")).toBeInTheDocument();
  expect(screen.getByAltText("Migita Mint Hard Candy")).toBeInTheDocument();
  expect(screen.getByAltText("Migita Cinnamon Hard Candy")).toBeInTheDocument();
  expect(
    screen.getByAltText("Migita Ginger Hard Candy with Honey Filling")
  ).toBeInTheDocument();
  expect(
    screen.getByAltText("Migita Pink Lemon Hard Candy with Honey Filling")
  ).toBeInTheDocument();
  expect(screen.getAllByText("Plastic bag / 70g")).toHaveLength(3);
  expect(screen.getAllByText("Plastic bag / 140g")).toHaveLength(2);
});

test("switches the complete homepage to Arabic and remembers the choice", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", { name: "عرض الموقع باللغة العربية" })
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /بوابتك إلى سوق الغذاء العراقي/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "نحن نساعد مُصنّعي المواد الغذائية الدوليين على دخول السوق العراقي، وتوزيع منتجاتهم، وتنمية علاماتهم التجارية من خلال خبرة محلية مثبتة في التنفيذ وإدارة العلامة التجارية على المدى الطويل."
    )
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /استكشف علاماتنا التجارية/i })).toHaveAttribute(
    "href",
    "#brands"
  );
  expect(screen.getByText("البسكويت")).toBeInTheDocument();
  expect(screen.getByText("معجون الطماطم")).toBeInTheDocument();
  expect(screen.getByText("مخازن جافة")).toBeInTheDocument();
  expect(screen.getByText("مخزن تبريد مخصّص")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "التسويق التجاري" })).toBeInTheDocument();
  expect(screen.queryByText("العلامات التجارية الخاصة")).not.toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /تنزيل الملف التعريفي للشركة/i })
  ).toHaveLength(2);
  expect(
    screen.getAllByText(/شركة ايوان الموصل للتجارة العامة المحدودة/).length
  ).toBeGreaterThanOrEqual(2);
  expect(screen.queryByText("الناصرية")).not.toBeInTheDocument();
  expect(screen.getByText("9 منتجات")).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute("lang", "ar");
  expect(document.documentElement).toHaveAttribute("dir", "rtl");
  expect(window.localStorage.getItem("eawan-language")).toBe("ar");
  expect(window.location.search).toBe("?lang=ar");

  fireEvent.click(screen.getByRole("button", { name: /Nuh'un Ankara logo/i }));
  expect(screen.getByText("22 منتجًا")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /MIGITA logo/i }));
  expect(screen.getByText("وكالة جديدة")).toBeInTheDocument();
  expect(screen.getByText("5 منتجات")).toBeInTheDocument();
  expect(screen.getAllByText("كيس بلاستيكي / 70 غرام")).toHaveLength(3);
  expect(screen.getAllByText("كيس بلاستيكي / 140 غرام")).toHaveLength(2);

  fireEvent.click(screen.getByRole("button", { name: "عرض الموقع باللغة الإنجليزية" }));
  expect(document.documentElement).toHaveAttribute("dir", "ltr");
  expect(window.location.search).toBe("");
});

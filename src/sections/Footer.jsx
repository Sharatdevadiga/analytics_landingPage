import Logo from "../components/Logo";

const footerData = [
  {
    section: "Product",
    links: [
      { label: "Overview", url: "#" },
      { label: "Features", url: "#" },
      { label: "Solutions", url: "#" },
      { label: "Tutorials", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Releases", url: "#" },
    ],
  },
  {
    section: "Company",
    links: [
      { label: "About us", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Press", url: "#" },
      { label: "News", url: "#" },
      { label: "Media kit", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
  {
    section: "Resources",
    links: [
      { label: "Blog", url: "#" },
      { label: "Newsletter", url: "#" },
      { label: "Help centre", url: "#" },
      { label: "Tutorials", url: "#" },
      { label: "Events", url: "#" },
      { label: "Releases", url: "#" },
    ],
  },
  {
    section: "Use cases",
    links: [
      { label: "Startups", url: "#" },
      { label: "Enterprise", url: "#" },
      { label: "Government", url: "#" },
      { label: "SaaS center", url: "#" },
      { label: "Ecommerce", url: "#" },
      { label: "Marketplaces", url: "#" },
    ],
  },
  {
    section: "Social",
    links: [
      { label: "Twitter", url: "#" },
      { label: "LinkedIn", url: "#" },
      { label: "Facebook", url: "#" },
      { label: "GitHub", url: "#" },
      { label: "AngelList", url: "#" },
      { label: "Dribbble", url: "#" },
    ],
  },
  {
    section: "Legal",
    links: [
      { label: "Terms", url: "#" },
      { label: "Privacy", url: "#" },
      { label: "Cookies", url: "#" },
      { label: "Licenses", url: "#" },
      { label: "Settings", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="text-gray-shade3 border-gray mx-auto mb-16 border-b px-4 pb-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 text-sm font-semibold">{section.section}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href={link.url} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-24 flex justify-between">
        <Logo />
        <p>© {new Date().getFullYear()} Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

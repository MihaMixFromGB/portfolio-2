import { useTranslations } from "next-intl";
import FloatingNav from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

const NavBar: React.FC = () => {
  const t = useTranslations("Navigation");
  return (
    <FloatingNav
      navItems={[
        {
          name: t("home"),
          link: "/",
          icon: <FaHome />,
        },
      ]}
    />
  );
};

export default NavBar;

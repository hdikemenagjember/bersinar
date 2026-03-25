import { FileText, BadgeCheck, HandHeart, Scale, type LucideProps } from "lucide-react";

const iconMap: Record<string, React.FC<LucideProps>> = {
  FileText,
  BadgeCheck,
  HandHeart,
  Scale,
};

interface ServiceIconProps extends LucideProps {
  name: string;
}

const ServiceIcon = ({ name, ...props }: ServiceIconProps) => {
  const Icon = iconMap[name] || FileText;
  return <Icon {...props} />;
};

export default ServiceIcon;

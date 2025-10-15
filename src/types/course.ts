export interface Badge {
  text: string;
  variant: 'default' | 'question' | 'time';
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'question' | 'time';
}

export interface CourseItemProps {
  title: string;
  isLocked: boolean;
  badges?: Badge[];
}

export interface CourseHeaderProps {
  week: string;
  title: string;
  subtitle: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export interface CourseModuleProps {
  week: string;
  title: string;
  subtitle: string;
  courseItems: CourseItemProps[];
  defaultExpanded?: boolean;
}

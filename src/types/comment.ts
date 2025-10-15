export interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
}

export interface CommentsSectionProps {
  comments: Comment[];
}

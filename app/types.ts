export type EntryData = {
  date: Date;
  title: string;
  slug: string;
  /**
   * markdown text
   */
  content: string;
  tags?: string[];
};

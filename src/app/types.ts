export type EntryData = {
  date: string;
  title: string;
  slug: string;
  /**
   * markdown text
   */
  content: string;
  tags?: string[];
};

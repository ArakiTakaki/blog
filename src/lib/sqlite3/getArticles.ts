import db from './index';

interface ArticlesDatabase {
  id?: number; // NOT NULL
  title?: string; // NOT NULL
  content?: string; // NOT NULL
  update_at?: number; // NOT NULL
  created_at?: number; // NOT NULL
  deleted_at?: number;
}
interface Article {
  id: number; // NOT NULL
  title: string; // NOT NULL
  content: string; // NOT NULL
  updateAt: Date; // NOT NULL
  createdAt: Date; // NOT NULL
}
export async function getArticles() {
  const ctx = await db;
  const state = ctx.prepare('SELECT * FROM articles');

  while(state.step()) {
    const result: ArticlesDatabase = state.getAsObject();
    if (result.deleted_at != null) continue;
    if (
      result.id == null ||
      result.title == null ||
      result.content == null ||
      result.update_at == null ||
      result.created_at == null
    ) throw new Error(`database error ${JSON.stringify(result)}`);

    const article: Article = {
      id: result.id,
      title: result.title,
      content: result.content,
      updateAt: new Date(result.update_at),
      createdAt: new Date(result.created_at),
    }
    console.log(article);
  }
}


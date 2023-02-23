import { extract } from "$std/encoding/front_matter/any.ts";
import { Post } from "../types.d.ts";
import { render } from "https://deno.land/x/gfm@0.1.26/mod.ts";

export async function loadPost(id: string): Promise<Post | null> {
  const raw: string | null = await Deno
    .readTextFile(`./content/posts/${id}.md`)
    .catch(() => null);

  if (!raw) return null;

  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;

  const post: Post = {
    id,
    title: params.title,
    body: render(body),
    date: new Date(params.date),
    excerpt: params.excerpt,
  };

  return post;
}

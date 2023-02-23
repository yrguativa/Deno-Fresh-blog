import { assertEquals } from "$std/testing/asserts.ts";
import { loadPost } from "./posts.ts";
import { Post } from "../types.d.ts";

//import wihtout import_map.json
//import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";

Deno.test(
  "LoadPost() returns null if the post does not exist",
  async (): Promise<void> => {
    const post: Post | null = await loadPost("non-existent-test");
    assertEquals(post, null);
  },
);

Deno.test(
  "LoadPost() returns a post object if post does exist",
  async (): Promise<void> => {
    const post: Post | null = await loadPost("hello-world");
    assertEquals(post?.id, "hello-world");
  },
);

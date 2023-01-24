// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Importing something from graphql-yoga causes the error
import { createYoga } from "https://cdn.skypack.dev/graphql-yoga?dts";

console.log("Hello from Functions!");

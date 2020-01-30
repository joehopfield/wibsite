# Maddie's Wib Site

---------- Forwarded message ---------
From: Jacob Scarf Merrell <jacobscarfmerrell@gmail.com>
Date: Thu, Jan 9, 2020 at 8:08 PM
Subject: Repository for the website
To: Maddie Hopfield <madelinehopfield@gmail.com>

https://github.com/jacobscarfmerrell/wibsite

It's basically just a Gatsby website with a Prismic headless CMS right now. The idea is for each Bubble component to be rendered with content written by Maddie in Prismic requested via GraphQL in the client.

What's left is to build out the front end for the bubbles using a d3.js force graph (https://github.com/d3/d3-force).

Here is the specs in markdown, but these were last edited at the end of November, so they might be a little out of date.

# Wib Site

## Specifications

- On load, user should see Madeline Hopfield in a bubble
- If a user clicks the name bubble, more should appear around it & the viewport should center on the clicked bubble, which then collapses to a dot
- The bubbles should have thin lines connecting bubbles, aesthetic is like a diagram
- Each time you click a new bubble, all open bubbles fade except the clicked one, which collapses to a dot while its neighbors appear/expand
- Each bubble has an array of bi-directional edges and you can get anywhere from randomly chosen entry-pt bubbles
- All nodes MUST have some edge to the single graph, i.e. no orphan nodes

## Bubbles

### Bubbles that always come up in initial load
- Contact (always comes up in first batch)

### The graph
- Writing SPROJ
    - Bard
    - Writing
- Dance SPROJ
    - Bard
    - Dance
- ADF
    - Dance
- Yes this is She
    - Dance
    - UMA
    - Phila
- Lily Kind
    - Dance
    - UMA
    - Phila
- CCS
    - Phila
- Leah Stein
    - Phila
    - Dance
- Thinking Dance
    - Phila
    - Dance
    - Writing

## Notes

- It's mainly for dance, but other things are there to inform the sense of who she is
- Like a bio laid out in a web

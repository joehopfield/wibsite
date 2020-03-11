# Maddie's Wib Site

Maddie mentioned that she liked an artist friend's personal website https://madden.land/
I looked at it a bit. Interestingly, it essentially uses instagram as its CMS.
Static content is hosted on (I think) porkbun.com.
The javascript in the page queries madden's instagram for posts that she has liked:

		instagramRequest.src =
			"https://api.instagram.com/v1/users/" +
			uid +
			"/media/recent?access_token=" +
			token +
			(count ? "&count=" + count : "") +
			(maxId ? "&max_id=" + maxId : "") +
			"&callback=instagram";
		document.head.appendChild(instagramRequest);

		window.instagram = response => {
			if (response.meta.code === 200) {
				const newInstagrams = response.data
					.filter(media => media["user_has_liked"])
					.map(media => ({
						media: media,
						style: {
							top: undefined,
							left: undefined,
							opacity: undefined,
							rotation: undefined,
							transform: undefined
						}
					}));
If I used this trick for maddie's site, how do I know the relationships she wants?
Could I use hash-tags? What's name of each post? #wibname_dance ... (note that non-leaf nodes are just text in her picture at least).
Maybe should create another instagram for this?


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

### Storyboard
- See [Storyboard](/Storyboard.md/) page.   

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

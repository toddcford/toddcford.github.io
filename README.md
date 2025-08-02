# Todd Ford's Personal Website

A Hugo static site using the Paper theme, showcasing software engineering work in financial technology and quantitative modeling.

## Site Structure

- **Home Page**: Enhanced bio section with profile picture and professional summary
- **Posts**: Technical articles about financial modeling and trading systems
- **Contact**: Contact information

## Recent Changes

### Hidden Posts
- The "Market Microstructure Datasets for ML Models" post has been hidden by setting `draft = true`
- Hidden posts remain in the repository but won't appear on the live site
- To unhide a post, change `draft = true` to `draft = false` in the post's front matter

### Enhanced Bio Section
- Added a prominent bio section on the home page
- Includes space for a profile picture (`/static/images/profile.jpg`)
- Features professional summary and key skills
- Responsive design that works on mobile and desktop

## Adding Your Profile Picture

1. Place your profile picture in `/static/images/profile.jpg`
2. The image should be square and at least 256x256 pixels
3. If no image is found, a fallback with your initials "TF" will be displayed

## Development

To run the site locally:

```bash
hugo server --buildDrafts --buildFuture
```

The site will be available at `http://localhost:1313`

## Deployment

The site is configured to deploy to GitHub Pages. The build output is in the `docs/` directory.

## Customization

- Edit `hugo.toml` to change site configuration
- Modify `layouts/_default/list.html` to customize the home page layout
- Update the bio text in the template to reflect your current professional focus 
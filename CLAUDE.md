# Bible PPT Generator — Project Rules

## Slide Design Rules (MUST follow every time)

1. **Font size**: All text (title + body) is **54pt**. Never change this.
2. **Title**: Each slide top-left shows the verse reference (e.g. `창1:1-2`) in **54pt**, gray color (#666666).
3. **Body**: Verse text below the title in **54pt**, white (#FFFFFF).
4. **Background**: Pure black (#000000).
5. **Font face**: HY견고딕 for all text.
6. **Margins**: Left/right 1 inch. Title at y=0.4". Body starts at y=1.5".

## Deployment Rule (MUST follow every time)

After every `git push`, verify deployment by:
1. `curl -sI https://jeebeelee563.github.io/bible-ppt-generator/` — must return HTTP 200
2. `curl -s https://jeebeelee563.github.io/bible-ppt-generator/app.js | grep <keyword>` — confirm latest code is live
3. Only report success after both checks pass.

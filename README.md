# myportfolio-v2
My Portfolio website

- Run dev server: `npm run dev`

- Email form: copy `.env.example` to `.env` and set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` with values from EmailJS (optional — the form will simulate sending if not set).

- Fonts: to self-host Nexa Bold, place licensed `Nexa-Bold.woff2` (preferred), `Nexa-Bold.woff`, or `Nexa-Bold.otf` into `public/fonts/`. The project includes `@font-face` rules that will use these files if present. For best performance, use `woff2` (smaller, optimized for web); `otf` will work but consider converting to `woff2` for production.

  Suggested conversion (requires `fonttools` or other tools):

  ```bash
  # Convert OTF to WOFF2 using fonttools (pip install fonttools brotli)
  ttx -f -o Nexa-Bold.woff2 Nexa-Bold.otf
  ```

  Do not commit licensed font files unless you have permission.

- Logo: place your logo image at `public/images/logo.png` (or `.jpg`). Recommended size: 256x256. The navbar will automatically use `/images/logo.png`. If the image is missing it will fall back to the initial badge.

